import React, { useState } from "react";

import { Formik,Form,Field, validateYupSchema } from "formik";
import * as yup from "yup";
import KErrorMessage from "./KErrorMessage";
import { Button } from "react-bootstrap";
function Userregistration() {

  const validateSchema  = yup.object({
    name:yup.string().required("Name is required"),
    mobile: yup.number()
    .min(1000000000,"Not Valid")
    .max(9999999999,"Not Valid ")
    .required("Mobile number is require"),
    email: yup.string().required(),
    password : yup.string().matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,"Password must contain at least 8 characters, one uppercase, one number and one special case character").required("Password is required"),
    passwordConfirmation: yup.string()
       .oneOf([yup.ref('password'), null], 'Passwords must match'),
    gender: yup.string().required("Gender is required"),
    dob: yup.string().required("Date of Birth required"),

  })
  return (
    <div className="App" style={{ margin: 'auto', marginLeft: '420px', }}>
      <div className="card" style={{ width: "50%" }}>
        <div className="card-body">
          <h2>User Registration</h2>
          <Formik validationSchema={validateSchema} initialValues={{name:"",mobile:"",email:"",password:"",passwordConfirmation:"",gender:"",dob:""}} onSubmit={(values)=>{ console.log(typeof(values))}}>
              <Form>
              
              <Field name="name" className="form-control" placeholder="Name" type="text" /><br />
              <KErrorMessage name="name" />
              
              <Field name="mobile" className="form-control" placeholder="Mobile" type="number" /><br />
              <KErrorMessage name="mobile" />
              
              <Field name="email" className="form-control" placeholder="Email" type="text" /><br />
              <KErrorMessage name="email" />
              
              <Field name="password" className="form-control" placeholder="Password" type="password" /><br />
              <KErrorMessage name="password" />
              
              <Field name="passwordConfirmation" className="form-control" placeholder="Confirm Password" type="password" /><br />
              <KErrorMessage name="passwordConfirmation" />
              
              <label>Male:</label> <Field name="gender" type="radio" value="male" /> {' '}
              <label>Female:</label><Field name="gender" type="radio" value="female" /><br />
              <KErrorMessage name="gender" />
              
              <Field name="dob" type="date" className="form-control" /><br />
              <KErrorMessage name="dob" />
              
              <Button variant="primary" type="submit">Save</Button>
              {/* <button >Submit</button> */}
            </Form>
          </Formik>
          
        </div>
      </div>
    </div>
  );
}

export default Userregistration;
