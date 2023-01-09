import './Cost-item.css';
import CostDate from "./Cost-date";
import Card from "../UI/Card";
import React, {useState} from 'react';
function CostItem(props){
    const [title, setTitle] = useState(props.title);


    const changeTitleHandler = () => {
        setTitle('NewTitle')
    }
    const costItemRender = (
        <Card className='cost-item'>
            <CostDate date = {props.date}/>
            <div className="cost-item__description">
                <h2>{title}</h2>
                <div className='cost-item__price'>{props.amount} руб</div>
            </div>
            <button onClick={changeTitleHandler}>click here</button>
        </Card>
    )
    if(props.yearFilter && props.date.getFullYear() === Number(props.yearFilter)){
        return (
            costItemRender
        )
    }

    if (!props.yearFilter){
        return (
           costItemRender
        )
    }

}

export default CostItem;