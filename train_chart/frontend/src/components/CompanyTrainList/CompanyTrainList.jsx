import css from "./CompanyTrainList.module.css"

import TrainStatus from "./TrainStatus";

function CompanyTrainList(props){
    return (
        <tbody>
            <tr>
                <td><img src={props.image}></img></td>
                <td>
                    <TrainStatus
                        severity={5}
                    />
                </td>
            </tr>
        </tbody>
    )
}

export default CompanyTrainList