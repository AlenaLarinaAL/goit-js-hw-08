import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const email = formEl.elements.email;
const message = formEl.elements.message;
const LOCALSTORAGE_KEY = 'feedback-form-state';



function setData() {
    const setItems = { email: email.value, message: message.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(setItems));
};

formEl.addEventListener('input', setData);

function checkData() {
    const elements = localStorage.getItem(LOCALSTORAGE_KEY);
    if (elements) {
        const { email, message } = JSON.parse(elements);
        email.value = email;
        message.value = message;
        console.log({ email, message });
    }

};

document.addEventListener('DOMContentLoaded', checkData);

const throttleOnSubmit = throttle(onSubmit, 500);
formEl.addEventListener('submit', throttleOnSubmit);

function onSubmit(event) {
    event.preventDefault();
    localStorage.clear();
    const setItems = { email: email.value, message: message.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(setItems));
    console.log(setItems);
    email.value = '';
    message.value = '';

}

