import DiagramBar from "./Diagram-bar";
import './Diagram.css'
const Diagram = (props) => {
    const dataSetsValues = props.dataSets.map(dataSetValue => dataSetValue.value);
    const maxMonthCosts = Math.max(...dataSetsValues);
    return(
        <div className="diagram">
            {props.dataSets.map((data, index) => (

                    <DiagramBar
                    key={index}
                    value={data.value}
                    maxValue = {maxMonthCosts}
                    label = {data.label}
                    />
                )
            )}

        </div>
    )
}

export default Diagram;