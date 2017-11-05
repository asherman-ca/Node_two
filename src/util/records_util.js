import axios from 'axios';

export const fetchRecords = () => {
  return axios.get(`/api/records`)
    .then(response => response.data);
};