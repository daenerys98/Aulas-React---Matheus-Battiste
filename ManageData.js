import {useState} from "React";

const ManageData = () => {
    let someData = 10;

    console.log(someData);

    const [number, setNumber] = useState();

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick = {() => (someData = 15)}>Mudar variável</button>
      </div>
      <div>
        <p>Valor: {number}</p>
      </div>
    </div>
    
  );
};

export default ManageData;