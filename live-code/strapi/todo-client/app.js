const usernameField = document.querySelector('.username-field');
const passwordField = document.querySelector('.password-field');
const loginBtn = document.querySelector('.login-btn');
const serverInfo = document.querySelector('.server-info');
const refreshDataBtn = document.querySelector('.refresh-data-btn');
const totalAmount = document.querySelector('.total-amount');

const LOGIN_URL = "http://127.0.0.1:1337/api/auth/local";
const PURSCHASES_URL = "http://127.0.0.1:1337/api/purchases";


async function handleLogin() {
  serverInfo.textContent = "You are signing in...";

  const loginData = {
    identifier: usernameField.value,
    password: passwordField.value
  }

  const fetchOption = {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "Content-Type": "application/json" // Tells server to parse as json data
    }
  }

  const response = await fetch(LOGIN_URL, fetchOption);
  const authorizationToken = (await response.json()).jwt

  sessionStorage.setItem("x-auth-token", authorizationToken); // Saves auth token for the duration of browser session

  serverInfo.textContent = "You signed in!";
}

loginBtn.addEventListener('click', handleLogin);


async function handleRefreshData() {
  const authorizationToken = sessionStorage.getItem("x-auth-token");

  if (authorizationToken == undefined) {
    console.log("No auth token found");
    return false; // Cancel process
  }

  const fetchOption = {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + authorizationToken
    }
  }

  const response = await fetch(PURSCHASES_URL, fetchOption);
  const jsonData = await response.json();

  let totalAmountPaid = 0;
  jsonData.forEach(data => {
    totalAmountPaid = totalAmountPaid + data.amount;
  });

  totalAmount.textContent = "You have paid in total: " + totalAmountPaid + "kr";
}


refreshDataBtn.addEventListener('click', handleRefreshData);