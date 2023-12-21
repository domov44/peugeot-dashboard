
import logo from '../assets/images/logo-peugeot.svg';
import car from '../assets/images/car.svg';
import map from '../assets/images/map.svg';
import musique from '../assets/images/music.svg';
import chat from '../assets/images/chat.svg';
import sun from '../assets/images/sun.svg';
import setting from '../assets/images/setting.svg';

function Aside() {

    return (
        <aside className="aside-section">
            <div className="content">
                <img className="logo" src={logo.src} ></img>
                <ul className="primary__navigation">
                    <li className="item"><img className="icone" src={car.src}></img></li>
                    <li className="item"><img className="icone" src={map.src}></img></li>
                    <li className="item"><img className="icone" src={musique.src}></img></li>
                    <li className="item"><img className="icone" src={chat.src}></img></li>
                    <li className="item"><img className="icone" src={sun.src}></img></li>
                </ul>
                <ul className="secondary__navigation">
                    <li className="item"><img className="icone" src={setting.src}></img></li>
                </ul>
            </div>
        </aside>
    )
}

export default Aside