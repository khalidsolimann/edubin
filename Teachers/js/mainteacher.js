AOS.init();

var teachers = fetch("http://localhost:3000/teachers")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
console.log("okk");
