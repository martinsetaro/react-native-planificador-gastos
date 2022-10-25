
import React , {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
  Pressable,
  Image,
  Modal
} from 'react-native';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';
import { generarId } from './src/Helpers';
import ListadoGastos from './src/components/ListadoGastos';
import Filtro from './src/components/Filtro';






const App = () => {

  const [isValidPresupuesto,setIsValidPresupuesto] = useState(false)
  const[presupuesto,setPresupuesto] = useState(0)
  const [gastos,setGastos]= useState([])
  const [modal,setModal] = useState(false)
  const [gasto,setGasto] = useState({})
  const [filtro,setFiltro] = useState('')
  const [gastosFiltrados,setGastosFiltrados]= useState([])











  const handleNuevoPresupuesto = (presupuesto) =>{
       if(Number(presupuesto) > 0){
         setIsValidPresupuesto(true)
       }else {
        Alert.alert('Error','El presupuesto no puede ser menor o igual a cero')
       }
      }

  const handleGasto = gasto => {
      if([gasto.nombre , gasto.categoria, gasto.cantidad].includes('')){
        Alert.alert(
          'Error',
          'Todos los campos son obligatorios'
        )
        return
      }
      if(gasto.id){
        
         const gastosActualizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState)
         setGastos(gastosActualizados)

      }else{
          gasto.id = generarId()
          gasto.fecha = Date.now()
          setGastos([...gastos,gasto])


      }

      
      setModal(false)
 
      }


      const eliminarGasto = id => {
         Alert.alert('Deseas eliminar este gasto?','Un gasto eliminado no se puede borrar',[
          {text:'No', style: 'cancel'},
          {text: 'Si , eliminar' , onPress : () =>{
             const gastosActualizados = gastos.filter( gastoState => gastoState.id !== id)
             setGastos(gastosActualizados)
             setModal(false)
             setGasto({})
          }}
         ])
      }
     


  return (
    
    
  <View style={style.contenedor}>

    <ScrollView>
      <View style={style.header}>
           <Header/>
  
          {isValidPresupuesto ? 
           <ControlPresupuesto
            presupuesto={presupuesto}
            gastos={gastos}
             /> : 
            <NuevoPresupuesto
            setPresupuesto={setPresupuesto}
            presupuesto={presupuesto}
            handleNuevoPresupuesto={handleNuevoPresupuesto}
            /> }
      </View>

    
       {isValidPresupuesto && (

        <>
        
        <Filtro
        setFiltro={setFiltro}
        filtro={filtro}
        gastos={gastos}
        setGastosFiltrados={setGastosFiltrados}
        />
        
        
        <ListadoGastos
        gastos={gastos}
        setModal={setModal}
        setGasto={setGasto}
        filtro={filtro}
        gastosFiltrados={gastosFiltrados}
        />
        </>
         
      ) } 
    
      
      
      
      

      {modal && (
        <Modal
         animationType='slide'
         visible={modal}
        >
       <FormularioGasto
       setModal={setModal}
       handleGasto={handleGasto}
       setGastos={setGastos}
       gasto={gasto}
       setGasto={setGasto}
       eliminarGasto={eliminarGasto}
       />

        </Modal>
      ) }
      </ScrollView> 

{isValidPresupuesto && (
      <Pressable
        style={style.pressable}
         onPress={() => setModal(true)}
      >
        <Image
           style={style.imagen} 
           source={require('./src/img/nuevo-gasto.png')} />
      </Pressable>
     )}

      
   
    </View>
  );
};

const style = StyleSheet.create({
  contenedor:{
       flex:1,
       backgroundColor:'#f5f5f5'
  },
  header:{
   
    backgroundColor:'#3b82f6',
    minHeight:450
  },
  imagen:{
    width:60,
    height:60,
    
    
  },
  pressable:{
    width:60,
    height:60,
    position:'absolute',
    bottom:10,
    left:20
  }
})


export default App;
