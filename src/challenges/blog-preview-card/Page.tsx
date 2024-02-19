import styles from "./Page.module.css";

import illustrationImageUrl from "./assets/images/illustration-article.svg";
import avatarImageUrl from "./assets/images/image-avatar.webp";

import BlogPreviewCard from "./components/BlogPreviewCard";

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <BlogPreviewCard
        blog={{
          title: "HTML & CSS foundations",
          abstract:
            "These languages are the backbone of every website, defining structure, content, and presentation.",
          category: "Learning",
          previewImage: {
            url: illustrationImageUrl,
            alt: "Abstract illustration of html tag",
          },
          url: "/",
          publishedDate: new Date(2023, 11, 21),
          author: {
            name: "Greg Hooper",
            avatarImageUrl,
          },
        }}
      />
    </div>
  );
}
