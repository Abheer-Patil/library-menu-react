import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Button } from 'shadan-ui';

const BookTable = ({ data, onDownload, onDelete }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Title</Th>
          <Th>Author</Th>
          <Th>ISBN</Th>
          <Th>Genre</Th>
          <Th>Departments</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item, index) => (
          <Tr key={index}>
            <Td>{item.title}</Td>
            <Td>{item.author}</Td>
            <Td>{item.ISBN}</Td>
            <Td>{item.genre}</Td>
            <Td>{item.departments.join(', ')}</Td>
            <Td>
              <Button size="sm" onClick={() => onDownload(item)}>
                Download
              </Button>
              <Button size="sm" variant="danger" onClick={() => onDelete(item)}>
                Delete
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default BookTable;
