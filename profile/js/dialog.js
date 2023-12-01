const dialog = document.querySelector("dialog")
const open = document.querySelector('#open')
const close = document.querySelector('#close')

open.addEventListener('click', function () {
    dialog.showModal()
})

close.addEventListener('click', function () {
    dialog.close()
})