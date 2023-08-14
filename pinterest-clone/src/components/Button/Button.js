import './Button.css'
import Spinner from '../Spinner/Spinner'

const Button = ({ label, loading, children, loadinglabel, ...buttonProps }) => {
  return (
    <button className='button buttonAction' {...buttonProps}>
      <Spinner loading={loading} />
      {loading ? loadinglabel : label}
      {children}
    </button>
  )
}
export default Button
