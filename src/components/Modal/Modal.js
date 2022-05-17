import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import './Modal.scss';

// const { slot, name, type } = props;

const Backdrop = props => {
   return <div className="backdrop" onClick={props.onClose} />;
};

const PokemonInfo = props => {
   return (
      <div className="pokemon-info">
         <h3>Name: {props.name}</h3>
         <img src={props.src}></img>
         <ul>Type: {props.type}</ul>
         <button type="button" className="modal-button" onClick={props.onClose}>
            Close
         </button>
      </div>
   );
};

const portalElement = document.getElementById('pokemon-info');

const Modal = props => {
   const { slot, name, type, onClose, src } = props;
   return (
      <Fragment>
         {ReactDOM.createPortal(<Backdrop className="backdrop" onClose={onClose} />, portalElement)}
         {ReactDOM.createPortal(
            <PokemonInfo
               key={slot}
               type={type}
               onClose={onClose}
               name={name}
               src={src}
            ></PokemonInfo>,
            portalElement
         )}
      </Fragment>
   );
};

export default Modal;
