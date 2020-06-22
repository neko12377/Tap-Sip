const initState = [{
  index: 0,
  confirmed: false,
  temp: ['', ''],
  numbers: 1,
  customer: '',
  detail: '',
  isPay: '',
}];

const shoppingList = (state = initState, actions) => {
  let stateCopy = { ...state };
  switch (actions.type) {
    case 'AddItem':
      stateCopy = actions.numbers > 0
        ? [
          { ...state[0], confirmed: false },
          ...state.slice(1),
          {
            index: state.slice(-1)[0].index + 1,
            item: actions.name,
            price: actions.price,
            numbers: actions.numbers,
            customer: actions.customer,
            detail: actions.detail,
            isPay: actions.isPay,
          },
        ]
        : state;
      return stateCopy;
    case 'DelAllItem':
      stateCopy = state.slice(0, -1)[0]
        ? initState
        : state;
      return stateCopy;
    case 'ConfirmOrders':
      return state.length > 0 && [{ ...state[0], confirmed: true }, ...state.slice(1)];
    case 'Temporariness':
      return [
        {
          ...state[0],
          temp: [
            actions.name,
            actions.price,
          ],
        }, ...state.slice(1),
      ];
    case 'ItemNumbers':
      return [{ ...state[0], numbers: actions.numbers }, ...state.slice(1)];
    case 'CustomerName':
      return [
        {
          ...state[0], customer: actions.customer,
        }, ...state.slice(1),
      ];
    case 'CustomizedDetail':
      return [
        {
          ...state[0], detail: actions.detail,
        }, ...state.slice(1),
      ];
    case 'IsPay':
      return [
        {
          ...state[0], isPay: actions.isPay,
        }, ...state.slice(1),
      ];
    case 'DeleteThisItem':
      return [
        ...state.slice(0, actions.itemIndex),
        ...state.slice(actions.itemIndex + 1),
      ];
    default:
      return state;
  }
};

export default shoppingList;
