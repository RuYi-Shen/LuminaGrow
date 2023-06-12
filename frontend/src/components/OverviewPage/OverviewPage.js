import Plant from '../../assets/plant.png';
import "./style.css";

export default function OverviewPage() {
    return (
        <>
        <div className="box">
            <div className="ground">
                <img className="plant1" src={Plant} />
                <img className="plant2" src={Plant} />
                <img className="plant3" src={Plant} />
                <img className="plant4" src={Plant} />
            </div>
        </div>
        <div className="box">
            <div className="ground">
                <img className="plant1" src={Plant} />
                <img className="plant2" src={Plant} />
                <img className="plant3" src={Plant} />
                <img className="plant4" src={Plant} />
            </div>
        </div>
        </>
    )
}