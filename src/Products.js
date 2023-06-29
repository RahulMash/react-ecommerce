import { Form, Formik, Field, validateYupSchema ,ErrorMessage } from 'formik';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import KErrorMessage from './KErrorMessage';
import * as yup from 'yup';
import Select from 'react-select';
import ImageUploadForm from './ImageUploadForm';
function Products() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [fieldValue, setFieldValue] = useState('');

  const aquaticCreatures = [
    { label: '', value: '' },
    { label: 'Shark', value: 'Shark' },
    { label: 'Dolphin', value: 'Dolphin' },
    { label: 'Whale', value: 'Whale' },
    { label: 'Octopus', value: 'Octopus' },
    { label: 'Crab', value: 'Crab' },
    { label: 'Lobster', value: 'Lobster' },
  ];

  

  const validateSchema = yup.object({
    category_name: yup.string().required("Category is required"),
    product_name: yup.string().required("Product name is required"),
    product_description:yup.string().required("Product Description is required"),
    

  })
  
  return (
    <div className="App container">
      <h1>Products</h1>
      <div className='row'>
        <div className='col-sm-12 pull-right' >
          <Button variant="primary" onClick={handleShow}>Create Category</Button>
        </div>

      </div>

      <div className='row'>
        <div className='col-sm-12'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Category Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Sony</td>
                <td>TV</td>
                <td><Button variant='secondary' >Edit</Button><Button variant='danger' >Delete</Button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Lg</td>
                <td>Washingmachine</td>
                <td><Button variant='secondary' >Edit</Button><Button variant='danger' >Delete</Button></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Iphone</td>
                <td>Mobile</td>
                <td><Button variant='secondary' >Edit</Button><Button variant='danger' >Delete</Button></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card">
            <div className="card-body">
              <Formik validationSchema={validateSchema} initialValues={{ product_name: "", category_name: "",product_description:"",product_image:"" }} onSubmit={(values) => { console.log(values) }}>
                <Form>
                  <Field type="text" name="product_name" placeholder="Product Name" className="form-control" /><br />
                  <KErrorMessage name="product_name" />
                  <br />
                  <Field as="textarea" placeholder="Product Description" className="form-control" name="product_description"></Field><br/>
                  <KErrorMessage name="product_description" />
                  <Field className="form-control" options = {   aquaticCreatures } name="category_name" as="select">
                    <option value=''>--Select--</option>
                    <option value='20'>rs 20</option>
                    <option value='30'>rs 30</option>
                    <option value='40'>rs 40</option>
                  </Field><br />
                

                  <KErrorMessage name="category_name" /><br />
                  
                  <Button variant="primary" type="submit">Submit</Button>
                </Form>
              </Formik>
            </div>
          </div>
        </Modal.Body>

      </Modal>
    </div>
  );
}

export default Products;
