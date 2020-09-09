const blunt = ["crushing", "smashing", "blunt", "ultradense", "weighted", "studded", "heavy",]
const bladed = ["vorpal", "scintillating", "honed", "cutting", "slicing", "chopping", "rending", "severing", "sharpened", "jagged", "serrated",]

let weaponAdjective = ["filth-encrusted", "fetid", "dirty", "gem-encrusted", "gilded", "golden", "vomit-coated", "bile-coated", "hallowed", "gore-stained", "hell-spawned", "blood-soaked", "super-heated","conflagrating", "engraved", "carved", "magic", "enhanced", "refined", "envenomed", "venomous", "soul-stealing", "regenerating", "enchanted", "ensorceled", "legendary", "rune-etched", "heroic", "blessed",]

const bladedType = ["longsword", "broadsword", "falchion", "zweihander", "short sword", "claymore", "greatsword", "dagger", "butcher's knife", "kris", "handaxe", "greataxe", "glaive", "halberd", "scimitar", ]
const bluntType = ["warhammer", "mallet", "club", "maul", "flail", "mace", "cane", "knuckleduster", "morningstar", "cudgel", "quarterstaff", "sledgehammer", "stave",]

let suffix = ["darkness", "light", "flame", "heat", "explosions", "thunderbolts", "flames", "ice", "hatred", "puissance", "malevolence", "potency", "power", "truth", "might", "carnage", "legend", "trauma", "rage", "fury", "insanity", "madness", "divinity", "caliginous funerals", "eternal moonlight", "ceaseless bloodthirst", "holy requiems", "unbridled magnificence", "decrepit coffins", "dessicated corpses", "angelic radiance","malignant cognizance", "leprous convergence", "the fungal blossoms", "wretched putrescence", "butchery",]

function legendaryWeaponGenerator(){
    let style = Math.floor(Math.random() * 2)
    if(style === 0){
        const bladedWeapon = bladed[Math.floor(Math.random()*blunt.length)] + " " + weaponAdjective[Math.floor(Math.random()*weaponAdjective.length)] + " " + bladedType[Math.floor(Math.random()*bluntType.length)] + " of " + suffix[Math.floor(Math.random()*suffix.length)];
        return bladedWeapon;
    } else if(style === 1){
        const bluntWeapon = blunt[Math.floor(Math.random()*blunt.length)] + " " + weaponAdjective[Math.floor(Math.random()*weaponAdjective.length)] + " " + bluntType[Math.floor(Math.random()*bluntType.length)] + " of " + suffix[Math.floor(Math.random()*suffix.length)];
        return bluntWeapon;
    }
}

console.log(legendaryWeaponGenerator())