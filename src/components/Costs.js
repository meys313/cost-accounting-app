import './Costs.css'
import CostItem from "./Cost-item";
import Card from "./Card";
function Costs(props){
    return(
        <Card className="costs">
            {
            props.someData.map((cost, index)=>{
                return(<CostItem
                    key = {index}
                    date = {cost.date}
                    title = {cost.title}
                    amount = {cost.amount}
                /> )
        })}
        </Card>
    )
}

export default Costs