import { Link } from "react-router-dom";
import './introducao.css'

function Introducao () {
    return(
    <>
    <h1 className='titulo'>Bem-vindo ao Meu Portfólio</h1>
    <p className='intro-prgrf'>Olá! Eu sou o <strong>José Fernandes</strong>, desenvolvedor web com uma trajetória diversificada <br />
     que passou pela hotelaria, mercado imobiliário, serviços linguísticos e educação. <br />
      Agora, estou focado em expandir minhas habilidades na programação e desenvolvimento web. </p>
    <Link to="/about">
    <button className='button'>Saber mais</button>
    </Link>
    </>
    )
}

export default Introducao
    