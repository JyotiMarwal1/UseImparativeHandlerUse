import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Child = forwardRef((props, ref) => {
    const [count, setCount] = useState(0);

    const onPressIncrementBtn = () => {
        setCount((prevCount) => prevCount + 1); // Use functional update to prevent infinite updates
    };

    // Use useImperativeHandle to expose the function
    useImperativeHandle(ref, () => ({
        onPressIncrementBtn,
    }));

    return (
        <View>
            <Text>Child {count}</Text>
            <TouchableOpacity
                onPress={onPressIncrementBtn}
                style={{
                    backgroundColor: '#000',
                    padding: 10,
                    borderRadius: 5,
                    width: '100%',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}
                >
                    Child Button
                </Text>
            </TouchableOpacity>
        </View>
    );
});

export default Child;