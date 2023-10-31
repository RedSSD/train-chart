
const STATUS_COLOR = {
    5: "red",
    4: "chocolate",
    3: "orange",
    2: "blue",
    1: "violet",
    0: "green",
}

const STATUS_NAME = {
    5: "Critical",
    4: "Major",
    3: "Minor",
    2: "Warning",
    1: "Indeterminate",
    0: "Clear",
}

function TrainStatus(props) {
  return (
      <div style={{color: STATUS_COLOR[props.severity]}}>
          <label>{STATUS_NAME[props.severity]} - (5) </label>
          <a>A1</a>
          <a>A1</a>
          <a>A1</a>
      </div>
  )
};

export default TrainStatus;