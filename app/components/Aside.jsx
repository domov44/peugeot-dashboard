
import logo from '../assets/images/logo-peugeot.svg';

function Aside() {

    return (
        <aside className="aside-section">
            <div className="content">
                <img className="logo" src={logo.src} ></img>
                <div className="element__group">
                    <ul className="navigation">
                        <li className="item">Test</li>
                        <li className="item">Test</li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Aside