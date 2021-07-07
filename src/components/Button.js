import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../utils/colors';

const Button = styled.button`
  background-color: ${colors.primary};
  color: ${colors.textColor};
  padding: 15px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
`;

export default Button;
