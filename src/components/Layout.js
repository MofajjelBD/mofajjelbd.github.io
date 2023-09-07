import Nav from "./Nav";
import classNamees from '../styles/layout.module.css'


export default function Layout({ children }) {
    return (
        <div>
            <Nav />
            <main className={classNamees.main}>
                <div className={classNamees.container}>
                    {children}
                </div>
            </main>
        </div>

    );
}