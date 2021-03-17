console.log("Hello SUGYO")
const answerTotal = document.querySelector('.answer_total');
const quiz = document.querySelector('.quiz_img');

function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }


function stage(e) {
  while(quiz.firstChild) {
    quiz.removeChild(quiz.firstChild)
  }
  while(answerTotal.firstChild) {
    answerTotal.removeChild(answerTotal.firstChild)
  }
  const stageBtn = e.textContent

  let stageNum = stageBtn.split('-')[1]
  let answerCount = stageBtn.split('-')[2]
  sessionStorage.setItem('answerCount', answerCount)
  let quizImg = `<img src="../images/stage/1-${stageNum}/Q.png" alt="문제">`
  quiz.insertAdjacentHTML('beforeend', quizImg)

  let arra = []
  for (let i = 1; i <= answerCount; i++) {
    arra.push(i)
  }
  let arraLen = arra.length
  for (let i = 0; i < arraLen; i++) {
    // console.log("123", arra.length)
    let ranNum = getRandomInt(0, arraLen-1-i)
    // console.log(ranNum)
    let answerNum = arra[ranNum]
    let tempHtml = `<div class="answer_num">${i+1}번</div>
    <div class="answer_img">
      <img onclick="mark(this)" class="answerImg" src="../images/stage/1-${stageNum}/list_answer/${answerNum}.png" alt="${answerNum}.png" name="${answerNum}">
    </div>`
    answerTotal.insertAdjacentHTML('beforeend', tempHtml)
    arra.splice(ranNum, 1)
    // console.log(arra)
  }
}


let aa = []
function mark(e) {
  let bb = []
  for (i=1;i<=sessionStorage.getItem('answerCount');i++) {
    bb.push(i)
  }
  aa.push(Number(e.name))
  e.style.display = 'none'

  if (aa.length == bb.length && aa.join(',') === bb.join(',')) {
    alert('!!정답입니다!!');
    aa = [];
  } else if (aa.length == bb.length && aa.join(',') !== bb.join(',')) {
    alert('틀렸습니다...')
    aa = [];
  }
  
}