import ReactDOM from 'react-dom'
import './Alert.css'

const Alert = ({ message, onClose, feedback}) => {
  return ReactDOM.createPortal(
    <div className={`alert-notification + ${feedback}`}>
      <p>{message} </p>
      <div type='button'onClick={onClose}>X</div>
    </div>, document.body
  )
}
export default Alert
