import React from 'react'

function login() {
    var email = document.getElementById("email_in").value;
    var password = document.getElementById("password_in").value;

    let user_records=new Array();
    user_records= JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];

    if(user_records.some( (v) => {return v.email==email && v.password==password} )){
        alert("Login Successful!")

        let current_user= user_records.filter( (v) => {return v.email==email && v.password==password} )[0];
        localStorage.setItem("name",current_user.name);
        localStorage.setItem("email",current_user.email);

        window.location.href="home.html"
    }
    else{
        alert("Invalid email or password!")
    }

    localStorage.setItem('users',JSON.stringify(user_records));
    return (
    <div>login</div>
  )
}
export class Login extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className='base-container'>
            <div className='header'>Login</div>
            <div className='content'>
            <div className='form'>
                <div className='form-group'></div>
                <label htmlFor='username'>Username</label>
                <input type="text" name='username' placeholder='username'/>
                
                <div className='form-group'></div>
                <label htmlFor='password'>Password</label>
                <input type="password" name='password' placeholder='password'/>

            </div>
            </div>
            <div className='footer'>
                <button type="button" className='btn'>
                    Login
                </button>

            </div>
        </div>
    }



}

export default login