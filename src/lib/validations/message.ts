import { z } from "zod";

export const messageSchema = z.object({
  name: z
    .string()
    .min(2, "姓名至少需要2个字符")
    .max(50, "姓名不能超过50个字符"),
  email: z.string().email("请输入有效的邮箱地址"),
  content: z
    .string()
    .min(10, "留言内容至少需要10个字符")
    .max(1000, "留言内容不能超过1000个字符"),
});

export type MessageInput = z.infer<typeof messageSchema>;
