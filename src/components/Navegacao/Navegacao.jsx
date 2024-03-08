import { Link } from 'react-router-dom';
import './Navegacao.css'

function Navegacao() {
    return (
        <div className="barra-navegacao">
            <div className="logo-zoo">
                <h1>ZOOLÓGICO</h1>
            </div>

            <div className="navbar-opcoes">
                <ul>
                    <li>
                        <Link style={{ color: "#A7A000" }} to="/">Início</Link>
                    </li>
                    <li>
                        <Link style={{ color: "#A7A000" }} Cto="/animais">Os Animais</Link>
                    </li>
                    <li>
                        <Link style={{ color: "#A7A000" }} to="/fotos" >Fotos</Link>
                    </li>
                    <li>
                        <Link style={{ color: "#A7A000" }} to="/depoimentos">Depoimentos</Link>
                    </li>
                    <li>
                        <Link style={{ color: "#A7A000" }} to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navegacao;