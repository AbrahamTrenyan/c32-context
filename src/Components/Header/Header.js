import { useContext } from 'react';
import { Context } from '../../Store/appContext';
import './Header.css';
const Header = () => {
  const {nombre} = useContext(Context)
    return (
        <div className='header'>
          <h1>Tu nuevo nombre es: {nombre} </h1>
        </div>
      );
}
 
export default Header;
