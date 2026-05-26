import Container from "@/components/Container";

export default function ContactPage() {
  return (
    <Container className="py-20">
      <section className="max-w-2xl">
        <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl">
          Contact
        </h1>
        
        <p className="mt-6 text-lg text-zinc-400">
          有项目想法或合作意向？欢迎随时联系我。
        </p>

        <div className="mt-16 space-y-8">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
              Email
            </h2>
            <a
              href="mailto:hello@ggb.dev"
              className="mt-2 block text-xl text-white transition-colors hover:text-zinc-300"
            >
              hello@ggb.dev
            </a>
          </div>

          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-500">
              Social
            </h2>
            <div className="mt-4 flex gap-6">
              {[
                { name: "GitHub", href: "https://github.com" },
                { name: "Twitter", href: "https://twitter.com" },
                { name: "LinkedIn", href: "https://linkedin.com" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition-colors hover:text-white"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 rounded-2xl border border-zinc-800 p-8">
          <h2 className="text-lg font-medium text-white">
            Send a Message
          </h2>
          <form className="mt-6 space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border-b border-zinc-800 bg-transparent py-3 text-white placeholder-zinc-600 transition-colors focus:border-zinc-500 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border-b border-zinc-800 bg-transparent py-3 text-white placeholder-zinc-600 transition-colors focus:border-zinc-500 focus:outline-none"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full resize-none border-b border-zinc-800 bg-transparent py-3 text-white placeholder-zinc-600 transition-colors focus:border-zinc-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-4 rounded-full border border-zinc-700 px-8 py-3 text-sm font-medium text-white transition-all hover:border-white hover:bg-white hover:text-black"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Container>
  );
}
