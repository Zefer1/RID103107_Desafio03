import './footer.css'
import github from '../../../assets/github.svg';
import linkedin from '../../../assets/linkedin.svg';
import figma from '../../../assets/figma.svg'

function Footer () {
    return (
        <>
    <div className='grid'>
            <h3 className='contato'>Email: <br />
            ze_932@hotmail.com
            </h3> 
            
            <div className='social-logos'>
            <a href="https://github.com/Zefer1">
              <img src={github} alt="GitHub" />
            </a>
            <a href=""><img src={linkedin} alt="LinkedIn" /></a>
            <a href="" ><img src={figma} alt="Figma" /></a> 
            </div>
             
    
     </div>
   
            
    
   
    
    </>
    )

}

export default Footer