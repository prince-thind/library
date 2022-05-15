import { useParams } from "react-router";

function UpdateBook() {
  const id = useParams().id;
  if (!id) return <p>no book found</p>;
  return <p>update book id:{id}</p>;
}

export default UpdateBook;
