import React, {useState} from 'react';
import s from './styles.module.scss';

interface SwitchProps {
    checked?: boolean;
    change?: any;
    size?: 'small' | 'medium' ;
    color?: 'primary' | 'secondary' | 'warning' | 'default';
    label?: string;
    labelPosition?: 'top' | 'bottom' | 'left' | 'right';
    disabled?: boolean;
    defaultChecked?: boolean;
}

function Index({
                   checked = false,
                   defaultChecked = false,
                   change,
                   size = 'medium',
                   color = 'default',
                   label = '',
                   labelPosition = 'right',
                   disabled = false
               }: SwitchProps)
{

    const [check, setCheck] = useState(defaultChecked ?? checked);

    const classNames = [
        s.switch,
        s[size],
        s[color],
        s[labelPosition],
        checked ? s.checked : '',
        label ? s.label : '',
        disabled ? s.disabled : '',
    ];

    console.log(classNames)

    return (
        <div className={classNames.join(' ')}>
            <label>
                <input onChange={() => change} type="checkbox" disabled={disabled} checked={check} onClick={() => {
                    setCheck(!check)
                }}/>
                <span></span>
            </label>
            {label && <span onClick={() => {
                !disabled && setCheck(!check)
            }}>{label}</span>}
        </div>
    );
}

export default Index;