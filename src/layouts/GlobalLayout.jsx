import NavBar from "../components/NavBar";
import { Outlet } from "react-router";

const GlobalLayout = (props) => {

    return (
        <div className="global-layout">
            <NavBar />
            <Outlet />
        </div>
    )
}

export default GlobalLayout;