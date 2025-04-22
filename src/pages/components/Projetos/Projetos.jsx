import { Link } from "react-router-dom";
import './Projetos.css'
import Fullstackbackground from '../../../assets/Fullstackbackground.png'
import todo from '../../../assets/todo.jpg'
import ecommerce from '../../../assets/ecommerce.jpg'
import APIREST from '../../../assets/APIREST.jpeg'

function Projetos () {
    return(
    <>
    <h1 className='titulo'>Projetos</h1>
    <div className='cards-container'>
        <div className='card'>
        <img className='projetoimg' src={Fullstackbackground} alt="" />
        <h3 className='mini-title'>Portfólio Pessoal</h3>
        <p className='card-text'>Uma plataforma desenvolvida em React e Node.js para apresentar meus trabalhos e competências.</p>
        <Link to="/projectos">
        <button className='button-proj'>Clique aqui</button>
        </Link>
    </div>
    <div className='card'>
        <img className='projetoimg' src={todo} alt="" />
        <h3 className='mini-title'>Aplicação ToDo</h3>
        <p className='card-text'>App simples em JavaScript para gestão de tarefas e listas, permitindo adicionar, editar e remover itens de forma intuitiva.</p>
        <Link to="/projectos">
        <button className='button-proj'>Clique aqui</button>
        </Link>
    </div>
    <div className='card'>
        <img className='projetoimg' src={ecommerce} alt="" />
        <h3 className='mini-title'>E-commerce Simples</h3>
        <p className='card-text'>Uma aplicação full-stack em React e Express.js que simula compras online, exibindo catálogos de produtos.</p>
        <Link to="/projectos">
        <button className='button-proj'>Clique aqui</button>
        </Link>
    </div>
    <div className='card'>
        <img className='projetoimg' src={APIREST} alt="" />
        <h3 className='mini-title'>API REST de Contactos</h3>
        <p className='card-text'>API com endpoints para criar, ler, atualizar e deletar contactos. Utiliza Express.js e PostgreSQL, exibindo princípios de REST.</p>
        <Link to="/projectos">
        <button className='button-proj'>Clique aqui</button>
        </Link>
    </div>
    </div>
    <h1 className='titulo'>Sobre mim</h1>
    <div class="timeline">
  <div class="line"></div>
  
  <div class="event">
    <div class="dot"></div>
    <h3>2018</h3>
    <p>Iniciei a minha carreira na área de hotelaria.</p>
  </div>

  <div class="event">
    <div class="dot"></div>
    <h3>2019</h3>
    <p>Transitei para o ramo imobiliário.</p>
  </div>

  <div class="event">
    <div class="dot"></div>
    <h3>2022</h3>
    <p>Intérprete e tradutor na DeltaSom Madeira em eventos multilíngues.</p>
  </div>

  <div class="event">
    <div class="dot"></div>
    <h3>2023</h3>
    <p>Professor de línguas na Volis Academy, Bratislava.</p>
  </div>
</div>

    </>
    )
    
}

export default Projetos