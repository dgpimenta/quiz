const form = document.querySelector('#quiz-form')
const divFinalResult = document.querySelector('.result')

const correctAnswers = ['B', 'A', 'C', 'D']

let score = 0

const getUserAnswers = () =>
  correctAnswers.map((_, index) => {
    return form[`inputQuestion${index + 1}`].value
  })

const resetUserScore = () => {
  score = 0
}

const calculateUSerScore = userAnswers => {
  userAnswers.forEach((userAnswer, index) => {
    const isUserAnswerCorrect = userAnswer === correctAnswers[index]
    if (isUserAnswerCorrect) {
      score += 25
    }
  })
}

const showFinalScore = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
  divFinalResult.classList.remove('none-result')
}

const animateFinalScore = () => {
  let counter = 0

  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer)
    }

    divFinalResult.querySelector('span').textContent = `${counter++}%`
  }, 10)
}

form.addEventListener('submit', event => {
  event.preventDefault()

  const userAnswers = getUserAnswers()

  resetUserScore()
  calculateUSerScore(userAnswers)
  showFinalScore()
  animateFinalScore()
})
