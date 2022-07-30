import React from 'react';
import s from './styles.module.scss';

interface ButtonPropType {
    variant?: 'filled' | 'outlined' | 'link';
    click?: ()=>void;
    label?: string;
    color?: 'primary' | 'secondary' | 'error' | 'success' ;
    disabled?: boolean;
    size?: 'small'| 'medium' | 'large';
}

const Button = ({label='', click=()=>{}, variant = 'filled', color = 'primary', disabled = false, size = 'medium'}: ButtonPropType) => {
    const classNames = [
        s.btn,
        s[variant],
        color ? s[color] : '',
        size ? s[size] : '',
        disabled ? s.disabled : '',
    ];

    const submitHandler = (e: any) => {
        e.preventDefault()
        click()
    }

    return (
        <button
            onClick={submitHandler}
            className={classNames.join(' ')}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;