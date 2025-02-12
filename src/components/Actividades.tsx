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
            <h3 className=" fw-bold text-center mt-5">Comida y Actividades</h3>

             { actividades.length === 0? <p className=" text-center ">No hay actividades aún....</p> :
             
             actividades.map(item =>(
                <div className=" card col-4 row d-flex mx-auto mt-4 border-2 rounded rounded-5 " key={item.id}>
                    <p className={`col-4 text-white fw-bold  ${item.categoria === 1? "bg-primary": "bg-warning"}`}>
                        {ObtenerNombreCatgoria(item.categoria)}</p>

                    <div className="d-flex justify-content-between align-items-center">
                        <div className=" col-6">
                            <h4 className=" fw-bold ">{item.actividad}</h4>
                            <h1 className=" fw-bold text-primary m-0">{item.calorias} Calorias</h1>
                        </div>

                        <div>
                            <button className=" rounded-5 btn btn-primary me-2"
                                onClick={() => dispatch({type: ActivityActionsType.Update_Activity, payload : {id: item.id}})}
                            >
                                <i className="bi bi-pencil-square"></i>
                            </button>   
                            <button className=" rounded-5 btn btn-danger"
                                onClick={() => dispatch({type: ActivityActionsType.Delete_Activity, payload : {id: item.id}})}
                            >
                                X
                            </button>   
                        </div>
                                       
                    </div>
                </div>))
            }   
    </>
  )
}
