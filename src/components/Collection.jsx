import { ALL_CARDS } from "../cards"
import { useState } from "react"
import { Card } from "./Card.jsx"
import { CardStats } from "./CardStats.jsx"
import '../styles/collection.css'

export const Collection = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <div className="collection_container">
      <h1 className="collection_title">My Card Collection</h1>
      <div className="cards_grid">
        {ALL_CARDS.map((card) => (
          <div key={card.id} onClick={() => setSelectedCard(card)}>
            <Card data={card} />
          </div>
        ))}
      </div>
      {selectedCard && (
        <CardStats card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
  </div>
  )
}
