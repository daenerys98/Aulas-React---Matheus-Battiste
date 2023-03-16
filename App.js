import logo from './logo.svg';
import './App.css';
import ListRender from './components/ListRender';
import CondicionalRender from './components/CondicionalRender';
import ShowUserName from './components/ShowUserName';
import CairDetails from './components/CairDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import UserDetails from './components/UserDetails';

function App() {

  const name="Joaquim"

  const cars = [
    {id: 1, brand: "Ferrari", color:"Amarelo", newCar: true, km: 0},
    {id: 1, brand: "Kia", color:"Verde", newCar: false, km: 1545},
    {id: 1, brand: "Ford", color:"Roxo", newCar: true, km: 0},
    {id: 1, brand: "Camaro", color:"Azul", newCar: false, km: 510},
  ];

  function showMessage() {
    console.log("Evento do componente pai")
  }


  const users = [
    {id: 1, nome: "Karol", idade:24},
    {id: 2, nome: "Ramony", idade:27},
    {id: 3, nome: "Eunice", idade:72}
  ]

  return (
    <div className="App">
      <h1>Avançando no React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Colação" />
      </div>

      {/* Imagem em asset */}
      <div>
      </div>
      <ListRender/>
      <CondicionalRender/>
      {/* Props */}
      <ShowUserName name={name}/>
      {/* Destructuring (desestruturando uma props) */}
      <CairDetails brand={"gol"} km={100} color={"verde"}/>
      {/* Reaproveitando (props) */}
      <CairDetails brand="Ford" color="Vermelha" km={0} newCar={true}/>
      <CairDetails brand="Opala" color="preto" km={1000} newCar={false}/>
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CairDetails
        key={car.id}
        brand={car.brand}
        color={car.color}
        km={car.km}
        newCar={car.newCar}/>
      ))}
      {/* Fragment */}
      <Fragment propFragment="teste"/>
      {/* Children */}
      <Container>
        <p>Este é o conteudo</p>
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage}/>
      {/* Desafio */}

    </div>
  );
}

export default App;
