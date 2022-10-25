import {
Text,
View,
StyleSheet,
SafeAreaView
}from 'react-native'

const Header = () => {
  return (
    <SafeAreaView style={style.header}>
      <Text style={style.texto}>Planificador de Gastos</Text>  
    </SafeAreaView>
    
  )
}

const style = StyleSheet.create({
       header:{
          backgroundColor:'#3b82f6',
          

       },
       texto:{
          textAlign:'center',
          color:'#fff',
          fontSize:30,
          textTransform:'uppercase',
          fontWeight:'bold',
          paddingTop:20,
       }
})

export default Header