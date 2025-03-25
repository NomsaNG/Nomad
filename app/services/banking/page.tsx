"use client"
import { Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MobileContainer } from "@/components/mobile-container"
import { BackButton } from "@/components/back-button"

export default function BankingServices() {
  return (
    <MobileContainer>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md rounded-lg bg-white shadow-sm">
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-gray-700" />
              <span className="text-sm font-medium text-gray-700">Banking Services</span>
            </div>
            <div className="flex gap-1">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>
          </div>

          <div className="p-4">
            <BackButton href="/services" label="Back to Services" />

            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Lock className="h-6 w-6 text-gray-500" />
              </div>
              <div>
                <h2 className="font-medium">Banking Services</h2>
                <p className="text-xs text-gray-500">Access financial services</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <h3 className="text-sm font-medium mb-1">KYC Status</h3>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-xs">Verified in 3 SADC countries</span>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Connected Banks</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                    <span className="text-sm">First National Bank</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-xs">Active</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                    <span className="text-sm">Standard Bank</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-xs">Active</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Available Services</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg border p-3 text-center">
                  <span className="text-sm">Open Account</span>
                </div>
                <div className="rounded-lg border p-3 text-center">
                  <span className="text-sm">Send Money</span>
                </div>
                <div className="rounded-lg border p-3 text-center">
                  <span className="text-sm">Apply for Loan</span>
                </div>
                <div className="rounded-lg border p-3 text-center">
                  <span className="text-sm">Insurance</span>
                </div>
              </div>
            </div>

            <Button className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300">Connect New Bank</Button>
          </div>
        </div>
      </div>
    </MobileContainer>
  )
}
