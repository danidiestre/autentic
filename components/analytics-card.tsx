"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AnalyticsCardProps {
  title: string
  value: string | number
  metric?: {
    value: string | number
    trend: "up" | "down"
    label: string
  }
  className?: string
  children?: React.ReactNode
}

export function AnalyticsCard({
  title,
  value,
  metric,
  className,
  children
}: AnalyticsCardProps) {
  return (
    <Card className={cn("", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {metric && (
          <p className="text-xs text-muted-foreground">
            <span className={cn(
              "mr-1",
              metric.trend === "up" ? "text-green-500" : "text-red-500"
            )}>
              {metric.trend === "up" ? "+" : "-"}{metric.value}
            </span>
            {metric.label}
          </p>
        )}
        {children}
      </CardContent>
    </Card>
  )
} 