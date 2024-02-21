import styles from "./MainGrid.module.css";

import MainStory from "../MainStory";
import NewStories from "../NewStories";
import TopStories from "../TopStories";

import web3DesktopImageUrl from "../../assets/images/image-web-3-desktop.jpg";
import web3MobileImageUrl from "../../assets/images/image-web-3-mobile.jpg";

const MAIN_STORY = {
  title: "The Bright Future of Web 3.0?",
  lead: "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling it's promise?",
  image: {
    src: web3DesktopImageUrl,
    mobileSrc: web3MobileImageUrl,
    alt: "3D render of woodern shapes",
  },
  href: "",
};

export default function MainGrid() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.mainStorySection}>
        <MainStory story={MAIN_STORY} />
      </section>
      <section className={styles.newStoriesSection}>
        <NewStories />
      </section>
      <section className={styles.topStoriesSection}>
        <TopStories />
      </section>
    </main>
  );
}
