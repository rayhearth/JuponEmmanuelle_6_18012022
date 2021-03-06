// DOM Elements

const dropDownBtn = document.querySelector('#filter-btn')
const dropDownBtnKey = document.querySelector('.filterWrapper')
const filterList = document.querySelector('.filter-listbox')

// Methode apparition dropdown
const displayDropDown = (e) => {
  if (!filterList.classList.contains('displayDropDown')) {
    filterList.classList.add('displayDropDown')
    dropDownBtn.setAttribute('aria-expanded', true)
  } else {
    filterList.classList.remove('displayDropDown')
    dropDownBtn.setAttribute('aria-expanded', false)
  }
}

// Methode ecoute dropdown
const startDropDownListener = () => {
  dropDownBtn.addEventListener('click', displayDropDown)
  dropDownBtnKey.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      displayDropDown(e)
    }
  })
}
