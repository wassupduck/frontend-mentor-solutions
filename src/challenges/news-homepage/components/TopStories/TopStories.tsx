import styles from "./TopStories.module.css";

import TopStory from "../TopStory";

import retroPCImageUrl from "../../assets/images/image-retro-pcs.jpg";
import topLaptopsImageUrl from "../../assets/images/image-top-laptops.jpg";
import gamingGrowthImageUrl from "../../assets/images/image-gaming-growth.jpg";

const TOP_STORIES = [
  {
    id: 1,
    title: "Reviving Retro PCs",
    lead: "What happens when old PCs are given modern upgrades?",
    image: {
      src: retroPCImageUrl,
      alt: "Retro PC",
    },
    href: "",
  },
  {
    id: 2,
    title: "Top 10 Laptops of 2022",
    lead: "Our best picks for various needs and budgets.",
    image: {
      src: topLaptopsImageUrl,
      alt: "Close up of keyboard keys",
    },
    href: "",
  },
  {
    id: 3,
    title: "The Growth of Gaming",
    lead: "How the pandemic has sparked fresh opportunities.",
    image: {
      src: gamingGrowthImageUrl,
      alt: "Playstation controller dropping into a person's hand",
    },
    href: "",
  },
];

export default function TopStories() {
  return (
    <ol className={styles.wrapper}>
      {TOP_STORIES.map((story, idx) => (
        <li key={story.id}>
          <TopStory rank={idx + 1} story={story} />
        </li>
      ))}
    </ol>
  );
}
