import axios from 'axios';
import consts from '../utils/consts';

const prepareDataToSend = (data) => {
  const { name, preparation_time, category, no_of_slices, diameter, spiciness_scale, slices_of_bread } = data;

  const preparedData = {
    name,
    preparation_time,
    type: category,
  };

  if (category === consts.PIZZA) {
    preparedData.no_of_slices = parseInt(no_of_slices, 10);
    preparedData.diameter = parseFloat(diameter);
  }

  if (category === consts.SOUP) {
    preparedData.spiciness_scale = parseInt(spiciness_scale, 10);
  }

  if (category === consts.SANDWICH) {
    preparedData.slices_of_bread = parseInt(slices_of_bread, 10);
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
