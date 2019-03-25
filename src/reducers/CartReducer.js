const initialState = {
    cartInfo: null
};

const ProductsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_CART_ITEMS':
            const cartInfo = action.cartInfo;
            return Object.assign({}, state, {
                cartInfo: cartInfo
            });

        case 'APPLY_PROMO':
            const promoCode = action.promoCode;

            if(promoCode === 'DISCOUNT'){
                return {
                    ...state,
                    cartInfo: {
                        ...state.cartInfo,
                        total: state.cartInfo.total - state.cartInfo.total * 0.1
                    }
                };
            }
            return state;

        default:
            return state;
    }
};

export default ProductsReducer;
