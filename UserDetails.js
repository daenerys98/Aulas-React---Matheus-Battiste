import { useState } from "react"

const UserDetails = (id, nome, idade) => {

  return <div>
    <h2>Nome: {nome}</h2>
    <p>Idade: {idade}</p>
    {idade >= 18 ? (<p>Pode tirar carteira</p>) : (<p>Menor não pode</p>)}
  </div>
}

export default UserDetails;
