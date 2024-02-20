import styles from "./Page.module.css";

import Header from "./components/Header";
import MainGrid from "./components/MainGrid";

export default function NewsHomePagePage() {
  return (
    <div className={styles.wrapper}>
      <MaxWidthWrapper>
        <Header />
        <MainGrid />
      </MaxWidthWrapper>
    </div>
  );
}

function MaxWidthWrapper({ children }: { children?: React.ReactNode }) {
  return <div className={styles.maxWidthWrapper}>{children}</div>;
}
