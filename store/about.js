export const setName = (name) => ({
  type: 'SET_NAME',
  payload: name,
});

export const setDescription = (description) => ({
  type: 'SET_DESCRIPTION',
  payload: description,
});

export const setImage = (index, image) => ({
  type: 'SET_IMAGE',
  index,
  payload: image,
});

export const setPrice = (price) => ({
  type: 'SET_PRICE',
  payload: price,
});

export const addBenefit = () => ({
  type: 'ADD_BENEFIT',
});

export const removeBenefit = (index) => ({
  type: 'REMOVE_BENEFIT',
  index,
});

export const setBenefit = (index, benefit) => ({
  type: 'SET_BENEFIT',
  index,
  payload: benefit,
});
