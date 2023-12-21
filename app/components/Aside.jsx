
import logo from '../assets/images/logo-peugeot.svg';

function Aside() {

    return (
        <aside className="aside-section">
            <img className="logo" src={logo.src} ></img>
            <div className="element__group">
                <ul className="navigation">
                    <li className="item"></li>
                </ul>
            </div>
        </aside>
    )
}

export default Aside