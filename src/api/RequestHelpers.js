const url = 'https://kantata.justcode.am/api/';

export async function postRequest(api, body) {
  return await fetch(`${url}${api}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }).then(response => {
    return Promise.all([response.status, response.json()])
  }).catch((error) => console.log(error));
}

export async function getRequest(api) {
  return await fetch(`${url}${api}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then(response => response.json());
}

export async function postRequestAuth(api, token, body) {
  return await fetch(`${url}${api}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  }).then(response => response.json());
}

export async function getRequestAuth(api, token) {
  return await fetch(`${url}${api}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(response => response.json());
}
