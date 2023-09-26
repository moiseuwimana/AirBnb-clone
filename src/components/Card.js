function Card(props) {
  let badge;
  if (props.openSpot === 0) {
    badge = "SOLD OUT"
  } else if (props.country === "Online") {
    badge = "ONLINE"
  }
  return (
    <div className="card">
      {badge && <div className="card--badge">{badge}</div>}
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