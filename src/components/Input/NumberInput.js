import { useState } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

const NumberInput = ({ className, children, name, type, value, onChange, step, min, max }) => {
  const [innerValue, setInnerValue] = useState(value);

  const onInputChange = (e) => {
    const newValue = e.target.value;
    let newInnerValue;
    if (newValue < min) {
      newInnerValue = min;
    } else if (newValue > max) {
      newInnerValue = max;
    } else {
      newInnerValue = newValue;
    }
    setInnerValue(newInnerValue);
    onChange(newInnerValue);
  };

  return (
    <Input type={type} id={name} name={name} value={innerValue} onChange={onInputChange} step={step} min={min} max={max}>
      {children}
    </Input>
  );
};

NumberInput.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onChange: PropTypes.func,
  step: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
};

NumberInput.defaultProps = {
  children: null,
  onChange: () => {},
};

export default NumberInput;
