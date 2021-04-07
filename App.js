import React from 'react';
import { LogBox } from 'react-native'; //SOLUCION AL WARNING DEL TIMER PRODUCIDO POR FIREBASE
import { firebaseApp } from "./app/utils/firebase";
import Navigation from "./app/navigations/Navigation";


LogBox.ignoreLogs(["Setting a timer"]); //POR AHORA SOLO SE SOLUCIONA ASI Y SIEMPRE PASA EN EL DESARROLO EN REACT-NATIVE
//usa las tres primeras palabras para seleccionar el warning


export default function App() {
  return <Navigation />;
}


