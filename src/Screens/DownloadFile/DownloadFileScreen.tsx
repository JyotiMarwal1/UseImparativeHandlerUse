import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';
import { moderateScale } from '../../utils/ScalingUtils';

const DownloadFileScreen = () => {

    const fileUrl = 'https://www.techup.co.in/wp-content/uploads/2020/01/techup_logo_72-scaled.jpg';

    const onPressDownloadBtn = () => {
        const pdfUrl = fileUrl
        console.log("pdfUrl", pdfUrl)
        const { dirs } = ReactNativeBlobUtil.fs;
        const dirToSave = Platform.OS == 'ios' ? dirs.DocumentDir : dirs.DownloadDir;
        const path = `${dirToSave}/JyotiSharingApp_${new Date().getTime()}.pdf`;
        const androidOptions = {
            fileCache: true,
            addAndroidDownloads: {
                useDownloadManager: true,
                notification: true,
                description: 'Downloading file',
                path: path,
                mediaScannable: true,
            },
        };
        if (Platform.OS == 'ios') {
            ReactNativeBlobUtil.config({ path: path })
                .fetch('GET', pdfUrl, {})
                .progress({ interval: 250 }, (received, total) => { })
                .then(res => {
                    ReactNativeBlobUtil.fs.writeFile(res.path(), res.data, 'base64');
                    ReactNativeBlobUtil.ios.previewDocument(res.path());
                })
                .catch(e => {
                    console.log('eroor', e);
                });
        } else {
            ReactNativeBlobUtil.config(androidOptions)
                .fetch('GET', pdfUrl)
                .then(async (res) => {
                    await ReactNativeBlobUtil.MediaCollection.copyToMediaStore({
                        name: `kaze_${new Date().getTime()}`, // name of the file
                        parentFolder: '', // subdirectory in the Media Store, e.g. HawkIntech/Files to create a folder HawkIntech with a subfolder Files and save the image within this folder
                        mimeType: 'application/pdf' // MIME type of the file
                    },
                        'Download', // Media Collection to store the file in ("Audio" | "Image" | "Video" | "Download")
                        res.path() // Path to the file being copied in the apps own storage
                    );
                });
        }
    }

    return (
        <View style={styles.container}>
            <LabelButtonComponent
                label="Download Now"
                onPress={onPressDownloadBtn}
            />
        </View>
    )
}

export default DownloadFileScreen


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
        paddingHorizontal: moderateScale(10),
        justifyContent: 'center'
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