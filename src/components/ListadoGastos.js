import React from 'react'
import {
Text,
View,
StyleSheet
} from 'react-native'
import Gasto from './Gasto'

const ListadoGastos = ({gastos,setModal,setGasto,filtro,gastosFiltrados}) => {







  return (
    <View style={style.contenedor}>
        <Text style={style.Gastos}>Gastos</Text>


      {filtro ? gastosFiltrados.map( gasto => (
        <Gasto
        key={gasto.id}
        gasto={gasto}
        setModal={setModal}
        setGasto={setGasto}
        />
      )) : gastos.map(gasto => (
        <Gasto
          key={gasto.id}
          gasto={gasto}
          setModal={setModal}
          setGasto={setGasto}
          />
      )
      )}

      {gastos.length === 0 ||(gastosFiltrados.length === 0 && !!filtro) && (
        <Text style={style.noGastos}>No hay gastos de esa categoria</Text>
      )}



       
    </View>
  )
}

const style=StyleSheet.create({
    texto:{
        fontSize:35,
        color:'#64748b'
    },
    contenedor:{
      marginTop:30,
      marginBottom:100,
      height:'100%'
    },
    noGastos:{
      fontSize:20,
      textAlign:'center'
    },
    Gastos:{
      fontSize:30,
      textAlign:'center',
      fontWeight:'bold'
    }
        
})

export default ListadoGastos