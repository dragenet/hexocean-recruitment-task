import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import PickerContext from './RangePickerContext';
import colors from '../../utils/colors';

const Wrapper = styled.div`
  margin: 20px 0;
`;
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Label = styled.div`
  margin-left: 8px;
  margin-bottom: 3px;
  color: ${colors.labelColor};
`;

const RangePicker = ({ children, onChange, value, label }) => {
  const [currentValue, setCurrentValue] = useState(value);

  const onItemClick = (value) => {
    setCurrentValue(value);
    onChange(value);
  };

  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <InnerWrapper>
        <PickerContext.Provider value={{ currentValue, onItemClick }}>{children}</PickerContext.Provider>
      </InnerWrapper>
    </Wrapper>
  );
};

RangePicker.propTypes = {
  children: PropTypes.oneOf([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  onChange: PropTypes.func,
  value: PropTypes.any,
  label: PropTypes.string,
};

RangePicker.defaultProps = {
  onChange: (value) => {},
  value: null,
  label: null,
};
export default RangePicker;
