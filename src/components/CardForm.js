import React from 'react';
import { Formik, Field, Form } from 'formik';


const CardForm = ({onSubmit, onEdit, create, filteredCard}) => {
    return (
        <>
        <Formik
            initialValues={create ? {
                name: '',
            }
            :{
                name: filteredCard.name,
            }
        }
            onSubmit={create ? onSubmit : onEdit}
        > 
            <Form>
                <label htmlFor="name">Card Name</label>
                <Field id="name" name="name" placeholder="Example: TestCard" />
                <button type="submit">{create ? "Add Card" : "Edit Card"}</button>
            </Form> 
        </Formik>
        </>
    )
}

export default CardForm;
