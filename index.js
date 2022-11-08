const btnHour = document.querySelector('.btn-hour');
const btnMinute = document.querySelector('.btn-minute');
const btnSecond = document.querySelector('.btn-second');
const hourTime = btnHour.querySelector('.hour-time');
const minuteTime = btnMinute.querySelector('.minute-time');
const secondTime = btnSecond.querySelector('.second-time');

const btnStart = document.querySelector('.start');
const btnReset = document.querySelector('.reset');

btnHour.addEventListener('click', (event)=>{
  btnStart.classList.add('on');
  btnReset.classList.add('on');
  let time = parseInt(hourTime.innerText) + 1;
  hourTime.innerText = `${time}`;
})

btnMinute.addEventListener('click', (event)=>{
  btnStart.classList.add('on');
  btnReset.classList.add('on');
  let time = parseInt(minuteTime.innerText) + 10;
  minuteTime.innerText = `${time}`;
})

btnSecond.addEventListener('click', (event)=>{
  btnStart.classList.add('on');
  btnReset.classList.add('on');
  let time = parseInt(secondTime.innerText) + 10;
  secondTime.innerText = `${time}`;
})

btnStart.addEventListener('click', (event)=>{
  alert('추후에.. 구현하겠읍니다..흑흑');
})

btnReset.addEventListener('click', (event)=>{
  alert('추후에.. 구현하겠읍니다..흑흑');
})
