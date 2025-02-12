import Form from "./components/Form";
import Header from "./components/Header";
import { useEffect, useReducer } from "react";
import {activityReducer, initialStateActivityReduce} from "./reducers/activity-reducer";
import Actividades from "./components/Actividades";
import ResumenCaloria from "./components/ResumenCaloria";

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialStateActivityReduce);

  useEffect(() => {
      localStorage.setItem("actividades", JSON.stringify(state.actividades))
  }, [state.actividades])

  return (
    <>    
      <Header
        state = {state}
        dispatch = {dispatch}
      />
      <Form
        dispatch = {dispatch}
        state = {state}
      />
      <ResumenCaloria
        actividades = { state.actividades}
      />

      <Actividades
        actividades = {state.actividades}
        dispatch = {dispatch}

      />
    </>
  )
}

export default App
