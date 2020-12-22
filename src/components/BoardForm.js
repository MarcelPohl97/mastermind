import React from 'react';
import { Formik, Field, Form } from 'formik';


const BoardForm = ({create, onSubmit, onEdit, filtered_Board}) => {
    return (
        <>
        <Formik
            initialValues={{
                emoji: '',
                title: '',
                protected: '',
                created: '',
            }}
            onSubmit={create ? onSubmit : onEdit}
        >
            {
            create ? 
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
                    <button type="submit">Add Board</button>
                </Form>
                :
                <Form>
                    <div>
                        <label htmlFor="emoji">Emoji</label>
                        <Field id="emoji" name="emoji" value={filtered_Board[0].emoji}  />
                    </div>
                    <div>
                        <label htmlFor="title">Title</label>
                        <Field id="title" name="title" value={filtered_Board[0].title} />
                    </div>
                    <div>
                        <label htmlFor="protected">Protected</label>
                        <Field id="protected" name="protected" value={filtered_Board[0].protected.toString()} />
                    </div>
                    <div>
                        <label htmlFor="created">Creator</label>
                        <Field id="created" name="created" value={filtered_Board[0].created} />
                    </div>
                    <button type="submit" onClick={onEdit}>Update Board</button>
                </Form>
            }
                
        </Formik>
        </>
    )
}

export default BoardForm;