import React from 'react';
import { Formik, Field, Form } from 'formik';
import FormField from './FormField';


const BoardForm = ({create, onSubmit, onEdit, filtered_Board, loadBgColor}) => {
    return (
        <>
        <Formik
            initialValues={create ? {
                emoji: '',
                title: '',
                protected: '',
                created: '',
            }
            :{
                emoji: filtered_Board[0].emoji,
                title: filtered_Board[0].title,
                protected: filtered_Board[0].protected.toString(),
                created: filtered_Board[0].created,
            }
        }
            onSubmit={create ? onSubmit : onEdit}
        >
            <Form>
                <FormField loadBgColor={loadBgColor} placeholder={"Example: 🤼"} input_tag={"emoji"} label={"Emoji"}/>
                <FormField loadBgColor={loadBgColor} placeholder={"Example: The Wrestler"} input_tag={"title"} label={"Title"}/>
                <FormField loadBgColor={loadBgColor} placeholder={"Example: true/false"} input_tag={"protected"} label={"Protected"}/>
                <FormField loadBgColor={loadBgColor} placeholder={"Example: Steve Austin"} input_tag={"created"} label={"Creator"}/>
                <button type="submit" className="bg-green-400 py-3 px-10 shadow-lg rounded-md text-white text-base uppercase mr-4" style={{backgroundColor:`${loadBgColor.colors[0]}`}}>{create ? "➕ Add Board" : "📋 Edit Board"}</button>
            </Form>
        </Formik>
        </>
    )
}

export default BoardForm;