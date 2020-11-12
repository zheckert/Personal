import React, { useState } from "react"

export const LegendaryWeaponRandomizer = () => {

    const [weapon, setWeapon] = useState("")
    const [oldWeapon, setOldWeapon] =useState([])

    const random = (arr) => {
        return arr[Math.floor(Math.random()*arr.length)]
    }
    
    function legendaryWeaponGenerator() {
        const blunt = random(["crushing", "smashing", "blunt", "ultradense", "weighted", "studded", "heavy",])
        const bladed = random(["vorpal", "scintillating", "honed", "cutting", "slicing", "chopping", "rending", "severing", "sharpened", "jagged", "serrated",])
        const adjective = random(["filth-encrusted", "fetid", "dirty", "gem-encrusted", "gilded", "golden", "vomit-coated", "bile-coated", "hallowed", "gore-stained", "hell-spawned", "blood-soaked", "super-heated","conflagrating", "engraved", "carved", "magic", "enhanced", "refined", "envenomed", "venomous", "soul-stealing", "regenerating", "enchanted", "ensorceled", "legendary", "rune-etched", "heroic", "blessed",])
        const bladedType = random(["longsword", "broadsword", "falchion", "zweihander", "short sword", "claymore", "greatsword", "dagger", "butcher's knife", "kris", "handaxe", "greataxe", "glaive", "halberd", "scimitar", ])
        const bluntType = random(["warhammer", "mallet", "club", "maul", "flail", "mace", "cane", "knuckleduster", "morningstar", "cudgel", "quarterstaff", "sledgehammer", "stave",])
        const suffix = random(["darkness", "light", "flame", "heat", "explosions", "thunderbolts", "flames", "ice", "hatred", "puissance", "malevolence", "potency", "power", "truth", "might", "carnage", "legend", "trauma", "rage", "fury", "insanity", "madness", "divinity", "caliginous funerals", "eternal moonlight", "ceaseless bloodthirst", "holy requiems", "unbridled magnificence", "decrepit coffins", "dessicated corpses", "angelic radiance","malignant cognizance", "leprous convergence", "the fungal blossoms", "wretched putrescence", "butchery",])
        
        let type = (random([true, false])) ? bladed : blunt
        let weapon = (type === blunt) ? bluntType : bladedType
        let finished = `${type} ${adjective} ${weapon} of ${suffix}`
        setWeapon(finished) 
        setOldWeapon(prevWeapon => [...prevWeapon, finished])
    }    

    const previousWeapons = oldWeapon.map(prevWeapon => <h4 key={prevWeapon}>{prevWeapon}</h4>)

    return(
        <div>
            <h2>Legendary Weapon Generator</h2>
            <button onClick={legendaryWeaponGenerator}>Generate!</button>
            <div>
                {weapon}
            </div>
            
            <div>
                <h3>Previously generated: </h3>
                {previousWeapons}
            </div>
        </div>
    )
}