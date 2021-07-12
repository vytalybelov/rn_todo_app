import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


export const Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>Задачи</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 64,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#373',
        paddingBottom: 12,

    },
    text: {
        fontSize: 30,
        color: '#dde',
    },
})
