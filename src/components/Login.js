import React from 'react'

function login() {
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