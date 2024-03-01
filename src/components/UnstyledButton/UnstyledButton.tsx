import styles from "../../utils.module.css";
import styled from "../../styled";
import React from "react";

export interface UnstyledButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {}

const UnstyledComponent = styled("button", styles.unstyledButton);

export default UnstyledComponent;
