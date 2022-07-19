import React from 'react';
import s from './Button.module.scss';

interface ButtonPropType {
    variant: 'primary' | 'outlined' | 'link';
    cb: any;
    children?: React.ReactNode;
    color?: 'secondary' | 'error' | 'success' | '';
    disabled?: boolean;
    size?: 'small'| 'medium' | 'large';
}

const Index = ({children, cb, variant = 'primary', color = '', disabled = false, size = 'medium'}: ButtonPropType) => {
    const classNames = [
        s.btn,
        s[variant],
        color ? s[color] : '',
        size ? s[size] : '',
        disabled ? s.disabled : '',
    ];

    const submitHandler = (e: any) => {
        e.preventDefault()
        cb()
    }

    return (
        <button
            onClick={submitHandler}
            className={classNames.join(' ')}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Index;