import Container from "@/components/Container";
import { Mail, Twitter, Linkedin } from "lucide-react";

const socialLinks = [
  { name: "GitHub", href: "https://github.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
];

export default function ContactPage() {
  return (
    <Container className="py-20">
      <section className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Get in Touch
        </p>
        <h1 className="mt-4 text-4xl font-light tracking-tight text-white sm:text-5xl">
          Contact
        </h1>
        <p className="mt-6 text-lg text-zinc-400">
          有项目想法或合作意向？欢迎随时联系我。
        </p>

        <div className="mt-12 space-y-8">
          <a
            href="mailto:hello@ggb.dev"
            className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition-all hover:border-cyan-500/50 hover:bg-zinc-900/50"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800">
              <Mail className="h-5 w-5 text-cyan-400" />
            </div>
            <div>
              <p className="text-sm text-zinc-500">Email</p>
              <p className="text-lg text-white">hello@ggb.dev</p>
            </div>
          </a>

          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
              Social
            </p>
            <div className="mt-4 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/30 text-zinc-400 transition-all hover:border-cyan-500/50 hover:text-cyan-400"
                >
                  {social.icon ? (
                    <social.icon className="h-5 w-5" />
                  ) : (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
          <h2 className="text-lg font-medium text-white">Send a Message</h2>
          <form className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-xl border border-zinc-800 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 transition-colors focus:border-cyan-500/50 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-zinc-800 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 transition-colors focus:border-cyan-500/50 focus:outline-none"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Your message..."
              className="w-full resize-none rounded-xl border border-zinc-800 bg-black/50 px-4 py-3 text-white placeholder-zinc-600 transition-colors focus:border-cyan-500/50 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-xl bg-white px-8 py-3 text-sm font-semibold text-black transition-all hover:bg-zinc-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Container>
  );
}
