import BackgroundImage from './BackgroundImage';
import Screen from './Screen';
import Aside from './Aside';


function Dashboard() {

    return (
        <div className="dashboard__layout">
            <BackgroundImage />
            <Screen>
                <Aside />
            </Screen>
        </div>
    )
}

export default Dashboard