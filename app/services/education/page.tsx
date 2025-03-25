"use client"
import { BookOpen, ChevronRight, GraduationCap, Pencil, School, Check } from "lucide-react"

import { MobileContainer } from "@/components/mobile-container"
import { BackButton } from "@/components/back-button"

export default function EducationServices() {
  return (
    <MobileContainer>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md rounded-lg bg-white shadow-sm">
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-2">
              <Pencil className="h-5 w-5 text-gray-700" />
              <span className="text-sm font-medium text-gray-700">Education Services</span>
            </div>
          </div>

          <div className="p-4">
            <BackButton href="/services" label="Back to Services" />

            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <GraduationCap className="h-6 w-6 text-gray-500" />
              </div>
              <div>
                <h2 className="font-medium">Education Services</h2>
                <p className="text-xs text-gray-500">Access educational opportunities</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <h3 className="text-sm font-medium mb-1">Education ID Status</h3>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <span className="text-xs">Pending verification in Botswana</span>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Academic Records</h3>
              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-gray-500" />
                  <span className="text-sm">Qualification Verification</span>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Educational Institutions</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                    <div>
                      <span className="text-sm">University of Botswana</span>
                      <p className="text-xs text-gray-500">Gaborone, Botswana</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <span className="text-xs">Pending</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                    <div>
                      <span className="text-sm">Technical College</span>
                      <p className="text-xs text-gray-500">Harare, Zimbabwe</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-xs">Verified</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Available Services</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg border p-3 text-center">
                  <span className="text-sm">Apply for Programs</span>
                </div>
                <div className="rounded-lg border p-3 text-center">
                  <span className="text-sm">Scholarship Search</span>
                </div>
                <div className="rounded-lg border p-3 text-center">
                  <span className="text-sm">Skills Assessment</span>
                </div>
                <div className="rounded-lg border p-3 text-center">
                  <span className="text-sm">Certificate Transfer</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium">Educational History</h3>
              <div className="rounded-lg border p-3">
                <div className="flex items-center gap-2 mb-1">
                  <School className="h-4 w-4 text-gray-500" />
                  <span className="text-sm font-medium">Bachelor of Science</span>
                </div>
                <div className="text-xs text-gray-500 ml-6">University of Zimbabwe • 2018-2022</div>
                <div className="flex items-center gap-1 ml-6 mt-1">
                  <Check className="h-3 w-3 text-green-500" />
                  <span className="text-xs text-green-500">Verified</span>
                </div>
              </div>

              <div className="rounded-lg border p-3">
                <div className="flex items-center gap-2 mb-1">
                  <School className="h-4 w-4 text-gray-500" />
                  <span className="text-sm font-medium">Technical Certificate</span>
                </div>
                <div className="text-xs text-gray-500 ml-6">Harare Technical College • 2016-2018</div>
                <div className="flex items-center gap-1 ml-6 mt-1">
                  <Check className="h-3 w-3 text-green-500" />
                  <span className="text-xs text-green-500">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MobileContainer>
  )
}
