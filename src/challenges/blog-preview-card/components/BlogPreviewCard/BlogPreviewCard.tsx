import styles from "./BlogPreviewCard.module.css";

export interface Blog {
  title: string;
  abstract: string;
  publishedDate: Date;
  category: string;
  url: string;
  previewImage: {
    url: string;
    alt: string;
  };
  author: {
    name: string;
    avatarImageUrl: string;
  };
}

export interface BlogPreviewCardProps {
  blog: Blog;
}

export default function BlogPreviewCard({ blog }: BlogPreviewCardProps) {
  return (
    <article className={styles.wrapper}>
      <img
        className={styles.cardImage}
        src={blog.previewImage.url}
        alt={blog.previewImage.alt}
      ></img>
      <p className={styles.category}>{blog.category}</p>
      <p>
        Published{" "}
        {blog.publishedDate.toLocaleDateString("en-gb", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
      <a className={styles.link} href={blog.url}>
        <h3 className={styles.title}>{blog.title}</h3>
      </a>
      <p className={styles.abstract}>{blog.abstract}</p>
      <div className={styles.author}>
        <img
          className={styles.authorImage}
          src={blog.author.avatarImageUrl}
          alt="Article author avatar"
        />
        <p className={styles.authorName}>{blog.author.name}</p>
      </div>
    </article>
  );
}
