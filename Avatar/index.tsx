import React from 'react';
import s from './styles.module.scss';

interface AvatarProps {
    thumb?: string | null;
    name?: string;
    surname?: string;
    cb?: any;
    size?: 'small' | 'medium' | 'large';
    type?: 'square' | 'circle' | 'rounded';
    bg?: string;
}

export const Alert = ({thumb=null, bg='#2c3ea6',name='',surname='', cb=null, size='medium', type='circle'}: AvatarProps) => {

    const fullName = () => {
        const fullName:string[] = [];

        if(name)
            fullName.push(name.slice(0,1).toUpperCase())
        if(surname)
            fullName.push(surname.slice(0,1).toUpperCase())

        return fullName.length ? fullName.join('') : null
    }

    const classes = [
        s.avatar,
        s[size],
        s[type]
    ];

    return (
        <div onClick={cb} style={{backgroundColor: bg}} className={classes.join(' ')}>
            {thumb && <i style={{backgroundImage:`url(${thumb})`}}></i>}
            {!thumb && fullName() && <span>{fullName()}</span>}
        </div>
    )
}