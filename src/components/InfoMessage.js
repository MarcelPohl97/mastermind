import React, {useContext} from 'react';
import {GlobalContext} from '../provider/GlobalProvider';

const InfoMessage = ({message, info_color}) => {
    const { loadBgColor } = useContext(GlobalContext);
    return (
        <>
            <div className={`w-full h-full`} >
                <h3 className={`${info_color} text-2xl text-center`}>{message}</h3>
            </div>
        </>
    )
}

export default InfoMessage;