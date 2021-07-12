import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';


export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {

    setTodos(prev => [
      ...prev, 
      {
        id: Date.now().toString(),
        title,
      }
    ])
  }

  return (
    <View>
      <Navbar />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>
        <View>
          {todos.map(todo => {
            return <Text key={todo.id}>{todo.title}</Text>
          })}
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 30,

  },

  first_line: {
    fontSize: 20,
    color: '#911'
  },

  second_line: {
    color: '#119',
  }
});
