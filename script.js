const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
const numberOfBooksRead = (library) => {
       console.log(typeof(library))
       let count = 0;
       library.map((l)=>{
        console.log(l.readingStatus)
        if(l.readingStatus===true){
          count++;
        }
       })
       return count;    
};

// Do not change the code below

alert(numberOfBooksRead(library));
