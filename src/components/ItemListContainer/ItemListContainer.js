import React from 'react'
import './ItemListContainer.css';

export const ItemListContainer = ({greeting}) => {

    return(
        <h1>
            {greeting} <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst litora nascetur eget cum quam quisque tempus arcu, nulla nec placerat praesent 
                sociosqu justo. Ante ridiculus fringilla cubilia taciti urna erat, convallis consequat felis nascetur habitant odio, per non proin venenatis nostra.

                Mus pharetra sollicitudin velit mauris faucibus ultrices malesuada, class sagittis ligula justo cursus orci, natoque laoreet sociis rhoncus aliquam 
                dui. Mauris natoque sed proin sollicitudin est venenatis conubia, lobortis urna ornare pulvinar fames platea sagittis, dui fusce vehicula aenean ac 
                imperdiet. Scelerisque nostra dictumst netus primis felis tempus hac sem, sodales torquent iaculis commodo aliquet mattis eget magnis, vivamus potenti
                laoreet congue leo inceptos ultricies.</p>
        </h1>
    )
}