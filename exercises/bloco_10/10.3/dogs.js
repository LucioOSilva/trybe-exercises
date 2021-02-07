const fetch = require('node-fetch');

async function fetchDogURL() {
  const URL = `https://dog.ceo/api/breeds/image/random`;
  const response = await fetch(URL)
  const jsonResponse = await response.json();
  return jsonResponse;
}

// async function dogImages() {
//   try {
//     let dogInfo;
//     await fetchDogURL().then(data => dogInfo = data);
//     return dogInfo;
//   } catch (error) {
//     throw new Error (error);    
//   }
// }

//module.exports = dogImages;
module.exports = { fetchDogURL };
