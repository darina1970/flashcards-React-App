import { Outlet } from "react-router-dom";
import { Header } from '../components/Header';
import {Footer} from '../components/Footer'
import styles from '../styles/Layout.module.css';

export const Layout = () => {
    return (
        <div>
            <Header />
            <main className={styles.content}>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}