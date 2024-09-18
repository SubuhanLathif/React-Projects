import {useRef, useState} from 'react'
import {useAuth} from '../context/AuthContext'
import { Link } from 'react-router-dom'

export const ForgetPassword = () => {
  const emailRef = useRef()
  const {resetPassword} = useAuth()
  const [error,setError] = useState('')
  const [message,setMessage] = useState('')
  const [loading,setLoading] = useState(false)

  async function handleSubmit (e) {
    e.preventDefault();
    
    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your email for further instructions.')
    } catch (error) {
      console.error('Error during Reset Password:', error.message);
      setError('Failed to Reset Password');
    }
    setLoading(false);
  }
  
  

  return (
    <div className="form-div border-1 border w-100 p-lg-4 p-3 rounded-1 bg-white" style={{maxWidth:450}}>
    <h3 className='mb-3'>Reset Password</h3>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="inputEmail" className="form-label">Email Id</label>
    <input type="email" className="form-control rounded-1" id="inputEmail" ref={emailRef} required />
    </div>
    {error && <div className="alert alert-danger py-2 rounded-1" role="alert" style={{fontSize:'0.8rem'}}>{error} </div>}
    {message && <div className="alert alert-success py-2 rounded-1" role="alert" style={{fontSize:'0.8rem'}}>{message} </div>}
    <button type="submit"  disabled={loading} className="btn btn-primary border-0 w-100 mb-3 rounded-1">Reset Password</button>
    <hr />
    <div className='text-center'>
      <p style={{fontSize:'0.8rem'}} className='mb-0'> Already have an account? <Link to="/login" className='text-decoration-none'>Login</Link></p>
 
    </div>
    </form>
    </div>
  )
}



