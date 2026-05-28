import Container from "./Container";

/**
 * 页脚组件
 * 色彩规范：主色(青色) + 辅色(粉紫) + 中性色(白/灰)
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <Container className="py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm" style={{ color: 'var(--foreground-muted)' }}>
            © 2026 ggb大王
          </p>
          <div className="flex gap-6 text-sm" style={{ color: 'var(--foreground-muted)' }}>
            <a
              href="https://github.com/bbbooo-alt"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
