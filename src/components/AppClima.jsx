import Formulario from './Formulario'
import Resultado from './Resultado'
import Spinner from './Spinner'
import useClima from '../hooks/useClima'

const AppClima = () => {

    const { resultado, cargando, noResultado } = useClima()
    return (
        <>
            <main className='container-app'>
                <Formulario />

                { cargando ? <Spinner /> :
                resultado?.name ? <Resultado /> :
                noResultado ? <p>{noResultado}</p>
                : <p>la Temperatura se mostrará aquí</p>}           
            </main>
            
        </>
    )
}

export default AppClima