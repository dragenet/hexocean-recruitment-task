import { useReducer, useState } from 'react';
import styled from 'styled-components';
import Input from '../components/Input/Input';
import TimeInput from '../components/Input/TimeInput';
import RangePicker from '../components/RangePicker/RangePicker';
import RangePickerItem from '../components/RangePicker/RangePickerItem';
import NumberInput from '../components/Input/NumberInput';
import Button from '../components/Button';
import { useFormik } from 'formik';

import validators from '../utils/validators';
import consts from '../utils/consts';

const categories = [consts.PIZZA, consts.SOUP, consts.SANDWICH];

const Wrapper = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
`;
const StyledButton = styled(Button)`
  align-self: center;
`;

const initialValues = {
  name: null,
  preparation_time: '00:00:00',
  category: null,
  no_of_slices: 1,
  diameter: 30,
  spiciness: null,
  slices_of_bread: 1,
};

const FormView = () => {
  const [category, setCategory] = useState(null);

  const formik = useFormik({
    initialValues,
    validate: validators,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Wrapper onSubmit={formik.handleSubmit}>
      {console.log(formik.errors)}
      <Input name="name" value={formik.values.name} onChange={formik.handleChange} hasError={formik.errors.name}>
        Name
      </Input>
      <TimeInput
        name="preparation_time"
        value={formik.values.preparation_time}
        onChange={formik.handleChange}
        hasError={formik.errors.preparation_time}
      >
        Preparation time
      </TimeInput>
      <RangePicker
        name="category"
        value={formik.values.category}
        onChange={(value) => formik.handleChange({ target: { name: 'category', value } })}
        hasError={formik.errors.category}
      >
        {categories.map((item) => (
          <RangePickerItem key={item} value={item}>
            {item}
          </RangePickerItem>
        ))}
      </RangePicker>
      {formik.values.category === consts.PIZZA && (
        <>
          <NumberInput
            name="no_of_slices"
            value={formik.values.no_of_slices}
            onChange={formik.handleChange}
            min={1}
            max={15}
            hasError={formik.errors.no_of_slices}
          >
            Number of slices
          </NumberInput>
          <NumberInput
            name="diameter"
            value={formik.values.diameter}
            onChange={formik.handleChange}
            min={30}
            max={100}
            step={0.1}
            hasError={formik.errors.diameter}
          >
            Diameter
          </NumberInput>
        </>
      )}
      {formik.values.category === consts.SOUP && (
        <RangePicker
          name="spiciness"
          label="Spiciness"
          value={formik.values.spiciness}
          onChange={(value) => formik.handleChange({ target: { name: 'spiciness', value } })}
          hasError={formik.errors.spiciness}
        >
          {[...Array(10).keys()].map((item) => (
            <RangePickerItem value={item + 1}> {item + 1}</RangePickerItem>
          ))}
        </RangePicker>
      )}
      {formik.values.category === consts.SANDWICH && (
        <NumberInput
          name="slices_of_bread"
          value={formik.values.slices_of_bread}
          onChange={formik.handleChange}
          min={1}
          max={30}
          hasError={formik.errors.slices_of_bread}
        >
          Slices of bread
        </NumberInput>
      )}

      <StyledButton type="submit">SUBMIT</StyledButton>
    </Wrapper>
  );
};

export default FormView;
