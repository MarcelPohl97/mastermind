import React from 'react';
import {Field} from 'formik';

const FormField = ({loadBgColor, placeholder, input_tag, label}) => {
    return (
        <>
            <div className="mb-4 relative flex flex-col mt-6">
                <label className="absolute -top-4 left-5 pr-1 bg-white text-green-400 text-xl" style={{color:`${loadBgColor.colors[0]}`}} htmlFor={input_tag}>{label}</label>
                <Field className="rounded-lg border-2 p-2 border-green-400" style={{borderColor:`${loadBgColor.colors[0]}`}} id={input_tag} name={input_tag} placeholder={placeholder} />
            </div>
        </>
    )
}

export default FormField;