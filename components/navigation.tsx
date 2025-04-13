"use client"

import { useState } from "react"
import Link from "next/link"
import { Frame, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="flex h-16 items-center px-4 border-b md:px-6">
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4">
        <Frame className="h-6 w-6" />
        <span>Designers Assistant</span>
      </Link>
      <nav className="hidden md:flex flex-row items-center gap-5 text-sm lg:gap-6">
        <Link href="/" className="font-medium transition-colors hover:text-primary">
          Home
        </Link>
        <Link href="/about" className="font-medium text-muted-foreground transition-colors hover:text-primary">
          About
        </Link>
        <Link href="/privacy" className="font-medium text-muted-foreground transition-colors hover:text-primary">
          Privacy
        </Link>
      </nav>
      <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <div className="flex items-center gap-2 text-lg font-semibold px-2">
              <Frame className="h-6 w-6" />
              <span>Designers Assistant</span>
            </div>
            <div className="grid gap-2 py-6">
              <Link
                href="/"
                className="flex items-center gap-2 px-2 py-1 text-lg font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 px-2 py-1 text-lg font-semibold"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/privacy"
                className="flex items-center gap-2 px-2 py-1 text-lg font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Privacy
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
