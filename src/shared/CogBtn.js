import React from 'react';

function CogBtn({label, onClick, type, disabled}) {
    const buttonTypes = {
        'submit': true,
        'reset': true,
        'button': true,
    }
    if (type === undefined) {
        type = 'button';
    }

    let markup = <span>unsupported button type</span>
    
    if (buttonTypes[type]) {
        markup = (<button onClick={() => {onClick()}} type={type} disabled={disabled}>{label}</button>);
    }

    return markup;
}

export default CogBtn;
