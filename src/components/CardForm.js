import React from 'react';
import { Formik, Field, Form } from 'formik';


const CardForm = () => {
    return (
        <>
        <Formik
            initialValues={{
                name: '',
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
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
