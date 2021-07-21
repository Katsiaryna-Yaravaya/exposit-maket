import Aside from "./internal/aside"
import Main from "./internal/main"

import "./index.scss"

const Container = () => {

    return (
        <div className="container">
            <Aside/>
            <Main/>
        </div>
    );
}
export default Container;