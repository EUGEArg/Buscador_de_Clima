import { useState } from 'react'
import useClima from '../hooks/useClima'

const Formulario = () => {

    const [alerta, setAlerta] = useState('')
    const {busqueda, datosBusqueda, consultarClima} = useClima() //useclima: hook que conecta componentes

    const {ciudad, pais} = busqueda

    const handleSubmit = e => {
        e.preventDefault()
        
        if(Object.values(busqueda).includes('')) {
            setAlerta('Todos los campos son obligatorios')
            return
        }
        setAlerta('')
        consultarClima(busqueda)
    }

  return (
   
    <div className='container'>
        {alerta && <p>{alerta}</p>}
        <form
            onSubmit={handleSubmit}
        >
            <div className='select'>
                <label htmlFor='ciudad'>Ciudad</label>
                <input 
                    type='text'
                    id='ciudad'
                    name='ciudad'
                    onChange={datosBusqueda}
                    value={ciudad}
                />
            </div>
            <div                     className='select'>
                <label htmlFor='pais'>Pais</label>
                <select
                    id='pais'
                    name='pais'
                    onChange={datosBusqueda}
                    value={pais}
                    >
                    <option value=''> Seleccione un pais</option>  
                    <option value='AR'>Argentina</option>
                    <option value='CO'>Colombia</option>
                    <option value='CR'>Costa Rica</option>
                    <option value='ES'>España</option>
                    <option value='PE'>Perú</option>
                    <option value='VE'>Venezuela</option>
                    <option value='EC'>Ecuador</option>
                    <option value='BR'>Brasil</option>
                    <option value='CL'>Chile</option>
                    <option value='PY'>Paraguay</option>
                    <option value='UY'>Uruguay</option>
                    <option value='BO'>Bolivia</option>
                </select> 
            </div>

            <input 
                type='submit'
                value='Consultar Clima'
            />
        </form>
    </div>
  )
}

export default Formulario