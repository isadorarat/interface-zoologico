import './Carrossel.css'
import Carousel from 'react-bootstrap/Carousel';
import {useState} from 'react';
import jsonData from '../../assets/json/imagens.json';
function Carrossel() {
    const[Carrossel,setCarrossel] = useState([]);

    useEffect(()=> {
        setCarrossel(jsonData);
    });

    return (
        <div className='ctn-carrossel'>
            <Carousel>
                {Carrossel .map(animal,()=>
                <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100"
                    src={Animais.src}
                    alt={animal.index}
                />
                <Carousel.Caption>
                    <h3>{animal.caption}</h3>
                    <p>{animal.text}</p>
                </Carousel.Caption>
            </Carousel.Item>
                )};
            </Carousel>
        </div>
    );
}

export default Carrossel;