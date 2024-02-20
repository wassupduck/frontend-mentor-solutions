import styles from "./MainStory.module.css";
import breakpoints from "../../Breakpoints.module.css";

export type MainStoryProps = {
  story: {
    title: string;
    lead: string;
    image: {
      src: string;
      mobileSrc: string;
      alt: string;
    };
    href: string;
  };
};

export default function MainStory({ story }: MainStoryProps) {
  return (
    <article className={styles.wrapper}>
      <picture className={styles.storyPicture}>
        <source
          media={breakpoints.mobileAndSmaller}
          srcSet={story.image.mobileSrc}
        />
        <img
          className={styles.storyImage}
          alt={story.image.alt}
          src={story.image.src}
        />
      </picture>
      <h1 className={styles.storyTitle}>{story.title}</h1>
      <section className={styles.leadSection}>
        <p>{story.lead}</p>
        <a className={styles.readMoreButton} href={story.href}>
          Read more
        </a>
      </section>
    </article>
  );
}
