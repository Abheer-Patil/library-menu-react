import React, { useState } from 'react';
import { Select, Input, Button } from 'shadan-ui';

const BookSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('title'); // Default search by title

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm, searchBy); // Pass both search term and searchBy to onSearch
    setSearchTerm(''); // Clear search term after submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <Select
        value={searchBy}
        onChange={(event) => setSearchBy(event.target.value)}
        placeholder="Search By"
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
      </Select>
      <Input
        type="text"
        placeholder="Enter Search Term"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default BookSearch;
