import css from "./CompanyTrainList.module.css"

import TrainStatus from "./TrainStatus";

function CompanyTrainList(props){
    return (
        <tbody>
            <tr>
                <td><img src={props.image} width="400" height="200"></img></td>
                <td>
                    <TrainStatus
                        severity={5}
                    />
                    <TrainStatus
                        severity={2}
                    />
                    <TrainStatus
                        severity={4}
                    />
                </td>
            </tr>
        </tbody>
    )
}

export default CompanyTrainList