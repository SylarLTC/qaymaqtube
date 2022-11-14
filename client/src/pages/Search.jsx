import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Card } from "../components/Card";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  flex-direction: column;
`;

export const Search = () => {
  const [videos, setVideos] = useState([]);
  const querySearch = useLocation().search;

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/search${querySearch}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [querySearch]);
  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};
