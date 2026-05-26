import Container from "@/components/Container";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com" },
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
                  <social.icon className="h-5 w-5" />
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
