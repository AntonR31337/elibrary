import "./style.css";
import {SearchAppBar} from "./searchappbar/index.js";

export function Header(){
    return (
        <header>
            <SearchAppBar />
        </header>
    );
}