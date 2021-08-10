const getScoreText = function (score, total) {
    const scorePercent = (score / total) * 100
    
    if (scorePercent >= 90) {
        return `You got an A (${scorePercent}%).`
    } else if (scorePercent >= 89 && scorePercent <= 80) {
        return `You got a B (${scorePercent}%).`
    } else if (scorePercent >= 79 && scorePercent <= 70) {
        return `You got a C (${scorePercent}%).`
    } else if (scorePercent >= 69 && scorePercent <= 60) {
        return `You got a D (${scorePercent}%).`
    } else {
        return `You got an F (${scorePercent}%).`
    }
}
const scoreText = getScoreText(15, 20)
console.log(scoreText)