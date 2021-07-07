import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/colors';

import GenericInput from './Input';

const Wrapper = styled.div`
  width: 120px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

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
  display: block;
  margin-left: 8px;
  color: ${colors.labelColor};
`;

const TimeInput = ({ className, props, children, name, type }) => {
  return (
    <Wrapper className={className}>
      <StyledLabel for={name}>{children}</StyledLabel>
      <StyledInput id={name} name={name} type="time" placeholder=" " step="2" />
    </Wrapper>
  );
};

TimeInput.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

TimeInput.defaultProps = {
  children: null,
};

export default TimeInput;
