import React, {useEffect} from 'react';

import Gradient from './Gradient';

const Gradients = ({gradients, setGradients, setloadBgColor}) => {

    return (
        <div className="container mx-auto p-10 grid responsive-grid">
                {gradients.map(gradient => <Gradient color={gradient.colors} name={gradient.name} key={gradient.key} id={gradient.id} setloadBgColor={setloadBgColor} /> )}
        </div>
    )
};

export default Gradients;