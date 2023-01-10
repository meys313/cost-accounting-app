import './Costs.css'
import CostItem from "./Cost-item";
import Card from "../UI/Card";
import CostsFilter from "./Costs-Filter";
import {useState} from "react";
function Costs(props){
    const [selectedYear, setSelectedYear] = useState("");
    const yearFilterChangeHandler = (year)=> {
        setSelectedYear(year);
    }

    const filteredCosts = selectedYear ?
        props.someData.filter(data=>data.date.getFullYear().toString() === selectedYear) :
        props.someData;

    return(

            <Card className="costs">
                <CostsFilter costs = {props.someData} year = {selectedYear} onChangeYear={yearFilterChangeHandler}/>
                {

               filteredCosts.map((cost)=>{
                    return(

                        <CostItem
                            key = {cost.id}
                            date = {cost.date}
                            title = {cost.title}
                            amount = {cost.amount}
                        />
                    )
            })}
            </Card>
    )
}

export default Costs