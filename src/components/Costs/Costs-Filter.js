import "./Costs-Filter.css";

const CostsFilter = (props) => {

  const yearChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
  };

  // формирую массив с уникальными значениями years
  const allYears = []
  new Set(props.costs.map(cost => cost.date.getFullYear().toString())).forEach(function (year){
    allYears.push(year);
  })
  allYears.sort((a, b) => Number(b) - Number(a));

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Выбор По Году</label>
        <select value={props.year} onChange={yearChangeHandler}>
          <option value="">Показать все</option>
          {

            allYears.map((year) => <option value={year} key={Math.random().toString()}>{year}</option>)
          }
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;
