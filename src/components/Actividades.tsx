import { Iactividades } from "../types"
import {categorias} from "../data/categoria"
import React from "react"
import { IactivityActions, ActivityActionsType } from "../reducers/activity-reducer"

type ActividadesProps = {
    actividades: Iactividades[], 
    dispatch: React.Dispatch<IactivityActions>
}

export default function Actividades({actividades, dispatch}: ActividadesProps) {
   
    const ObtenerNombreCatgoria = (id: number): string[] =>{
        const name = categorias.map(categoria => (
            categoria.id === id? categoria.name: ""
        ))
        return name;
    }

  return (
    <>       
            <h3 className=" fw-bold text-center m-5">Comida y Actividades</h3>
            { actividades.map(item =>(
                <div className=" card col-4 row d-flex mx-auto mb-4 border-2 rounded rounded-5 " key={item.id}>
                    <p className={`col-4 text-white fw-bold  ${item.categoria === 1? "bg-primary": "bg-warning"}`}>
                        {ObtenerNombreCatgoria(item.categoria)}</p>

                    <div className="d-flex justify-content-between align-items-center">
                        <div className=" col-6">
                            <h4 className=" fw-bold ">{item.actividad}</h4>
                            <h1 className=" fw-bold text-primary m-0">{item.calorias} Calorias</h1>
                        </div>
                        <button className=" rounded-5 btn btn-primary"
                            onClick={() => dispatch({type: ActivityActionsType.Update_Activity, payload : {id: item.id}})}
                        >
                            <i className="bi bi-pencil-square"></i>
                        </button>                     
                    </div>
                </div>))
            }   
    </>
  )
}
