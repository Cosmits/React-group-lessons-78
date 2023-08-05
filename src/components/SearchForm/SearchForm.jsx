// import React, { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/todoSlice';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export const SearchForm = () => {

  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const todo = {
      id: nanoid(),
      text: value,
    }
    dispatch(addTodo(todo))
    setValue('')
  }

  const handleInput = (event) => {
    setValue(event.target.value);
  }

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={value}
        autoFocus
      />
    </SearchFormStyled>
  );

}
