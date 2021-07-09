import consts from '../utils/consts';

const validators = (values) => {
  const errors = {};
  if (!values.name) errors.name = 'Required';

  if (!values.preparation_time || values.preparation_time === '00:00:00') errors.preparation_time = 'Required';

  if (!values.category) errors.category = 'Required';

  if (values.category === consts.PIZZA) {
    if (!values.no_of_slices) errors.no_of_slices = 'Required';
    if (!values.diameter) errors.diameter = 'Required';
  }

  if (values.category === consts.SOUP) {
    if (!values.spiciness) errors.spiciness = 'Required';
  }

  if (values.category === consts.SANDWICH) {
    if (!values.slices_of_bread) errors.slices_of_bread = 'Required';
  }
  return errors;
};

export default validators;
