import { GET_ALL_DATA, GET_SELECTED_DATA } from "../types"
import { fetchPhotos, fetchSelectedPhoto } from "../../api/photos"




export const getAllDataAction = () => {
    try{
        return async (dispatch) => {
        await fetchPhotos().then((res) => dispatch({type: GET_ALL_DATA, payload: res.data}))
    }
    } catch(err) {
        console.log(" ---propblem wiht first reauest ->", err)
    }
}

export const getSelectedDataaction = (id) => {
    try{
        return async (dispatch) => {
            await fetchSelectedPhoto(id)
                .then((res) => {
                    console.log("что приходит  ВО ВПКМЯН ВТОРОГО ЗАПОСА", res.data)
                    dispatch({type: GET_SELECTED_DATA, payload: res.data })
                })
        }
    } catch(err) {
        console.log("problem with second request -->>", err)
    }
}