"use client"

import * as React from "react"
import { Sidebar } from "@/components/sidebar"
import { AnalyticsCard } from "@/components/analytics-card"
import { InteractionCard } from "@/components/interaction-card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function HomeClient() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false)

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar 
        isCollapsed={isSidebarCollapsed}
        onCollapsedChange={setIsSidebarCollapsed}
      />
      
      <main className={cn(
        "flex-1 p-8 transition-all duration-300",
        isSidebarCollapsed ? "ml-[80px]" : "ml-64"
      )}>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Hello, Dani!</h1>
            <p className="text-muted-foreground mt-2">Here's some analytics from your customer interactions</p>
          </div>

          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <AnalyticsCard
              title="Today's Important Interactions"
              value="13"
              metric={{
                value: "25%",
                trend: "up",
                label: "from last week"
              }}
            >
              <Button className="mt-4">
                See important interactions
              </Button>
            </AnalyticsCard>

            <AnalyticsCard
              title="Overall Average Score"
              value="85/100"
              metric={{
                value: "2",
                trend: "up",
                label: "from last week"
              }}
            >
              <div className="mt-4">
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-green-500 rounded-full" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  How do we measure the score? <a href="#" className="underline hover:text-foreground transition-colors">Learn more</a>
                </p>
              </div>
            </AnalyticsCard>
          </div>

          {/* Important Interactions */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Important interactions</h2>
                <p className="text-sm text-muted-foreground mt-1">Here's a list of your customer most important interactions on all platforms</p>
              </div>
              <Button>See important interactions</Button>
            </div>

            <div className="space-y-4">
              <InteractionCard
                user={{
                  name: "Alice Smith",
                  image: "/avatars/alice.png",
                  platform: "linkedin"
                }}
                title="Podcast Invitation"
                message="We want to invite you to the podcast to share your insights and experiences on product management. It would be great to discuss your journey, key lessons learned, and your perspective on the future of product management."
                time="10 minutes ago"
                score={87}
                type="Podcast Invitation"
              />
              <InteractionCard
                user={{
                  name: "John Davis",
                  image: "/avatars/john.png",
                  platform: "twitter"
                }}
                title="Product Feedback"
                message="Your latest update to the authentication flow is impressive! The biometric integration is seamless. Would love to discuss potential collaboration opportunities for our enterprise solutions."
                time="2 hours ago"
                score={92}
                type="Feature Feedback"
              />
              <InteractionCard
                user={{
                  name: "Sarah Wilson",
                  image: "/avatars/sarah.png",
                  platform: "instagram"
                }}
                title="Partnership Opportunity"
                message="Hi there! I represent TechCorp and we're impressed with your authentication solution. We'd like to explore potential integration opportunities for our platform. When would be a good time to discuss?"
                time="5 hours ago"
                score={85}
                type="Partnership"
              />
              <InteractionCard
                user={{
                  name: "Alice Smith",
                  image: "/avatars/alice.png",
                  platform: "linkedin"
                }}
                title="Follow-up Meeting"
                message="Thanks for the great discussion earlier! I've shared the meeting notes with our team and they're excited about the possibilities. Let's schedule a follow-up to dive deeper into the technical requirements."
                time="1 day ago"
                score={89}
                type="Meeting"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 