interface Item {
  title: string;
  description: string;
}

const myArray: Item[] = [
  { title: "Item 1", description: "Description 1" },
  { title: "Item 2", description: "Description 2" },
];

myArray.forEach(item => {
  console.log(item.title);
  console.log(item.description);
});

