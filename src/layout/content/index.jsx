import Aside from "./internal/aside"
import Main from "./internal/main"

import "./index.scss"

const Content = () => {
    return (
        <div className="content">
            <Aside/>
            <Main/>
        </div>
    );
}

export default Content;