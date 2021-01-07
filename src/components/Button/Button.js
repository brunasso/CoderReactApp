import React from 'react';

const Button = ({text, children}) => { 

    console.log('props de button --->', text)

    return (
        <React.Fragment>
            {text && <>
                <button>
                    {text ? text : 'DEFAULT'}
                </button>
                    {children}
                </>
            }
                
        </React.Fragment>
    )
}


export default Button;