import { BUY_ICECREAM } from "./icecreamtypes"

const intialState = {
    numOfIceCreams: 20
}

const icecreamReducer = (state = intialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        default:
            return state
    }
}
export default icecreamReducer