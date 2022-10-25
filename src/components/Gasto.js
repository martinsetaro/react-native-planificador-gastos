import React from 'react'
import {
Text,
View,
StyleSheet,
Image,
Pressable
} from 'react-native'
import globalStyles from '../styles'
import { formatearCantidad , formatearFecha } from '../Helpers'

const diccionarioIconos = {


  ahorro: require('../img/icono_ahorro.png'),
  comida: require('../img/icono_comida.png'),
  casa: require('../img/icono_casa.png'),
  gastos: require('../img/icono_gastos.png'),
  salud: require('../img/icono_salud.png'),
  ocio: require('../img/icono_ocio.png'),
  suscripciones: require('../img/icono_suscripciones.png')
 

}

const Gasto = ({gasto,setModal,setGasto}) => {

  const {nombre, categoria,cantidad,fecha} = gasto

 const handleAcciones = () =>{
  setModal(true)
  setGasto(gasto)
 }





  return (

<Pressable
onLongPress={ handleAcciones}
>
   <View style={style.contenedor}>

        <View style={style.contenido}>

          <View style={style.contenedorImagen}>

            <Image
             style={style.imagen}
             source = {diccionarioIconos[categoria]}/>

              <View style={style.contenedorTexto}>
                  <Text style={style.categoria}>{categoria}</Text>
                  <Text style={style.nombreGasto}>{nombre}</Text>
                  <Text style={style.textoFecha}>{formatearFecha(fecha)}</Text>
              </View>
          </View>
                  <Text style={style.cantidad}>{formatearCantidad(cantidad)}</Text>

        </View>
    
   </View>
  </Pressable> 
  )
}

const style = StyleSheet.create({
  contenedor:{
     ...globalStyles.contenedor,
     marginBottom:10
     
  },
  contenido:{
    color:'#1e1e1e',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  contenedorImagen:{
      flexDirection:'row',
      alignItems:'center',
      flex:1
  },
  contenedorTexto:{
     flex:1
  },
  imagen:{
      width:80,
      height:80,
      marginRight:20
  },
  categoria:{
  color:'#94a3b8',
  fontWeight:'bold',
  textTransform:'uppercase',
  marginBottom:5,
  fontSize:16
  },
  nombreGasto:{
     fontSize:18,
     color:'#64748b',
     marginBottom:5
  },
  cantidad:{
    fontSize:24,
    fontWeight:'700'
  },
  textoFecha:{
    fontWeight:'bold',
    color:'#db2777',
    fontSize:16
  }
})

export default Gasto