import CostForm from "./CostForm";
import './NewCost.css'
import {useState} from "react";

const NewCost = (props) => {

    const [formDisplay, setFormDisplay] = useState(false)


    const newCostHandler = (inputFormData) => {
        const newCostData = {...inputFormData, id: Math.random().toString()}
        props.addCost(newCostData);
        setFormDisplay(!formDisplay);

    }

    return(
            <div className="new-cost">
                {!formDisplay?
                    <button onClick={()=> setFormDisplay(!formDisplay)}>Добавить новый расход</button>
                :
                    <CostForm onNewCost = {newCostHandler} formDisplay = {setFormDisplay}/>
                }

            </div>
            )


}

export default NewCost;