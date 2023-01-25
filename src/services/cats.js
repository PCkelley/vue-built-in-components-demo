import axios from 'axios';

function getCatImgs() {
  let url = 'https://api.thecatapi.com/v1/images/search?limit=10';
  return axios.get(url);
}

function getOneCat() {
  let url = 'https://api.thecatapi.com/v1/images/search';
  return axios.get(url);
}

export default { getCatImgs, getOneCat };