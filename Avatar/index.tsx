import React from 'react';
import s from './styles.module.scss';

interface AvatarProps {
    thumb?: string | null;
    name?: string;
    cb?: any;
    size?: 'small' | 'medium' | 'large';
    type?: 'square' | 'circle' | 'rounded';
    bg?: string;
}

export const Avatar = ({thumb=null, bg='rgba(25, 118, 210, 1)',name='', cb=null, size='medium', type='circle'}: AvatarProps) => {

    const classes = [
        s.avatar,
        s[size],
        s[type]
    ];



    return (
        <div onClick={cb} style={{backgroundColor: bg}} className={classes.join(' ')}>
            {thumb && <img src={thumb}/>}
            {!thumb && name && <span>{name}</span>}
        </div>
    )



}