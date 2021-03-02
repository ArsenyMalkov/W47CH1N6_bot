tarots = [
    "./img/TarotCard_01_TheFool.webp",
    "./img/TarotCard_02_TheMagician.webp",
    "./img/TarotCard_03_TheHighPriestess.webp",
    "./img/TarotCard_04_TheEmpress.webp",
    "./img/TarotCard_05_TheEmperor.webp",
    "./img/TarotCard_06_TheHierophant.webp",
    "./img/TarotCard_07_TheLovers.webp",
    "./img/TarotCard_08_TheChariot.webp",
    "./img/TarotCard_09_Strength.webp",
    "./img/TarotCard_10_TheHermit.webp",
    "./img/TarotCard_11_WheelOfFortune.webp",
    "./img/TarotCard_12_Justice.webp",
    "./img/TarotCard_13_TheHangedMan.webp",
    "./img/TarotCard_14_Death.webp",
    "./img/TarotCard_15_Temperance.webp",
    "./img/TarotCard_16_TheDevil.webp",
    "./img/TarotCard_17_TheTower.webp",
    "./img/TarotCard_18_TheStar.webp",
    "./img/TarotCard_19_TheMoon.webp",
    "./img/TarotCard_20_TheSun.webp",
    "./img/TarotCard_21_Judgement.webp",
    "./img/TarotCard_22_TheWorld.webp"
]

desc = [
    "The Fool is everyone - including you and me. Each step he takes on his journey feels like stepping into a brave new world. Ultimately, the journey will change him. But as the card shows, he's a trustworthy lad whose tireless hope drives him toward his goal.",
    "The Magician is the card of self-confidence and adapting to situations through intellect and sheer will. The Magician is a schemer who always has one last trick up his sleeve, who despite everything manages to stay afloat and remain in control of his own destiny.",
    "The High Priestess is a card of mystery. It shows how all our secrets hang by a delicate thread and the struggle between common sense and intuition. The High Priestess symbolizes the cold, calm waters as well as the mysteries hidden in their depths.",
    "The Emperor represents patriarchal control and is pleased with the authority and power he possesses to shape the future. The Emperor makes the rules and enforces them for the common good. But prestige has its dark sides – the Emperor is dominating and ruthless and will climb over a mountain of bodies to achieve his aim.",
    "The Hierophant symbolizes a respect for tradition. It represents one who tries to maintain the established order, even though their very character is shaped by it. The Hierophant places his faith in institutions – for the alternative is pure chaos. Only by placing his faith in order can he draw strength.",
    "The Lovers is the card of dichotomies. It points to the contradictions that clash within each of us and of the challenge of striking a balance between extremes. The Lovers is also the card of dilemmas, like The Fool who stands at the crossroads, unable to make his choice.",
    "The Chariot is always charging ahead despite being pulled by its steeds in opposite directions. The rider who steers it constantly reins in the light and dark sides of the soul with the help of Reason. To ride in The Chariot is to experience highs and lows – ups and downs.",
    "Strength is the card of resilience. It is associated with determination, bravery and internal struggle. One must have dedication in order to overcome obstacles and reach one's goal. Strength is about physical prowess and spiritual fortitude – the power that must be unleashed to achieve the impossible.",
    "The Hermit is a card of self-imposed isolation. It represents an escape from the hustle and bustle of the city, a turning away from constant newness toward Ye Olde ways. For the hermit, solitude is the road to the sublime – a road that is taken not with great bounds and strides, but with small, concentrated steps.",
    "The Wheel of Fortune means that change is coming. One's destiny could turn out for the better or the worse, yet it also bears the promise of new possibilities. The Wheel reminds us that nobody remains at the top forever, but also that not every situation is hopeless.",
    "Justice is the card of conflict resolution. It proclaims the need for order, to see through lies and deceit, and a return to the natural state of affairs. Justice implies a just sentence, but also due process.",
    "The Hanged Man is the card of sacrifice. It says that a price must be paid in order to achieve enlightenment. The Hanged Man's forsakenness opens the path for rebirth into a new life, though this path is wrought with pain suspended in time and ultimately ends in death.",
    "Death is the card of becoming. It signifies an imminent and difficult transition – the conclusion of one phase of life and the beginning of another. Inevitably, something gets lost during the transformation, but something else will rise and take its place.",
    "Temperance is the card of balance. It may symbolize self-restraint or the gradual shift toward a more mature state of equilibrium. Temperance is associated with being in control of oneself as well as the desire to achieve inner peace.",
    "The Devil is addiction, craving and passion. He brings fame and fortune, but at the price of losing oneself to a world of material distractions. The Devil lures unsuspecting souls into traps, but always grants them a choice. One can try their luck and take him up on his offer, but one should always know when to call quits.",
    "The Tower is an omen of radical change, chaos and destruction. The lightning striking The Tower signifies a return to the old order that lies buried under the ruins, and a new order that will rise from it. It is a symbol of tragedy, apocalypse, and self-destruction.",
    "The Star is the card of hope. In the darkest of nights there is a light that shines the path to home. The Star is inspiration, motivation and gives us strength to move forward.",
    "The Moon reminds us that reality is not always what it seems at first glance. In a world of appearances and illusions, the best course is often charted by one's own intuition. The Moon is also the card of dreams, desires, and of course, sleep – Death's nightly ritual.",
    "The Sun symbolizes success. It is a card of freedom, renewal and a bright future that lies ahead. The Sun also represents truth, for its light will always pull back the curtain of shadow that hides the world's secrets. It is also represents greatness and splendor.",
    "Judgement is the card of renewal. The angel blowing into the horn heralds resurrection and liberation. This card foretells an important change that will result in healing or fulfillment. It is also a symbol of self-worth.",
    "The World lies at the end of The Fool's long and winding journey. Wiser and more world-weary than he started out, the Fool faces a moment of reckoning. Some of us accept where our journey has led us to, while others embark on a new challenge. One thing in this World is certain – you can't have it all."
]

module.exports = async function(msg, args) {
    var rArray = [];
    while (rArray.length < 3){
        var rNumber = Math.floor(Math.random() * tarots.length);
        if (rArray.indexOf(rNumber) === -1) rArray.push(rNumber);
    }
    var ipast = rArray[0];
    var ipresent = rArray[1];
    var ifuture = rArray[2];

    msg.channel.send('**Your Past**\n' + desc[ipast], {
        files: [
            tarots[ipast]
        ]
    })
    msg.channel.send('**Your Present**\n' + desc[ipresent], {
        files: [
            tarots[ipresent]
        ]
    })
    msg.channel.send('**Your Future**\n' + desc[ifuture], {
        files: [
            tarots[ifuture]
        ]
    })
};