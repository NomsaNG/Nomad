"use client"

import Link from "next/link"
import { ArrowLeft, Camera, Edit, Globe, Lock, LogOut, Mail, MapPin, Phone, User, Fingerprint } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MobileContainer } from "/home/nomsa/code/NomsaNG/Nomad/components/mobile-container"

export default function ProfilePage() {
  return (
    <MobileContainer>
      <div className="w-full h-full bg-gray-50 overflow-y-auto">
        <div className="w-full max-w-md mx-auto rounded-lg bg-white shadow-sm">
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-gray-700" />
              <span className="text-sm font-medium text-gray-700">Profile</span>
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center mb-6">
              <Link href="/dashboard" className="text-gray-500 hover:text-gray-700">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </div>

            <div className="flex flex-col items-center mb-6">
              <div className="relative mb-2">
                <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
                  <User className="h-12 w-12 text-gray-400" />
                </div>
                <button className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300">
                  <Camera className="h-4 w-4 text-gray-500" />
                </button>
              </div>
              <h2 className="text-xl font-medium">John Doe</h2>
              <p className="text-sm text-gray-500">SADC-12345678</p>
            </div>

            <div className="bg-gray-100 rounded-lg p-3 mb-6">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">ID Status</span>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">Active</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Expiry Date</span>
                <span className="text-sm">17 Mar 2027</span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h3 className="font-medium">Personal Information</h3>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Full Name</p>
                    <p className="text-sm">John Doe</p>
                  </div>
                </div>
                <button className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <Edit className="h-4 w-4 text-gray-500" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Nationality</p>
                    <p className="text-sm">Zimbabwe</p>
                  </div>
                </div>
                <button className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <Edit className="h-4 w-4 text-gray-500" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Current Location</p>
                    <p className="text-sm">Gaborone, Botswana</p>
                  </div>
                </div>
                <button className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <Edit className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h3 className="font-medium">Contact Information</h3>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Phone Number</p>
                    <p className="text-sm">+267 71 234 5678</p>
                  </div>
                </div>
                <button className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <Edit className="h-4 w-4 text-gray-500" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Email Address</p>
                    <p className="text-sm">john.doe@example.com</p>
                  </div>
                </div>
                <button className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <Edit className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h3 className="font-medium">Security</h3>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Password</p>
                    <p className="text-sm">••••••••</p>
                  </div>
                </div>
                <button className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <Edit className="h-4 w-4 text-gray-500" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Fingerprint className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Biometric Authentication</p>
                    <p className="text-sm">Enabled</p>
                  </div>
                </div>
                <button className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <Edit className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>

            <Button className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300 flex items-center justify-center gap-2">
              <LogOut className="h-4 w-4" />
              Log Out
            </Button>
          </div>
        </div>
      </div>
    </MobileContainer>
  )
}
