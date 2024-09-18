import {useRef, useState} from 'react'
import {useAuth} from '../context/AuthContext'
import { Link,useNavigate } from 'react-router-dom'

export const UpdateProfile = () => {
 
  //when i click Update profile function
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { currentUser, updateEmail, updatePassword } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    function handleUpdateProfile(e) {
      e.preventDefault();
      
      // Check if passwords match
      if (passwordRef.current.value !== confirmPasswordRef.current.value) {
        return setError('Passwords do not match');
      }

      // Regular expression to validate the password
      const passwordValidationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      // Check if password meets the requirements
      if (!passwordValidationRegex.test(passwordRef.current.value)) {
      return setError('Set a strong Password');
      }
  
      const promises = [];
      setLoading(true);
      setError('');
  
      // Check if email needs to be updated
      if (emailRef.current.value !== currentUser.email) {
        promises.push(updateEmail(emailRef.current.value));
      }
  
      // Check if password needs to be updated
      if (passwordRef.current.value) {
        promises.push(updatePassword(passwordRef.current.value));
      }
  
      Promise.all(promises)
        .then(() => {
          navigate('/');
        })
        .catch(() => {
          setError('Failed to update profile, Pls try after some time.');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  

  return (
    <div className="form-div border-1 border w-100 p-lg-4 p-3 rounded-1" style={{maxWidth:450}}>
    <h3 className='mb-3'>Update Profile</h3>
    <form onSubmit={handleUpdateProfile}>
    <div className="mb-3">
    <label htmlFor="inputEmail" className="form-label">Email Id</label>
    <input type="email" className="form-control rounded-1" id="inputEmail" ref={emailRef} defaultValue={currentUser.email} required />
    </div>
    <div className="mb-3">
    <label htmlFor="inputPassword" className="form-label">Password</label>
    <input type="password" className="form-control rounded-1" id="inputPassword" ref={passwordRef} placeholder='Leave blank to keep the same'/>
    </div>
    <div className="mb-4">
    <label htmlFor="inputConfirmPass" className="form-label">Confirm Password</label>
    <input type="text" className="form-control rounded-1" id="inputConfirmPass" ref={confirmPasswordRef} placeholder='Leave blank to keep the same'/>
    </div>
    {error && <div className="alert alert-danger py-2 rounded-1" role="alert" style={{fontSize:'0.8rem'}}>{error} </div> }
    <div className="row justify-content-berween">
    <div className='col'><button type="submit"  disabled={loading} className="w-100 btn btn-primary border-0 rounded-1">{loading ? 'Updating...Pls Wait' : 'Update Profile'}</button></div>
    <div className='col'><Link to='/'><button className="w-100 btn btn-danger border-0 rounded-1">Cancel</button></Link></div>
    </div>
    </form>
    </div>
  )
}
