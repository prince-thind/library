import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./commonComponents/Layout";
import About from "./pages/about/About";
import AllBooks from "./pages/allBooks/AllBooks";
import Book from "./pages/book/Book";
import CreateBook from "./pages/createBook/CreateBook";
import ErrorPage from "./pages/errorPage/ErrorPage";
import UpdateBook from "./pages/updateBook/UpdateBook";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}/>
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
