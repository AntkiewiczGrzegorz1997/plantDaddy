const BASE_URL = 'http://localhost:3000';

const apiServiceJWT = {};

apiServiceJWT.register = (user) => {
  console.log('check');
  return fetch(`${BASE_URL}/register`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiServiceJWT.login = (user) => {
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiServiceJWT.profile = (accessToken) => {
  return fetch(`${BASE_URL}/profile`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(async (res) => {
      const data = await res.json();

      return data;
    })
    .catch((err) => console.log(err));
};
apiServiceJWT.username = (accessToken) => {
  return fetch(`${BASE_URL}/profile/username`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(async (res) => {
      const data = await res.json();

      return data;
    })
    .catch((err) => console.log(err));
};

apiServiceJWT.logout = (tokenName) => {
  // REMOVE-START
  // delete token from local storage here
  localStorage.removeItem(tokenName);
  // the following request should invalidate the token
  // return fetch(`${BASE_URL}/logout`, {
  //   method: 'POST',
  //   credentials: 'include',
  //   mode: 'cors',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${tokenName}`,
  //   },
  // })
  //   .then((res) => res.json())
  //   .catch((err) => console.log(err));
  // REMOVE-END
};

export default apiServiceJWT;