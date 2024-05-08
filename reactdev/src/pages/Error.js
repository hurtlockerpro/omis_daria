import React from 'react';
import Alert from 'react-bootstrap/Alert';

const Error = () => {
    return (
        <Alert key='error' variant='danger'>
          Page not found !
        </Alert>
    );
};

export default Error;