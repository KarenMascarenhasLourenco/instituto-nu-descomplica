import PinCard from "../../components/PinCard/PinCard";
import { useAppContext } from "../../store/AppContext";
import { openModalSavePinAction } from "../../store/Action";
const Card = (props) => {
  const { state, dispatch} = useAppContext()
  const handleClick= () => {
    console.log('aeeeeeeeee ta dando certo')
    dispatch(openModalSavePinAction())
    console.log({ state })
  }
  return(
    <PinCard {...props} onClick={handleClick}/>
  )
}

export default Card;