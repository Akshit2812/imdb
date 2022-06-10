import React from 'react'


function register() {
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
                <input type="text" name='username' placeholder='username'/>

                <div className='form-group'></div>
                <label htmlFor='email'>Email</label>
                <input type="email" name='email' placeholder='Email'/>
                
                <div className='form-group'></div>
                <label htmlFor='password'>Password</label>
                <input type="password" name='password' placeholder='password'/>

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

export default login