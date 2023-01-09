import CostForm from "./CostForm";
import './NewCost.css'

const NewCost = (props) => {
    const newCostHandler = (inputFormData) => {
        const newCostData = {...inputFormData, id: Math.random().toString()}
        props.addCost(newCostData);

    }
    return <div className="new-cost">
        <CostForm onNewCost = {newCostHandler} />
    </div>
}

export default NewCost;