document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {   
            name: "Fruit1",
            img: 'images/f1.png'
        },
        {   
            name: "Fruit2",
            img: 'images/f2.png'
        },
        {   
            name: "Fruit3",
            img: 'images/f3.png'
        },
        {   
            name: "Fruit4",
            img: 'images/f4.png'
        },
        {   
            name: "Fruit5",
            img: 'images/f5.png'
        },
        {   
            name: "Fruit6",
            img: 'images/f6.png'
        },
        {   
            name: "Fruit1",
            img: 'images/f1.png'
        },
        {   
            name: "Fruit2",
            img: 'images/f2.png'
        },
        {   
            name: "Fruit3",
            img: 'images/f3.png'
        },
        {   
            name: "Fruit4",
            img: 'images/f4.png'
        },
        {   
            name: "Fruit5",
            img: 'images/f5.png'
        },
        {   
            name: "Fruit6",
            img: 'images/f6.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const result = document.querySelector('#result')

    var cardChosen = []
    var cardChosenId = []
    var cardsWon = []

    function createBoard() {
        for(let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/hide.png')
            card.setAttribute('class', 'fruit')
            card.setAttribute('data-id', i)
            grid.appendChild(card)
            card.addEventListener('click', flipCard)

        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('.fruit')
        const option1 = cardChosenId[0]
        const option2 = cardChosenId[1]

        if(cardChosen[0] === cardChosen[1]){
            cardsWon.push(cardChosen)
        }
        else {
            cards[option1].setAttribute('src', 'images/hide.png')
            cards[option1].style.transform = 'rotateY(0deg)'
            cards[option2].setAttribute('src', 'images/hide.png')
            cards[option2].style.transform = 'rotateY(0deg)'
        }

        cardChosen = []
        cardChosenId = []
        result.innerHTML = 'Score: ' + cardsWon.length

        if(cardsWon.length === cardArray.length/2){
            gameEnd = document.querySelector('#gameEnd')
            gameEnd.innerHTML = 'Congratulations, You Found Them All!'
        }

    }

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardChosenId.push(cardId)
        if(cardChosenId.length == 2 && (cardChosenId[0] == cardChosenId[1])){
            cardChosenId.pop()
        }
        else {
            cardChosen.push(cardArray[cardId].name)
        }

        this.style.transform = 'rotateY(180deg)'
        this.setAttribute('src', cardArray[cardId].img)        
        
        this.setAttribute
        if( cardChosen.length === 2){
            setTimeout(checkForMatch, 1300)
        }
    }

    createBoard()
})



















