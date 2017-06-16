import axios from 'axios';

export function getTechs() {
  const url = 'assets/docs/techs.json';
  return axios.get(url);
}
