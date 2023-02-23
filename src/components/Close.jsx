import cancel from '../images/cancel.png';

function Close(props) {
  return (
    <div id='cancel' className='icon-cross' onClick={props.onClick}>
      <img id='chevron' src={cancel} alt='icon pour fermer la page' />
    </div>
  );
}

export default Close;
