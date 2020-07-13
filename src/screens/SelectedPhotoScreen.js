import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, Image } from "react-native"

import { getSelectedDataaction } from "../store/actions/getDataActions"
import { useDispatch, useSelector, dispatch } from "react-redux"
import { cleanPhoto } from "../store/actions/cleanPhotosAction"

import { Loader } from "../assets/Loader"


export const SelectedPhotoScreen = ({ navigation, route }) => {

    
    const qMark = "data:image/png;base64,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"
    


    const selectedData =useSelector(state => state.getData.oneElement)
    const dispatch = useDispatch()
    const { id } = route.params
    const {urls} = selectedData 

    
    useEffect(()=>{
        dispatch(getSelectedDataaction(id))
        return () => {
            dispatch(cleanPhoto())
        }
    }, [])


    return (
        <View style={styles.container}>
            {urls? <Image style={{ flex: 1 }} source={{ uri: (urls)? urls.full: qMark  }}  />: <Loader/>}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})