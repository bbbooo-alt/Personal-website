export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
  features?: string[];
  year: string;
}
