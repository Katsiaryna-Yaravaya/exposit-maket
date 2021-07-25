import "./index.scss"

const Aside = () => {
    return (
        <aside className="aside">
            <nav className="aside__nav">
                <ul className="aside__nav-list">
                    <li className="aside__title"><a href="#"/></li>
                    <li className="aside__title"><a href="#"/></li>
                    <li className="aside__title"><a href="#"/></li>
                    <li className="aside__title"><a href="#"/></li>
                    <li className="aside__title"><a href="#"/></li>
                </ul>
            </nav>
            <div className="aside__box">
                <button className="box__button-end"/>
            </div>
        </aside>
    );
};

export default Aside;