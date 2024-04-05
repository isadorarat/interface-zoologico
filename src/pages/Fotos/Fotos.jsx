import './Fotos.css';
import Navegacao from '../../components/Navegacao/Navegacao';
import Carrossel from '../../components/Carrossel/Carrossel';

function Fotos() {
    return(
        <>
            <Navegacao />
            <h1 className='h1-fotos'>Fotos</h1>
            <Carrossel />
        </>
    );
}

export default Fotos