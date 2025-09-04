const articoli = [
  "Costume",
  "Ombrellone",
  "Crema solare",
  "Ciabatte",
  "Telo Mare",
];

function App() {
  return (
    <>
     <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1>Lista articoli</h1>
        </div>
        <div className="col-12">
          <ul className="lista-unstyled ms-0">
            {articoli.map((article, index) =>{
              return <li key={index}>{article}</li>
            })}
          </ul>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
