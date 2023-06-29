import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';

const ImageUploadForm = () => {
    const initialValues = {
        image: null,
    };

    const validationSchema = Yup.object().shape({
        image: Yup.mixed()
            .required('Please upload an image')
            .test(
                'fileSize',
                'Image size is too large',
                (value) => value && value.size <= 5242880 // 5MB
            )
            .test(
                'fileType',
                'Unsupported file format',
                (value) =>
                    value &&
                    ['image/jpeg', 'image/png', 'image/gif'].includes(value.type)
            ),
    });

    const handleSubmit = (values) => {
        // Handle form submission
        console.log(values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ setFieldValue, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="image">Upload Image</label>
                        <input
                            id="image"
                            name="image"
                            type="file"
                            onChange={(event) => {
                                setFieldValue('image', event.currentTarget.files[0]);
                            }}
                        />
                        <ErrorMessage name="image" component="div" />
                    </div>
                    <Button variant="primary" type="submit">Submit</Button>
                </form>
            )}
        </Formik>
    );
};

export default ImageUploadForm;
