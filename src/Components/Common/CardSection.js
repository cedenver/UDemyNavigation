import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        // burdaki style'a ek olarak cardSection kullanıldığı yerdeki style elementleri ile
        // ezilebilmesi için props.style kullandık.
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection };