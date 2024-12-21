const initialState = {
  name: '',
  description: '',
  images: [null, null, null],
  price: 0,
  benefits: [''],
};

const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_DESCRIPTION':
      return { ...state, description: action.payload };
    case 'SET_IMAGE':
      const newImages = [...state.images];
      newImages[action.index] = action.payload;
      return { ...state, images: newImages };
    case 'SET_PRICE':
      return { ...state, price: action.payload };
    case 'ADD_BENEFIT':
      return { ...state, benefits: [...state.benefits, ''] };
    case 'REMOVE_BENEFIT':
      const updatedBenefits = state.benefits.filter((_, i) => i !== action.index);
      return { ...state, benefits: updatedBenefits };
    case 'SET_BENEFIT':
      const benefits = [...state.benefits];
      benefits[action.index] = action.payload;
      return { ...state, benefits };
    default:
      return state;
  }
};

export default aboutReducer;
