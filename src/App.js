import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import {useState} from "react";


const someData = [
    {
        date: new Date(),
        title: 'продукты',
        amount: 1000,
        id: '0.11111'
    },
    {
        date: new Date(),
        title: 'интернет',
        amount: 900,
        id: '0.111121'
    },
    {
        date: new Date(),
        title: 'вещи',
        amount: 10000,
        id: '0.1111111'
    },
]
function App() {

    const [stateData, setStateData] = useState(someData)

    const addCostHandler = (newCostData) => {
        setStateData(prevState => {return [newCostData, ...prevState]})
    }
  return (

      <div>
          <NewCost addCost = {addCostHandler}/>
          <Costs someData = {stateData} setStateData = {setStateData}/>
      </div>
  );
}

export default App;
