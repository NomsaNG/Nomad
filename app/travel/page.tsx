"use client"
import { ChevronRight, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MobileContainer } from "@/components/mobile-container"
import { BackButton } from "@/components/back-button"

export default function BorderCrossing() {
  return (
    <MobileContainer>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md rounded-lg bg-white shadow-sm">
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-gray-700" />
              <span className="text-sm font-medium text-gray-700">Border Crossing</span>
            </div>

          </div>

          <div className="p-4">
            <BackButton href="/dashboard" label="Back to Dashboard" />

            <h2 className="font-medium mb-4">Pre-register Border Crossing</h2>

            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500 mb-1">From Country</p>
                <div className="flex items-center justify-between border-b pb-2">
                  <span>South Africa</span>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">To Country</p>
                <div className="flex items-center justify-between border-b pb-2">
                  <span>Botswana</span>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">Border Post</p>
                <div className="flex items-center justify-between border-b pb-2">
                  <span>Tlokweng Border Gate</span>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">Expected Date</p>
                <div className="flex items-center justify-between border-b pb-2">
                  <span>15 Mar 2025</span>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">Purpose of Travel</p>
                <div className="flex items-center justify-between border-b pb-2">
                  <span>Work</span>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </MobileContainer>
  )
}
