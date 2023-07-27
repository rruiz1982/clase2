// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
   <h1>Formulario de Datos Personales</h1>
    <form action="#" method="post">
        <label  htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required/>

        <label htmlFor="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" required/>

        <label htmlFor="correo">Correo electrónico:</label>
        <input type="email" id="correo" name="correo" required/>

        <input type="submit" value="Enviar"/>
    </form>
      
     </>

   
  )
}

export default App
