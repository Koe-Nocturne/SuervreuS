function make_request(route, success, error, data={}, method='GET') {
  const API_URL = 'http://localhost:5000';

  console.log(API_URL + route);
  console.log(method);
  fetch(API_URL + route, {method: method})
  .then(res => res.json())
  .then(success, error);  
}
export default make_request;