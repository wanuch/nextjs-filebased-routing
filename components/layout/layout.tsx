import { Fragment } from "react";
import MainHeader from './main-header'

export default function Layout(props: any) {
    return (
        <Fragment>
            <header></header>
            <MainHeader />
            <main>
                {props.children}
            </main>
        </Fragment>
    );
}