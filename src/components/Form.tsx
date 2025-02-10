import { useState, ChangeEvent, FormEvent, Dispatch, useEffect } from "react"
import { categorias } from "./data/categoria"
import { Iactividades } from "../types"
import { IactivityActions, ActivityActionsType } from "../reducers/activity-reducer"

type FormProps = {
    dispatch: Dispatch<IactivityActions>
}

export default function Form({dispatch}: FormProps) {

    const stateInitial = { categoria: 1, actividad: "", calorias: 0}
    const [actividades, setActividades] = useState<Iactividades>(stateInitial)

    const handleOnChanhe = (e : ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) =>{
        const isNumber = ["categoria", "calorias" ].includes(e.target.id)
        const valueTarget = isNumber && e.target.value != ""? Number(e.target.value) : e.target.value;
        setActividades({
            ...actividades,
            [e.target.id] : valueTarget
        })
    }

    const isActivo =() =>{
        const {actividad,  calorias} = actividades;
        return actividad.trim() !== "" && calorias > 0
    }
    

    const handleSubmit= (e: FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault()
        dispatch({type: ActivityActionsType.Save_Activity, payload: {newActivity: actividades}})
        setActividades(stateInitial)
    }
   
  return (
    <>
        <section className=" bg-primary d-flex justify-content-center">
            <form className=" my-5 bg-white p-5 rounded col-8"
                onSubmit={handleSubmit }
            >
                <div>
                    <label htmlFor="categoria" className="col-12 p-2 fw-bold" >Categoria</label>
                    <select className=" border col-12 p-2 ms-2 rounded-2" id="categoria" value={actividades.categoria} 
                        onChange={ handleOnChanhe}
                    >
                        {categorias.map(item =>(
                            <option key={item.id} 
                                value={item.id}
                            >
                                {item.name}
                            </option>
                            ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="actividad" className="col-12 p-2 fw-bold" >Actividad:</label>
                    <input className=" border col-12 p-2 ms-2 rounded-2" id="actividad"
                    placeholder="Ej.. Jugos, Arroz, Correr, Caminar.." value={actividades.actividad}
                    onChange={ handleOnChanhe}></input>
                </div>

                <div>
                    <label htmlFor="calorias" className="col-12 p-2 fw-bold" >Calorias:</label>
                    <input className=" border col-12 p-2 ms-2 rounded-2" id="calorias" type="number" value={actividades.calorias}
                    onChange={ handleOnChanhe}></input>
                </div>

                <input className=" p-2 w-100 btn btn-primary mt-4 ms-2 " type="submit"
                    disabled = {!isActivo()}
                    value={actividades.categoria == 1? "Guardar Comida" : "Guardar Ejercicio"}
                />
    
            </form>
        </section>
    </>
  )
}
