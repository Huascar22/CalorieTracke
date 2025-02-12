import { Iactividades } from "../types"

export enum ActivityActionsType {
    Save_Activity = "save-activity",
    Update_Activity = "update-activity",
    Delete_Activity = "delete-activity", 
    Reset_Activity = "Reset-activity"
}

export type IactivityActions = 
    {type: ActivityActionsType.Save_Activity, payload: {newActivity : Iactividades}} |
    {type: ActivityActionsType.Update_Activity, payload: {id : number}} |
    {type: ActivityActionsType.Delete_Activity, payload: {id : number}} |
    {type: ActivityActionsType.Reset_Activity} 

export type ActivityState = {
    actividades: Iactividades[],
    actividadUpdateId: number
}

const initialLocalStorage = () : Iactividades[] =>{
    const local = localStorage.getItem("actividades");
    return local ? JSON.parse(local) : []
}

export const initialStateActivityReduce: ActivityState = {
    actividades: initialLocalStorage(),
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
            actividades: state.actividades.filter(item => item.id !==  action.payload.id)
        }
    }

    if(action.type === ActivityActionsType.Update_Activity){
        return{ ...state, actividadUpdateId: action.payload.id}
    }

    if(action.type === ActivityActionsType.Reset_Activity){
        return {
            actividades: [],
            actividadUpdateId: 0
        }
    }

    return state;

}