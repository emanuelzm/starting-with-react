import React from "react";
import './TodoSearch.css';

class Componente extends React.Component {
    constructor() {
        this.state = {
            patito: 'Juan'
        };
    }
}

function TodoSearch() {
    const estado = React.useState();


    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    }

    return(
        <input onChange={onSearchValueChange} className="TodoSearch" placeholder="Cebolla" />
    );
}
export {TodoSearch };