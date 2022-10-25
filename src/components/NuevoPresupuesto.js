
import {
Text,
View,
StyleSheet,
Pressable,
TextInput
} from 'react-native'

const NuevoPresupuesto = ({handleNuevoPresupuesto,setPresupuesto,presupuesto}) => {




  return (
    <View style={style.contenedor}>
       <Text style={style.label} >Definir Presupuesto</Text>
       <TextInput
         keyboardType='numeric'
         placeholder='Agrega tu presupuesto ej: $300'
         placeholderTextColor={'#7d7d7d'}
         style={style.input}
         value={presupuesto.toString()}
         onChangeText={setPresupuesto}
       />
       <Pressable
       onPress={() => handleNuevoPresupuesto(presupuesto)}
       style={style.boton}
       >
        <Text style={style.botonTexto}>Agregar Presupuesto</Text>
       </Pressable>
    </View>
  )
}

const style = StyleSheet.create({
     contenedor:{
        backgroundColor:'#fff',
        marginHorizontal:10,
        borderRadius:10,
        paddingVertical:40,
        paddingHorizontal:20,
        transform: [{translateY: 50}],
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        
        
     },
     label:{
         color:'#3b82f6',
         textAlign:'center',
         fontSize:24,
         
     },
     boton:{
        backgroundColor:'#1048a4',
        marginTop:30,
        padding:10,
        borderRadius:10


     },
     botonTexto:{
           fontSize:18,
           textTransform:'uppercase',
           fontWeight:'bold',
           textAlign:'center',
           color:'#fff'
     },
     input:{
   backgroundColor:'#f5f5f5',
   padding:10,
   borderRadius:10,
    textAlign:'center',
    marginTop:50,
    color:'#1e1e1e'
     }
})

export default NuevoPresupuesto