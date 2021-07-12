import React from 'react'
import {View, StyleSheet, TextInput, Button} from 'react-native'


export const AddTodo = ({ onSubmit }) => {

    const pressHandler = () => {
        onSubmit('Test todo')
    }

    return (
        <View style={styles.block}>
            <TextInput style={styles.input}/>
            <Button title='Добавить' style={styles.button} onPress={pressHandler}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    input: {
        width: '70%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#aaa',
        padding: 10,
    },
  
    button: {
        
    },
})