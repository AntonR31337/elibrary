import "./style.scss";
import { SearchAppBar } from "./searchappbar/SearchAppBar.js";

export function Header({ authed }) {
    return (
        <SearchAppBar authed={authed} />
    );
}