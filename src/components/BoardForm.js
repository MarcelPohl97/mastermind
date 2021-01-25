import React, {useState} from 'react';
import { Formik, Field, Form } from 'formik';
import FormField from './FormField';
import EmojiPicker from './EmojiPicker';


const BoardForm = ({create, onSubmit, onEdit, filtered_Board, loadBgColor, Emoji}) => {

    return (
        <>
        <div className="mb-4 relative flex flex-col mt-6">
            <span className="absolute -top-4 left-5 pr-1 bg-white text-green-400 text-xl" style={{color:`${loadBgColor.colors[0]}`}}>Emoji</span>
            <div className="rounded-lg border-2 p-5 border-green-400 disabled:opacity-50" style={{borderColor:`${loadBgColor.colors[0]}`}}>{Emoji}</div>
            <EmojiPicker loadBgColor={loadBgColor} />
        </div>
        <Formik
            enableReinitialize
            initialValues={create ? {
                title: '',
                protected: '',
                created: '',
            }
            :{
                title: filtered_Board[0].title,
                protected: filtered_Board[0].protected.toString(),
                created: filtered_Board[0].created,
            }
        }
            onSubmit={create ? onSubmit : onEdit}
        >
            <Form>
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