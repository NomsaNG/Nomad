"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Fingerprint, Lock, Shield, User, Camera, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MobileContainer } from "/home/nomsa/code/NomsaNG/Nomad/components/mobile-container"

export default function RegisterPage() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [scanning, setScanning] = useState(false)
  const [scanned, setScanned] = useState(false)
  const [capturing, setCapturing] = useState(false)
  const [fingerprints, setFingerprints] = useState(0)
  const [facialCapture, setFacialCapture] = useState(false)
  const [facialProcessing, setFacialProcessing] = useState(false)
  const [facialComplete, setFacialComplete] = useState(false)
  const [cameraError, setCameraError] = useState(false)
  const [cameraReady, setCameraReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Changed from 3 to 5 fingerprints
  const totalFingerprints = 5

  const steps = [
    { title: "Document Scan", icon: Shield },
    { title: "Biometric Capture", icon: Fingerprint },
    { title: "Facial Recognition", icon: User },
  ]

  // Handle document scanning
  const startDocumentScan = () => {
    setScanning(true)

    // Simulate scanning process
    setTimeout(() => {
      setScanned(true)
      setScanning(false)
    }, 3000)
  }

  // Handle fingerprint capture
  const captureFingerprint = () => {
    if (fingerprints >= totalFingerprints) return

    setCapturing(true)

    // Simulate fingerprint capture
    setTimeout(() => {
      setFingerprints((prev) => prev + 1)
      setCapturing(false)
    }, 2000)
  }

  // Handle facial recognition camera setup
  useEffect(() => {
    let stream: MediaStream | null = null
    let mounted = true

    const setupCamera = async () => {
      if (step === 2 && !facialCapture && !facialComplete) {
        try {
          // Request camera access with a clear user prompt
          stream = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: "user",
              width: { ideal: 640 },
              height: { ideal: 480 },
            },
          })

          if (videoRef.current && mounted) {
            videoRef.current.srcObject = stream

            // Wait for video to be ready
            videoRef.current.onloadedmetadata = () => {
              if (mounted) {
                setCameraReady(true)
                setCameraError(false)
              }
            }
          }
        } catch (err) {
          console.error("Error accessing camera:", err)
          if (mounted) {
            setCameraError(true)
            setCameraReady(false)
          }
        }
      }
    }

    setupCamera()

    return () => {
      mounted = false
      setCameraReady(false)
      if (stream) {
        stream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [step, facialCapture, facialComplete])

  const takeFacialPhoto = () => {
    // Set states first to show UI feedback immediately
    setFacialCapture(true)
    setFacialProcessing(true)

    // If camera error or refs not available, simulate the process
    if (cameraError || !videoRef.current || !canvasRef.current || !videoRef.current.srcObject) {
      console.log("Using fallback for facial capture")

      setTimeout(() => {
        setFacialProcessing(false)
        setFacialComplete(true)
      }, 2000)

      return
    }

    try {
      const video = videoRef.current
      const canvas = canvasRef.current
      const context = canvas.getContext("2d")

      if (!context) {
        throw new Error("Could not get canvas context")
      }

      // Ensure video has dimensions before capturing
      const width = video.videoWidth || 640
      const height = video.videoHeight || 480

      // Set canvas dimensions to match video
      canvas.width = width
      canvas.height = height

      // Draw video frame to canvas (take the picture)
      context.drawImage(video, 0, 0, width, height)

      // Stop video stream
      const stream = video.srcObject as MediaStream
      if (stream) {
        stream.getTracks().forEach((track) => track.stop())
      }

      // Process the image (simulated)
      setTimeout(() => {
        setFacialProcessing(false)
        setFacialComplete(true)
      }, 2000)
    } catch (error) {
      console.error("Error capturing photo:", error)

      // Fallback to simulation if capture fails
      setTimeout(() => {
        setFacialProcessing(false)
        setFacialComplete(true)
      }, 2000)
    }
  }

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1)
      // Reset states when moving to next step
      setScanning(false)
      setScanned(false)
      setCapturing(false)
      setFacialCapture(false)
      setFacialProcessing(false)
      setFacialComplete(false)
      setCameraError(false)
      setCameraReady(false)
    } else {
      router.push("/dashboard")
    }
  }

  return (
    <MobileContainer>
      <div className="flex flex-col items-center justify-center h-full p-4">
        <div className="w-full max-w-md rounded-lg bg-white shadow-sm">
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-2">
              {step === 0 ? (
                <Shield className="h-5 w-5 text-gray-700" />
              ) : step === 1 ? (
                <Fingerprint className="h-5 w-5 text-gray-700" />
              ) : (
                <User className="h-5 w-5 text-gray-700" />
              )}
              <span className="text-sm font-medium text-gray-700">{steps[step].title}</span>
            </div>
          </div>

          <div className="p-6">
            {step === 0 && (
              <div className="flex flex-col items-center">
                {!scanning && !scanned ? (
                  <>
                    <div className="mb-6 border border-dashed border-gray-300 rounded-lg p-8 w-full flex flex-col items-center justify-center">
                      <p className="text-center font-medium mb-1">Scan your ID document</p>
                      <p className="text-center text-xs text-gray-500 mb-6">Position within the frame</p>
                      <Button
                        onClick={startDocumentScan}
                        className="flex items-center gap-2 bg-gray-200 text-gray-700 hover:bg-gray-300"
                      >
                        <Camera className="h-4 w-4" />
                        Start Camera
                      </Button>
                    </div>
                  </>
                ) : scanning ? (
                  <div className="mb-6 border border-gray-300 rounded-lg p-4 w-full">
                    <div className="relative bg-black rounded-lg overflow-hidden aspect-video mb-4">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3/4 h-1/2 border-2 border-white rounded-md flex items-center justify-center">
                          <div className="animate-pulse text-white">Scanning...</div>
                        </div>
                      </div>
                      <div className="absolute top-0 left-0 right-0 h-1 bg-red-500 animate-[scanline_2s_ease-in-out_infinite]"></div>
                    </div>
                    <p className="text-center text-sm">Please hold your document steady</p>
                  </div>
                ) : scanned ? (
                  <div className="mb-6 border border-gray-300 rounded-lg p-4 w-full">
                    <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video mb-4 flex items-center justify-center">
                      <div className="flex flex-col items-center">
                        <Check className="h-12 w-12 text-green-500 mb-2" />
                        <p className="font-medium">Document Scanned Successfully</p>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className="flex items-center gap-2 mb-6 bg-gray-100 rounded-full px-3 py-2 text-xs">
                  <Lock className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-500">Your data is encrypted and secure</span>
                </div>

                <Button
                  className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300"
                  onClick={handleNext}
                  disabled={!scanned}
                >
                  Continue
                </Button>
              </div>
            )}

            {step === 1 && (
              <div className="flex flex-col items-center">
                <div className="mb-4 flex flex-col items-center">
                  <div
                    className={`mb-6 h-32 w-32 rounded-full ${capturing ? "bg-blue-100" : "bg-gray-200"} flex items-center justify-center relative overflow-hidden cursor-pointer`}
                    onClick={captureFingerprint}
                  >
                    {capturing ? <div className="absolute inset-0 bg-blue-400 animate-pulse opacity-50"></div> : null}
                    <Fingerprint
                      className={`h-16 w-16 ${capturing ? "text-blue-500" : "text-gray-400"} ${capturing ? "animate-pulse" : ""}`}
                    />
                  </div>
                  <p className="text-center font-medium mb-1">Place your finger on the scanner</p>
                  <p className="text-center text-xs text-gray-500 mb-2">
                    {fingerprints} of {totalFingerprints} fingerprints captured
                  </p>

                  {fingerprints > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4 justify-center max-w-[250px]">
                      {[...Array(fingerprints)].map((_, i) => (
                        <div key={i} className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <Check className="h-4 w-4 text-green-500" />
                        </div>
                      ))}
                      {[...Array(totalFingerprints - fingerprints)].map((_, i) => (
                        <div key={i} className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <div className="h-4 w-4 rounded-full bg-gray-300"></div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
                  <div
                    className="h-2 bg-gray-500 rounded-full transition-all duration-500"
                    style={{ width: `${(fingerprints / totalFingerprints) * 100}%` }}
                  ></div>
                </div>

                {fingerprints < totalFingerprints ? (
                  <Button
                    className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300"
                    onClick={captureFingerprint}
                    disabled={capturing}
                  >
                    {capturing ? "Scanning..." : "Scan Fingerprint"}
                  </Button>
                ) : (
                  <Button className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300" onClick={handleNext}>
                    Continue
                  </Button>
                )}
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-col items-center">
                <div className="mb-4 flex flex-col items-center">
                  {!facialCapture ? (
                    <div className="mb-6 h-64 w-full rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden relative">
                      {cameraError ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 text-white p-4 text-center">
                          <Camera className="h-12 w-12 mb-2" />
                          <p className="mb-2">Camera access is required for facial recognition.</p>
                          <p className="text-sm">Please allow camera access in your browser settings.</p>
                        </div>
                      ) : (
                        <>
                          <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          {!cameraReady && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                              <div className="text-white text-center">
                                <div className="animate-spin h-8 w-8 border-4 border-white border-t-transparent rounded-full mx-auto mb-2"></div>
                                <p>Initializing camera...</p>
                              </div>
                            </div>
                          )}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 border-2 border-white rounded-full"></div>
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="mb-6 h-64 w-full rounded-lg border border-gray-300 flex items-center justify-center overflow-hidden relative">
                      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />
                      {facialProcessing && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <div className="text-white text-center">
                            <div className="animate-spin h-8 w-8 border-4 border-white border-t-transparent rounded-full mx-auto mb-2"></div>
                            <p>Processing...</p>
                          </div>
                        </div>
                      )}
                      {facialComplete && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <div className="text-white text-center">
                            <Check className="h-12 w-12 text-green-500 mx-auto mb-2" />
                            <p>Verification Complete</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <p className="text-center font-medium mb-1">Position your face in the frame</p>

                  <p className="text-center text-xs text-gray-500 mb-6">Keep still for best results</p>
                </div>

                {!facialCapture ? (
                  <Button className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300" onClick={takeFacialPhoto}>
                    Capture Photo
                  </Button>
                ) : facialComplete ? (
                  <Button className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300" onClick={handleNext}>
                    Complete Registration
                  </Button>
                ) : (
                  <Button className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300" disabled>
                    Processing...
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </MobileContainer>
  )
}
