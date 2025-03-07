"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Linkedin, Twitter, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface InteractionCardProps {
  user: {
    name: string
    image?: string
    platform: "linkedin" | "twitter" | "instagram"
  }
  title: string
  message: string
  time: string
  score: number
  type: string
}

function ScoreCircle({ score }: { score: number }) {
  const circumference = 2 * Math.PI * 20;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-[72px] h-[72px] flex items-center justify-center bg-accent/20 rounded-full">
        <motion.svg 
          className="w-full h-full -rotate-90 absolute" 
          viewBox="0 0 44 44"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <circle
            cx="22"
            cy="22"
            r="20"
            className="fill-none stroke-muted"
            strokeWidth="3"
          />
          <motion.circle
            cx="22"
            cy="22"
            r="20"
            className="fill-none stroke-green-500"
            strokeWidth="3"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1, ease: "easeOut" }}
            strokeLinecap="round"
          />
        </motion.svg>
        <motion.span 
          className="text-xl font-medium z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {score}
        </motion.span>
      </div>
      <motion.span 
        className="text-xs text-muted-foreground mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        Score
      </motion.span>
    </div>
  );
}

export function InteractionCard({
  user,
  title,
  message,
  time,
  score,
  type
}: InteractionCardProps) {
  const PlatformIcon = {
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram
  }[user.platform];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-[1fr,auto] gap-6">
            <div className="flex items-start gap-6">
              <div className="relative shrink-0">
                <Avatar className="h-16 w-16 ring-4 ring-background">
                  <AvatarImage src={user.image} alt={user.name} />
                  <AvatarFallback className="text-base">{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 rounded-full bg-background p-1.5 shadow-sm ring-2 ring-border">
                  <PlatformIcon className="h-5 w-5" />
                </div>
              </div>
              
              <div className="min-w-0">
                <div>
                  <h3 className="text-base font-semibold truncate">{user.name}</h3>
                  <p className="text-sm text-muted-foreground truncate">Re: {title}</p>
                </div>
                
                <p className="mt-2 text-base text-foreground/80 line-clamp-2 leading-relaxed">{message}</p>
                
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-accent rounded-full">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-foreground/40"></span>
                    <span className="text-sm text-accent-foreground">{type}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{time}</span>
                </div>
              </div>
            </div>

            <div className="shrink-0">
              <ScoreCircle score={score} />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
} 