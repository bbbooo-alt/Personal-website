import { ProjectDetailSkeleton } from "@/components/ui/Skeleton";
import Container from "@/components/layout/Container";

export default function ProjectDetailLoading() {
  return (
    <Container className="py-12">
      <ProjectDetailSkeleton />
    </Container>
  );
}
