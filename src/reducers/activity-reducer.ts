import { act } from "react"
import { Iactividades } from "../types"
import Actividades from "../components/Actividades"

export enum ActivityActionsType {
    Save_Activity = "save-activity",
    Update_Activity = "update-activity",
    Delete_Activity = "update-activity"
}

export type IactivityActions = 
    {type: ActivityActionsType.Save_Activity, payload: {newActivity : Iactividades}} |
    {type: ActivityActionsType.Update_Activity, payload: {id : number}} |
    {type: ActivityActionsType.Delete_Activity, payload: {id : number}}

export type ActivityState = {
    actividades: Iactividades[],
    actividadUpdateId: number
}

export const initialStateActivityReduce: ActivityState = {
    actividades: [], 
    actividadUpdateId: 0
}

export const activityReducer = (
    state: ActivityState = initialStateActivityReduce, 
    action: IactivityActions) => {
    
    if(action.type === ActivityActionsType.Save_Activity){
        let updateActivity : Iactividades[] = [];
        if(state.actividadUpdateId){
            updateActivity = state.actividades.map(item => (
                item.id === state.actividadUpdateId? action.payload.newActivity : item
            ))
        }else{
            updateActivity = [...state.actividades, action.payload.newActivity];
        }
        return { ...state, actividades: updateActivity, actividadUpdateId: 0}
    }

    if(action.type === ActivityActionsType.Delete_Activity){   
        return{
            ...state,
            Actividades: state.actividades.filter(item => item.id !==  action.payload.id)
        }
    }

    if(action.type === ActivityActionsType.Update_Activity){
        return{ ...state, actividadUpdateId: action.payload.id}
    }

    return state;

}