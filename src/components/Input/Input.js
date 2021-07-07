import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/colors';

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid ${colors.secondary};
  border-radius: 15px;
  outline: none;
  &:focus {
    border-color: ${colors.primary};
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  margin-left: 8px;
  left: 0;
  top: 0;
  transform: translate(10px, 50%);
  color: ${colors.labelColor};
  transition: transform 0.3s ease-in-out;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 20px;
  ${StyledInput}:focus + ${StyledLabel},
  ${StyledInput}:not(:placeholder-shown) + ${StyledLabel} {
    transform: translateY(-100%) scale(0.9);
  }
`;

const Input = ({ className, children, name, type, value, onChange, step, min, max }) => {
  return (
    <Wrapper className={className}>
      <StyledInput
        type={type}
        id={name}
        name={name}
        placeholder=" "
        value={value}
        onChange={onChange}
        step={step?.toString()}
        min={min?.toString()}
        max={max?.toString()}
      />
      <StyledLabel for={name}>{children}</StyledLabel>
    </Wrapper>
  );
};

Input.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onChange: PropTypes.func,
  step: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
};

Input.defaultProps = {
  type: 'text',
  children: null,
  onChange: () => {},
};

export default Input;
