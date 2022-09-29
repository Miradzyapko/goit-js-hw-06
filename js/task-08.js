const form = document.querySelector('.login-form');
 
 form.addEventListener('submit', onFormSubmit);
 function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, 
        password}

    } = event.currentTarget;




if (email.value === "" || password.value === "") { 
    return console.log("alert",
    "Заповніть всі поля");
 };

form.reset();
 };
