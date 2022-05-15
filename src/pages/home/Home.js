import DashBoardCard from "./components/DashboardCard";
import Stats from "./components/Stats";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";

import { useSelector } from "react-redux";
import { selectAllBooks } from "../../features/books/booksSlice";

function Home() {
  const books = useSelector(selectAllBooks);
  const totalBooks = books.length;
  const readBooks = books.filter((b) => b.read).length;

  return (
    <Grow in>
      <Box>
        <DashBoardCard />
        <Stats totalBooks={totalBooks} readBooks={readBooks} />
      </Box>
    </Grow>
  );
}

export default Home;
