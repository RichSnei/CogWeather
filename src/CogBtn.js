import React from 'react';

function CogBtn({label, actionHandler, type, disabled}) {
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

        markup = (<button onClick={actionHandler} type={type} disabled={disabled}>{label}</button>);
    }

    return markup;
}

export default CogBtn;
