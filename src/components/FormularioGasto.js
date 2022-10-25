import React, {useState , useEffect} from 'react'
import {
Text,
View,
SafeAreaView,
StyleSheet,
Pressable,
TextInput

} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import globalStyles from '../styles'


const FormularioGasto = ({setModal,handleGasto,setGasto,gasto,eliminarGasto}) => {

const [nombre,setNombre ]= useState('')
const [cantidad,setCantidad]=useState('')
const [categoria,setCategoria] = useState('')
const [id,setId] = useState('')
const [fecha,setFecha] = useState('')





useEffect( ()=>{
if(gasto?.nombre){
    setNombre(gasto.nombre)
    setCantidad(gasto.cantidad)
    setCategoria(gasto.categoria)
    setId(gasto.id)
    setFecha(gasto.fecha)
}




},[gasto])







  return (
    <SafeAreaView style={style.contenedor}>
        <View style={style.contenedorBotones}>
            <Pressable 
            onPress= {() => {
                setGasto({})
                setModal(false)}}
            style={[style.btn ,style.btnCancelar]}>
                <Text style={style.btnTexto} >Cancelar</Text>
            </Pressable>


        { !!id &&
            <Pressable 
            onLongPress={ () => eliminarGasto(id)}
            style={[style.btn , style.btnEliminar]}>
                <Text style={style.btnTexto} >Eliminar</Text>
            </Pressable>
        }


        </View>

        <View style={style.formulario}>
            <Text style={style.titulo}> {gasto?.nombre ? 'Editar Gasto' : 'Nuevo gasto'}</Text>

            <View style={style.campo}>
                <Text style={style.label}>Nombre Gasto</Text>
                <TextInput
                value={nombre}
                onChangeText={setNombre}
                style={style.input}
                placeholder='Nombre del gasto. ej: comida'
                />
            </View>
            <View style={style.campo}>
                <Text style={style.label}>Cantidad Gasto</Text>
                <TextInput
                style={style.input}
                placeholder='cantidad de gasto ej:$ 300'
                keyboardType='numeric'
                value={cantidad}
                onChangeText={setCantidad}
                
                />
            </View>
            <View style={style.campo}>
                <Text style={style.label}>Categoria gastos</Text>
                <Picker
                  selectedValue={categoria}
                  onValueChange={(value)=>{
                    setCategoria(value)
                }}
                >
                    <Picker.Item label='-- Seleccione --'value=""/>
                    <Picker.Item label='Ahorro'value="ahorro"/>
                    <Picker.Item label='Comida'value="comida"/>
                    <Picker.Item label='Casa'value="casa"/>
                    <Picker.Item label='Gastos Varios'value="gastos"/>
                    <Picker.Item label='Salud'value="salud"/>
                    <Picker.Item label='Ocio'value="ocio"/>
                    <Picker.Item label='Suscripciones'value="suscripciones"/>
                </Picker>
            </View >
            
            <Pressable
            onPress={() => handleGasto({nombre ,cantidad ,categoria , id , fecha})}
            style={style.submitBtn}>
                <Text style={style.submitBtnTexto}>{gasto?.nombre ? 'Guardar cambio gastos' : 'Nuevo gasto'}
                </Text>
            </Pressable>
   

        </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
contenedor:{
    backgroundColor:'#1e40af',
    flex:1,


},
contenedorBotones:{
flexDirection:'row',
justifyContent:'space-between'
},
btn:{
 padding:10,
 marginTop:30,
 marginHorizontal:10,
 width:'40%',
 flex:1
},
btnEliminar:{
   backgroundColor:'red'
},
btnTexto:{

},
formulario:{
   ...globalStyles.contenedor
},
titulo:{
    textAlign:'center',
    fontSize:28,
    marginBottom:20,
    color:'#64748b'
},
campo:{
  marginVertical:10
},
label:{
  color:'#64748b',
  fontSize:16,
  fontWeight:'bold',
  textTransform:'uppercase'
},
input:{
    borderRadius:10,
    marginTop:10,
    padding:10,
    backgroundColor:'#f5f5f5'
},
submitBtn:{
    backgroundColor:'#3b82f6',
    padding:10,
    marginTop:20
},
submitBtnTexto:{
    textAlign:'center',
    color:'#fff',
    textTransform:'uppercase',
    fontSize:18

},
btnCancelar:{
backgroundColor:'#db2777',

},
btnTexto:{
  textTransform:'uppercase',
  fontWeight:'bold',
  color:'#fff',
  textAlign:'center'
}

})

export default FormularioGasto