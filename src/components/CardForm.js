import React from 'react';
import { Formik, Field, Form } from 'formik';


const CardForm = ({onSubmit}) => {
    return (
        <>
        <Formik
            initialValues= {{
                name: '',
            }}
            onSubmit={onSubmit}
        > 
            <Form>
                <label htmlFor="name">Card Name</label>
                <Field id="name" name="name" placeholder="Example: TestCard" />
                <button type="submit">Add Card</button>
            </Form> 
        </Formik>
        </>
    )
}

export default CardForm;
