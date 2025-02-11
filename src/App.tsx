import Form from "./components/Form";
import Header from "./components/Header";
import { useReducer } from "react";
import {activityReducer, initialStateActivityReduce} from "./reducers/activity-reducer";
import Actividades from "./components/Actividades";

function App() {
  const [state, dispatch] = useReducer(activityReducer, initialStateActivityReduce);

  return (
    <>    
      <Header/>
      <Form
        dispatch = {dispatch}
        state = {state}
      />
      <Actividades
        actividades = {state.actividades}
        dispatch = {dispatch}

      />
    </>
  )
}

export default App
