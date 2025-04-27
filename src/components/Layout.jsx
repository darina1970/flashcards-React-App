import { Outlet } from "react-router-dom";
import { Header } from './Header';
import {Footer} from './Footer'
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