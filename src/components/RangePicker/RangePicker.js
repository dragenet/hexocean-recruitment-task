import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import PickerContext from './RangePickerContext';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 500px;
`;

const RangePicker = ({ children, onChange, value }) => {
  const [currentValue, setCurrentValue] = useState(value);

  const onItemClick = (value) => {
    setCurrentValue(value);
    onChange(value);
  };

  return (
    <Wrapper>
      <PickerContext.Provider value={{ currentValue, onItemClick }}>{children}</PickerContext.Provider>
    </Wrapper>
  );
};

RangePicker.propTypes = {
  children: PropTypes.oneOf([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  onChange: PropTypes.func,
  value: PropTypes.any,
};

RangePicker.defaultProps = {
  onChange: (value) => {},
  value: null,
};
export default RangePicker;
