import React from 'react';
import PropTypes from 'prop-types';


const color = Math.random()>0.5?'green':'red';

const Header = ({message}) =>{
    return(
        <h2 style={{color}} className="Header text-center">
            {message}
        </h2>
    );
};

Headers.PropTypes ={
    message:PropTypes.string
};
/*Validation of props types and if needed or not before user, so if pass a wrong value can give warnings*/

export default Header;