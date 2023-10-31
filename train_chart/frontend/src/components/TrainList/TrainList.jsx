import css from "./CompanyTrainList.module.css"
import wtp_img from "./wtp.jpg"
import sgt_img from "./sgt_trains.png"
import hcmt_img from "./hcmt.jpg"
import CompanyTrainList from "./CompanyTrainList";


function TrainList(props){
    return (
        <div className={css['company-section']}>
            <table>
                <CompanyTrainList
                    image={wtp_img}
                />
                <CompanyTrainList
                    image={sgt_img}
                />
                <CompanyTrainList
                    image={hcmt_img}
                />
            </table>
        </div>
    )
}

export default TrainList