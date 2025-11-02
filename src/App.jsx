import "bootstrap/dist/css/bootstrap.min.css";

// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/Home/HomePage";
import AuthorCreate from "./pages/Authors/Create";
import AuthorRead from "./pages/Authors/Read";
import AuthorUpdate from "./pages/Authors/Update";

import BookCreate from "./pages/Books/Create";
import BookRead from "./pages/Books/Read";
import BookUpdate from "./pages/Books/Update";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Autores - CRUD */}
        <Route path="/authors" element={<AuthorRead />} />
        <Route path="/authors/new" element={<AuthorCreate />} />
        <Route path="/authors/edit" element={<AuthorUpdate />} />

        {/* Livros - CRUD */}
        <Route path="/books" element={<BookRead />} />
        <Route path="/books/new" element={<BookCreate />} />
        <Route path="/books/edit" element={<BookUpdate />} />
      </Routes>
    </Router>
  );
}

export default App;
