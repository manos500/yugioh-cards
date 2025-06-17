import '../styles/cardStats.css'

export const CardStats = ({card, onClose}) => {
  return (
    <div className="cardStats_overlay" onClick={onClose}>
        <div className="cardStats_container" onClick={(e) => e.stopPropagation()}>
        <div className="cardStats_image">
            <img src={card.image} alt={card.name} />
        </div>
        <div className="cardStats_top1">
            <h2>{card.name}</h2>
            <p className='gray_text'><strong>[{card.monsterType}/{card.cardType}]</strong></p>           
            <p>ATK: 3000 / DEF: 2500</p>    
        </div>
        <div className="cardStats_top2">
          <p>⭐ Level: {card.level}</p>
          <p>Attribute: {card.attribute}</p>
        </div>
        <div className="cardStats_mid">
          <p>{card.description}</p>
        </div>
        <div className="cardStats_bottom">
          <p className='underline'>How to Obtain</p>
          <p>{card.pack}</p>
        </div>
      </div>
  </div>
  )
}
