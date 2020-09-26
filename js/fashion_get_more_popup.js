const openModalButtons_get = document.querySelectorAll('[data-modal-target-get]')
const closeModalButtons_get = document.querySelectorAll('[data-close-button-get]')
const overlay_get = document.getElementById('overlay_get')
openModalButtons_get.forEach(button =>{
  button.addEventListener('click',()=>{
    const modal_get = document.querySelector(button.dataset.modalTargetGet)
    openModal_get(modal_get)
  })
})
overlay_get.addEventListener('click',() => {
  const modals_get = document.querySelectorAll('.modal_get.active')
  modals_get.forEach(modal_get => {
    closeModal_get(modal_get)
  })
})
closeModalButtons_get.forEach(button =>{
  button.addEventListener('click',()=>{
    const modal_get = button.closest('.modal_get')
    closeModal_get(modal_get)
  })
})
function openModal_get(modal_get) {
  if(modal_get == null) return 
  modal_get.classList.add('active')
  overlay_get.classList.add('active')
}
function closeModal_get(modal_get) {
  if(modal_get == null) return 
  modal_get.classList.remove('active')
  overlay_get.classList.remove('active')
}