import "./index.scss"

const Header = () => {

    return (
        <header className="header">
            <div className="header__menu-bar">
                <div className="menu-bar">
                    <img className="menu-bar__logo" alt="" src=""/>
                    <button className="menu-bar__nav"/>
                </div>
                <button className="header__button"/>
            </div>
        </header>
    );
}

export default Header;