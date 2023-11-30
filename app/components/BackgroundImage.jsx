import dashboard from '../assets/images/background-dashboard.png';

function BackgroundImage() {

    return (
        <div className="dashboard__layout">
            <img className="dashboard__img" src={dashboard.src} alt="dfsdf" />
        </div>
    )
}

export default BackgroundImage