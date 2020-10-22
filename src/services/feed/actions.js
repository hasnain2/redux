import { FEED } from "../../constants/types"
import { api } from "../../utils"

export const getInstaFeed = () => {
    return (dispatch) => {
        let data = {
            method: "get",
            url: `https://www.instagram.com/it.x_yasir/?__a=1`,
        }
        return api(data)
            .then((res) => {
                dispatch({
                    type: "INSTA_FEED",
                    payload: res ? res : [],
                })
                return res
            })
            .catch((err) => {
                throw err
            })
    }
}
export const getCounter = () => {
    return (dispatch) => {
        dispatch({
            type: "INSTA_INC",
            payload: { res: 1 },
        })
    }
}