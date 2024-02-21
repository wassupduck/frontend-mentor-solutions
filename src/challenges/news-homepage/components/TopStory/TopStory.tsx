import { Link } from "react-router-dom";
import styles from "./TopStory.module.css";

export type TopStoryProps = {
  rank: number;
  story: {
    title: string;
    lead: string;
    image: {
      src: string;
      alt: string;
    };
    href: string;
  };
};

export default function TopStory({ rank, story }: TopStoryProps) {
  return (
    <article className={styles.wrapper}>
      <img src={story.image.src} alt={story.image.alt} />
      <div className={styles.content}>
        <p className={styles.rank}>{String(rank).padStart(2, "0")}</p>
        <h3 className={styles.title}>
          <Link to={story.href}>{story.title}</Link>
        </h3>
        <p className={styles.lead}>{story.lead}</p>
      </div>
    </article>
  );
}
