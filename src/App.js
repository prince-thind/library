import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import AllBooks from "./pages/AllBooks";
import Book from "./pages/Book";
import CreateBook from "./pages/CreateBook";
import ErrorPage from "./pages/ErrorPage";
import UpdateBook from "./pages/UpdateBook";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="about" element={<About />} />
            <Route path="books">
              <Route index element={<AllBooks />} />
              <Route path=":id" element={<Book />} />
              <Route path="create" element={<CreateBook />} />
              <Route path="update">
                <Route index element={<ErrorPage />} />
                <Route path=":id" element={<UpdateBook />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
