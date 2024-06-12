import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Import your Layout component
import Home from './screens/Home'; // Import your screens
import AddBook from './screens/AddBook';
import SearchBooks from './screens/SearchBooks';
import TrendingBooks from './screens/TrendingBooks';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/search-books" element={<SearchBooks />} />
          <Route path="/trending-books" element={<TrendingBooks />} />
          {/* Add any additional routes here */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
