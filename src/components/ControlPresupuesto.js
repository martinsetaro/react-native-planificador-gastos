import React, {useState,useEffect} from 'react'
import {
Text,
View,
Image,
StyleSheet
} from 'react-native'
import globalStyles from '../styles'
import {formatearCantidad} from '../Helpers/index'
import CircularProgress from 'react-native-circular-progress-indicator'

const ControlPresupuesto = ({presupuesto,gastos}) => {

      const [disponible,setDisponible]= useState(0)
      const [gastado,setGastado]= useState(0)
      const [porcentaje,setPorcentaje]=useState(0) 


      useEffect( () => {

      const totalGastado = gastos.reduce( (total ,gasto) => Number(gasto.cantidad) + total , 0)
      setGastado(totalGastado)
     
      const totalDisponible = presupuesto - totalGastado
      setDisponible(totalDisponible)


      const nuevoPorcentaje = (
        ((presupuesto - totalDisponible)/ presupuesto) * 100
      )
       setPorcentaje(nuevoPorcentaje)
 
      },[gastos])









  return (

    <View style={style.contenedor}>
      <View style={style.centrarGrafica}>
        <CircularProgress //stylo a la barra de porcentaje
        value={porcentaje}
        duration={1000}
        radius={150}
        valueSuffix={'%'}
        title='Gastado'
        inActiveStrokeColor='#f5f5f5'
        inActiveStrokeWidth={20}
        activeStrokeColor='#3b82f6'
        activeStrokeWidth={20}
        titleStyle={{ fontWeight:'bold' , fontSize:30}}
        titleColor='#64748b'

        
        />
      </View>

      <View style={style.contenedorTexto}>
         
            <Text style={style.valor}>
              <Text style={style.label}>Presupuesto:</Text>
                  {formatearCantidad(presupuesto)}
            </Text>
            
            <Text style={style.valor}>
              <Text style={style.label}>Disponible:</Text>
                  {formatearCantidad(disponible)}
            </Text>
            <Text style={style.valor}>
              <Text style={style.label}>Gastado:</Text>
                  {formatearCantidad(gastado)}
            </Text>
      </View>
    </View>
    
  )
}

const style = StyleSheet.create({
        contenedor:{
          ...globalStyles.contenedor
        },
        centrarGrafica:{
          alignItems:'center'
        },
        imagen:{
          width:250,
          height:250
        },
        contenedorTexto:{
  marginTop:50
        },
        valor:{
          fontSize:24,
          textAlign:'center',
          marginBottom:10

        },
        label:{
          fontWeight:'700',
          color:'#3b82f6'
        }
})


export default ControlPresupuesto