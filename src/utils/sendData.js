import axios from 'axios';
import consts from '../utils/consts';

const prepareDataToSend = (data) => {
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

export const makeApiRequest = async (data, formik) => {
  return await axios
    .post(consts.API_ENDPOINT, prepareDataToSend(data))
    .then((res) => {
      console.log(res);
      return consts.SUCCESSFUL;
    })
    .catch((err) => {
      console.log(err.response);
      formik.setErrors(err.response.data);
      return consts.FAILED;
    });
};
