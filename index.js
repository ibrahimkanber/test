// const axios = require('axios');

// const getBtn = document.getElementById('get-btn');
const getData = () => {
  fetch("https://www.springerprofessional.de/wasserwirtschaft-4-2019/16592584")
    .then(console.log)
    .catch((err) => console.log(err));
  // const getPostTitles = async () => {
  //   try {
  //     fetch("https://old.reddit.com/r/programming/")
  //       .then((res) => res.text())
  //       .then(console.log);

  //     //console.log($ )
  //     const postTitles = [];

  //     return postTitles;
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  // getPostTitles().then((postTitles) => console.log(postTitles));
}


getData()

// getBtn.addEventListener("click",getData);