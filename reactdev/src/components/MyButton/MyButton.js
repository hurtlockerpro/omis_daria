import React from 'react';


const MyButton = ({ onClickFn, ...props }) => {
    //console.log(props);
    return (
        <div>
            <button 
                className="btn btn-primary m-2" 
                onClick={onClickFn}
                >{props.title}</button>
        </div>
    );
};

export default MyButton;