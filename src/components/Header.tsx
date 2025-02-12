import { Dispatch } from "react"
import { ActivityState, IactivityActions, ActivityActionsType } from "../reducers/activity-reducer"

type HeaderProps = {
  state: ActivityState
  dispatch: Dispatch<IactivityActions>
}

export default function Header({state, dispatch}: HeaderProps ) {

  const isDisable = () =>{
      return state.actividades.length ? true: false
  }

  return (
    <>
        <header className=" d-flex p-2">
            <div className=" container">
                <h1 className=" text-primary m-0">Contador de calorias</h1>
            </div>
            <button className=" btn btn-primary btn-sm "
              disabled = {!isDisable()}
              onClick={() => dispatch({type : ActivityActionsType.Reset_Activity})}
            >
              Reiniciar
            </button>
        </header>
    </>
  )
}
