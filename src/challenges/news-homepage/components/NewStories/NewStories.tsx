import styles from "./NewStories.module.css";

const NEW_STORIES = [
  {
    id: 1,
    title: "Hydogren VS Electric Cars",
    lead: "Will hydogren-fueled cars ever catch up to EVs?",
  },
  {
    id: 2,
    title: "The Downsides of AI Artistry",
    lead: "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    id: 3,
    title: "Is VS Funding Drying Up?",
    lead: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

export default function NewStories() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.sectionHeading}>New</h2>
      <ul>
        {NEW_STORIES.map((story) => (
          <NewStory story={story} key={story.id} />
        ))}
      </ul>
    </section>
  );
}

function NewStory({ story }: { story: { title: string; lead: string } }) {
  return (
    <li className={styles.newStoryItem}>
      <h3 className={styles.newStoryTitle}>
        <a href="">{story.title}</a>
      </h3>
      <p className={styles.newStoryLead}>{story.lead}</p>
    </li>
  );
}
