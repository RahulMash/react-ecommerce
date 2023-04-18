import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import validator from 'validator'
function Userregistration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [mobile, setMobile] = useState('');
  const saveUser = () => {
    console.log( email, password, mobile);
  }

  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var emailValue = e.target.value
    if (validator.isEmail(emailValue)) {
      setEmail(emailValue)
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }

  const validatePhoneNumber = (number) => {
    const isValidPhoneNumber = validator.isMobilePhone(number)
    if (number.length == 10 && isValidPhoneNumber == true) {

      setMobile('');
    } else {
      setMobile('Incorrect number');
    }

  }

  const confirmP = (e) =>{
    var cpassword = e.target.value;
    if(cpassword != null  && password != null && password ==  cpassword ){
      setCpassword('');
    }else{
      setCpassword('Wrong password');
    }
  } 
  const [txt, setTxt] = useState('');
  const onInputChange = (e) => {
    if((e.charCode > 64 && e.charCode < 91) || (e.charCode > 96 && 
      e.charCode < 123)){
         console.log(1);
    }else{
      console.log(2);
    }
  } 

  return (
    <div className="App" style={{ margin: 'auto', marginLeft: '420px', }}>
      <div className="card" style={{ width: "50%" }}>
        <div className="card-body">
          <h2>User Registration</h2>
          <input type="text" className="form-control" placeholder="Name" onChange={onInputChange} /><br /><br />
          <input type="text" className="form-control" placeholder="Mobile" onChange={(e) => validatePhoneNumber(e.target.value)} /><br /><br />
          <span style={{ fontWeight: 'bold', color: 'red', }}>{mobile}</span>
          <input type="text" className="form-control" placeholder="Email" id="userEmail" onChange={(e) => validateEmail(e)} /><br /><br />
          <span style={{ fontWeight: 'bold', color: 'red', }}>{emailError}</span>
          <input type="text" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
          <input type="text" className="form-control" placeholder="Confirm Password" onChange={(e) => confirmP(e)} /><br />
          <span style={{ fontWeight: 'bold', color: 'red', }}>{cpassword}</span><br />
          <Button onClick={saveUser} variant="primary">Save</Button>
        </div>
      </div>
    </div>
  );
}

export default Userregistration;
