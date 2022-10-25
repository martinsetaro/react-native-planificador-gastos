import React, { useEffect } from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import globalStyles from '../styles'




const Filtro = ({
    setFiltro,
    filtro,
    gastos,
    setGastosFiltrados
}) => {

    useEffect(()=>{
    if(filtro === ''){
    setGastosFiltrados([])
    }else {
      const gastosFiltrados = gastos.filter ( gasto => gasto.categoria === filtro)
      setGastosFiltrados(gastosFiltrados)
    }
    

    },[filtro])




  return(
    <View style={style.contenedor}>
       <Text style={style.label}>Filtrar gastos</Text> 
       <Picker
       selectedValue={filtro}
       onValueChange={(valor) =>{
        setFiltro(valor)
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
    </View>
    
  )
}

const style=StyleSheet.create({
    contenedor:{
    ...globalStyles.contenedor,
    transform:[{translateY:0}],
    marginTop:80
    },
    label:{
  fontSize:22,
  fontWeight:'900',
  color:'#64748b'
    }
})

export default Filtro