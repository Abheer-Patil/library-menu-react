import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Checkbox, Button } from "shadan-ui";

const AddBookForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [ISBN, setISBN] = useState("");
  const [genre, setGenre] = useState("");
  const [department, setDepartment] = useState("");
  const [available, setAvailable] = useState(true); // Default to available
  const [publicationYear, setPublicationYear] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      title,
      author,
      ISBN,
      genre,
      department,
      available,
      publicationYear,
    });
    // Clear form after submit (optional)
    setTitle("");
    setAuthor("");
    setISBN("");
    setGenre("");
    setDepartment("");
    setAvailable(true);
    setPublicationYear("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="author">Author</Label>
        <Input
          type="text"
          id="author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="ISBN">ISBN</Label>
        <Input
          type="text"
          id="ISBN"
          value={ISBN}
          onChange={(event) => setISBN(event.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="genre">Genre</Label>
        <Input
          type="text"
          id="genre"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="department">Department</Label>
        <Input
          type="text"
          id="department"
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="available">Available</Label>
        <Checkbox
          id="available"
          checked={available}
          onChange={(event) => setAvailable(event.target.checked)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="publicationYear">Publication Year</Label>
        <Input
          type="number"
          id="publicationYear"
          value={publicationYear}
          onChange={(event) => setPublicationYear(event.target.value)}
          required
        />
      </FormGroup>
      <Button type="submit">Add Book</Button>
    </Form>
  );
};

export default AddBookForm;
