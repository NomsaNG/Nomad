"use client"
import { Calendar, ChevronRight, Heart, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MobileContainer } from "@/components/mobile-container"
import { BackButton } from "@/components/back-button"

export default function HealthcareServices() {
  return (
    <MobileContainer>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md rounded-lg bg-white shadow-sm">
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-gray-700" />
              <span className="text-sm font-medium text-gray-700">Healthcare Services</span>
            </div>
          </div>

          <div className="p-4">
            <BackButton href="/services" label="Back to Services" />

            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                <Heart className="h-6 w-6 text-gray-500" />
              </div>
              <div>
                <h2 className="font-medium">Healthcare Services</h2>
                <p className="text-xs text-gray-500">Access medical services across SADC</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <h3 className="text-sm font-medium mb-1">Health ID Status</h3>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-xs">Verified in 2 SADC countries</span>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Medical Records Access</h3>
              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-gray-500" />
                  <span className="text-sm">Personal Health Profile</span>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Healthcare Providers</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                    <div>
                      <span className="text-sm">City Hospital</span>
                      <p className="text-xs text-gray-500">Gaborone, Botswana</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-xs">Verified</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                    <div>
                      <span className="text-sm">National Clinic</span>
                      <p className="text-xs text-gray-500">Johannesburg, South Africa</p>
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
                  <span className="text-sm">Book Appointment</span>
                </div>
                <div className="rounded-lg border p-3 text-center">
                  <span className="text-sm">Medical History</span>
                </div>
                <div className="rounded-lg border p-3 text-center">
                  <span className="text-sm">Prescriptions</span>
                </div>
                <div className="rounded-lg border p-3 text-center">
                  <span className="text-sm">Vaccinations</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium">Upcoming Appointments</h3>
              <div className="flex items-center gap-3 rounded-lg border p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                  <Calendar className="h-5 w-5 text-gray-500" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Annual Check-up</div>
                  <div className="text-xs text-gray-500">City Hospital • 25 Mar 2025, 10:00 AM</div>
                </div>
                <Button variant="outline" size="sm" className="h-8 text-xs">
                  Reschedule
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MobileContainer>
  )
}
