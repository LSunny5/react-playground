import React from 'react';
import './Split.css';

function Split(props) {

    //14.6 part 2
    const combinedClassName = `split ${props.className}`;
    //14.6 part 3
    const newStyles = {flex: props.flexBasis};

    return (
        <div className={combinedClassName} style={newStyles}>
            {/*14.6 part 1  
        This is the content of the split component. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
            
        //14.6 part 2
      */}
            {props.children}

        </div>
    );
}

export default Split;
