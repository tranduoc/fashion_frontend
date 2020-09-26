const openModalButtons_video = document.querySelectorAll('[data-modal-target-video]')
const closeModalButtons_video = document.querySelectorAll('[data-close-button-video]')
const overlay_video = document.getElementById('overlay__video')
openModalButtons_video.forEach(button =>{
  button.addEventListener('click',()=>{
    const modal_video = document.querySelector(button.dataset.modalTargetVideo)
    // doan nay :modalTargetVideo la code tu tao -data-modal-target-video="#modal__video";
    // code tu tao k co data dau tien: dataset tu tao theo nguyen tac
    openModal_video(modal_video)
  })
})
overlay_video.addEventListener('click',() => {
  const modals_video = document.querySelectorAll('.modal__video.active')
  modals_video.forEach(modal_video => {
    closeModal_video(modal_video)
  })
})
closeModalButtons_video.forEach(button =>{
  button.addEventListener('click',()=>{
    const modal_video = button.closest('.modal__video')
    closeModal_video(modal_video)
  })
})
function openModal_video(modal_video) {
  if(modal_video == null) return 
  modal_video.classList.add('active')
  overlay_video.classList.add('active')
}
function closeModal_video(modal_video) {
  if(modal_video == null) return
  pause()
  modal_video.classList.remove('active')
  overlay_video.classList.remove('active')
}
// phat fix, can not turn off video when click close video jquery
function pause (){  
  $('iframe').attr('src', $('iframe').attr('src'));
}