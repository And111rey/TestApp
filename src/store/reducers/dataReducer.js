import { GET_ALL_DATA, GET_SELECTED_DATA } from "../types"

const initialState = {
    allData: [],
    oneElement: {}
}


export const dataReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_ALL_DATA:
            return {...state, oneElement: {}, allData: action.payload}
        case GET_SELECTED_DATA:
            return {...state, oneElement: action.payload}
        // case CLAEN_ONE_ELEMENT:
        //     return {...state, oneElement: {}}
                
    }
    return state
}
