export const makeRequest = request => {
  return fetch(`${url}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  })
    .then(res => res.json());
};
