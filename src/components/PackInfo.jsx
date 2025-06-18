import { useState } from "react"
import { Card } from "./Card.jsx"
import { CardStats } from "./CardStats.jsx"
import {useQuery} from "@tanstack/react-query"
import { fetchPack1 } from "../api/pack1.js"
import '../styles/collection.css'

export const PackInfo = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const {isLoading, isError , data: cards} = useQuery({
    queryKey: ['cards'],
    queryFn: fetchPack1,
  })

  if (isLoading) return <p>Loading cards...</p>;
  if (isError) return <p>Failed to load cards.</p>;

  const cardTypes  = [...new Set(cards.map((card) => card.cardType))];


  return (
    <div className="collection_container">
    <h1 className="collection_title">My Card Collection</h1>
  
    {cardTypes.map((type) => (
      <h2 key={type} className="type_title"></h2>
    ))}
  
    <div className="cards_grid">
      {cardTypes.map((type) => {
        const filteredCards = cards.filter((card) => card.cardType === type);
        return filteredCards.map((card) => (
          <div key={card.id} onClick={() => setSelectedCard(card)}>
            <Card data={card} />
          </div>
        ));
      })}
    </div>
      {selectedCard && (
        <CardStats card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
  </div>
  )
}
