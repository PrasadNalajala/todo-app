import { useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"

const Home=()=>{
  const [task,setTask]=useState('')
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Todo App</Text>
      <View>
      <TextInput
          style={styles.input}
          value={task}
          onChangeText={setTask}
          placeholder="Enter a task"
        />
      </View>
    </View>
  )
}
export default Home

const styles=StyleSheet.create({
  container:{backgroundColor:'#fff',flex:1,paddingTop:28},
  text: {
    fontSize: 25,
    color: '#000',
    fontWeight:'bold',
    padding:10
  },
  input: { flex: 1, borderColor: '#aaa',padding:20, borderWidth: 1, borderRadius: 5,  },
})