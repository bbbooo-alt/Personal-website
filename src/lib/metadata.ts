import { Metadata } from "next";

const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "ggb大王",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "全栈开发者 · AI 应用爱好者，热衷于构建智能全栈应用",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ggb.dev",
};

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}

export function createMetadata({
  title,
  description,
  image = "/og-image.jpg",
  noIndex = false,
}: MetadataProps = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.name;

  return {
    title: fullTitle,
    description: description || siteConfig.description,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      title: fullTitle,
      description: description || siteConfig.description,
      siteName: siteConfig.name,
      locale: "zh_CN",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description || siteConfig.description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}

export const defaultMetadata = createMetadata();

export const site = siteConfig;
