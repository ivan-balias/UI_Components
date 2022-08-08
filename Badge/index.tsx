import React, {ReactNode} from 'react';
import s from './styles.module.scss';

interface BadgeProps {
    color?: 'secondary' | 'success' | 'default';
    value?: number;
    type?: 'dot' | 'num';
    children: ReactNode;
    vertical?: 'top' | 'bottom';
    horizontal?: 'left' | 'right';
    size?: 'small' | 'medium' | 'large'
}

const Badge = ({
                   color = 'default',
                   value = -1,
                   vertical = 'top',
                   horizontal = 'right',
                   children,
                   type = 'num',
                   size = 'medium'
               }: BadgeProps) => {

    const badgeValue = value > 99 ? '99+' : value

    const classes = [
        s.badge,
        s[color],
        s[type],
        s[size],
        s[vertical],
        s[horizontal]
    ]

    return (
        <div className={classes.join(' ')}>
            <div>
                {value > 0 && <span>{badgeValue}</span>}
            </div>
            {children}
        </div>
    );
};

export default Badge;