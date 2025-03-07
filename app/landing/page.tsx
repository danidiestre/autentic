import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Secure Authentication Made Simple with AI
          </h1>
          <p className="text-xl text-muted-foreground">
            Transform your authentication experience with our AI-powered solution. Fast, secure, and effortless access control for modern applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
} 