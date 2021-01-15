import React from 'react';
import { Formik, Field, Form } from 'formik';


const BoardForm = ({create, onSubmit, onEdit, filtered_Board}) => {
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
                <div className="mb-4 relative flex flex-col mt-10">
                    <label className="absolute -top-4 left-5 pr-1 bg-white text-green-500 text-xl" htmlFor="emoji">Emoji</label>
                    <Field className="rounded-lg border-2 p-2 border-green-500" id="emoji" name="emoji" placeholder="Example: 🤼" />
                </div>
                <div className="mb-4 relative flex flex-col mt-4">
                    <label className="absolute -top-4 left-5 pr-1 bg-white text-green-500 text-xl" htmlFor="title">Title</label>
                    <Field className="rounded-lg border-2 p-2 border-green-500" id="title" name="title" placeholder="Example: The Wrestler" />
                </div>
                <div className="mb-4 relative flex flex-col mt-4">
                    <label className="absolute -top-4 left-5 pr-1 bg-white text-green-500 text-xl" htmlFor="protected">Protected</label>
                    <Field className="rounded-lg border-2 p-2 border-green-500" id="title" id="protected" name="protected" placeholder="Example: true/false" />
                </div>
                <div className="mb-4 relative flex flex-col mt-4">
                    <label className="absolute -top-4 left-5 pr-1 bg-white text-green-500 text-xl" htmlFor="created">Creator</label>
                    <Field className="rounded-lg border-2 p-2 border-green-500" id="created" name="created" placeholder="Example: Steve Austin" />
                </div>
                <button type="submit" className="bg-green-500 py-3 px-10 shadow-lg rounded-md text-white text-base uppercase mr-4">{create ? "➕ Add Board" : "📋 Edit Board"}</button>
            </Form>
        </Formik>
        </>
    )
}

export default BoardForm;