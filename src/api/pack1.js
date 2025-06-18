import axios from "axios"

export const fetchPack1 = async () => {
    const response = await axios.get(
        'https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=Legend%20of%20Blue%20Eyes%20White%20Dragon'
      );
      return response.data.data.map((card) => ({
        id: card.id,
        name: card.name,
        image: card.card_images[0].image_url,
        cardType: card.type,
        attribute: card.attribute,
        level: card.level,
        monsterType: card.race,
        rarity: card.card_sets ? card.card_sets[0].rarity : "Unknown",
        description: card.desc,
        unlocked: false,
      }));
}