import Badge from '../Badge/Badge'
import './ListGroup.css'

const ListGroup = ({ items }) => {
  return (
    <ul className='list-group'>
      {items.map((item, itemIndex) => (
        <li key={itemIndex}>
          <h4>{item.title}</h4>
          {item.total ? <Badge total={item.total} /> : null}
        </li>
      ))}
    </ul>
  )
}

export default ListGroup
