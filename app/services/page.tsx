"use client"

import Link from "next/link"
import { Building, Heart, Lock, Pencil } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MobileContainer } from "@/components/mobile-container"
import { BackButton } from "@/components/back-button"

export default function ServicesPage() {
  return (
    <MobileContainer>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md rounded-lg bg-white shadow-sm">
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-gray-700" />
              <span className="text-sm font-medium text-gray-700">Services Dashboard</span>
            </div>
            
          </div>

          <div className="p-4">
            <BackButton href="/dashboard" label="Back to Dashboard" />

            <h2 className="font-medium mb-3">Available Services</h2>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <Link
                href="/services/banking"
                className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4"
              >
                <Lock className="h-6 w-6 text-gray-500 mb-1" />
                <span className="text-xs">Banking</span>
              </Link>
              <Link
                href="/services/employment"
                className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4"
              >
                <Building className="h-6 w-6 text-gray-500 mb-1" />
                <span className="text-xs">Employment</span>
              </Link>
              <Link
                href="/services/healthcare"
                className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4"
              >
                <Heart className="h-6 w-6 text-gray-500 mb-1" />
                <span className="text-xs">Healthcare</span>
              </Link>
              <Link
                href="/services/education"
                className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4"
              >
                <Pencil className="h-6 w-6 text-gray-500 mb-1" />
                <span className="text-xs">Education</span>
              </Link>
            </div>

            <h2 className="font-medium mb-3">Recent Verifications</h2>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">First National Bank</div>
                  <div className="text-xs text-gray-500">Account Opening</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-xs">Verified</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                  <Building className="h-5 w-5 text-gray-500" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Mining Corp Ltd</div>
                  <div className="text-xs text-gray-500">Work Permit</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <span className="text-xs">Pending</span>
                </div>
              </div>
            </div>

            <Button className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300">Request new service access</Button>
          </div>
        </div>
      </div>
    </MobileContainer>
  )
}
