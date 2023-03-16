import { useState } from "react";

const CondicionalRender = () => {
    const [x] = useState(false);

    const [name] = useState("João")

    return (
    <div>
        <h> Isso será exibido? </h>
        {x && <p>Se x for true, sim!</p>} 
    </div>
    );
};

export default CondicionalRender;