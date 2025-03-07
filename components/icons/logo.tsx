import * as React from "react"
import Image from "next/image"

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export function Logo({ className, width = 32, height = 32 }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Autentic.ai Logo"
      width={width}
      height={height}
      className={className}
      priority
    />
  )
}