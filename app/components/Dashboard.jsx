import BackgroundImage from './BackgroundImage';
import Screen from './Screen';
import Aside from './Aside';
import car from '../assets/images/car.png';
import map from '../assets/images/map.png';

function Dashboard() {

    return (
        <div className="dashboard__layout">
            <BackgroundImage />
            <Screen>
                <Aside />
                <div class="main">
                    <img className="dashboard__car" src={car.src} alt="voiture" />

                    <div class="bottom_nav">
                        <svg width="754" height="326" viewBox="0 0 754 326" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.364014 58.0001C0.364014 25.9676 26.3315 0 58.364 0H695.807C727.84 0 753.807 25.9675 753.807 58V267.647C753.807 299.679 727.84 325.647 695.807 325.647H58.364C26.3315 325.647 0.364014 299.679 0.364014 267.647V58.0001Z" fill="#506463" />
                            <path d="M275.431 16.3817H478.143" stroke="white" stroke-width="9" stroke-linecap="round" />
                        </svg>

                        <div>
                            <h1>Garage de l’Abbaye</h1>
                            <p>31 rue des Olivettes<br></br>
                                44000, Nantes</p>
                            <button>Appeler</button>
                        </div>
                        <div className='map'>
                            <img className="dashboard__map" src={map.src} alt="map" />
                        </div>


                    </div>
                </div>

            </Screen>
        </div>
    )
}

export default Dashboard