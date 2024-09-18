import {useRef, useState} from 'react'
import {useAuth} from '../context/AuthContext'
import { Link,useNavigate } from 'react-router-dom'

export const Register = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const {register} = useAuth()
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();

  async function handleSubmit (e) {
    e.preventDefault();
    
    if(passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match');
    }

    // Regular expression to validate the password
    const passwordValidationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // Check if password meets the requirements
    if (!passwordValidationRegex.test(passwordRef.current.value)) {
    return setError('Set a strong Password');
    }

    try {
      setError('');
      setLoading(true);
      await register(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    } catch (error) {
      console.error('Error during Registration : ', error.message);
      setError('Failed to create an account');
    }
    setLoading(false);
  }
  return (
    <div className="form-div border-1 border w-100 p-lg-4 p-3 rounded-1 bg-white" style={{maxWidth:450}}>
    <h3 className='mb-3'>Register Form</h3>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="inputEmail" className="form-label">Email Id</label>
    <input type="email" className="form-control rounded-1" id="inputEmail" ref={emailRef} required />
    </div>
    <div className="mb-3">
    <label htmlFor="inputPassword" className="form-label">Password</label>
    <input type="password" className="form-control rounded-1" id="inputPassword" ref={passwordRef} required/>
    <small style={{fontSize:'0.7rem'}}>8 characters, including uppercase, lowercase, number & symbol.</small>
    </div>
    <div className="mb-3">
    <label htmlFor="inputConfirmPass" className="form-label">Confirm Password</label>
    <input type="text" className="form-control rounded-1" id="inputConfirmPass" ref={confirmPasswordRef} required/>
    </div>
    {error && <div className="alert alert-danger py-2 rounded-1" role="alert" style={{fontSize:'0.8rem'}}>{error} </div> }
    <button type="submit"  disabled={loading} className="btn btn-primary border-0 rounded-1 w-100 mb-3">{loading ?'Registering...Pls Wait': 'Register'}</button>
    <p className='mb-0 small-text text-center'>Already have an account? <Link to='/login'>Login</Link></p>
    </form>
    </div>
  )
}
