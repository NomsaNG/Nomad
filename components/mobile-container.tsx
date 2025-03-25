import type React from "react"

interface MobileContainerProps {
  children: React.ReactNode
  className?: string
}

export function MobileContainer({ children, className = "" }: MobileContainerProps) {
  return (
    <div
      className={`fixed inset-0 flex flex-col bg-gray-50 overflow-hidden ${className}`}
      style={{
        // Target Samsung Galaxy S8+ dimensions and ensure full coverage
        height: "100%",
        width: "100%",
        maxHeight: "-webkit-fill-available",
      }}
    >
      {children}
    </div>
  )
}

