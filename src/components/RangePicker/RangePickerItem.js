import { useContext } from 'react';
import styled from 'styled-components';
import colors from '../../utils/colors';

import PickerContext from './RangePickerContext';

const StyledInput = styled.input`
  appearance: none;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 12px;
  min-width: 20px;
  border-radius: 15px;
  cursor: pointer;
  border: 2px solid ${colors.primary};
  background-color: ${(props) => (props.active ? colors.primary : colors.background)};
  color: ${colors.textColor};
`;

const RangePickerItem = ({ children, value }) => {
  const { currentValue, onItemClick } = useContext(PickerContext);
  return (
    <Item active={value === currentValue} onClick={() => onItemClick(value)}>
      {children}
    </Item>
  );
};

export default RangePickerItem;
