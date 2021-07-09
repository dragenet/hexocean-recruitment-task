import consts from '../utils/consts';

export const prepareDataToSend = (data) => {
  const { name, preparation_time, category, no_of_slices, diameter, spiciness, slices_of_bread } = data;

  const preparedData = {
    name,
    preparation_time,
    type: category,
  };

  if (category === consts.PIZZA) {
    preparedData.no_of_slices = no_of_slices;
    preparedData.diameter = diameter;
  }

  if (category === consts.SOUP) {
    preparedData.spiciness = spiciness;
  }

  if (category === consts.PIZZA) {
    preparedData.slices_of_bread = slices_of_bread;
  }

  return preparedData;
};
