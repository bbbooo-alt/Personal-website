import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { messageSchema } from "@/lib/validations/message";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 数据校验
    const result = messageSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: "数据验证失败",
          details: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, content } = result.data;

    // 保存到数据库
    const message = await prisma.message.create({
      data: {
        name,
        email,
        content,
      },
    });

    // 发送邮件通知（如果配置了 Resend）
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_xxxxxxxx") {
      try {
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "hello@ggb.dev",
          to: process.env.RESEND_TO_EMAIL || "hello@ggb.dev",
          subject: `新留言来自 ${name}`,
          html: `
            <h2>收到新留言</h2>
            <p><strong>姓名：</strong> ${name}</p>
            <p><strong>邮箱：</strong> ${email}</p>
            <p><strong>内容：</strong></p>
            <p>${content}</p>
          `,
        });
      } catch (emailError) {
        console.error("邮件发送失败:", emailError);
        // 邮件失败不影响留言保存
      }
    }

    return NextResponse.json({
      success: true,
      message: "留言提交成功",
      data: {
        id: message.id,
        createdAt: message.createdAt,
      },
    });
  } catch (error) {
    console.error("提交留言失败:", error);
    return NextResponse.json(
      {
        success: false,
        error: "服务器错误，请稍后重试",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const messages = await prisma.message.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 100,
    });

    return NextResponse.json({
      success: true,
      data: messages,
    });
  } catch (error) {
    console.error("获取留言失败:", error);
    return NextResponse.json(
      {
        success: false,
        error: "服务器错误",
      },
      { status: 500 }
    );
  }
}
