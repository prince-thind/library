import { useParams } from "react-router";

function Book() {
  const id = useParams().id;
  if (!id) return <p>no book found</p>;
  return <p>Book content id:{id}</p>;
}

export default Book;
