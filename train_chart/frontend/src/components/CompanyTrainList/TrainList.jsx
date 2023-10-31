import css from "./CompanyTrainList.module.css"
import img from "./sgt_trains.png"
import CompanyTrainList from "./CompanyTrainList";


function TrainList(props){
    return (
        <div className={css['company-section']}>
            <table>
                <CompanyTrainList
                    image={img}
                />
                <CompanyTrainList
                    image={img}
                />
                <CompanyTrainList
                    image={img}
                />
            </table>
        </div>
    )
}

export default TrainList