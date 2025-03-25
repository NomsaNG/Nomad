"use client"
import { User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MobileContainer } from "@/components/mobile-container"
import { BackButton } from "@/components/back-button"

export default function EmploymentVerification() {
  return (
    <MobileContainer>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md rounded-lg bg-white shadow-sm">
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-gray-700" />
              <span className="text-sm font-medium text-gray-700">Employment Verification</span>
            </div>

          </div>

          <div className="p-4">
            <BackButton href="/services" label="Back to Services" />

            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <User className="h-6 w-6 text-gray-500" />
              </div>
              <div>
                <h2 className="font-medium">Employment Verification</h2>
                <p className="text-xs text-gray-500">Share your work eligibility</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-sm">Work Permit Status</span>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">Valid</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">Skills Verification</span>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">Verified</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">Tax Registration</span>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">Registered</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Share with Employer</h3>
              <div className="flex gap-2">
                <Input placeholder="Enter employer code" className="flex-1 bg-gray-100 border-0" />
                <Button className="bg-gray-300 text-gray-700 hover:bg-gray-400">Share</Button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Employment History</h3>
              <div className="space-y-3">
                <div className="rounded-lg border p-3">
                  <div>
                    <div className="font-medium text-sm">Mining Corp Ltd</div>
                    <div className="text-xs text-gray-500">Jan 2023 - Present</div>
                    <div className="text-xs text-gray-500">Botswana</div>
                  </div>
                </div>

                <div className="rounded-lg border p-3">
                  <div>
                    <div className="font-medium text-sm">Construction Co.</div>
                    <div className="text-xs text-gray-500">Mar 2021 - Dec 2022</div>
                    <div className="text-xs text-gray-500">South Africa</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MobileContainer>
  )
}
