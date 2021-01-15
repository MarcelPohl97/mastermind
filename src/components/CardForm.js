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
                <div className="mb-4 relative flex flex-col mt-10">
                    <label className="absolute -top-4 left-5 pr-1 bg-white text-green-500 text-xl" htmlFor="name">Card Name</label>
                    <Field className="rounded-lg border-2 p-2 border-green-500" id="name" name="name" placeholder="Example: TestCard" />
                </div>
                <button className="bg-green-500 py-3 px-10 shadow-lg rounded-md text-white text-base uppercase mr-4" type="submit">{create ? "➕ Add Card" : "📝 Edit Card"}</button>
            </Form> 
        </Formik>
        </>
    )
}

export default CardForm;
