import "../Header.css";

function Header() {
  return (
    <header className="cabecalho">
      <div className="logo">
        <div className="logo-nome">
          <span className="logo-icone">♻</span>
          <span>Coleta+</span>
        </div>
        <p>Serviço de coleta urbana</p>
      </div>

      <nav className="menu">
        <a href="#inicio">Início</a>
        <a href="#horarios">Horários</a>
        <a href="#avisos">Avisos</a>
        <a href="#ocorrencias">Ocorrências</a>
      </nav>
    </header>
  );
}

export default Header;
