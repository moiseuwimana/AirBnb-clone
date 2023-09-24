function Card() {
  return (
    <div className="card">
      <img className="card--image" src={require("../images/katie-zaferes.png")} />
      <div className="card--stats">
        <img className="card--star" src={require("../images/star.png")} />
        <span>5.0</span>
        <span className="gray">(6) &#183;</span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p><span className="bold">From $136</span> / person</p>
      
    </div>
  )
}
export default Card