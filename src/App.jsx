import React from "react";
import Header from "./components/Header";

export default function App({ name }) {
    const cats = [{id:1,name:"George"}, {id:2,name:"Cleo"}];

    return (
        <>
            <Header/>
            <h1>Hello, {name}</h1>
            <p>Prrrr</p>
            <ul>
            {cats.map(cat => <li key={cat.id}>{cat.name}</li>)}
            </ul>
        </>
    );
}
