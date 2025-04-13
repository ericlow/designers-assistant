import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Compass, Grid, Heart, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Designers Assistant
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The ultimate platform for architects and designers to showcase, discover, and collaborate on
                    inspiring projects.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Hero Image"
                    className="rounded-lg object-cover"
                    fill
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how Designers Assistant helps you create, share, and collaborate.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
                <div className="rounded-full bg-muted p-4">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Discover Inspiration</h3>
                <p className="text-muted-foreground">
                  Find inspiration from thousands of architectural and design projects.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
                <div className="rounded-full bg-muted p-4">
                  <Grid className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Organize Collections</h3>
                <p className="text-muted-foreground">Create and organize collections of your favorite design ideas.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
                <div className="rounded-full bg-muted p-4">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Connect with Professionals</h3>
                <p className="text-muted-foreground">Network with architects and designers from around the world.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trending Designs</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore the latest trending designs from our community.
                </p>
              </div>
            </div>
            <Tabs defaultValue="all" className="mt-8">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="architecture">Architecture</TabsTrigger>
                  <TabsTrigger value="interior">Interior Design</TabsTrigger>
                  <TabsTrigger value="landscape">Landscape</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <Card key={item} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative">
                          <Image
                            src={`/placeholder.svg?height=300&width=400&text=Design+${item}`}
                            alt={`Design ${item}`}
                            width={400}
                            height={300}
                            className="object-cover transition-all hover:scale-105"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-2 rounded-full bg-background/80 backdrop-blur-sm"
                          >
                            <Heart className="h-4 w-4" />
                            <span className="sr-only">Like</span>
                          </Button>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold">Modern Design Project {item}</h3>
                          <p className="text-sm text-muted-foreground">by Designer {item}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="architecture" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {[1, 2, 3, 4].map((item) => (
                    <Card key={item} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative">
                          <Image
                            src={`/placeholder.svg?height=300&width=400&text=Architecture+${item}`}
                            alt={`Architecture ${item}`}
                            width={400}
                            height={300}
                            className="object-cover transition-all hover:scale-105"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-2 rounded-full bg-background/80 backdrop-blur-sm"
                          >
                            <Heart className="h-4 w-4" />
                            <span className="sr-only">Like</span>
                          </Button>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold">Architecture Project {item}</h3>
                          <p className="text-sm text-muted-foreground">by Architect {item}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="interior" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {[1, 2, 3, 4].map((item) => (
                    <Card key={item} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative">
                          <Image
                            src={`/placeholder.svg?height=300&width=400&text=Interior+${item}`}
                            alt={`Interior ${item}`}
                            width={400}
                            height={300}
                            className="object-cover transition-all hover:scale-105"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-2 rounded-full bg-background/80 backdrop-blur-sm"
                          >
                            <Heart className="h-4 w-4" />
                            <span className="sr-only">Like</span>
                          </Button>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold">Interior Design Project {item}</h3>
                          <p className="text-sm text-muted-foreground">by Designer {item}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="landscape" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {[1, 2, 3, 4].map((item) => (
                    <Card key={item} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative">
                          <Image
                            src={`/placeholder.svg?height=300&width=400&text=Landscape+${item}`}
                            alt={`Landscape ${item}`}
                            width={400}
                            height={300}
                            className="object-cover transition-all hover:scale-105"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-2 rounded-full bg-background/80 backdrop-blur-sm"
                          >
                            <Heart className="h-4 w-4" />
                            <span className="sr-only">Like</span>
                          </Button>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold">Landscape Project {item}</h3>
                          <p className="text-sm text-muted-foreground">by Designer {item}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Community</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to our newsletter to get the latest updates and inspiration.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" required />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our{" "}
                  <Link href="/privacy" className="underline underline-offset-2">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
