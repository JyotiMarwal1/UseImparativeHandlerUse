import React, { useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Child from './Child';


const Parent = () => {
    const childRef = useRef<{ onPressIncrementBtn: () => void } | null>(null);

    const onPressParentBtn = () => {
        console.log("Parent Button Pressed")
        childRef?.current?.onPressIncrementBtn();
    }

    console.log("****Ref", childRef.current)

    return (
        <View>
            <Text>Parent</Text>
            <Child
                ref={childRef}

            />

            <TouchableOpacity
                onPress={onPressParentBtn}

                style={{
                    backgroundColor: 'green',
                    padding: 10,
                    borderRadius: 5,
                    width: '100%',
                    alignItems: 'center',
                    marginTop: 20
                }}
            >
                <Text
                    style={{

                        color: '#fff',
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}
                >Parent Button</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Parent

const styles = StyleSheet.create({})