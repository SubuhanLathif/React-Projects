import {useRef, useState} from 'react'
import {useAuth} from '../context/AuthContext'
import { Link,useNavigate } from 'react-router-dom'

export const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const {login} = useAuth()
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit (e) {
    e.preventDefault();
    
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    } catch (error) {
      console.error('Error during login : ', error.message); 
      setError('Invalid email and password');
    }
  
    setLoading(false);
  }
  
  return (
    <div className="form-div border-1 border w-100 p-lg-4 p-3 rounded-1 bg-white" style={{maxWidth:450}}>
    <h3 className='mb-3'>Login Form</h3>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="inputEmail" className="form-label">Email Id</label>
    <input type="email" className="form-control rounded-1" id="inputEmail" ref={emailRef} required />
    </div>
    <div className="mb-3">
    <label htmlFor="inputPassword" className="form-label">Password</label>
    <input type="password" className="form-control rounded-1" id="inputPassword" ref={passwordRef} required/>
    </div>
    {error && <div className="alert alert-danger py-2 rounded-1" role="alert" style={{fontSize:'0.8rem'}}>{error} </div> }
    <button type="submit"  disabled={loading} className="btn btn-primary border-0 w-100 mb-3 rounded-1">{loading ?'Loggedin...Pls Wait': 'Login'}</button>
    <div className='text-end'>
    <Link to="/forget-password" style={{fontSize:'0.8rem'}} className='text-decoration-none'>Forget Password?</Link>
    </div>
    <hr />
    <p className='mb-0 small-text text-center'>Need an account? <Link to='/register'>Register</Link></p>
    </form>
    </div>
  )
}



