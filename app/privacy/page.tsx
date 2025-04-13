import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | Designers Assistant",
  description: "Privacy Policy for Designers Assistant platform.",
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
              <p className="text-muted-foreground md:text-xl">Last updated: April 13, 2023</p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Introduction</h2>
                <p className="text-muted-foreground">
                  At Designers Assistant, we take your privacy seriously. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you visit our website and use our platform. Please
                  read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please
                  do not access the site.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Information We Collect</h2>
                <p className="text-muted-foreground">
                  We collect information that you provide directly to us when you register for an account, create or
                  modify your profile, set preferences, sign-up for or make purchases through the platform. This
                  information may include:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Name, email address, password, and other account registration information</li>
                  <li>Profile information such as your photo, bio, website, and social media handles</li>
                  <li>
                    Content you post to the platform including images, descriptions, comments, and other materials
                  </li>
                  <li>Information you provide when you participate in surveys, contests, or promotions</li>
                  <li>Communications you send to us</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">How We Use Your Information</h2>
                <p className="text-muted-foreground">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide, maintain, and improve our platform</li>
                  <li>Create and maintain your account</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices, updates, security alerts, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Communicate with you about products, services, offers, and events</li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our platform</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                  <li>Personalize your experience on our platform</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Sharing of Information</h2>
                <p className="text-muted-foreground">We may share information about you as follows:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>With other users according to your privacy settings</li>
                  <li>
                    With vendors, consultants, and other service providers who need access to such information to carry
                    out work on our behalf
                  </li>
                  <li>
                    In response to a request for information if we believe disclosure is in accordance with any
                    applicable law, regulation, or legal process
                  </li>
                  <li>
                    If we believe your actions are inconsistent with our user agreements or policies, or to protect the
                    rights, property, and safety of Designers Assistant or others
                  </li>
                  <li>
                    In connection with, or during negotiations of, any merger, sale of company assets, financing, or
                    acquisition of all or a portion of our business by another company
                  </li>
                  <li>With your consent or at your direction</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Your Choices</h2>
                <p className="text-muted-foreground">
                  You have several choices regarding the information we collect and how it's used:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>
                    Account Information: You may update, correct, or delete your account information at any time by
                    logging into your account settings
                  </li>
                  <li>
                    Cookies: Most web browsers are set to accept cookies by default. You can usually choose to set your
                    browser to remove or reject browser cookies
                  </li>
                  <li>
                    Promotional Communications: You may opt out of receiving promotional emails from us by following the
                    instructions in those emails
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-muted-foreground">
                  Designers Assistant
                  <br />
                  Email: privacy@designersassistant.com
                  <br />
                  Address: 123 Design Street, Creative City, DC 12345
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
