const width = 28;
const grid = document.querySelector('.grid');
const scoreDisplay = document.getElementById('score')
let squares = []
let score = 0
// squares
// 28 * 28  = 784
 // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty

const layout = [
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 
]


function createBoard() {
  //for loop 
  for (let i = 0; i < layout.length; i++) {
      //create a square 
      const square = document.createElement('div')
      //put square in grid 
      grid.appendChild(square)
      //put square in squares array
      squares.push(square)

      if (layout[i] === 0) {
          squares[i].classList.add('pac-dot')
      } else if (layout[i] === 1) {
          squares[i].classList.add('wall')
      } else if (layout[i] === 3) {
          squares[i].classList.add('power-pellet')
      } else if (layout[i] === 2) {
        squares[i].classList.add('ghost-lair')
      }
      
  }
}
createBoard()


//starting position of pacman 
let pacmanCurrentIndex = 490

squares[pacmanCurrentIndex].classList.add('pacman')

// KeyCodes
// down - 40
// up key - 38
// left - 37
// right - 39

function control(e) {
  squares[pacmanCurrentIndex].classList.remove('pacman')
  switch (e.keyCode) {
    case 40:
      console.log('pressed down')
      if (
        !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair') &&
        !squares[pacmanCurrentIndex + width].classList.contains('wall') &&
        pacmanCurrentIndex + width < width * width
      )
        pacmanCurrentIndex += width
      break;
    case 38:
      console.log('pressed up')
      if (
        !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair') &&
        !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
        pacmanCurrentIndex - width < width * width
      )
        pacmanCurrentIndex -= width
      break;
    case 37:
      console.log('pressed left')
      if (
        !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair') &&
        !squares[pacmanCurrentIndex -1].classList.contains('wall') &&
        pacmanCurrentIndex % width !== 0
      )
      pacmanCurrentIndex -= 1
        if (pacmanCurrentIndex === 364) {
          pacmanCurrentIndex = 391
        }
        
      break;
    case 39:
      console.log('pressed right')
      if (
        !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair') &&
        !squares[pacmanCurrentIndex +1].classList.contains('wall') &&
        pacmanCurrentIndex % width !== 0
      )
      pacmanCurrentIndex += 1
      if (pacmanCurrentIndex === 391) {
        pacmanCurrentIndex = 364
      }
        break;  
  }
  
  squares[pacmanCurrentIndex].classList.add('pacman')
  pocDotEaten()
}



document.addEventListener('keyup', control)

function pocDotEaten(){ 
  if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
    squares[pacmanCurrentIndex].classList.remove('pac-dot')
  score++  
    scoreDisplay.innerHTML = score
  }
}

function powerDotEaten() {
  if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
    score += 10;
    // Ghost is scared
    ghosts.forEach(ghost => ghost.isScared = true)

    setTimeout(function(), 10000)
    
  }
}
 
function ghostIsScared() {
  ghost.forEach(ghost => ghost.isScared = false);
}

 class Ghost {
   constructor(className, ghostIndex, speed) {
     this.className = className
     this.ghostIndex = ghostIndex
     this.speed = speed
     this.currentIndex = ghostIndex
     this.isScared = false;
     this.timer = NaN
   }  
 }

 const ghosts = [
     new Ghost('blinky', 348, 250),
     new Ghost('pinky', 376, 400),
     new Ghost('inky', 351, 300),
     new Ghost('clyde', 379, 500)
   ]

ghosts.forEach(ghost => {
  squares[ghost.ghostIndex].classList.add(ghost.className)
  squares[ghost.ghostIndex].classList.add('ghost')

})
// Move ghost
ghosts.forEach(ghost => moveGhost(ghost))



 function moveGhost(ghost) {
   console.log('moved ghost')
   const directions = [-1, +1, -width, +width]
   let direction = directions[Math.floor(Math.random() * directions.length)]
   console.log(direction)
  
   ghost.timerId = setInterval(function() {
       //all our code
     if (!squares[ghost.currentIndex + direction].classList.contains('wall') &&
     !squares[ghost.currentIndex + direction].classList.contains('ghost')) {
       
       //remove any ghost
       squares[ghost.currentIndex].classList.remove(ghost.className)
       squares[ghost.currentIndex].classList.remove('ghost')
       //add direction to current Index
       ghost.currentIndex += direction
       //add ghost class
       squares[ghost.currentIndex].classList.add(ghost.className)
       squares[ghost.currentIndex].classList.add('ghost')
     } else direction = directions[Math.floor(Math.random() * directions.length)]
       
   }, ghost.speed )
  
 }

  
