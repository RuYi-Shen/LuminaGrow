import Plant from '../../assets/plant.png';
import "./style.css";
import Navigator from "../Navigator/index.js";

export default function OverviewPage() {
    return (
        <div className="overview-container">
            <Navigator />
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
        </div>
    )
}