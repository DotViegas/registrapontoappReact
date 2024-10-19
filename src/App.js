import './App.css'
import Estrutura from './componentes/Estrutura';
import { Guia } from './componentes/Guia/Guia';

function App() {
  return (
    <div className="App">
      <body>
        <Guia />
        <Estrutura />
      </body>
    </div>
  );
}

export default App;