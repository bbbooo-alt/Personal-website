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
  projects: "项目列表",
  contact: "联系方式",
  clear: "清屏",
  date: "当前时间",
  echo: "回显文本",
};

export default function Terminal() {
  const [history, setHistory] = useState<Command[]>([
    {
      input: "",
      output: (
        <div className="space-y-1">
          <p className="text-cyan-400">Welcome to ggb&apos;s Portfolio Terminal v1.0</p>
          <p className="text-zinc-500">Type &apos;help&apos; to see available commands.</p>
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
                <span className="w-20 text-cyan-400">{cmd}</span>
                <span className="text-zinc-400">{desc}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="space-y-2">
            <p className="text-white">尊敬的ggb大王</p>
            <p className="text-zinc-400">前端开发者，专注于创造优雅且高性能的 Web 体验。</p>
            <p className="text-zinc-500">热爱 React, TypeScript 和现代前端工程化。</p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-2">
            <div>
              <span className="text-cyan-400">Frontend:</span>
              <span className="ml-2 text-zinc-300">React, Next.js, TypeScript, Tailwind CSS</span>
            </div>
            <div>
              <span className="text-cyan-400">Backend:</span>
              <span className="ml-2 text-zinc-300">Node.js, Prisma, PostgreSQL</span>
            </div>
            <div>
              <span className="text-cyan-400">Tools:</span>
              <span className="ml-2 text-zinc-300">Git, Docker, Figma, Vercel</span>
            </div>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2">
            <div className="border-l-2 border-cyan-500/50 pl-3">
              <p className="text-white">E-Commerce Dashboard</p>
              <p className="text-sm text-zinc-500">Next.js + Prisma + Stripe</p>
            </div>
            <div className="border-l-2 border-cyan-500/50 pl-3">
              <p className="text-white">AI Chat Interface</p>
              <p className="text-sm text-zinc-500">React + OpenAI API + Tailwind</p>
            </div>
            <div className="border-l-2 border-cyan-500/50 pl-3">
              <p className="text-white">Portfolio Website</p>
              <p className="text-sm text-zinc-500">Next.js + Framer Motion</p>
            </div>
            <p className="text-zinc-500 text-sm mt-2">Type &apos;projects&apos; in the navigation to see more.</p>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1">
            <p>
              <span className="text-cyan-400">Email:</span>
              <span className="ml-2 text-zinc-300">hello@ggb.dev</span>
            </p>
            <p>
              <span className="text-cyan-400">GitHub:</span>
              <span className="ml-2 text-zinc-300">github.com/bbbooo-alt</span>
            </p>
            <p className="text-zinc-500 text-sm mt-2">Or visit /contact page for the form.</p>
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
        "w-full max-w-2xl overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/90",
        "font-mono text-sm shadow-2xl backdrop-blur"
      )}
      onClick={() => inputRef.current?.focus()}
    >
      {/* 标题栏 */}
      <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/50 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-2 text-xs text-zinc-500">ggb@portfolio:~</span>
      </div>

      {/* 终端内容 */}
      <div
        ref={terminalRef}
        className="h-80 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
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
                <div className="flex items-center gap-2 text-zinc-500">
                  <span className="text-cyan-500">$</span>
                  <span>{item.input}</span>
                </div>
              )}
              <div className={cn("mt-1", item.isError ? "text-red-400" : "text-zinc-300")}>
                {item.output}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* 输入行 */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-cyan-500">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-zinc-300 outline-none"
            placeholder="Type a command..."
            spellCheck={false}
            autoComplete="off"
          />
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="h-4 w-2 bg-cyan-500"
          />
        </form>
      </div>
    </div>
  );
}
