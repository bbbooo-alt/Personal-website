"use client";

import Container from "@/components/layout/Container";
import { createMetadata } from "@/lib/metadata";
import { Mail, Copy, Check } from "lucide-react";
import { useState } from "react";

const EMAIL = "2801817200@qq.com";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/bbbooo-alt",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

/**
 * 联系页面
 * 色彩规范：主色(青色) + 辅色(粉紫) + 中性色(白/灰)
 */
export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("复制失败:", err);
    }
  };

  return (
    <Container className="py-20">
      <section className="max-w-2xl">
        <p 
          className="text-sm font-medium uppercase tracking-[0.3em]"
          style={{ color: 'var(--accent-primary)' }}
        >
          取得联系
        </p>
        <h1 className="mt-4 text-4xl font-light tracking-tight text-white sm:text-5xl">
          联系方式
        </h1>
        <p 
          className="mt-6 text-lg"
          style={{ color: 'var(--foreground-muted)' }}
        >
          有项目想法或合作意向？欢迎随时联系我。
        </p>

        <div className="mt-12 space-y-8">
          <a
            href="https://mail.qq.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all hover:border-[var(--accent-primary)]/30 hover:bg-white/[0.05]"
          >
            <div className="flex items-center gap-4">
              <div 
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: 'var(--accent-primary-subtle)' }}
              >
                <Mail 
                  className="h-5 w-5" 
                  style={{ color: 'var(--accent-primary)' }}
                />
              </div>
              <div>
                <p 
                  className="text-sm"
                  style={{ color: 'var(--foreground-muted)' }}
                >
                  QQ 邮箱
                </p>
                <p className="text-lg text-white">{EMAIL}</p>
              </div>
            </div>
            <button
              onClick={handleCopy}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] transition-all hover:border-[var(--accent-primary)]/30 hover:bg-[var(--accent-primary-subtle)]"
              style={{ color: 'var(--foreground-muted)' }}
              title="复制邮箱地址"
            >
              {copied ? (
                <Check className="h-4 w-4" style={{ color: 'var(--accent-primary)' }} />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </a>

          <div>
            <p 
              className="text-sm font-medium uppercase tracking-widest"
              style={{ color: 'var(--foreground-muted)' }}
            >
              社交媒体
            </p>
            <div className="mt-4 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] transition-all hover:border-[var(--accent-primary)]/30"
                  style={{ color: 'var(--foreground-muted)' }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
