import React, { useState } from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

interface Persona {
    Nombre:string,
    Apellido:string,
    Correo:string,
    FechaNacimiento:string,
    Edad:number,
    Rut:string
}
const initialState:Persona = {
    Apellido:"",
    Correo:"",
    Edad:0,
    FechaNacimiento:"",
    Nombre:"",
    Rut:""
}


export const Pagina3 = () => {
    const [Persona, setPersona] = useState<Persona>(initialState)

    const handlePersona =(name:string,value:string)=>{
        setPersona({...Persona,[name]:value})
    }
  return (
    //Nombre, apellido, fechanacimiento, edad, correo, rut
    
    <>
    

    <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control name="Nombre" type="text" placeholder="Ingrese el nombre" onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}></Form.Control>
        <Form.Text></Form.Text>

    </Form.Group>

    <Form.Group>
        <Form.Label>Apellido</Form.Label>
        <Form.Control name="Apellido" type="text" placeholder="Ingrese el apellido" onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}></Form.Control>
        <Form.Text></Form.Text>
    </Form.Group>

    <Form.Group>
        <Form.Label>Fecha Nacimiento</Form.Label>
        <Form.Control name="FechaNacimiento" type="date" placeholder="Ingrese el nacimiento" onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}></Form.Control>
        <Form.Text></Form.Text>
    </Form.Group>

    <Form.Group>
        <Form.Label>Edad</Form.Label>
        <Form.Control name="Edad" type="number" placeholder="Ingrese la edad" onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}></Form.Control>
        <Form.Text></Form.Text>
    </Form.Group>

    <Form.Group>
        <Form.Label>Correo</Form.Label>
        <Form.Control name="Correo" type="email" placeholder="Ingrese el correo" onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}></Form.Control>
        <Form.Text></Form.Text>
    </Form.Group>

    <Form.Group>
        <Form.Label>Rut</Form.Label>
        <Form.Control name="Rut" type="text" placeholder="Ingrese el rut" onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}></Form.Control>
        <Form.Text></Form.Text>
    </Form.Group>

    <Button type="button" variant="success">Registrar</Button>

    
    </>

  )
}


export default Pagina3
