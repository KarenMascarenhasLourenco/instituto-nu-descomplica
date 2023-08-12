import PinCard from "../../components/PinCard/PinCard";
import { useAppContext } from "../../store/AppContext";
import { openModalSavePinAction } from "../../store/Action";
const Card = (props) => {
  const { state, dispatch} = useAppContext()
  const handleClick= (pinId) => {
    console.log('aeeeeeeeee ta dando certo')
    dispatch(openModalSavePinAction(pinId))
    console.log({ state }, pinId)
  }
  return(
    <PinCard {...props} onClick={handleClick}/>
  )
}

export default Card;