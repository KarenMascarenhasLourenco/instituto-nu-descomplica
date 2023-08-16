import './Button.css'
import Spinner from '../Spinner/Spinner'

const Button = ({ label, loading, children, loadinglabel, disabled, ...buttonProps }) => {
  return (
    <button className='button buttonAction' {...buttonProps} disabled={disabled}>
      <Spinner loading={loading} />
      {loading ? loadinglabel : label}
      {children}
    </button>
  )
}
export default Button
