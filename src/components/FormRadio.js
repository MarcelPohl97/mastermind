import React from 'react';
import {Field} from 'formik';

const FormRadio = ({input_tag, value}) => {
    return (
        <>
            <Field type="radio" tabindex="0" name={input_tag} className="absolute transform w-8 h-8 opacity-0 -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 cursor-pointer" value={value} />
        </>
    )
}

export default FormRadio;