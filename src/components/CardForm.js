import React, {useContext} from 'react';
import { Formik, Field, Form } from 'formik';
import FormField from './FormField';
import Priority from './Priority';

const CardForm = ({onSubmit, onEdit, create, filteredCard, loadBgColor, priorities, setCardPriority}) => {
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
                <span className="text-green-500 mt-2" contentEditable={'false'}>Set Priority:</span>
                <div className="flex items-center mt-2 mb-2">
                    {priorities.map(priority => (
                        <Priority id={priority.id} priority={priority.priority} color={priority.color} setCardPriority={setCardPriority} />
                    ))}
                </div>
                <button className="bg-green-400 py-3 px-10 shadow-lg rounded-md text-white text-base uppercase mr-4" style={{backgroundColor:`${loadBgColor.colors[0]}`}} type="submit">{create ? "➕ Add Card" : "📝 Edit Card"}</button>
            </Form> 
        </Formik>
        </>
    )
}

export default CardForm;
