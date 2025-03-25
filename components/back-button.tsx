import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface BackButtonProps {
  href: string
  label?: string
}

export function BackButton({ href, label }: BackButtonProps) {
  return (
    <div className="flex items-center mb-4">
      <Link href={href} className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
        <ArrowLeft className="h-5 w-5" />
        {label && <span className="text-sm">{label}</span>}
      </Link>
    </div>
  )
}

