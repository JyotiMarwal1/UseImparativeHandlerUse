import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import NavigationConstants from '../Navigation/NavigationConstant'
import { moderateScale } from '../utils/ScalingUtils'

const HomeScreen = ({ navigation }: any) => {

    const onPressUseImparativeHandlerBtn = () => {
        navigation.navigate(NavigationConstants.UseImparativeExParent)
    }

    const onPressDownloadFileBtn = () => {
        navigation.navigate(NavigationConstants.DownloadFileScreen)
    }

    return (
        <View style={styles.container}>
            <LabelButtonComponent
                label="UseImparativeEx"
                onPress={onPressUseImparativeHandlerBtn}
            />
            <LabelButtonComponent
                label="Download File"
                onPress={onPressDownloadFileBtn}
            />

        </View>
    )
}

export default HomeScreen

const LabelButtonComponent = ({
    label = "",
    onPress = () => { },

}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.labelBtn}

        >
            <Text style={styles.lableTxt}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingVertical: moderateScale(10),
        paddingHorizontal: moderateScale(10)
    },
    labelBtn: {
        backgroundColor: '#e6ffe6',
        padding: 10,
        borderRadius: moderateScale(5),
        width: '100%',
        alignItems: 'center',
        marginTop: 20
    },
    lableTxt: {
        color: '#92D3ED',
        fontSize: moderateScale(18),
        fontWeight: 'bold'
    }
})