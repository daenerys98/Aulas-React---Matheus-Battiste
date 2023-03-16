import {useState} from 'react'

export const ListRender = () => {
    const [list] = useState (["Karol", "Eunice", "Cleo"]);

    const [users, setUsers] = useState ([
        {id: 1, name: "Karol", age: 24},
        {id: 545, name: "Cleo", age: 48},
        {id: 4849, name:"Eunice", age: 70},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random * 4);

        setUsers ((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key = {i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key = {user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
        <button onClick={deleteRandom} > Delete random user </button>
    </div>
  );
};

export default ListRender;
