import Diagram from "../Diagram/Diagram";

const CostsDiagram = (props) => {
    const diagramDataSets = [];

    if (props.filterYear){
        diagramDataSets.push(
            {label:'Jan', value: 0},
            {label:'Feb', value: 0},
            {label:'Mar', value: 0},
            {label:'Apr', value: 0},
            {label:'May', value: 0},
            {label:'Jun', value: 0},
            {label:'Jal', value: 0},
            {label:'Aug', value: 0},
            {label:'Sep', value: 0},
            {label:'Oct', value: 0},
            {label:'Nov', value: 0},
            {label:'Dec', value: 0},
        )

        for(let cost of props.costs){
            const costMonth = cost.date.getMonth();
            diagramDataSets[costMonth].value += cost.amount;
        }
    } // если фильтр не указан ( выбран как "показать все"
    else {
        // формирую массив с уникальными значениями years со всех расходов
        const allYears = []
        new Set(props.costs.map(cost => cost.date.getFullYear().toString())).forEach(function (year){
            allYears.push(year);
        })
        allYears.sort((a, b) => Number(b) - Number(a));
        // добавляю все имеющиеся года в которых были созданы расходы в массив diagramDataSets
        for(let year of allYears){
            diagramDataSets.push({label: year.toString(), value: 0})
        }

        for(let cost of props.costs){
            const costYear = cost.date.getFullYear().toString();
          diagramDataSets[allYears.indexOf(costYear)].value += cost.amount
        }

    }



    return <Diagram dataSets = {diagramDataSets}/>
}

export default CostsDiagram