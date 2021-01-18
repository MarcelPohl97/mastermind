import React from 'react';
import { Formik, Field, Form } from 'formik';
import FormField from './FormField';


const CardForm = ({onSubmit, onEdit, create, filteredCard, loadBgColor}) => {
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
                <FormField loadBgColor={loadBgColor} placeholder={"Example: TestCard"} input_tag={"name"} label={"Card Name"}/>
                <button className="bg-green-500 py-3 px-10 shadow-lg rounded-md text-white text-base uppercase mr-4" style={{backgroundColor:`${loadBgColor.colors[0]}`}} type="submit">{create ? "➕ Add Card" : "📝 Edit Card"}</button>
            </Form> 
        </Formik>
        </>
    )
}

export default CardForm;
