import Cabecalho from '../../Components/Questao8/cabecalho'
import Name from '../../Components/Questao8/nome'
import Hobbies from '../../Components/Questao8/hobbies'
import Button from '../../Components/Questao8/button'
import './Questao8.css';

function Questao8() {
  return (
    <div className="Questao8">
      <div className='text'>
        <Cabecalho/>
        <Name/>
        <Hobbies/>
        <Button/>
      </div>
      
    </div>
  );
}

export default Questao8;