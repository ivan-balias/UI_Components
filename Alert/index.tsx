import React, {useEffect, useState} from 'react';
import s from './styles.module.scss';

interface AlertProps {
    title?: string;
    description: string;
    type?: 'error' | 'success' | 'warning' | 'info';
    variant?: 'filled' | 'outline' | 'default';
    close?: boolean;
    autoClose?: boolean;
}

const Alert = ({title = '',description = '',type = 'info',variant = 'default',close = false,autoClose = true}: AlertProps) => {

    const [open, setOpen] = useState(true)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            if (!close && autoClose)
                setOpen(false)
        }, 5000)

        return (() => {
            clearTimeout(timeOut)
        })
    }, [])

    const closeHandler = () => {
        setOpen(false);
    }

    const classes = [
        s.alert,
        s[variant],
        s[type]
    ]

    return (
        open ?
            <div className={classes.join(' ')}>
                <div className={s.img}> </div>
                <div className={s.text}>
                    {title && <div className={s.title}>{title}</div>}
                    <div className={s.description}>{description}</div>
                </div>
                {close && <div className={s.close} onClick={closeHandler}>✖</div>}
            </div>
            :
            <></>
    );
};

export default Alert;