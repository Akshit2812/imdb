import "./style.scss";

export { Login } from "./Login";
export { Register } from "./Register";
// function Login(){
    // var email = document.getElementById("email_in").value;
    // var password = document.getElementById("password_in").value;

    // let user_records=new Array();
    // user_records= JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];

    // if(user_records.some( (v) => {return v.email==email && v.password==password} )){
    //     alert("Login Successful!")

    //     let current_user= user_records.filter( (v) => {return v.email==email && v.password==password} )[0];
    //     localStorage.setItem("name",current_user.name);
    //     localStorage.setItem("email",current_user.email);

    //     window.location.href="home.html"
    // }
    // else{
    //     alert("Invalid email or password!")
    // }

    // localStorage.setItem('users',JSON.stringify(user_records));
    
// }


// function Register(){
    
    // var name = document.getElementById("name").value;
    // var email = document.getElementById("email_up").value;
    // var password = document.getElementById("password_up").value;

    // let user_records=new Array();
    // user_records= JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];

    // if(user_records.some( (v) => {return v.email==email} )){
    //     alert("Email already exists!")
    // }
    
    // else{
    //     user_records.push({
    //     "name": name,
    //     "email": email,
    //     "password": password 
    // })
    // alert("Registration Successful!")
    // }

    // localStorage.setItem('users',JSON.stringify(user_records));

    // Window.location.href='Login.js';
    
// }
