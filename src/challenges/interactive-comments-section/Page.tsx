import styles from "./Page.module.css";

import styled from "../../styled";
import Comment from "./components/Comment";

export default function Page() {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Comment />
      </MaxWidthWrapper>
    </Wrapper>
  );
}

const Wrapper = styled("div", styles.wrapper);
const MaxWidthWrapper = styled("div", styles.maxWidthWrapper);
