import { useMemo } from "react"
import { Iactividades } from "../types"

type ResumenCaloriaProps = {
    actividades: Iactividades[]
}

export default function ResumenCaloria({actividades} : ResumenCaloriaProps) {

    const caloriasConsumidas = useMemo(() => actividades.reduce((total,actividad) => 
            actividad.categoria === 1? total + actividad.calorias : total, 0), [actividades])

    const caloriasQuemadas = useMemo(() => actividades.reduce((total,actividad) => 
        actividad.categoria === 2? total + actividad.calorias : total, 0), [actividades])

    const caloriasDiferencia = useMemo(() => caloriasConsumidas - caloriasQuemadas, [actividades])


  return (
    <>
    <div className=" bg-black ms-0 p-5">
        <h1 className=" fw-bold text-center mt-0 text-white">Resumen de calorias</h1>
        <div className=" d-flex justify-content-center">
            <div className=" d-block">
                <h1 className=" text-white fw-bold">{caloriasConsumidas} </h1>
                <p className=" text-white">Consumidas</p>   
            </div>
            
            <div className=" d-block mx-5">
                <h1 className=" text-white fw-bold">{caloriasQuemadas} </h1>
                <p className=" text-white">Quemadas</p>
            </div>
            <div className=" d-block ">
                <h1 className=" text-white fw-bold">{caloriasDiferencia} </h1>
                <p className=" text-white">Diferencia</p>
            </div>
            
        </div>
    </div>
       
        

    </>
  )
}
