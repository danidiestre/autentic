"use client"

import * as React from "react"
import Link from 'next/link'
import { MessageSquare, Inbox, Settings, Linkedin, Twitter, Instagram, MoreHorizontal, HelpCircle, MessageSquareDashed, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from './icons/logo'
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface SidebarProps {
  isCollapsed: boolean
  onCollapsedChange: (collapsed: boolean) => void
}

export function Sidebar({ isCollapsed, onCollapsedChange }: SidebarProps) {
  return (
    <aside className={cn(
      "fixed top-0 left-0 h-screen border-r border-border bg-background flex flex-col transition-all duration-300",
      isCollapsed ? "w-[80px]" : "w-64"
    )}>
      {/* Logo and Collapse Button */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className={cn("flex items-center gap-2", isCollapsed && "justify-center w-full")}>
          <Logo />
          {!isCollapsed && <span className="font-semibold">autentic.ai</span>}
        </div>
        <TooltipProvider>
          {!isCollapsed ? (
            <Button 
              variant="ghost" 
              size="icon"
              className="h-8 w-8"
              onClick={() => onCollapsedChange(true)}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Collapse sidebar</span>
            </Button>
          ) : (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-8 w-8 absolute -right-4 top-6 bg-background border shadow-sm"
                  onClick={() => onCollapsedChange(false)}
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Expand sidebar</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                Expand sidebar
              </TooltipContent>
            </Tooltip>
          )}
        </TooltipProvider>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Main Navigation */}
        <div className="space-y-4">
          <div>
            {!isCollapsed && <p className="text-sm text-muted-foreground mb-3">Platform</p>}
            <nav className="space-y-1">
              <Link href="/chatbot" className={cn(
                "flex items-center gap-3 px-2 py-2 text-sm rounded-md hover:bg-accent",
                isCollapsed && "justify-center"
              )}>
                <MessageSquare size={20} />
                {!isCollapsed && "Chatbot"}
              </Link>
              <Link href="/inbox" className={cn(
                "flex items-center gap-3 px-2 py-2 text-sm rounded-md hover:bg-accent",
                isCollapsed && "justify-center"
              )}>
                <Inbox size={20} />
                {!isCollapsed && "Inbox"}
              </Link>
              <Link href="/settings" className={cn(
                "flex items-center gap-3 px-2 py-2 text-sm rounded-md hover:bg-accent",
                isCollapsed && "justify-center"
              )}>
                <Settings size={20} />
                {!isCollapsed && "Settings"}
              </Link>
            </nav>
          </div>

          {/* Filtered Interactions */}
          <div>
            {!isCollapsed && <p className="text-sm text-muted-foreground mb-3">Filtered Interactions</p>}
            <nav className="space-y-1">
              <Link href="/linkedin" className={cn(
                "flex items-center gap-3 px-2 py-2 text-sm rounded-md hover:bg-accent",
                isCollapsed && "justify-center"
              )}>
                <Linkedin size={20} />
                {!isCollapsed && "LinkedIn"}
              </Link>
              <Link href="/x" className={cn(
                "flex items-center gap-3 px-2 py-2 text-sm rounded-md hover:bg-accent",
                isCollapsed && "justify-center"
              )}>
                <Twitter size={20} />
                {!isCollapsed && "X"}
              </Link>
              <Link href="/instagram" className={cn(
                "flex items-center gap-3 px-2 py-2 text-sm rounded-md hover:bg-accent",
                isCollapsed && "justify-center"
              )}>
                <Instagram size={20} />
                {!isCollapsed && "Instagram"}
              </Link>
              <button className={cn(
                "flex items-center gap-3 px-2 py-2 text-sm rounded-md hover:bg-accent w-full",
                isCollapsed ? "justify-center" : "text-left"
              )}>
                <MoreHorizontal size={20} />
                {!isCollapsed && "More"}
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-auto border-t border-border p-4 space-y-4">
        <nav className="space-y-1">
          <Link href="/support" className={cn(
            "flex items-center gap-3 px-2 py-2 text-sm rounded-md hover:bg-accent",
            isCollapsed && "justify-center"
          )}>
            <HelpCircle size={20} />
            {!isCollapsed && "Support"}
          </Link>
          <Link href="/feedback" className={cn(
            "flex items-center gap-3 px-2 py-2 text-sm rounded-md hover:bg-accent",
            isCollapsed && "justify-center"
          )}>
            <MessageSquareDashed size={20} />
            {!isCollapsed && "Feedback"}
          </Link>
        </nav>
        
        {/* User Profile */}
        <div className={cn(
          "flex items-center gap-3 px-2 py-2",
          isCollapsed && "justify-center"
        )}>
          <div className="w-8 h-8 rounded-full bg-accent shrink-0"></div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">dani</p>
              <p className="text-xs text-muted-foreground truncate">dani@autentic.ai</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
} 