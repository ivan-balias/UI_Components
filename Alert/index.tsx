import React, {useEffect, useState} from 'react';
import s from './styles.module.scss';

interface AlertProps {
    title?: string;
    description: string;
    type?: 'error' | 'success' | 'warning' | 'info';
    variant?: 'filled' | 'outline'| 'default';
    close?: boolean;
}

const Alert = ({title = '', description = '', type = 'info', variant = 'default', close=false}: AlertProps) => {

    const [open, setOpen] = useState(true)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            // !close && setOpen(false)
        }, 3000)

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

    console.log(classes)

    return (
        open ?
            <div className={classes.join(' ')}>
                <div className={s.img}></div>
                <div className={s.text}>
                    {title && <div className={s.title}>{title}</div>}
                    <div className={s.description}>{description}</div>
                </div>
                {close && <div className={s.close} onClick={closeHandler}>x</div>}
            </div>
            :
            <></>
    );
};

export default Alert;