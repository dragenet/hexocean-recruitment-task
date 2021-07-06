import React from 'react';
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
  width: 350px;
  margin-top: 30px;
  margin-bottom: 10px;
  ${StyledInput}:focus + ${StyledLabel},
  ${StyledInput}:not(:placeholder-shown) + ${StyledLabel} {
    transform: translateY(-100%) scale(0.9);
  }
`;

const Input = ({ className, children, name, type }) => {
  return (
    <Wrapper className={className}>
      <StyledInput id={name} name={name} placeholder=" " />
      <StyledLabel for={name}>{children}</StyledLabel>
    </Wrapper>
  );
};

Input.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

Input.defaultProps = {
  children: null,
};

export default Input;
