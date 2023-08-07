import ReactDOM from 'react-dom'
import './Alert.css'

const Alert = ({ message, onClose }) => {
  return ReactDOM.createPortal(
    <div className='alert-notification'>
      <p>{message} </p>
      <div type='button'>X</div>
    </div>, document.body
  )
}
export default Alert
