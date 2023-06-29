import { Form, Formik, Field, validateYupSchema } from 'formik';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import KErrorMessage from './KErrorMessage';
import * as yup from 'yup';
function Productcategory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validateSchema = yup.object({
    category_name: yup.string().required("Category is required"),
  })
  return (
    <div className="App container">
      <h1>Product Category</h1>
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
                <th>Category Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>TV</td>
                <td><Button variant='secondary' >Edit</Button><Button variant='danger' >Delete</Button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Washingmachine</td>
                <td><Button variant='secondary' >Edit</Button><Button variant='danger' >Delete</Button></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mobile</td>
                <td><Button variant='secondary' >Edit</Button><Button variant='danger' >Delete</Button></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card">
            <div className="card-body">
              <Formik validationSchema={validateSchema} initialValues={{ category_name: "" }} onSubmit={(values) => { console.log(values) }}>
                <Form>
                  <Field type="text" name="category_name" placeholder="Category Name" className="form-control" /><br />
                  <KErrorMessage name="category_name" />
                  <Button type='submit' variant="primary">Save Changes</Button>
                </Form>
              </Formik>
            </div>
          </div>
        </Modal.Body>

      </Modal>
    </div>
  );
}

export default Productcategory;
