import { useState } from "react";

function Toggle(){
    const[val, toggle] = useState(false);
    return(
        <>
            <button onClick={()=>toggle(!val)}><p>{!val? "hii": "hello"}</p></button>
            
        </>
    )
}
export default Toggle;