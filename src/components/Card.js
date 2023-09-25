function Card(props) {
  return (
    <div className="card">
      <img className="card--image" src={require(`../images/${props.img}`)} />
      <div className="card--stats">
        <img className="card--star" src={require("../images/star.png")} />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) &#183;</span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
      
    </div>
  )
}
export default Card