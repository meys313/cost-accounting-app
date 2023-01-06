import Costs from "./components/Costs";

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
          <Costs someData = {someData}/>
      </div>
  );
}

export default App;
