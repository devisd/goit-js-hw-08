import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    label: {
        input: document.querySelector('.feedback-form input'),
        textarea: document.querySelector('.feedback-form textarea'),
    }
    
}

filledForm();

function oninput() {
    const email = refs.label.input.value;
    const message = refs.label.textarea.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));
}

function filledForm() { 
    const filledText = localStorage.getItem(STORAGE_KEY);
    const parsedText = JSON.parse(filledText);
    
    if (filledText) {
        refs.label.input.value = parsedText.email;
        refs.label.textarea.value = parsedText.message;
    }
}

function onSubmit(e) {
    e.preventDefault();

    const filledText = localStorage.getItem(STORAGE_KEY);
    const parsedText = JSON.parse(filledText);

    if (filledText) {
        console.log(parsedText);
    }
    
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

refs.form.addEventListener('submit', onSubmit);
refs.label.input.addEventListener('input', throttle(oninput, 500));
refs.label.textarea.addEventListener('input', throttle(oninput, 500));