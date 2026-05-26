import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900">
      <Container className="py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-500">
            © 2024 尊敬的ggb大王. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Twitter
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
