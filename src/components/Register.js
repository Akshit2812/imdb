import React from 'react'


function register() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email_up").value;
    var password = document.getElementById("password_up").value;

    let user_records=new Array();
    user_records= JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];

    if(user_records.some( (v) => {return v.email==email} )){
        alert("Email already exists!")
    }
    
    else{
        user_records.push({
        "name": name,
        "email": email,
        "password": password 
    })
    alert("Registration Successful!")
    }

    localStorage.setItem('users',JSON.stringify(user_records));

    Window.location.href='Login.js';
    return (
    <div>register</div>
    
  )
}
export class Register extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className='base-container'>
            <div className='header'>Register</div>
            <div className='content'>
            <div className='form'>
                <div className='form-group'></div>
                <label htmlFor='username'>Username</label>
                <input id='name_up' type="text" name='username' placeholder='username'/>

                <div className='form-group'></div>
                <label htmlFor='email'>Email</label>
                <input id='email_up' type="email" name='email' placeholder='Email'/>
                
                <div className='form-group'></div>
                <label htmlFor='password'>Password</label>
                <input  id='password_up' type="password" name='password' placeholder='password'/>

            </div>
            </div>
            <div className='footer'>
                <button type="button" className='btn'>
                    Register
                </button>

            </div>
        </div>
    }



}

export default register