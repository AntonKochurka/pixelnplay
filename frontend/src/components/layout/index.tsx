import { Outlet } from "react-router-dom";
import Header from "./header";

export default function Layout() {
    return (
        <div className="container p-6">
            <Header />
            <main className="container">
                <Outlet/>
            </main>
        </div>
    );
}