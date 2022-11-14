import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Comment } from "./Comment";
import axios from "axios";
import { useSelector } from "react-redux";

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

export const Comments = ({ videoId }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);
        setComments(res.data);
      } catch (error) {}
    };
    fetchComments();
  });

  return (
    <Container>
      <NewComment>
        <Avatar src={currentUser.img} />
        <Input placeholder="Add a comment..." />
      </NewComment>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </Container>
  );
};
