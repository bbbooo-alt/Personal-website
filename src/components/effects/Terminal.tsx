"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";

interface Command {
  input: string;
  output: string | React.ReactNode;
  isError?: boolean;
}

const AVAILABLE_COMMANDS = {
  help: "显示可用命令",
  whoami: "关于我",
  skills: "技术栈",
  ai: "AI 能力",
  projects: "项目列表",
  contact: "联系方式",
  clear: "清屏",
  date: "当前时间",
  echo: "回显文本",
};

/**
 * 终端组件
 * 色彩规范：主色(青色) + 辅色(粉紫) + 中性色(白/灰)
 */
export default function Terminal() {
  const [history, setHistory] = useState<Command[]>([
    {
      input: "",
      output: (
        <div className="space-y-1">
          <p style={{ color: 'var(--accent-primary)' }}>Welcome to ggb&apos;s Portfolio Terminal v2.0</p>
          <p style={{ color: 'var(--foreground-muted)' }}>Type &apos;help&apos; to see available commands.</p>
        </div>
      ),
    },
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const args = trimmedCmd.split(" ");
    const command = args[0];

    let output: string | React.ReactNode = "";
    let isError = false;

    switch (command) {
      case "help":
        output = (
          <div className="grid gap-1">
            {Object.entries(AVAILABLE_COMMANDS).map(([cmd, desc]) => (
              <div key={cmd} className="flex gap-4">
                <span className="w-20" style={{ color: 'var(--accent-primary)' }}>{cmd}</span>
                <span style={{ color: 'var(--foreground-muted)' }}>{desc}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="space-y-2">
            <p className="text-white">ggb大王</p>
            <p style={{ color: 'var(--foreground-muted)' }}>全栈开发者 · AI 应用爱好者</p>
            <p className="text-white/40">热衷于构建智能全栈应用，探索 AI 与 Web 技术的无限可能。</p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-2">
            <div>
              <span style={{ color: 'var(--accent-primary)' }}>Frontend:</span>
              <span className="ml-2 text-white/70">React, Next.js, TypeScript, Tailwind CSS</span>
            </div>
            <div>
              <span style={{ color: 'var(--accent-primary)' }}>Backend:</span>
              <span className="ml-2 text-white/70">Node.js, Java Spring, PostgreSQL, Prisma, GraphQL</span>
            </div>
            <div>
              <span style={{ color: 'var(--accent-primary)' }}>AI:</span>
              <span className="ml-2 text-white/70">OpenAI API, LangChain, LangGraph, AI Agents</span>
            </div>
            <div>
              <span style={{ color: 'var(--accent-primary)' }}>Tools:</span>
              <span className="ml-2 text-white/70">Git, Docker, Vercel, Figma</span>
            </div>
          </div>
        );
        break;

      case "ai":
        output = (
          <div className="space-y-2">
            <p style={{ color: 'var(--accent-primary)' }}>AI 应用开发能力:</p>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>智能助手与聊天机器人开发</li>
              <li>OpenAI API 集成与应用</li>
              <li>LangChain 框架应用</li>
              <li>AI Agents 设计与实现</li>
              <li>Prompt Engineering 优化</li>
            </ul>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2">
            <div className="border-l-2 pl-3" style={{ borderColor: 'var(--accent-primary)' }}>
              <p className="text-white">E-Commerce Dashboard</p>
              <p className="text-sm text-white/40">Next.js + Prisma + Stripe</p>
            </div>
            <div className="border-l-2 pl-3" style={{ borderColor: 'var(--accent-primary)' }}>
              <p className="text-white">AI Chat Interface</p>
              <p className="text-sm text-white/40">React + OpenAI API + Tailwind</p>
            </div>
            <div className="border-l-2 pl-3" style={{ borderColor: 'var(--accent-primary)' }}>
              <p className="text-white">Portfolio Website</p>
              <p className="text-sm text-white/40">Next.js + Framer Motion</p>
            </div>
            <p className="text-white/40 text-sm mt-2">Type &apos;projects&apos; in the navigation to see more.</p>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1">
            <p>
              <span style={{ color: 'var(--accent-primary)' }}>Email:</span>
              <span className="ml-2 text-white/70">2801817200@qq.com</span>
            </p>
            <p>
              <span style={{ color: 'var(--accent-primary)' }}>GitHub:</span>
              <span className="ml-2 text-white/70">github.com/bbbooo-alt</span>
            </p>
            <p className="text-white/40 text-sm mt-2">Or visit /contact page for the form.</p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        return;

      case "date":
        output = new Date().toLocaleString("zh-CN", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        break;

      case "echo":
        output = args.slice(1).join(" ") || "";
        break;

      case "":
        return;

      default:
        output = `Command not found: ${command}. Type 'help' for available commands.`;
        isError = true;
    }

    setHistory((prev) => [...prev, { input: cmd, output, isError }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    executeCommand(input);
    setCommandHistory((prev) => [...prev, input]);
    setHistoryIndex(-1);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <div
      className={cn(
        "w-full max-w-2xl overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a0a0f]/90",
        "font-mono text-sm shadow-2xl backdrop-blur"
      )}
      onClick={() => inputRef.current?.focus()}
    >
      {/* 标题栏 */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-2 text-xs text-white/40">ggb@portfolio:~</span>
      </div>

      {/* 终端内容 */}
      <div
        ref={terminalRef}
        className="h-80 overflow-y-auto p-4 scrollbar-thin"
        style={{ 
          scrollbarColor: 'rgba(255,255,255,0.1) transparent',
          scrollbarWidth: 'thin'
        }}
      >
        <AnimatePresence>
          {history.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-3"
            >
              {item.input && (
                <div className="flex items-center gap-2 text-white/40">
                  <span style={{ color: 'var(--accent-primary)' }}>$</span>
                  <span>{item.input}</span>
                </div>
              )}
              <div className={cn("mt-1", item.isError ? "text-red-400" : "text-white/70")}>
                {item.output}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* 输入行 */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span style={{ color: 'var(--accent-primary)' }}>$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-white/70 outline-none"
            placeholder="Type a command..."
            spellCheck={false}
            autoComplete="off"
          />
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="h-4 w-2"
            style={{ backgroundColor: 'var(--accent-primary)' }}
          />
        </form>
      </div>
    </div>
  );
}
