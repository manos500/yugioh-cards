import { card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15 } from "./assets/index.js"

export const ALL_CARDS = [

    {
      id: 1,
      name: "Tri-Horned Dragon",
      image: card1,
      cardType: "Normal",
      attribute: "DARK",
      level: 8,
      monsterType: "Dragon",
      rarity: "R",
      description: "An unworthy dragon with three sharp horns sprouting from its head.",
      unlocked: true,
      pack: "Legends of Blue Eyes White Dragon",
      atk: 2850,
      def: 2350 
    },
    {
      id: 2,
      name: "Blue-Eyes White Dragon",
      image: card2,
      cardType: "Normal",
      attribute: "Light",
      level: 8,
      monsterType: "Dragon",
      rarity: "Ultra-Rare",
      description: "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.",
      unlocked: true, 
      pack: "Legends of Blue Eyes White Dragon",
      atk: 3000,
      def: 2500 
    },
    {
      id: 3,
      name: "Hitotsu-Me Giant",
      image: card3,
      cardType: "Normal",
      attribute: "EARTH",
      level: 4,
      monsterType: "Beast-Warrior",
      rarity: "N",
      description: "A one-eyed behemoth with thick, powerful arms made for delivering punishing blows.",
      unlocked: true, 
      pack: "Legends of Blue Eyes White Dragon",
      atk: 1200,
      def: 1000 
    },
    {
      id: 4,
      name: "Flame Swordsman",
      image: card4,
      cardType: "Fusion",
      attribute: "FIRE",
      level: 5,
      monsterType: "Warrior",
      rarity: "R",
      description: '"Flame Manipulator" + "Masaki the Legendary Swordsman"',
      unlocked: true, 
      pack: "Legends of Blue Eyes White Dragon",
      atk: 1800,
      def: 1600 
    },
    {
      id: 5,
      name: "Skull Servant",
      image: card5,
      cardType: "Normal",
      attribute: "DARK",
      level: 1,
      monsterType: "Zombie",
      rarity: "N",
      description: "A skeletal ghost that isn't strong but can mean trouble in large numbers.",
      unlocked: true, 
      pack: "Legends of Blue Eyes White Dragon",
      atk: 300,
      def: 200 
    },
    {
      id: 6,
      name: "Dark Magician",
      image: card6,
      cardType: "Normal",
      attribute: "DARK",
      level: 7,
      monsterType: "Spellcaster",
      rarity: "UR",
      description: "The ultimate wizard in terms of attack and defense.",
      unlocked: true, 
      pack: "Legends of Blue Eyes White Dragon",
      atk: 2500,
      def: 2100 
    },
    {
      id: 7,
      name: "Gaia The Fierce Knight",
      image: card7,
      cardType: "Normal",
      attribute: "EARTH",
      level: 7,
      monsterType: "Warrior",
      rarity: "N",
      description: "A knight whose horse travels faster than the wind.His battle-charge is a force to be reckoned with.",
      unlocked: true, 
      pack: "Legends of Blue Eyes White Dragon",
      atk: 2300,
      def: 2100 
    },
    {
      id: 8,
      name: "Celtic Guardian",
      image: card8,
      cardType: "Normal",
      attribute: "EARTH",
      level: 4,
      monsterType: "Warrior",
      rarity: "R",
      description: "An elf who learned to wield a sword, he baffles enemies with lightning-swift attacks.",
      unlocked: true,
      pack: "Legends of Blue Eyes White Dragon",
      atk: 1400,
      def: 1200  
    },
    {
      id: 9,
      name: "Basic Insect",
      image: card9,
      cardType: "Normal",
      attribute: "EARTH",
      level: 2,
      monsterType: "Insect",
      rarity: "N",
      description: "Usually found traveling in swarms, this creature's ideal environment is the forest.",
      unlocked: true, 
      pack: "Legends of Blue Eyes White Dragon",
      atk: 500,
      def: 700 
    },
    {
      id: 10,
      name: "Mammoth Graveyard",
      image: card10,
      cardType: "Normal",
      attribute: "EARTH",
      level: 3,
      monsterType: "Dinosaur",
      rarity: "N",
      description: "A mammoth that protects the graves of its pack and is absolutely merciless when facing grave-robbers.",
      unlocked: true, 
      pack: "Legends of Blue Eyes White Dragon",
      atk: 1200,
      def: 800 
    },
    {
      id: 11,
      name: "Silver Fang",
      image: card11,
      cardType: "Normal",
      attribute: "EARTH",
      level: 3,
      monsterType: "Beast",
      rarity: "N",
      description: "A snow wolf that's beautiful to the eye, but absolutely vicious in battle.",
      unlocked: true, 
      pack: "Legends of Blue Eyes White Dragon",
      atk: 1200,
      def: 800 
    },
    {
      id: 12,
      name: "Dark Gray",
      image: card12,
      cardType: "Normal",
      attribute: "EARTH",
      level: 3,
      monsterType: "Beast",
      rarity: "N",
      description: "Entirely gray, this beast has rarely been seen by mortal eyes.",
      unlocked: true, 
      pack: "Legends of Blue Eyes White Dragon",
      atk: 800,
      def: 900 
    },
    {
      id: 13,
      name: "Trial of Nightmare",
      image: card13,
      cardType: "Normal",
      attribute: "DARK",
      level: 4,
      monsterType: "Fiend",
      rarity: "N",
      description: "This fiend passes judgment on enemies that are locked in coffins.",
      unlocked: true, 
      pack: "Legends of Blue Eyes White Dragon",
      atk: 1300,
      def: 900 
    },
    {
      id: 14,
      name: "Nemuriko",
      image: card14,
      cardType: "Normal",
      attribute: "DARK",
      level: 3,
      monsterType: "Spellcaster",
      rarity: "N",
      description: "A child-like creature that controls a sleep fiend to beckon enemies into eternal slumber.",
      unlocked: true, 
      pack: "Legends of Blue Eyes White Dragon",
      atk: 800,
      def: 700 
    },
    {
      id: 15,
      name: "The 13th Grave",
      image: card15,
      cardType: "Normal",
      attribute: "DARK",
      level: 3,
      monsterType: "Zombie",
      rarity: "N",
      description: "A zombie that suddenly appeared from plot #13 - an empty grave.",
      unlocked: true, 
      pack: "Legends of Blue Eyes White Dragon",
      atk: 1200,
      def: 900 
    },
]