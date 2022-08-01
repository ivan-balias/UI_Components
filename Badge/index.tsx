import React, {ReactChildren, ReactNode} from 'react';
import s from './styles.module.scss';

interface BadgeProps {
    color?: 'secondary' | 'success' | 'default';
    value?: number;
    variant?: 'dot';
    children: ReactNode;
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'right';

}

const Badge = ({
                   color = 'default',
                   value = 0,
                   variant = 'dot',
                   vertical = 'top',
                   horizontal = 'right',
                   children
               }: BadgeProps) => {

    const badgeValue = value > 99 ? '99+' : value


    const classes = [
        s.badge,
        s[variant],
        s[color],
    ]


    return (
        <div style={{position: 'relative'}}>
            <div
                style={{position: 'absolute', right: 0, top: -10, background: 'red', padding: 5, borderRadius: '100%'}}>
                <span>{badgeValue}</span>
            </div>
            {children}
        </div>
    );
};

export default Badge;