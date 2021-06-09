import ShopActionTypes from './shops.types';

const INITIA_STATE = {
    collections: null
}

const shopReducer = (state = INITIA_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;