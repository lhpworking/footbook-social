// popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// gender select show more information
$(document).ready(()=>{
    var btnRadio1 = document.querySelector("#flexRadioDefault1");
    var btnRadio2 = document.querySelector("#flexRadioDefault2");
    var btnRadio3 = document.querySelector("#flexRadioDefault3");
    var genderSelect = document.querySelector("#genderSelect");

    btnRadio1.addEventListener("change",()=>{
        genderSelect.classList.add("d-none");
    })
    btnRadio2.addEventListener("change",()=>{
        genderSelect.classList.add("d-none");
    })
    btnRadio3.addEventListener("change",()=>{
        genderSelect.classList.remove("d-none");
    })
    
})
