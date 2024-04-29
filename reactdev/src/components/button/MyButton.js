import React from 'react';
import Button from 'react-bootstrap/esm/Button';


const MyButton = ({ onClickFn, ...props }) => {
    //console.log(props);
    const btnColor = props.color
    return (
        <>
            <Button 
                variant={btnColor}
                onClick={onClickFn}
                >{props.title}
            </Button>
        </>
    );
};

export default MyButton;