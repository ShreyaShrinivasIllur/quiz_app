import { postServerData } from '../helper/helper'
import * as Action from '../redux/result_reducer'

export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }
}
export const updateResult = (index) => async (dispatch) => {
    try {
        dispatch(Action.updateResultAction(index));
    } catch (error) {
        console.log(error)
    }
}

/** insert user data */
export const usePublishResult = (resultData) => {
    const { result, username, category } = resultData;
    (async () => {
        try {
            if((Array.isArray(result) && result.length === 0) || !username) throw new Error("Couldn't get Result");
            const dataToSend = {
                ...resultData,
                category: category?.id || 'current-affairs',
                categoryName: category?.name || 'Current Affairs & General Knowledge'
            };
            await postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, dataToSend, data => data)
        } catch (error) {
            console.log(error)
        }
    })();
}