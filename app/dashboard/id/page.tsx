"use client"
import { Download, Globe, QrCode, Share2, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function DigitalIDPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold">My Digital ID</h1>
          <p className="text-muted-foreground">Your secure, blockchain-verified digital identity</p>
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Digital ID Card</CardTitle>
            <CardDescription>Your official Cross-Border Digital ID</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Globe className="h-6 w-6 text-primary" />
                      <span className="font-bold text-lg">CrossBorder ID</span>
                    </div>
                    <QrCode className="h-8 w-8" />
                  </div>

                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-muted-foreground">Full Name:</div>
                      <div className="font-medium">John Smith</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-muted-foreground">ID Number:</div>
                      <div className="font-medium">CB-2025-1234567</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-muted-foreground">Nationality:</div>
                      <div className="font-medium">Zimbabwe</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-muted-foreground">Date of Birth:</div>
                      <div className="font-medium">15/05/1985</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-muted-foreground">Gender:</div>
                      <div className="font-medium">Male</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-muted-foreground">Issue Date:</div>
                      <div className="font-medium">17/03/2025</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-muted-foreground">Expiry Date:</div>
                      <div className="font-medium">17/03/2027</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="w-64 h-64 rounded-lg bg-muted mb-6 flex items-center justify-center">
                  <User className="h-32 w-32 text-muted-foreground" />
                </div>
                <div className="flex gap-4 w-full">
                  <Button variant="outline" className="flex-1 gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <div className="bg-muted p-4 rounded-lg w-full">
              <h3 className="font-medium mb-2">Verification Status</h3>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span>Verified and Active</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Your Digital ID is secured by blockchain technology and has been verified by the Cross-Border ID
                Authority.
              </p>
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Verification History</CardTitle>
            <CardDescription>Recent verification requests for your Digital ID</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex-1">
                  <div className="font-medium">ABC Corporation</div>
                  <div className="text-sm text-muted-foreground">Employment verification</div>
                </div>
                <div className="text-sm text-muted-foreground">15 Mar 2025, 10:23 AM</div>
                <div className="text-sm font-medium text-green-500">Approved</div>
              </div>
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex-1">
                  <div className="font-medium">City Hospital</div>
                  <div className="text-sm text-muted-foreground">Healthcare access</div>
                </div>
                <div className="text-sm text-muted-foreground">10 Mar 2025, 2:45 PM</div>
                <div className="text-sm font-medium text-green-500">Approved</div>
              </div>
              <div className="flex items-center gap-4 rounded-lg border p-4">
                <div className="flex-1">
                  <div className="font-medium">Global Bank</div>
                  <div className="text-sm text-muted-foreground">Account opening</div>
                </div>
                <div className="text-sm text-muted-foreground">3 Mar 2025, 11:30 AM</div>
                <div className="text-sm font-medium text-green-500">Approved</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Privacy Controls</CardTitle>
            <CardDescription>Manage how your Digital ID information is shared</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <div className="font-medium">Basic Information Sharing</div>
                  <div className="text-sm text-muted-foreground">Name, ID number, and photo</div>
                </div>
                <Button variant="outline">Manage</Button>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <div className="font-medium">Extended Information Sharing</div>
                  <div className="text-sm text-muted-foreground">Date of birth, nationality, and gender</div>
                </div>
                <Button variant="outline">Manage</Button>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <div className="font-medium">Biometric Verification</div>
                  <div className="text-sm text-muted-foreground">Facial recognition and fingerprint</div>
                </div>
                <Button variant="outline">Manage</Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              Your privacy is important to us. You have full control over how your information is shared and verified.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

