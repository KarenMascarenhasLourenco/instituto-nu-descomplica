import ListGroup from '../../components/ListGroup/ListGroup'
import './Folders.css'

const Folders = () => {
  return (
   <div>
    <ListGroup
     items={[
      {
       title: " primeira pasta",
       total: 0,
      },
      {
       title: "segunda pasta",
       total: 5,
      },
      {
       title: "terceira pasta",
       total: 0,
      },
      {
       title: "quarta pasta",
       total: 0,
      },
     ]}
    />
   </div>
  );
}

export default Folders