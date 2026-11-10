
import { useState } from "react";
import Header from "./components/Header";
import "./App.css";

const avisos = [
  {
    id: 1,
    data: "HOJE • 08:30",
    titulo: "Alteração de rota no Centro",
    descricao:
      "A coleta será realizada no período da tarde devido à manutenção.",
    cor: "laranja",
    comunicado:
      "Devido à manutenção, a coleta no Centro será realizada no período da tarde."
  },
  {
    id: 2,
    data: "ONTEM • 16:10",
    titulo: "Feriado municipal",
    descricao:
      "Confira o calendário especial de coleta desta semana.",
    cor: "verde",
    comunicado:
      "Consulte o calendário especial de coleta durante o feriado municipal."
  },
  {
    id: 3,
    data: "25 OUT • 10:00",
    titulo: "Manutenção programada",
    descricao:
      "Algumas regiões poderão ter atraso temporário.",
    cor: "verde",
    comunicado:
      "Algumas regiões poderão apresentar atrasos temporários devido à manutenção programada."
  }
];

function App() {
  const [avisoAberto, setAvisoAberto] = useState(null);

  return (
    <div className="pagina">
      <Header />

      <main id="inicio">
        <section className="banner">
          <div className="banner-texto">
            <h1>Avisos da coleta</h1>
            <p>
              Acompanhe atualizações, mudanças e comunicados oficiais.
            </p>
          </div>
        </section>

        <section className="lista-avisos" id="avisos">
          {avisos.map((aviso) => (
            <article
              key={aviso.id}
              className={`aviso aviso-${aviso.cor}`}
            >
              <div className="barra-lateral"></div>

              <div className="aviso-conteudo">
                <span className="aviso-data">
                  {aviso.data}
                </span>

                <h2>{aviso.titulo}</h2>

                <p>{aviso.descricao}</p>
              </div>

              <button
                className="ler-comunicado"
                onClick={() => setAvisoAberto(aviso)}
              >
                Ler comunicado →
              </button>
            </article>
          ))}
        </section>
      </main>

      {avisoAberto && (
        <div
          className="modal-fundo"
          onClick={() => setAvisoAberto(null)}
        >
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-titulo"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="fechar"
              aria-label="Fechar comunicado"
              onClick={() => setAvisoAberto(null)}
            >
              ×
            </button>

            <h2 id="modal-titulo">
              {avisoAberto.titulo}
            </h2>

            <p>{avisoAberto.comunicado}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
