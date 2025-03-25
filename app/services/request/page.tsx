"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Building, Check, Globe, Heart, Lock, Pencil } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function RequestNewService() {
  const router = useRouter()
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const services = [
    { id: "banking", name: "Banking", icon: Lock, description: "Financial services access" },
    { id: "employment", name: "Employment", icon: Building, description: "Work permit and verification" },
    { id: "healthcare", name: "Healthcare", icon: Heart, description: "Medical services access" },
    { id: "education", name: "Education", icon: Pencil, description: "Educational opportunities" },
    { id: "housing", name: "Housing", icon: Globe, description: "Accommodation services" },
    { id: "transport", name: "Transport", icon: Globe, description: "Cross-border transportation" },
  ]

  const handleSubmit = () => {
    setLoading(true)

    // API call
    setTimeout(() => {
      setLoading(false)
      router.push("/services")
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white shadow-sm">
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-gray-700" />
            <span className="text-sm font-medium text-gray-700">Request New Service</span>
          </div>
          {/* <div className="flex gap-1">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div> */}
        </div>

        <div className="p-4">
          <div className="mb-4">
            <h2 className="font-medium mb-1">Request Service Access</h2>
            <p className="text-xs text-gray-500">Select a service you would like to access with your SADC Nomad ID</p>
          </div>

          <div className="space-y-3 mb-6">
            <h3 className="text-sm font-medium">Available Services</h3>

            {services.map((service) => (
              <div
                key={service.id}
                className={`flex items-center justify-between rounded-lg border p-3 cursor-pointer ${
                  selectedService === service.id ? "border-gray-500 bg-gray-50" : ""
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                    <service.icon className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <div className="font-medium">{service.name}</div>
                    <div className="text-xs text-gray-500">{service.description}</div>
                  </div>
                </div>
                {selectedService === service.id && <Check className="h-5 w-5 text-gray-700" />}
              </div>
            ))}
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Service Provider (Optional)</h3>
            <Input placeholder="Enter provider name" className="bg-gray-100 border-0" />
            <p className="text-xs text-gray-500 mt-1">
              If you're requesting access for a specific provider, please enter their name
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Additional Information</h3>
            <textarea
              placeholder="Enter any additional details about your request"
              className="w-full h-24 p-3 bg-gray-100 rounded-lg text-sm resize-none focus:outline-none"
            />
          </div>

          <div className="flex gap-2">
            <Button
              className="flex-1 bg-gray-200 text-gray-700 hover:bg-gray-300"
              onClick={() => router.push("/services")}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 bg-gray-800 text-white hover:bg-gray-700"
              disabled={!selectedService || loading}
              onClick={handleSubmit}
            >
              {loading ? "Submitting..." : "Submit Request"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
