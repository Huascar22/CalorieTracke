import { Iactividades } from "../types"

export enum ActivityActionsType {
    Save_Activity = "save-activity",
}

export type IactivityActions = 
    {type: ActivityActionsType.Save_Activity, payload: {newActivity : Iactividades}}

type ActivityState = {actividades: Iactividades[]}

export const initialStateActivityReduce: ActivityState = {
    actividades: []
}

export const activityReducer = (
    state: ActivityState = initialStateActivityReduce, 
    action: IactivityActions) => {
    
    if(action.type === ActivityActionsType.Save_Activity){
        console.log(state)
        return {
            ...state,
            actividades: [...state.actividades, action.payload.newActivity]
            
        }
        
    }
    return state;

}