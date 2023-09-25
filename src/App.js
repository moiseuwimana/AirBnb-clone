import NavBar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'


/*
- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar (in place of the current <Card /> component)

Note: We haven't syled the group of components yet, so they'll still be block elements, stacked vertically. we'll add styling later.
*/




export default function App() {
  const cardElements = data.map((card)=>{
    return (
      <Card 
      img = {card.coverImg}
      rating = {card.stats.rating}
      reviewCount = {card.stats.reviewCount}
      country = {card.location}
      title = {card.title}
      price = {card.price}
    />
    )
  })
  return (
    <div>
      <NavBar />
      {/* <Hero /> */}
      {cardElements}
    </div>

  )
}