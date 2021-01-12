import React, {useEffect} from 'react';

import Gradient from './Gradient';

const Gradients = ({gradients, setGradients}) => {

    return (
        <div className="container mx-auto p-10 grid responsive-grid">
                {gradients.map(gradient => <Gradient color={gradient.colors} name={gradient.name} key={gradient.key} /> )}
        </div>
    )
};

export default Gradients;