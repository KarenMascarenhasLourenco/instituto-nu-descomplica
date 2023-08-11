import PinCard from "../../components/PinCard/PinCard";
import { useAppContext } from "../../store/AppContext";
const Card = (props) => {
  const { state, dispatch} = useAppContext()
  const handleClick= () => {
    console.log('aeeeeeeeee ta dando certo')
    dispatch({
      type:'open modal save pin'
    })
    console.log({ state })
  }
  return(
    <PinCard {...props} onClick={handleClick}/>
  )
}

export default Card;