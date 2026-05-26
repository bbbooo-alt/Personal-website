import { Skeleton } from "@/components/ui/Skeleton";
import Container from "@/components/layout/Container";

export default function Loading() {
  return (
    <Container className="py-20">
      <div className="space-y-8">
        <div className="space-y-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-12 w-3/4 max-w-2xl" />
          <Skeleton className="h-6 w-full max-w-xl" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <Skeleton className="h-48 rounded-2xl" />
          <Skeleton className="h-48 rounded-2xl" />
        </div>
      </div>
    </Container>
  );
}
