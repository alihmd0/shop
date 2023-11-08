import { postData } from "./httpRequest.js";

const username = document.querySelector('.username-input');
const password = document.querySelector('.password-input');
const buttonLogin = document.querySelector('.button-container');


const loginHandler = async () => {
    const data = {
        // usernameInput: usernameInput.value,
        // passwordInput: passwordInput.value
        username: 'mor_2314',
        password: '83r5^_' 
    }
    const response = await postData('auth/login', data);
    
    localStorage.setItem('token', JSON.stringify(response.token));
    location.assign('/index.html')
    // console.log(response.token);
}

buttonLogin.addEventListener('click', loginHandler);

