import BackgroundImage from './BackgroundImage';
import Screen from './Screen';
import Aside from './Aside';
import car from '../assets/images/car.png';

function Dashboard() {

    return (
        <div className="dashboard__layout">
            <BackgroundImage />
            <Screen>
                <Aside />
                <div class="main">
                    <img className="dashboard__car" src={car.src} alt="voiture" />
                </div>
            </Screen>
        </div>
    )
}

export default Dashboard