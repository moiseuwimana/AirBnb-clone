function Hero() {
  return (
    <section className='Hero--container'>

      <div style={{width: "395.91px", height: "232px", left: "77px", top: "230px", position: "absolute"}}>
        <img style={{width: "72.31px", height: "96.42px", left: "0px", top: "48.81px", position: "absolute", borderRadius: "8.95px"}} src={require('../images/image1.png')} />
        <img style={{width: "72.91px", height: "96.42px", left: "161.50px", top: "135.58px", position: "absolute", borderRadius: "8.95px"}} src={require('../images/image5.png')} />
        <img style={{width: "72.31px", height: "96.42px", left: "323.59px", top: "18.08px", position: "absolute", borderRadius: "8.95px"}} src={require("../images/image3.png")} />
        <img style={{width: "72.91px", height: "97.02px", left: "242.85px", top: "0px", position: "absolute", borderRadius: "8.95px"}} src={require("../images/image4.png")} />
        <img style={{width: "72.31px", height: "96.42px", left: "242.85px", top: "105.45px", position: "absolute", borderRadius: "8.95px"}} src={require('../images/image2.png')} />
        <img style={{width: "72.31px", height: "97.02px", left: "323.59px", top: "122.93px", position: "absolute", borderRadius: "8.95px"}} src={require('../images/image6.png')} />
        <img style={{width: "72.91px", height: '96.42px', left: '161.50px', top: '30.13px', position: 'absolute', borderRadius: '8.95px'}} src={require('../images/image7.png')} />
        <img style={{width: '72.31px', height: '97.02px', left: '80.75px', top: '79.54px', position: 'absolute', borderRadius: '8.95px'}} src={require('../images/image8.png')} />
        <img style={{width: '73.52px', height: '63.88px', left: '80.75px', top: '7.23px', position: 'absolute', borderRadius: '8.95px'}} src={require('../images/image9.png')} />
      </div>
      <h1 className='Hero--title'>Online Experience</h1>
      <p className='Hero--content'>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
    </section>
  )
}
export default Hero