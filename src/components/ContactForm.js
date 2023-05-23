import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

let userSchema = Yup.object({
  name: Yup.string().min(6).max(20).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  message: Yup.string().required("Please write something!!"),
});
const ContactForm = () => {
  const {handleChange, handleBlur, handleSubmit, values, errors, touched} = useFormik({
      initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: userSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
      <div className="input_label">
        <input 
        type="text" 
        autoComplete="off" 
        name="name" 
        placeholder='Your name..'
        onChange={handleChange}
        value={values.name}
        onBlur={handleBlur}
        />
        {errors.name && touched.name ? (<p className='form_error'>{errors.name}</p>) : null}
        </div>
        <div className="input_label">
        <input  
          type="email" 
          autoComplete="off" 
          name="email" 
          placeholder='Your Email Address..'
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
          />
          {errors.email && touched.email ? (<p className='form_error'>{errors.email}</p>) : null}
        </div>
        <div className="input_label">
        <textarea  
         type="text" 
         name="message" 
         placeholder='Your message..' 
         className='fs-5'
         onChange={handleChange}
         value={values.message}
         onBlur={handleBlur}
         ></textarea>
         {errors.message && touched.message ? (<p className='form_error'>{errors.message}</p>) : null}
        </div>
        <div className="button_label">
        <button type="submit">Send Message</button>
        </div>
      </form>
    </>
  )
}

export default ContactForm
