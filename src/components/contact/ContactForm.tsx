"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";

interface FormData {
  name: string;
  email: string;
  content: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  content?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    content: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (formData.name.length < 2) {
      newErrors.name = "姓名至少需要2个字符";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "请输入有效的邮箱地址";
    }

    if (formData.content.length < 10) {
      newErrors.content = "留言内容至少需要10个字符";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: "" });

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message: "留言提交成功！我会尽快回复您。",
        });
        setFormData({ name: "", email: "", content: "" });
        setErrors({});
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "提交失败，请稍后重试",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "网络错误，请检查网络连接后重试",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // 清除对应字段的错误
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="姓名"
            className={cn(
              "w-full rounded-xl border bg-black/50 px-4 py-3 text-white placeholder-zinc-600 transition-colors focus:outline-none",
              errors.name
                ? "border-red-500/50 focus:border-red-500"
                : "border-zinc-800 focus:border-cyan-500/50"
            )}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name}</p>
          )}
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="邮箱"
            className={cn(
              "w-full rounded-xl border bg-black/50 px-4 py-3 text-white placeholder-zinc-600 transition-colors focus:outline-none",
              errors.email
                ? "border-red-500/50 focus:border-red-500"
                : "border-zinc-800 focus:border-cyan-500/50"
            )}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows={4}
          placeholder="请输入您的消息..."
          className={cn(
            "w-full resize-none rounded-xl border bg-black/50 px-4 py-3 text-white placeholder-zinc-600 transition-colors focus:outline-none",
            errors.content
              ? "border-red-500/50 focus:border-red-500"
              : "border-zinc-800 focus:border-cyan-500/50"
          )}
        />
        {errors.content && (
          <p className="mt-1 text-sm text-red-400">{errors.content}</p>
        )}
      </div>

      {submitStatus.type && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "rounded-xl px-4 py-3 text-sm",
            submitStatus.type === "success"
              ? "border border-green-500/30 bg-green-500/10 text-green-400"
              : "border border-red-500/30 bg-red-500/10 text-red-400"
          )}
        >
          {submitStatus.message}
        </motion.div>
      )}

      <Button
        type="submit"
        variant="primary"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <svg
              className="h-4 w-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            提交中...
          </>
        ) : (
          "发送消息"
        )}
      </Button>
    </motion.form>
  );
}
