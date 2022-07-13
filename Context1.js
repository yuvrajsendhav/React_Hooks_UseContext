import {  useState,createContext } from "react";
import Component4 from "./Component4";

import Context3 from './Context3';


 var Amar = createContext();
function Context1()
{
    var  [a, setA] = useState("Goodmorning");
    return(
        <Amar.Provider value = {a}>
            <div>
                <h1>This is Context 1st</h1>
            <Context3 />
            <Component4 />
            </div>
        </Amar.Provider>
     );
}
export {Amar, Context1};