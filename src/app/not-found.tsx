import { ArrowLeft } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "页面未找到 | ggb大王",
};

/**
 * 404 页面
 * 色彩规范：主色(青色) + 辅色(粉紫) + 中性色(白/灰)
 */
export default function NotFound() {
  return (
    <Container className="py-32">
      <div className="flex flex-col items-center text-center">
        <p 
          className="text-sm font-medium uppercase tracking-[0.3em]"
          style={{ color: 'var(--accent-primary)' }}
        >
          404
        </p>
        <h1 className="mt-4 text-4xl font-light tracking-tight text-white sm:text-5xl">
          页面未找到
        </h1>
        <p 
          className="mt-6 max-w-md text-lg"
          style={{ color: 'var(--foreground-muted)' }}
        >
          抱歉，您访问的页面不存在或已被移除。
        </p>
        <div className="mt-10">
          <Button href="/" variant="primary">
            <ArrowLeft className="h-4 w-4" />
            返回首页
          </Button>
        </div>
      </div>
    </Container>
  );
}
