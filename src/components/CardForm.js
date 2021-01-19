import React, {useContext} from 'react';
import { Formik, Field, Form } from 'formik';
import FormField from './FormField';
import Priority from './Priority';


const CardForm = ({onSubmit, onEdit, create, filteredCard, loadBgColor}) => {
    const {priorities, setCardPriority} = useContext(GlobalContext);
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
                <Priority />
                <button className="bg-green-400 py-3 px-10 shadow-lg rounded-md text-white text-base uppercase mr-4" type="submit">{create ? "➕ Add Card" : "📝 Edit Card"}</button>
            </Form> 
        </Formik>
        </>
    )
}

export default CardForm;
