import { createSlice } from "@reduxjs/toolkit"

export const resultReducer = createSlice({
    name: 'result',
    initialState : {
        userId : null,
        result : [],
        category: {
            id: 'current-affairs',
            name: 'Current Affairs & General Knowledge'
        }
    },
    reducers : {
        setUserId : (state, action) => {
            state.userId = action.payload
        },
        setCategory : (state, action) => {
            state.category = action.payload
        },
        pushResultAction : (state, action) => {
            state.result.push(action.payload)
        },
        updateResultAction : (state, action) => {
            const { trace, checked } = action.payload;
            state.result.fill(checked, trace, trace + 1)
        },
        resetResultAction : () => {
            return {
                userId : null,
                result : [],
                category: {
                    id: 'current-affairs',
                    name: 'Current Affairs & General Knowledge'
                }
            }
        }
    }
})

export const { setUserId, setCategory, pushResultAction, resetResultAction, updateResultAction } = resultReducer.actions;

export default resultReducer.reducer;