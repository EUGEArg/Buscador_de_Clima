import  {useState, createContext} from 'react'
import axios from 'axios'

const ClimaContext = createContext()

const ClimaProvider = ({children}) => { //en children va todo el contenido de la app

    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const [resultado, setResultado] = useState({})
    const [cargando, setCargando] = useState(false)
    const [noResultado, setNoResultado] = useState(false)

    const datosBusqueda = e => { //función que toma los datos de la búsqueda
        setBusqueda({
            ...busqueda, [e.target.name]: e.target.value
        })
    }

        const consultarClima = async datos => { //conecta con la API DE CLIMA
                setCargando(true) //resetear el estado de cargando
                setNoResultado(false) //resetear el estado de no resultado
            
                try {
                    const { ciudad, pais } = datos
                    const appId = import.meta.env.VITE_API_KEY

                    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}` //consulto lat y lon de la ciudad
                
                    const { data } = await axios(url) //para poder consumirlo en el proyecto
                    const { lat, lon } = data[0]

                    const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}` //a partir de los datos lat y lon consulto el clima
                
                    const {data: clima} = await axios(urlClima) //destructuring para no tener error. Data ya está declarado
                    
                    setResultado(clima)

                }catch(error) {
                    setNoResultado('No hay resultados')
                } finally {
                    setCargando(false)
                }
        }

    return (
        <ClimaContext.Provider
            value={{ 
                busqueda,
                datosBusqueda,
                consultarClima,
                resultado,
                cargando,
                noResultado
            }}
        >
            {children}
        </ClimaContext.Provider>
    )
}

export {
    ClimaProvider
}

export default ClimaContext