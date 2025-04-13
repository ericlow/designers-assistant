import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About | Designers Assistant",
  description: "Learn more about Designers Assistant, the platform for architects and designers.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Designers Assistant</h1>
              <p className="text-muted-foreground md:text-xl">
                Empowering architects and designers to share, discover, and collaborate.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p className="text-muted-foreground">
                  At Designers Assistant, our mission is to create a dedicated platform where architects and designers
                  can showcase their work, find inspiration, and connect with like-minded professionals. We believe in
                  the power of visual collaboration and aim to provide the tools necessary for creative professionals to
                  thrive in their fields.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Story</h2>
                <p className="text-muted-foreground">
                  Designers Assistant was founded in 2023 by a group of architects and designers who recognized the need
                  for a specialized platform tailored to the unique requirements of the design community. Frustrated by
                  the limitations of general social media platforms, they set out to create a space where design
                  professionals could truly showcase their work in the best possible light.
                </p>
                <p className="text-muted-foreground">
                  What started as a small community has quickly grown into a global network of creative professionals
                  who use our platform to share ideas, find inspiration, and collaborate on projects. Today, Designers
                  Assistant is proud to serve thousands of architects and designers worldwide, helping them connect and
                  create amazing work together.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Values</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>
                    <strong>Creativity:</strong> We celebrate and nurture creative expression in all its forms.
                  </li>
                  <li>
                    <strong>Collaboration:</strong> We believe that the best designs emerge from collaborative efforts.
                  </li>
                  <li>
                    <strong>Quality:</strong> We are committed to providing a high-quality platform that showcases work
                    beautifully.
                  </li>
                  <li>
                    <strong>Community:</strong> We foster a supportive community where professionals can grow together.
                  </li>
                  <li>
                    <strong>Innovation:</strong> We continuously evolve our platform to meet the changing needs of
                    design professionals.
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">The Team</h2>
                <p className="text-muted-foreground">
                  Our team consists of passionate designers, developers, and industry professionals who are dedicated to
                  creating the best possible experience for our users. With backgrounds in architecture, interior
                  design, UX/UI design, and software development, we bring a diverse set of skills and perspectives to
                  the table.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Join Us</h2>
                <p className="text-muted-foreground">
                  Whether you're an established architect, an up-and-coming designer, or simply someone who appreciates
                  great design, we invite you to join our community. Share your work, discover new inspiration, and
                  connect with professionals who share your passion for design.
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
