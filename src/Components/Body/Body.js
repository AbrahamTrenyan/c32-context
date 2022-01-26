import { useContext } from 'react';
import { Context } from '../../Store/appContext';
import './Body.css';
const Body = () => {
  const {nombre, cambiarNombre} = useContext(Context)
  return (
    <div className="body">
      <form >
        <label className="form-label">ingrese su nombre</label>
        <input type="text"  onChange={(e) => cambiarNombre(e)} value={nombre}/>
      </form>
    </div>
  );
}

export default Body;