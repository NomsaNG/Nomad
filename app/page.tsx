"use client"

import { useState } from "react"
import { Globe, Home, Lock, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MobileContainer } from "/home/nomsa/code/NomsaNG/Nomad/components/mobile-container"

export default function WelcomeScreen() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "SADC Nomad ID",
      description: "Your digital identity for seamless cross-border movement",
      icon: <Globe className="h-10 w-10 text-gray-500" />,
    },
    {
      title: "Features Overview",
      items: [
        {
          title: "Secure Identity",
          description: "Blockchain protected",
          icon: <ShieldCheck className="h-5 w-5 text-gray-500" />,
        },
        {
          title: "Cross-Border Access",
          description: "Travel freely in SADC",
          icon: <Globe className="h-5 w-5 text-gray-500" />,
        },
        {
          title: "Service Access",
          description: "Banking, healthcare & more",
          icon: <Lock className="h-5 w-5 text-gray-500" />,
        },
      ],
    },
    {
      title: "Language Selection",
      languages: ["English", "Portuguese", "French", "Swahili"],
    },
  ]

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      // Navigate to register or login
      window.location.href = "/register"
    }
  }

  return (
    <MobileContainer>
      <div className="flex flex-col items-center justify-center h-full p-4">
        <div className="w-full max-w-md rounded-lg bg-white shadow-sm">
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-2">
              {currentSlide === 0 ? (
                <Home className="h-5 w-5 text-gray-700" />
              ) : currentSlide === 1 ? (
                <ShieldCheck className="h-5 w-5 text-gray-700" />
              ) : (
                <Globe className="h-5 w-5 text-gray-700" />
              )}
              <span className="text-sm font-medium text-gray-700">
                {currentSlide === 0
                  ? "Welcome Screen"
                  : currentSlide === 1
                    ? "Features Overview"
                    : "Language Selection"}
              </span>
            </div>
          </div>

          <div className="p-6">
            {currentSlide === 0 && (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-200">
                  <Globe className="h-10 w-10 text-gray-500" />
                </div>
                <h1 className="mb-2 text-xl font-bold text-center">SADC Nomad ID</h1>
                <p className="mb-8 text-center text-sm text-gray-500">
                  Your digital identity for seamless cross-border movement
                </p>
                <Button className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300" onClick={handleNext}>
                  Get Started
                </Button>
              </div>
            )}

            {currentSlide === 1 && (
              <div className="py-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 rounded-lg border p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                      <ShieldCheck className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Secure Identity</h3>
                      <p className="text-xs text-gray-500">Blockchain protected</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg border p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                      <Globe className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Cross-Border Access</h3>
                      <p className="text-xs text-gray-500">Travel freely in SADC</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg border p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                      <Lock className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Service Access</h3>
                      <p className="text-xs text-gray-500">Banking, healthcare & more</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-800"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                </div>

                <div className="mt-6">
                  <Button className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300" onClick={handleNext}>
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {currentSlide === 2 && (
              <div className="py-4">
                <h2 className="mb-4 text-center font-medium">Choose your language</h2>

                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-lg border p-3 bg-gray-100">
                    <span>English</span>
                    <div className="h-4 w-4 rounded-full bg-gray-800"></div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <span>Portuguese</span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <span>French</span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <span>Swahili</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-800"></div>
                </div>

                <div className="mt-6">
                  <Button className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300" onClick={handleNext}>
                    Continue
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MobileContainer>
  )
}
