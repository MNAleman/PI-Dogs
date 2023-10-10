import React, { useState } from 'react'
import './create.style.css'


const Create = () => {

    const [state, setState] = useState({
        raza: "",
        pesoMin: "",
        pesoMax: "",
        alturaMin: "",
        alturaMax: "",
        añosDeVida: "",
        imagen: "",
        temperamentos: []

    })

    const [errors, setErrors] = useState({
        raza: "",
        pesoMin: "",
        pesoMax: "",
        alturaMin: "",
        alturaMax: "",
        añosDeVida: "",
        imagen: "",
        temperamentos: ""
    })
    const validate = (state, name) => {
        switch (name) {

            case "raza":
                if (state.raza === "") {
                    setErrors({ ...errors, raza: "Campo requerido" })
                } else if (!/^[a-zA-Z\s]{1,40}$/.test(state.raza)) {
                    setErrors({ ...errors, raza: "Solo se permiten letras y espacios, con un máximo de 40 caracteres" });
                    if (/[^a-zA-Z\s]/.test(state.raza)) {
                        setErrors({ ...errors, raza: "Caracteres no permitidos. Solo se permiten letras y espacios." });
                    }
                } else {
                    setErrors({ ...errors, raza: "" })
                }
                break;

            case "pesoMin":
                if (state.pesoMin === "") {
                    setErrors({ ...errors, pesoMin: "Campo requerido" });
                } else if (!/^\d+$/.test(state.pesoMin)) {
                    setErrors({ ...errors, pesoMin: "Solo se permiten números enteros positivos" });
                } else if (state.pesoMax !== "" && parseInt(state.pesoMin) >= parseInt(state.pesoMax)) {
                    setErrors({ ...errors, pesoMin: "El valor mínimo no puede ser mayor o igual al valor máximo" });
                } else {
                    setErrors({ ...errors, pesoMin: "" });
                }
                break;

            case "pesoMax":
                if (state.pesoMax === "") {
                    setErrors({ ...errors, pesoMax: "Campo requerido" });
                } else if (!/^\d+$/.test(state.pesoMax)) {
                    setErrors({ ...errors, pesoMax: "Solo se permiten números enteros positivos" });
                } else if (state.pesoMin !== "" && parseInt(state.pesoMax) <= parseInt(state.pesoMin)) {
                    setErrors({ ...errors, pesoMax: "El valor máximo no puede ser menor o igual al valor mínimo" });
                } else {
                    setErrors({ ...errors, pesoMax: "" });
                }
                break;

            case "alturaMin":
                if (state.alturaMin === "") {
                    setErrors({ ...errors, alturaMin: "Campo requerido" });
                } else if (!/^\d+$/.test(state.alturaMin)) {
                    setErrors({ ...errors, alturaMin: "Solo se permiten números enteros positivos" });
                } else if (state.alturaMax !== "" && parseInt(state.alturaMin) >= parseInt(state.alturaMax)) {
                    setErrors({ ...errors, alturaMin: "El valor mínimo no puede ser mayor o igual al valor máximo" });
                } else {
                    setErrors({ ...errors, alturaMin: "" });
                }
                break;

            case "alturaMax":
                if (state.alturaMax === "") {
                    setErrors({ ...errors, alturaMax: "Campo requerido" });
                } else if (!/^\d+$/.test(state.alturaMax)) {
                    setErrors({ ...errors, alturaMax: "Solo se permiten números enteros positivos" });
                } else if (state.alturaMin !== "" && parseInt(state.alturaMax) <= parseInt(state.alturaMin)) {
                    setErrors({ ...errors, alturaMax: "El valor máximo no puede ser menor o igual al valor mínimo" });
                } else {
                    setErrors({ ...errors, alturaMax: "" });
                }
                break;
                
            case "añosDeVida":
                if (state.añosDeVida === "") {
                    setErrors({ ...errors, añosDeVida: "Campo requerido" });
                } else if (!/^\d{1,2}$/.test(state.añosDeVida)) {
                    setErrors({ ...errors, añosDeVida: "Solo se permite un número entero positivo de hasta 2 dígitos" });
                } else {
                    setErrors({ ...errors, añosDeVida: "" });
                }
                break;

            case "imagen":
                if (state.imagen === "") {
                    setErrors({ ...errors, imagen: "Campo requerido" });
                } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(state.imagen)) {
                    setErrors({ ...errors, imagen: "Ingresa una URL válida" });
                } else if (!/\.(jpg|jpeg|png|gif)$/i.test(state.imagen)) {
                    setErrors({ ...errors, imagen: "La URL debe apuntar a una imagen (jpg, jpeg, png o gif)" });
                } else {
                    setErrors({ ...errors, imagen: "" });
                }
                break;

            default:
                break
        }
    }

    const handleChange = (event) => {
        if (event.target.name === "temperamentos") {
            setState({
                ...state,
                temperamentos: [...state.temperamentos, event.target.value]
            })
        } else {
            setState({
                ...state,
                [event.target.name]: event.target.value
            })
        }
        validate({
            ...state,
            [event.target.name]: event.target.value
        }, event.target.name)
    }

    const disabledFuntion = () => {
        let disabledAux = true;
        for (let error in errors) {
            if (errors[error] === "") disabledAux = false
            else {
                disabledAux = true;
                break;
            }

        }
        return disabledAux
    }
    //Despues hay que hacer la conexion con el back y sacar este hardcodeo
    const temperament = ["temperamento1", "temperamento2", "temperamento3", "temperamento4"]

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state)
    }

    return (
        <div className='create-cont'>
            <form onSubmit={handleSubmit}>
                <label>Raza:</label>
                <input name="raza" onChange={handleChange} type="text" placeholder="Denominación de la Raza" />
                <div><p>{errors.raza}</p></div>
                <label>Peso Min:</label>
                <input name='pesoMin' onChange={handleChange} type="text" placeholder="Peso minimo" />
                <div><p>{errors.pesoMin}</p></div>
                <label>Peso Max:</label>
                <input name="pesoMax" onChange={handleChange} type="text" placeholder="Peso maximo" />
                <div><p>{errors.pesoMax}</p></div>
                <label>Altura Min:</label>
                <input name="alturaMin" onChange={handleChange} type="text" placeholder="Estatura minima" />
                <div><p>{errors.alturaMin}</p></div>
                <label>Altura Max:</label>
                <input name="alturaMax" onChange={handleChange} type="text" placeholder="Estatura maxima" />
                <div><p>{errors.alturaMax}</p></div>
                <label>Años de Vida:</label>
                <input name="añosDeVida" onChange={handleChange} type="text" placeholder="Promedio de vida"/>
                <div><p>{errors.añosDeVida}</p></div>
                <label>Imagen:</label>
                <input name="imagen" onChange={handleChange} type="text" placeholder="URL de la imgen" />
                <div><p>{errors.imagen}</p></div>
                <label>Temperamento</label>
                <select onChange={handleChange} name="temperamentos">
                    {temperament.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                <input disabled={disabledFuntion()} type="submit" />
            </form>
        </div>
    )
}

export default Create

//<input type="url" />
