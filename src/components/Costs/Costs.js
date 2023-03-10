import './Costs.css'
import CostItem from "./Cost-item";
import Card from "../UI/Card";
import CostsFilter from "./Costs-Filter";
import CostsDiagram from "./Costs-diagram";
import {useState} from "react";

function Costs(props){
    const [selectedYear, setSelectedYear] = useState("");
    const yearFilterChangeHandler = (year)=> {
        setSelectedYear(year);
    }

    const filteredCosts = selectedYear ?
        props.someData.filter(data=>data.date.getFullYear().toString() === selectedYear) :
        props.someData;


    const deleteCostHandler = (id) => {
        for(let costIndex in filteredCosts){
           if(filteredCosts[costIndex].id === id){
               filteredCosts.splice(costIndex, 1);
               props.setStateData([...filteredCosts]);
           }
        }
    }

    return(

            <Card className="costs">
                <CostsFilter costs = {props.someData} year = {selectedYear} onChangeYear={yearFilterChangeHandler}/>

                {selectedYear ?
                    <CostsDiagram costs = {filteredCosts} filterYear={true}/>
                    :
                    <CostsDiagram costs = {filteredCosts} filterYear={false} />
                }


                {
               filteredCosts.map((cost)=>{
                    return(
                        <CostItem
                            key = {cost.id}
                            id = {cost.id}
                            date = {cost.date}
                            title = {cost.title}
                            amount = {cost.amount}
                            onDelete = {deleteCostHandler}
                        />
                    )
            })}
            </Card>
    )
}

export default Costs