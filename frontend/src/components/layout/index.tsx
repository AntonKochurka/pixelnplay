import { Outlet } from "react-router-dom";
import Header from "./header";
        

export default function Layout() {
    return (
        <div className="container p-6 h-min-screen bg-gradient-to-b from-[var(--color-zinc-900)] to-[var(--color-zinc-950)]">
            <Header />
            <main className="container">
                <Outlet/>
            </main>
        </div>
    );
}