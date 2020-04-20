export function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


export function drawCard(fromDeck) {
    if (fromDeck.length === 0) {
        return {name: 'Deck is empty. Click Reset.', image: ''}
    }
    return fromDeck.pop();
}


export const all_cards = [
    {
        name: 'La Dama',
        number: 3,
        image: 'https://4.bp.blogspot.com/_YU5mPEjPHcQ/THgDnqKLezI/AAAAAAAAHLI/A0_nhmD-coc/s400/La+Dama+Loteria.jpg'
    },
    {
        name: 'La Pera',
        number: 15,
        image: 'https://i.pinimg.com/236x/9a/d9/09/9ad90912b74ff02b4ee3bb04f964c8b1--bingo-loteria-cards.jpg'
    },
    {
        name: 'La Bandera',
        number: 16,
        image: 'https://i.pinimg.com/236x/eb/58/b5/eb58b5919c27b28699b14e6babc8901f--the-flag-mexican-art.jpg'
    },
    {
        name: 'La Garza',
        number: 19,
        image: 'https://i.pinimg.com/236x/77/16/c2/7716c2bb3ba1e2bd3e8ee18bf1c4cbb4--kimono-loteria-cards.jpg'
    },
    {
        name: 'La Bota',
        number: 22,
        image: 'https://i.pinimg.com/236x/85/4e/4a/854e4ac263061a49e8baa8a90b4c7e9b--bingo-loteria-cards.jpg'
    },
    {
        name: 'La Luna',
        number: 23,
        image: 'https://i.pinimg.com/236x/a6/f6/ac/a6f6ac33457a9ecfd691f5967ee8494a--la-luna-tattoo-tattoo-moon.jpg'
    },
    {
        name: 'El Borracho',
        number: 25,
        image: 'https://i.pinimg.com/236x/77/16/c2/7716c2bb3ba1e2bd3e8ee18bf1c4cbb4--kimono-loteria-cards.jpg'
    },
    {
        name: 'El Negrito',
        number: 26,
        image: 'https://i.pinimg.com/236x/77/16/c2/7716c2bb3ba1e2bd3e8ee18bf1c4cbb4--kimono-loteria-cards.jpg'
    },
    {
        name: 'El Tambor',
        number: 29,
        image: 'https://3.bp.blogspot.com/-_4lyf1Vq5Io/UStZL1TyuXI/AAAAAAAAD34/MO_Tuxn87AE/s1600/el+tambor.jpg'
    },
    {
        name: 'Las Jaras',
        number: 31,
        image: 'https://i.pinimg.com/236x/cc/84/6a/cc846a0f1e0f29c8244024e5d759a0fb--the-arrow-arrows.jpg'
    },
    {
        name: 'El Músico',
        number: 32,
        image: 'https://johnpurlia.files.wordpress.com/2012/07/el-musico-small.jpg'
    },
    {
        name: 'El Soldado',
        number: 34,
        image: 'https://i.pinimg.com/236x/d4/3e/7a/d43e7abda3364a861113b1003492787e--mexican-party-mexican-style.jpg'
    },
    {
        name: 'El Nopal',
        number: 39,
        image: 'https://i.pinimg.com/236x/b2/84/b1/b284b1d3d9fedbdea5d2d488f0512cd4--card-reading-bingo.jpg'
    },
    {
        name: 'La Calavera',
        number: 42,
        image: 'https://i.pinimg.com/236x/77/16/c2/7716c2bb3ba1e2bd3e8ee18bf1c4cbb4--kimono-loteria-cards.jpg'
    },
    {
        name: 'El Cantarito',
        number: 44,
        image: 'https://4.bp.blogspot.com/_YU5mPEjPHcQ/THgDnqKLezI/AAAAAAAAHLI/A0_nhmD-coc/s400/La+Dama+Loteria.jpg'
    },
    {
        name: 'La Corona',
        number: 47,
        image: 'https://i.pinimg.com/originals/61/f8/f0/61f8f030e180980c45fd1af8fe62556e.jpg'
    }
]
