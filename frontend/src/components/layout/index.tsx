import { Outlet, useLocation } from "react-router-dom";
import Header from "./header";
        

export default function Layout() {
    const loc = useLocation();
    const with_gradient = () => {
        if (loc.pathname === "/") {
            return " h-min-screen bg-gradient-to-b from-[var(--color-zinc-900)] to-[var(--color-zinc-950)]"
        }
        return ""
    }
    return (
        <div className={`container p-6 ${with_gradient()}`}>
            <Header />
            <main className="container">
                <Outlet/>
            </main>
        </div>
    );
}