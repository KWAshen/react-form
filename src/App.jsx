import { useState } from "react";
const articoli = [
  "Costume",
  "Ombrellone",
  "Crema solare",
  "Ciabatte",
  "Telo Mare",
];

function App() {
  const [newarticle, setnewarticle] = useState("")
  const [article, setarticle] = useState(articoli);
  
  const handlesubmit = (a) => {
    a.preventdefaoult();
   
    const newarticle = [...article,newarticle];
    setarticle(newarticle);
  };
  return (
    <>
     <div className="container my-5">
      <div className="row">
        <div className="col-12 gy-3">
          <h1>Lista articoli</h1>
        </div>
        <div className="col-12">
          <ul className="lista-unstyled ms-0">
            {articles.map((article, index) =>{
              return <li key={index}>{article}</li>
            })}
          </ul>
        </div>
        <div className="col-12">
          <form onSubmit={handlesubmit} className="mt-3">
            <div className="d-flex">
             <input type="text" 
             className="form-control me-2" placeholder="aggiungi articolo"
             value={newarticole}
             onChange={(a) => setnewarticole(a.target.value)}/>
             <button className="btn btn-success">aggiungi</button>
            </div>
          </form>
        </div>
      </div>
     </div>
    </>
  )
}

export default App