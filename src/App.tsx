import React, {useState} from 'react';
import './App.css';
import Header from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./map/NewComponent";
import Button1 from "./button/Button1";
import Button2 from "./button/Button2";
import UseState from "./useState/UseState";
import Filter from "./filter/Filter";

function App() {






    // const topCars = [
    //     {manufacturer:'BMW', model:'m5cs'},
    //     {manufacturer:'Mercedes', model:'e63s'},
    //     {manufacturer:'Audi', model:'rs6'}
    // ]


    return (
        <div>

            <Filter/>

            {/*<UseState/>*/}

            {/*<Button2/>*/}
            {/*<Button1/>*/}

            {/*<Header title={'new header'}/>*/}
            {/*<Body titleForBody={'new body'}/>*/}
            {/*<Footer titleForFooter={'new footer'}/>*/}

            {/*<NewComponent cars = {topCars} />*/}
        </div>

    );
}

export default App;
