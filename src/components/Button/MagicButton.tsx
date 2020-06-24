/*
 * Tezos-monsters - play game to lean Ligo and Tezos
 * Copyright (c) 2020. Mikhail Lazarev
 *
 */

import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

export interface MagicButtonProps {
  title: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  onClick,
  disabled,
}) => {
  return (
    <Container>
      <StyledButton
        className="align-self-center"
        onClick={onClick}
        disabled={disabled}
      >
        {title}
      </StyledButton>
    </Container>
  );
};

const StyledButton = styled(Button)`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 80%;
  background-color: #6f1b1b;
  font-family: "SansSerif";
  font-size: 22px;
  border: 1px solid black;

  &:hover {
    background-color: #6f1b1b;
    color: white;
    border: 1px solid black;
    box-shadow: 1px 2px 2px 2px black;
  }
  &:active {
    background-color: #6f1b1b;
    color: white;
    border: 1px solid black;
    box-shadow: 1px 2px 2px 2px black;
  }
  &:disabled {
    background-color: #454545;
    color: white;
    border: 1px solid black;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
