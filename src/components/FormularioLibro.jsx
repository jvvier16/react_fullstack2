import { useState } from "react"
function FormularioLibro({agregar}){
    const[titulo,setTitulo]= useState("")
    const[contenido,setContenido]= useState("")

    const handleSubmit = (event)=>{
        event.preventDefault()
        if(!titulo || !contenido)return
        
        agregar ({id: Date.now(),  titulo: titulo.charAt(0).toUpperCase() + titulo.slice(1),contenido: contenido.charAt(0).toUpperCase() + contenido.slice(1)})
        setTitulo("")
        setContenido("")
    }

    return(
    <form className="mb-4" onSubmit={handleSubmit}>
        <input className="form-control mb-2" type="text"  placeholder="ingrese titulo" onChange={(e)=>setTitulo(e.target.value)}/>
        <input className="form-control mb-2" type="text" placeholder="ingrese contenido"onChange={(e)=>setContenido(e.target.value)} />
        <button type="submit" className="btn btn-success">agregar libro</button>
    </form>
)
}
export default FormularioLibro