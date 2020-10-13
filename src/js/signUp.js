import refs from "./refs.js";

refs.signUpForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.currentTarget.elements.login.value)
    let login = e.currentTarget.elements.login.value;
    console.log(e.currentTarget.elements.password.value);
   let password = e.currentTarget.elements.password.value
    
 
    
    localStorage.setItem('login', login);
    localStorage.setItem('password', password);
})