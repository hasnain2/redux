import { FEED } from "../../constants/types"

const initState = {
    feed: [],
    counter: false,
}

const InstaReducer = (state = initState, action) => {
    const { type, payload } = action

    switch (type) {
        case FEED.INSTA_FEED:
            return {
                ...state,
                feed: payload,
            }
        case "INSTA_INC":
            return {
                ...state,
                counter: true
            }

        default:
            return state
    }
}

export default InstaReducer