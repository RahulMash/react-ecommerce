import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as yup from "yup";
import KErrorMessage from "./KErrorMessage";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  phone: yup.number()
  .min(1000000000,"Not valid phone number!")
  .max(99999999999,"Not a valid phone number!")
  .required("Phone is required"),
  password: yup.string().matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,"Password must contain at least 8 characters, one uppercase, one number and one special case character"
  ).required("Password is required"),
  passwordConfirmation: yup.string()
     .oneOf([yup.ref('password'), null], 'Passwords must match'),
  gender: yup.string().required("Gender is required"),
  email: yup.string().required('Required'),
  dob: yup.string().required("DOB is required"),
  income: yup.number().required("Income is required"),
  about: yup.string().required("About is required"),
  hobbies:yup
    .array()
    .of( 
      yup
        .string("String is required")
        .min(4,"Too Short")
        .max(20,"Too long")
        .required("Hobbies are required")
      )
      .min(1,"atleast 1 hobby is required")
      .required("required")
});
function Userregistration() {

  return (
    <div className="App" >
      <Formik validationSchema={validationSchema}
        initialValues={{
          name: "",
          phone: "",
          email: "",
          password: "",
          passwordConfirmation:"",
          gender: "",
          dob: "",
          income: "",
          about: "",
          hobbies:[]
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({values })=>(
          <Form>
          <label>Name:</label>
          <Field name="name" type="text" /><br />
          <KErrorMessage name="name" />
          <label>Phone:</label>
          <Field name="phone" type="number" /><br />
          <KErrorMessage name="phone" />
          <label>Email:</label>
          <Field name="email" type="text" /><br />
          <KErrorMessage name="email" />
          <label>Password:</label>
          <Field name="password" type="password" /><br />
          <KErrorMessage name="password" />
          <label>Confirm Password:</label>
          <Field name="passwordConfirmation" type="password" /><br />
          <KErrorMessage name="passwordConfirmation" />
          <label>Gender:</label>
          <Field name="gender" type="radio" value="male" /> {' '}
          <Field name="gender" type="radio" value="female" /><br />
          <KErrorMessage name="gender" />
          <label>DOB:</label>
          <Field name="dob" type="date" /><br />
          <KErrorMessage name="dob" />
          <label>Income:</label>
          <Field name="income" as="select">
            <option value='10'>rs 10</option>
            <option value='20'>rs 20</option>
            <option value='30'>rs 30</option>
            <option value='40'>rs 40</option>
          </Field><br />
          <KErrorMessage name="income" />
          <label>About:</label>
          <Field name="about" as="textarea" /><br />
          <KErrorMessage name="about" />
          <FieldArray
            name="hobbies"
            render={(arrayHelpers) => (
              <div>
                {values.hobbies && values.hobbies.length > 0 ? (
                  values.hobbies.map((friend, index) => (
                    <div key={index}>
                      <Field name={`hobbies.${index}`} />
                      {/* <KErrorMessage name={`hobbies.${index}`} /> */}
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push('')}>
                    {/* show this when user has removed all hobbies from the list */}
                    Add a friend
                  </button>
                )}

              </div>
            )}
          /><br />
          <KErrorMessage name={`hobbies`} />
          <button type="submit">Submit</button>
        </Form>
        )}
        
      </Formik>
    </div>
  );
}

export default Userregistration;
