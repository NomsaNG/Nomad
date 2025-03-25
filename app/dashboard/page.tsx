"use client"
import Link from "next/link"
import { Globe, Home, QrCode, User, Lock } from "lucide-react"

import { MobileContainer } from "/home/nomsa/code/NomsaNG/Nomad/components/mobile-container"

export default function DashboardPage() {
  return (
    <MobileContainer>
      <div className="w-full h-full bg-gray-50">
        <div className="w-full max-w-md mx-auto rounded-lg bg-white shadow-sm">
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-2">
              <Home className="h-5 w-5 text-gray-700" />
              <span className="text-sm font-medium text-gray-700">Home Dashboard</span>
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                <span className="font-medium">John Doe</span>
              </div>
              {/* <div className="h-10 w-10 rounded-full bg-gray-200"></div> */}
            </div>

            <div className="rounded-lg bg-gray-100 p-4 mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-500">SADC Nomad ID</span>
                <Lock className="h-4 w-4 text-gray-500" />
              </div>
              <div className="mb-1">
                <span className="text-sm text-gray-500">ID Number:</span>
                <div className="font-medium">SADC-12345678</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="text-sm text-gray-500">Status:</span>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-sm">Active</span>
                  </div>
                </div>
                <QrCode className="h-5 w-5 text-gray-700" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-6">
              <Link href="/travel" className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-3">
                <Globe className="h-6 w-6 text-gray-500 mb-1" />
                <span className="text-xs">Travel</span>
              </Link>
              <Link href="/services" className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-3">
                <Lock className="h-6 w-6 text-gray-500 mb-1" />
                <span className="text-xs">Services</span>
              </Link>
              <Link href="/profile" className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-3">
                <User className="h-6 w-6 text-gray-500 mb-1" />
                <span className="text-xs">Profile</span>
              </Link>
            </div>

            <div>
              <h3 className="font-medium mb-3">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <div>
                    <div className="font-medium text-sm">Border Crossing</div>
                    <div className="text-xs text-gray-500">South Africa → Botswana</div>
                  </div>
                  <div className="text-xs text-gray-500">Today</div>
                </div>

                <div className="flex justify-between">
                  <div>
                    <div className="font-medium text-sm">ID Verification</div>
                    <div className="text-xs text-gray-500">Banking Services</div>
                  </div>
                  <div className="text-xs text-gray-500">Yesterday</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MobileContainer>
  )
}
