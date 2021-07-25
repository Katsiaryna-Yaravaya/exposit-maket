import "./index.scss"

const Main = () => {
    return (
        <main className="main">
            <section className="main__general-content">
                <div className="input-container">
                    <input className="input-container__input" type="button"/>
                </div>
                <div className="double-button">
                    <button className="double-button__registration"/>
                    <button className="double-button__exit"/>
                </div>
            </section>

            <section className="main__secondary-content">
                <div className="img-box">
                    <div className="img-box__img">
                        <img alt="" src=""/>
                    </div>
                    <div className="img-box__img">
                        <img alt="" src=""/>
                    </div>
                </div>

                <div className="button-box">
                    <div className="button-box__button-left">
                        <button className="button-box__button"/>
                    </div>
                    <div className="button-box__button-middle">
                        <button className="button-box__button"/>
                    </div>
                    <div className="button-box__button-right">
                        <button className="button-box__button"/>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;