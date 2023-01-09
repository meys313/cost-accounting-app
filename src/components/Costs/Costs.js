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
    return(

            <Card className="costs">
                <CostsFilter year = {selectedYear} onChangeYear={yearFilterChangeHandler}/>
                {

               props.someData.map((cost, index)=>{
                    return(

                        <CostItem
                            key = {index}
                            date = {cost.date}
                            title = {cost.title}
                            amount = {cost.amount}
                            yearFilter = {selectedYear}
                        />
                    )
            })}
            </Card>
    )
}

export default Costs