import React, {ReactChildren, ReactNode} from 'react';
import s from './styles.module.scss';

interface DotProps {
    color?: 'secondary' | 'success' | 'default';
    children: ReactNode;
    vertical?: 'top' | 'bottom';
    horizontal?: 'left' | 'right';
    size?: 'small' | 'medium' | 'large';
    checkOnline?: boolean;
    isOnline?: boolean;
    borderColor?: string;
}

const Dot = ({
                 color = 'default',
                 vertical = 'top',
                 horizontal = 'right',
                 children,
                 size = 'medium',
                 checkOnline,
                 isOnline,
                 borderColor = ''
             }: DotProps) => {

    const classes = [
        s.dot,
        s[color],
        s[size],
        s[vertical],
        s[horizontal],
        checkOnline ? isOnline ? s.online : s.offline : ''
    ]

    return (
        <div className={classes.join(' ')}>
            <b style={{borderColor: borderColor}}></b>
            {children}
        </div>
    );
};

export default Dot;