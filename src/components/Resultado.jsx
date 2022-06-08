import useClima from "../hooks/useClima"

const Resultado = () => {

    const { resultado } = useClima()

    const { name, main } = resultado

    //grados Kelvin
    const kelvin = 273.15

    return (
    <div className="container clima">
        <h2>La Temperatura en {name} es:</h2>
        <p> { parseInt(main.temp - kelvin)} <span>&#x2103;</span>
        </p>
        <p>
            Mín: { parseInt(main.temp_min - kelvin)} <span>&#x2103;</span>
        </p>
        <p>
            Máx: { parseInt(main.temp_max - kelvin)} <span>&#x2103;</span>
        </p>
    </div>
    )
}

export default Resultado