import './index.css'

const DestinationItem = props => {
  const {item, key} = props
  const {imgUrl, name} = item

  return (
    <li className="img-container">
      <img src={imgUrl} alt={name} />
      <p>{item.name}</p>
    </li>
  )
}

export default DestinationItem
