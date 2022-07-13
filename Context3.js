import  { useContext } from "react";
import {Amar,Context1} from './Context1';
function Context3()
{
    var a = useContext(Amar); 
    return(<div>
        <h1 style={{color:"red"}}>{`Hello ${a} Everyone`}</h1>
        </div>
    );
}
export default Context3;