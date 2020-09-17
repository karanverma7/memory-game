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

    var modal = document.getElementById("myModal");
    const grid = document.querySelector('.grid')
    const result = document.querySelector('#result')
    const gameEnd = document.querySelector('#gameEnd')

    var cardChosen = []
    var cardChosenId = []
    var cardsWon = []
    var lives = 5

    var help = document.querySelector('#help')

    help.onclick = () => {
        var guide = document.querySelector('#guide')
        modal.style.display = "block"
    }

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
           
            if( lives != 1){
                lives = lives - 1
            }
            else {
                lives = 0
                gameEnd.innerHTML = '<img src="images/man.png" height="60px" width="auto"><br> <h2>Game Over! Try Again <h2>'
                modal.style.display = "block"
                setTimeout( () => {
                    window.location.reload()
                }, 4000)
            }
        }

        cardChosen = []
        cardChosenId = []
        result.innerHTML = 'Lives: ' + lives

        if(cardsWon.length == cardArray.length/2){
            modal.style.display = "block"
            gameEnd.innerHTML = '<img src="images/clap.png" height="50px" width="auto"><br> <h2> Congratulations!! You Found Them All. <h2> <span style="font-size: 10px"> (Click anywhere to exit) <span>'
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

    window.onclick = event => {
        if (event.target == modal) {
          modal.style.display = "none";
          window.location.reload()
        }
      }

    createBoard()
})