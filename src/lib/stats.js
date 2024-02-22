const ranks = [
    '🌸 Citizen',
    '🔎 Cleric',
    '🔮 Wizard',
    '♦️ Mage',
    '🎯 Noble',
    '🎯 Noble II',
    '✨ Elite',
    '✨ Elite II',
    '✨ Elite III',
    '🔶️ Ace',
    '🔶️ Ace II',
    '🔶️ Ace III',
    '🔶️ Ace IV',
    '☣ Knight',
    '☣ Knight II',
    '☣ Knight III',
    '☣ Knight IV',
    '☣ Knight V',
    "👑 Emperor",
    "👑 Emperor II",
    "👑 Emperor III",
    "👑 Emperor IV",
    "👑 Emperor V",
    "🦹‍♂️ Super Sayan",
    "🦹‍♂️ Super Sayan II",
    "🦹‍♂️ Super Sayan III",
    "🦹‍♂️ Super Sayan IV",
    "🦹‍♂️ Super Sayan V",
    "🔱 Titan",
    "🔱 Titan II",
    "🔱 Titan III",
    "🔱 Titan IV",
    "🔱 Titan V",
    '🌀 Hero',
    '🌀 Hero II',
    '🌀 Hero III',
    '🌀 Hero IV',
    '🌀 Hero V',
    '💎 Supreme',
    '💎 Supreme II',
    '💎 Supreme III',
    '💎 Supreme IV',
    '💎 Supreme V',
    '❄️ Mystic',
    '❄️ Mystic II',
    '❄️ Mystic III',
    '❄️ Mystic IV',
    '❄️ Mystic V',
    '🔆 Legendary',
    '🔆 Legendary II',
    '🔆 Legendary III',
    '🔆 Legendary IV',
    '🔆 Legendary V',
    '🛡 Guardian',
    '🛡 Guardian II',
    '🛡 Guardian III',
    '🛡 Guardian IV',
    '🛡 Guardian V',
    '♨ Valor',
    '🌩️ Thunderer',
    '🌋 Inferno',
    '💀 Deathbringer',
    '🌪️ Cyclone',
    '🦁 Lionheart',
    '🌟 Celestial',
    '🕸️ Shadow',
    '🌊 Tidecaller',
    '🐉 Dragonlord',
    '🎭 Puppet Master',
    '🗡️ Blade Master',
    '🎖️ War Hero',
    '🧙 Archmage',
    '🌌 Cosmonaut',
    '🦅 Eagle Eye',
    '🦄 Unicorn',
    '🐺 Alpha',
    '🎭 Trickster',
    '💻 Hacker',
    '🌿 Druid',
    '🐉 Wyrmrider',
    '🌑 Voidwalker',
    '🐍 Serpent Master',
    '🧟 Zombie',
    '🐲 Dragonborn',
    '🏰 Sovereign',
    '🛡️ Defender',
    '🦊 Kitsune',
    "🦊 Kitsune Princess",
    "🦇 Vampire",
    "✨ Vampire Elite",
    "✨ Vampire Elite I",
    "✨ Vampire Elite II",
    "✨ Vampire Elite III",
    "🧛 Hybrid",
    "👑 Vampire King",
    '🗡️ Zombie Slayer Elite',
    '🗡️ Wolf Slayer',
    '🗡️ Demon Slayer',
    '🗡️ Vampire Slayer',
    '🐲 Dragon',
    '🐲 Red Dragon',
    '💥 Demigod',
    "👹 Shadow Beast Lord",
    "👹 Volcano Monarch",  
    "🌪️ Tempest Overlord 👹",
    "👑 Demon Lord 👹",
    "🗿 Demon God 👹",
    "Aku ( The OverThinker )"

]

/**
 * @param {number} level
 * @returns {{requiredXpToLevelUp: number, rank: string}}
 */

const getStats = (level) => {
    let required = 100
    for (let i = 1; i <= level; i++) required += 5 * (i * 50) + 100 * i * (i * (i + 1)) + 300
    const rank = level > ranks.length ? ranks[ranks.length - 1] : ranks[level - 1]
    return {
        requiredXpToLevelUp: required,
        rank
    }
}

module.exports = {
    getStats,
    ranks
}