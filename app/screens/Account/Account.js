import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import Loading from "../../components/Loading";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";


export default function Account() {
    const [login, setLogin] = useState(null); //empieza null porque no sabemos si esta logeado o no

    //mientras el login sea null mostrara el cargando
    //cuando el use efect se ejecute por el cambio del estado de setLogin mostrara
    // UserLogged o UserGuest dependiendo de si el usuario esta logado o no.

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            !user ? setLogin(false) : setLogin(true); //determina si el usuario esta logeado o no
        });
    }, []);

    if (login === null) return <Loading isVisible={true} text="Cargando..." />;//mientras se carga el usuario muestra esto

    return login ? <UserLogged /> : <UserGuest />;
}