import React from 'react';
import s from './styles.module.scss';

interface SliderProps {

    change?: any;
    color?: 'primary' | 'secondary' | 'default';
    size?: 'small' | 'medium';
    labelPosition?: 'left' | 'right';
    disabled?: boolean;
    marks?: boolean;
    defaultValue?: number;
    value?: number;

    min?: number;
    max?: number;
    step?: number;
    vertical?: boolean;
}

function Slider({
                   value = 0,
                   size = 'medium',
                   color = 'default',
                   disabled = false,
                   marks = false,
                   labelPosition = 'right',
                   defaultValue = 0,
                   min = 0, max = 100,
                   step = 1,
                   vertical = false
               }: SliderProps) {

    const [val, setVal] = React.useState<number>(30);

    const getBackgroundSize = () => {
        return {
            backgroundSize: `${(val * 100) / max}% 100%`,
        };
    };

    const classNames = [
        s.slider,
        s[size],
        s[color],
        s[labelPosition],
        value ? s.value : '',
        disabled ? s.disabled : '',
        marks ? s.marks : '',
        vertical ? s.vertical : ''
    ];

    return (
        <div className={classNames.join(' ')}>
            <label>
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={val}
                    disabled={disabled}
                    // marks={marks}
                    // onChange={event => {
                    //     setVolume(event.target.valueAsNumber)
                    // }}
                    onChange={(e: any) => setVal(e.target.value)}
                    style={getBackgroundSize()}
                />
                <span></span>
            </label>

        </div>

    );


}

export default Slider;