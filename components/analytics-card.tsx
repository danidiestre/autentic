"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ArrowDown, ArrowUp } from "lucide-react"

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
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card className={cn("h-full flex flex-col", className)}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
          </motion.div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <motion.div 
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
          >
            {value}
          </motion.div>
          {metric && (
            <motion.p 
              className="text-xs text-muted-foreground flex items-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <motion.span
                className={cn(
                  "flex items-center gap-0.5",
                  metric.trend === "up" ? "text-green-500" : "text-red-500"
                )}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                {metric.trend === "up" ? (
                  <ArrowUp className="h-3 w-3" />
                ) : (
                  <ArrowDown className="h-3 w-3" />
                )}
                {metric.value}
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                {metric.label}
              </motion.span>
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-auto"
          >
            {children}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
} 