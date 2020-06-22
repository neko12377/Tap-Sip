export const addItem = (
  name, price, numbers, customer,
  detail, isPay,
) => ({
  type: 'AddItem',
  name,
  price,
  numbers,
  customer,
  detail,
  isPay,
});

export const delAllItem = () => ({
  type: 'DelAllItem',
});

export const confirmOrders = () => ({
  type: 'ConfirmOrders',
});

export const annotateOfItem = (annotate) => ({
  type: 'Annotate',
  annotate,
});

export const temporariness = (name, price) => ({
  type: 'Temporariness',
  name,
  price,
});

export const itemNumbers = (numbers) => ({
  type: 'ItemNumbers',
  numbers,
});

export const customerName = (customer) => ({
  type: 'CustomerName',
  customer,
});

export const customizedDetail = (detail) => ({
  type: 'CustomizedDetail',
  detail,
});

export const pay = (isPay) => ({
  type: 'IsPay',
  isPay,
});

export const deleteThisItem = (itemIndex) => ({
  type: 'DeleteThisItem',
  itemIndex,
});
