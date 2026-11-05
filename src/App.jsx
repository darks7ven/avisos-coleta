
import Header from './Header'
import Card from './Card'
import Footer from './Footer'
import './App.css'

function App() {
  return (
    <div className="pagina">
      <Header />

      <main>
        <Card
          titulo="Coleta de Lixo Comum"
          descricao="Informações sobre a coleta de resíduos comuns."
        />

        <Card
          titulo="Coleta Seletiva"
          descricao="Informações sobre a coleta de materiais recicláveis."
        />
      </main>

      <Footer />
    </div>
  )
}

export default App
