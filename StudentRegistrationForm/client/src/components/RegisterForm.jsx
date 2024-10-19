import React, {useState } from 'react';
import {toast,ToastContainer} from 'react-toastify';
import axios from 'axios';

export const RegisterForm = () => {

    const [formValues,setFormValues] = useState({
        fullName:'',
        emailAddress:'',
        phoneNo:'',
        dob:'',
        gender:'',
        address:''
    });

    // State to handle form errors
    const [formErrors,setFormErrors] = useState({});
    // const [submittedData,setSubmittedData] = useState(null)
    const [loading,setLoading] = useState(false)

    // Handle input change
    const handleInputChange = (e) => {
    const {name,value} = e.target;
    setFormValues({...formValues,[name]:value})
    // setFormValues({...formValues,[e.target.name]: e.target.value})
    };

    // Form validation
    const validateForm = () => {
    let errors = {}   
    if (!formValues.fullName) errors.fullName = "Full Name is required";
    if (!formValues.emailAddress) errors.emailAddress = "Email Address is required";
    if (!formValues.phoneNo) errors.phoneNo = "Phone Number is required";
    if (!formValues.dob) errors.dob = "Date of Birth is required";
    if (!formValues.gender) errors.gender = "Gender is required";
    if (!formValues.address) errors.address = "Address is required";
    return errors; 
    }

    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent the default form submission
      setLoading(true); // Disable submit button
  
      const errors = validateForm(); // Validate the form
      if (Object.keys(errors).length === 0) {
          // No errors - form is valid
          setFormErrors({}); // Clear any previous errors
  
          try {
              // Send a POST request to the backend API using axios
              const response = await axios.post('http://localhost:5000/api/users/register', formValues);
  
              // Show success message
              toast.success(response.data.message); // Display the success message
  
              // Reset the form after successful submission
              setFormValues({
                  fullName: '',
                  emailAddress: '',
                  phoneNo: '',
                  dob: '',
                  gender: '',
                  address: ''
              });
          } catch (error) {

                if (response.status === 400) {
                toast.error(result.error); // Show "This email is already registered"
                }

                // Handle any network or unexpected errors
                else if (!response.ok) {
                toast.error(result.error || 'Failed to register user');
                } 

                else {
                // Something happened in setting up the request that triggered an Error
                toast.error('Error submitting form. Please try again.');
                }
          }
  
          setLoading(false); // Re-enable submit button
      } else {
          // Set form errors
          setFormErrors(errors);
          setLoading(false);
      }
  };

  return (
    <section className="p-lg-5 p-md-4 p-3 align-items-center home">
    <div className="container p-0">
    {/* ToastContainer for displaying toasts */}
    <ToastContainer position="top-right" autoClose={3000} />
    <form onSubmit={handleSubmit} className='border-1 rounded-5 p-4 bg-primary'>
    <h3 className='mb-3 text-white'>Register Form</h3>
    <div className="form-group pb-3">
        <label htmlFor='name' >Full Name*</label>
        <input type="text" id="name" className="form-control rounded-1 border-0" name="fullName" value={formValues.fullName} onChange={handleInputChange}  autoComplete='off' required />
        {formErrors.fullName && <span className="error-msg text-danger">{formErrors.fullName}</span>}
    </div>

    <div className="form-group pb-3">
        <label htmlFor="email">Email Address*</label>
        <input type="email" id="email" className="form-control rounded-1 border-0" name="emailAddress" value={formValues.emailAddress} onChange={handleInputChange}  autoComplete='off' required/>
        {formErrors.emailAddress && <span className="error-msg text-danger">{formErrors.emailAddress}</span>}
    </div>

    <div className="form-group pb-3">
      <label htmlFor='phoneno'>Phone No*</label>
      <input type="number"  id="phoneno" className="form-control rounded-1 border-0" name='phoneNo' value={formValues.phoneNo} onChange={handleInputChange}  autoComplete='off' required/>
      {formErrors.phoneNo && <span className="error-msg text-danger">{formErrors.phoneNo}</span>}
    </div>

    <div className="row row-cols-lg-2 row-cols-md-1 row-cols-1">
    <div className="col form-group pb-3">
      <label htmlFor='dob'>DOB*</label>
      <input type="date"  id="dob" className="form-control rounded-1 border-0" name='dob' value={formValues.dob} onChange={handleInputChange}  autoComplete='off' required/>
      {formErrors.dob && <span className="error-msg text-danger">{formErrors.dob}</span>}
    </div>
    
    <div className="col form-group pb-3">
        <label htmlFor='dob'>Gender*</label>
        <select className="form-select rounded-1 border-0" aria-label="Default select example" name='gender'  value={formValues.gender} onChange={handleInputChange}  autoComplete='off' required>
        <option value="" disabled>Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="others">Others</option>
        </select>
        {formErrors.gender && <span className="error-msg text-danger">{formErrors.gender}</span>}
    </div>
    </div>
    <div className="form-group pb-4">
    <label htmlFor="address">Address*</label>
    <textarea className="form-control rounded-1 border-0" id="address" rows="3" name='address' value={formValues.address} onChange={handleInputChange}  autoComplete='off' required></textarea>
    {formErrors.address && <span className="error-msg text-danger">{formErrors.address}</span>}
    </div>
    
    <button type="submit" className="btn btn-light px-5 py-2 rounded-5" disabled={loading} >{loading ? 'Submitting...' : 'Submit'}</button> 

  </form>
  </div>
  </section>

  )
}
