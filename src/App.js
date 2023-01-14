import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import {useState} from "react";


const someData = [
    {
        date: new Date(2023, 1, 4),
        title: 'продукты',
        amount: 1000,
        id: '0.11111'
    },
    {
        date: new Date(2023, 0, 4),
        title: 'интернет',
        amount: 900,
        id: '0.111121'
    },
    {
        date: new Date(2023, 0, 23),
        title: 'вещи',
        amount: 200,
        id: '0.11111311'
    },

    {
        date: new Date(2022, 11, 21),
        title: 'ремон машины',
        amount: 500,
        id: '0.11111411'
    },

    {
        date: new Date(2022, 5, 4),
        title: 'налоги',
        amount: 5000,
        id: '0.1111111'
    },

    {
        date: new Date(2019, 3, 1),
        title: 'продукты',
        amount: 10000,
        id: '0.11131111'
    },

    {
        date: new Date(2018, 2, 10),
        title: 'вещи',
        amount: 10000,
        id: '0.11111411'
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
