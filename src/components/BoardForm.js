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
                <div>
                    <label htmlFor="emoji">Emoji</label>
                    <Field id="emoji" name="emoji" placeholder="Example: 🤼" />
                </div>
                <div>
                    <label htmlFor="title">Title</label>
                    <Field id="title" name="title" placeholder="Example: The Wrestler" />
                </div>
                <div>
                    <label htmlFor="protected">Protected</label>
                    <Field id="protected" name="protected" placeholder="Example: true/false" />
                </div>
                <div>
                    <label htmlFor="created">Creator</label>
                    <Field id="created" name="created" placeholder="Example: Steve Austin" />
                </div>
                <button type="submit">{create ? "Add Board" : "Edit Board"}</button>
            </Form>
        </Formik>
        </>
    )
}

export default BoardForm;