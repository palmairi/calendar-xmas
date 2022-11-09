import React from 'react';
import classes from './Card.module.scss';

const Card = ({children}) => {
    return (
        <div className={classes['card'] + ' p-5 md:p-16 rounded-xl mx-10 '}>
            {children}
        </div>
    );
};

export default Card;
