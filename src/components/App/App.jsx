import React, { useEffect } from "react";

import { SearchForm } from "../SearchForm/SearchForm";
import { List } from "../List/List";
import { StyledContainer, StyledTitle } from "./App.styled";
import { useState } from "react";
import { DisplayFilter } from "../DisplayFilter/DisplayFilter";

function App() {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("searchTerm") || ""
  );

  const [stories, setStories] = useState([
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ]);
  const filterStories = () =>
    stories.filter((story) =>
      story.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  useEffect(() => {
    localStorage.setItem("searchTerm", searchTerm);
  }, [searchTerm]);

  const handleRemoveStory = (id) =>
    setStories(stories.filter((story) => story.objectID !== id));
  return (
    <StyledContainer>
      <StyledTitle>Hacker Stories</StyledTitle>
      <SearchForm setSearchTerm={setSearchTerm} />
      {searchTerm && (
        <DisplayFilter
          searchTerm={searchTerm}
          reset={() => {
            setSearchTerm("");
          }}
        />
      )}
      <List stories={filterStories()} handleRemoveStory={handleRemoveStory} />
    </StyledContainer>
  );
}

export default App;
