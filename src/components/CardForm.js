import React, {useContext} from 'react';
import { Formik, Field, Form } from 'formik';
import FormField from './FormField';
import FormRadio from './FormRadio';
import Priority from './Priority';

const CardForm = ({onSubmit, onEdit, create, filteredCard, loadBgColor, priorities, delete_Card, hide_Modal}) => {
    return (
        <>
        <Formik
            initialValues={create ? {
                name: '',
                priority:'',
            }
            :{
                name: filteredCard.name,
                priority: filteredCard.priority
            }
        }
            onSubmit={create ? onSubmit : onEdit}
        > 
            <Form>
                <FormField loadBgColor={loadBgColor} placeholder={"Example: TestCard"} input_tag={"name"} label={"Card Name"}/>
                <span className="text-green-500 mt-2" contentEditable={'false'}>Set Priority:</span>
                <div className="flex items-center mt-2 mb-2" role="group" aria-labelledby="my-radio-group">
                    <Priority id={priorities[0].id} priority={priorities[0].priority} color={priorities[0].color} radio={<FormRadio input_tag={'priority'} value={'bg-green-500'} />} />
                    <Priority id={priorities[1].id} priority={priorities[1].priority} color={priorities[1].color} radio={<FormRadio input_tag={'priority'} value={'bg-blue-500'} />} />
                    <Priority id={priorities[2].id} priority={priorities[2].priority} color={priorities[2].color} radio={<FormRadio input_tag={'priority'} value={'bg-yellow-500'} />} />
                    <Priority id={priorities[3].id} priority={priorities[3].priority} color={priorities[3].color} radio={<FormRadio input_tag={'priority'} value={'bg-red-500'} />} />
                </div>
                <div className="flex flex-row items-center space-between">
                    {create ? <button className="bg-green-400 py-3 px-10 shadow-lg rounded-md text-white text-base uppercase mr-4" style={{backgroundColor:`${loadBgColor.colors[0]}`}} type="submit">➕ Add Card</button>
                    :
                    <>
                        <button className="bg-green-400 py-3 px-10 shadow-lg rounded-md text-white text-base uppercase mr-4" style={{backgroundColor:`${loadBgColor.colors[0]}`}} type="submit">📝 Edit Card</button>
                        <button className="bg-red-500 py-3 px-10 shadow-lg rounded-md text-white text-base uppercase mr-4" type="button" onClick={() => {delete_Card(); hide_Modal(); }} >🗑️ Delete Card</button>
                    </>
                    }
                </div>
            </Form> 
        </Formik>
        </>
    )
}

export default CardForm;
