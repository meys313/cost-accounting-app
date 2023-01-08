import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
function App() {
    const someData = [
        {
            date: new Date(),
            title: 'продукты',
            amount: '1000'
        },
        {
            date: new Date(),
            title: 'интернет',
            amount: '900'
        },
        {
            date: new Date(),
            title: 'вещи',
            amount: '10 000'
        }
    ]


  return (

      <div>
          <NewCost/>
          <Costs someData = {someData}/>
      </div>
  );
}

export default App;
