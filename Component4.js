import  { useContext } from "react";
import {Amar,Context1} from './Context1';
function Component4()
{
    var a = useContext(Amar); 
    return(<div>
        <h1 style={{color:"Green"}}>{`Yuvraj ${a} to you`}</h1>
        </div>
    );
}
export default Component4;