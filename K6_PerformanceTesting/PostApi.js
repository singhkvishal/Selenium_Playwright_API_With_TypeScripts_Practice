import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6'; 


export const options = {
  vus: 1,
  duration: '10s',
};

export default function () {
  //http.post('https://test.k6.io/login', { username: 'testuser', password: 'testpass' });
  const url="https://dummyjson.com/auth/login";

  const payload = JSON.stringify({
    username: 'kminchelle',
    password: '0lelplR',
  });

const params = {
  headers: {
    'Content-Type': 'application/json',
    },  
};
  const response = http.post(url, payload, params);
  console.log('Status '+response.status);
  check(response, {
    'is status 200': (r) => r.status === 200,
    'is res body correct': (r) => r.json().username === 'kminchelle',
  });   
  sleep(1);

}