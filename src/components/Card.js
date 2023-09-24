function Card() {
  return (
    <div>
      <div className='image--container'>
        <img src={require('../images/katie-zaferes.png')} />
      </div>
      <div className='rating-info'>
        <img src={require('../images/star.png')} />
        <div>5.0</div>
        <div>(6) &#183; USA</div>
      </div>
      <div>
        <p>Life Lesson with Katie zaferes</p>
        <p><strong>From $136</strong> / person</p>
      </div>
    </div>
  )
}
export default Card