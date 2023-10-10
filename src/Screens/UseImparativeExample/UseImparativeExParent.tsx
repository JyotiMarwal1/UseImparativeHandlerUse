import React, { useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import UseImparativeExChild from './UseImparativeExChild';



const UseImparativeExParent = () => {
    const childRef = useRef<{ onPressIncrementBtn: () => void } | null>(null);

    const onPressParentBtn = () => {
        console.log("****Ref", childRef.current)
        childRef?.current?.onPressIncrementBtn();
    }

    return (
        <View>
            <Text>Parent</Text>
            <Text>In parent component we get access to child component function</Text>
            <UseImparativeExChild
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

export default UseImparativeExParent

const styles = StyleSheet.create({})