import React, {useState} from "react";
import './CostForm.css'
const CostForm = (props) => {
    const [inputForm, setInputForm] = useState({
        text: '',
        number: '',
        date: ''
    });

    const inputChangeHandler = event => {
        setInputForm(prevState =>  {return {...prevState, [event.target.type]: event.target.value}})
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const costData = {
            title: inputForm.text,
            amount: Number(inputForm.number),
            date: new Date(inputForm.date)
        };
        setTimeout(() => event.target.reset(), 500);

        props.onNewCost(costData);

    }
    return <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                {/*<p>{values.input}</p>*/}
                <label htmlFor="">Название</label>
                <input type='text' onChange={inputChangeHandler}/>
            </div>

            <div className="new-cost__control">
                <label htmlFor="">Сумма</label>
                <input type='number' min='0' step='50' onChange = {inputChangeHandler}/>
            </div>

            <div className="new-cost__control">
                <label htmlFor="">Дата</label>
                <input type='date' min='2019-01-01' step='2022-12-31' onChange={inputChangeHandler}/>
            </div>
            <div className="new-cost__actions">
                <button type="submit">Добавить расход</button>
                <button type="submit" onClick = {() => props.formDisplay(false)}>отмена</button>
            </div>
        </div>
    </form>
}

export default CostForm;