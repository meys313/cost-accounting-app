import './Cost-item.css';
import CostDate from "./Cost-date";
import Card from "../UI/Card";
function CostItem(props){

    return (
        <Card className='cost-item'>
            <CostDate date = {props.date}/>
            <div className="cost-item__description">
                <h2>{props.title}</h2>
                <div className='cost-item__price'>{props.amount} руб</div>
            </div>
        </Card>
    )

}

export default CostItem;