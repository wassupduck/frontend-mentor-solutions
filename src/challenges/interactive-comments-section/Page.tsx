import styles from "./Page.module.css";

import styled from "../../styled";
import CommentsSection from "./components/CommentsSection";

export default function Page() {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <CommentsSection />
      </MaxWidthWrapper>
    </Wrapper>
  );
}

const Wrapper = styled("div", styles.wrapper);
const MaxWidthWrapper = styled("div", styles.maxWidthWrapper);
