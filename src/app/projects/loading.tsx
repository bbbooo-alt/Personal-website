import { ProjectCardSkeleton } from "@/components/ui/Skeleton";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/common/SectionTitle";

export default function ProjectsLoading() {
  return (
    <Container className="py-20">
      <section>
        <SectionTitle subtitle="精选作品" title="全部项目" />
        
        <div className="grid gap-6 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      </section>
    </Container>
  );
}
