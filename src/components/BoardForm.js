import React from 'react';
import { Formik, Field, Form } from 'formik';


const BoardForm = () => {
    return (
        <>
        <Formik
            initialValues={{
                emoji: '',
                title: '',
                protected: '',
                created: '',
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >
                <Form>
                    <label htmlFor="emoji">Emoji</label>
                    <Field id="emoji" name="emoji" placeholder="Example: 🤼" />
                    <label htmlFor="title">Title</label>
                    <Field id="title" name="title" placeholder="Example: The Wrestler" />
                    <label htmlFor="protected">Protected</label>
                    <Field id="protected" name="protected" placeholder="Example: true" />
                    <label htmlFor="created">Creator</label>
                    <Field id="created" name="created" placeholder="Example: Steve Austin" />
                    <button type="submit">Add Board</button>
                </Form>
        </Formik>
        </>
    )
}

export default BoardForm;