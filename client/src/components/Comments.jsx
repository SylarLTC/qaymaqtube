import React from "react";
import styled from "styled-components";
import { Comment } from "./Comment";

const Container = styled.div``;
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Avatar = styled.img`
  width: 50px;
  height: 40px;
  border-radius: 50%;
  background-color: grey;
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.textSoft};
  background-color: transparent;
  outline: none;
  width: 100%;
  padding: 5px;
`;

export const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};
