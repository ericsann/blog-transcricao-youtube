export interface BlogPostMetadata {
  title?: string;
  description?: string;
  openGraph?: {
    title?: string;
    description?: string;
    type?: string;
    publishedTime?: string;
    authors?: string[];
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  metadata: BlogPostMetadata;
  jsonLd: {
    "@context": string;
    "@type": string;
    headline: string;
    datePublished: string;
    dateModified: string;
    author: {
      "@type": string;
      name: string;
    };
    description: string;
    image: string;
    publisher: {
      "@type": string;
      name: string;
      logo: {
        "@type": string;
        url: string;
      };
    };
    mainEntityOfPage?: {
      "@type": string;
      "@id": string;
    };
  };
  title: string;
  date: string;
  backgroundImage: string;
  content: string;
  faqs?: FaqItem[];
}
