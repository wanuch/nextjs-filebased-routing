import Link from "next/link";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { UrlObject } from "url";
import classes from "./button.module.css"

export default function Button(props: { link: string | UrlObject; children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
    return (
        <Link className={classes.btn} href={props.link}>
            {props.children}
        </Link>
    );
}