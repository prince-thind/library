const data = [
  {
    name: "Book1",
    date: getDate(1),
    author: "Author1",
    read: true,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, sit! Quos incidunt est omnis error labore animi quia enim, praesentium minima maiores veniam architecto, ab qui, exercitationem rerum eaque eveniet dolore sed laborum. Corrupti, illum magnam. Eos perspiciatis iure qui!",
    rating: 4.5,
    id: 1,
  },
  {
    name: "Book2",
    date:getDate(2),
    author: "Author2",
    read: true,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, sit! Quos incidunt est omnis error labore animi quia enim, praesentium minima maiores veniam architecto, ab qui, exercitationem rerum eaque eveniet dolore sed laborum. Corrupti, illum magnam. Eos perspiciatis iure qui!",
    rating: 3.5,
    id: 2,
  },
  {
    name: "Book3",
    date: getDate(3),
    author: "Author3",
    read: false,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, sit! Quos incidunt est omnis error labore animi quia enim, praesentium minima maiores veniam architecto, ab qui, exercitationem rerum eaque eveniet dolore sed laborum. Corrupti, illum magnam. Eos perspiciatis iure qui!",
    rating: 0,
    id: 3,
  },
  {
    name: "Book4",
    date: getDate(4),
    author: "Author4",
    read: true,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, sit! Quos incidunt est omnis error labore animi quia enim, praesentium minima maiores veniam architecto, ab qui, exercitationem rerum eaque eveniet dolore sed laborum. Corrupti, illum magnam. Eos perspiciatis iure qui!",
    rating: 4.0,
    id: 4,
  },
  {
    name: "Book5",
    date: getDate(5),
    author: "Author5",
    read: false,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, sit! Quos incidunt est omnis error labore animi quia enim, praesentium minima maiores veniam architecto, ab qui, exercitationem rerum eaque eveniet dolore sed laborum. Corrupti, illum magnam. Eos perspiciatis iure qui!",
    rating: 0,
    id: 5,
  },
];

function getDate(offset){
  const date=new Date();
  date.setHours(date.getHours()-offset);
  return date.toISOString();
}

export default data;
