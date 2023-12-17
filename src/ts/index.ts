import { Product } from "./Product";

const serverUrl = "http://localhost:5000";

function main() {
  console.log(serverUrl);
}

document.addEventListener("DOMContentLoaded", main);


//bodyHeader dropdown script
const bodyHeaderOptionsSelect = document.querySelector<HTMLElement>('.body-header-options-select');
const bodyHeaderOptionsSelectDropdown = document.querySelector<HTMLElement>('.body-header-options-select-dropdown');
const bodyHeaderOptionsSelectDropdownOptions = document.querySelectorAll<HTMLElement>('.body-header-options-select-dropdown-option');
const arrowIconActiveOrder = document.querySelector<HTMLElement>('#arrow-icon-order');

let isSelectOpen: boolean = false;

bodyHeaderOptionsSelect.addEventListener("click", () => {
  if(isSelectOpen) {
    bodyHeaderOptionsSelectDropdown.style.display = "none"; 
    arrowIconActiveOrder.style.transform = "rotate(0deg)";
    handleCloseStuff();
  } else {
    bodyHeaderOptionsSelectDropdown.style.display = "flex";
    arrowIconActiveOrder.style.transform = "rotate(180deg)";
    handleOpenMobileOrder();
  }
  isSelectOpen = !isSelectOpen;
  
})

bodyHeaderOptionsSelectDropdownOptions.forEach(option => {
  option.addEventListener("click", () => {
    bodyHeaderOptionsSelectDropdown.style.display = "none";
    bodyHeaderOptionsSelectMobileOrder.classList.remove("body-header-options-select-mobile-onclick");
    bodyHeaderOptionsSelectDropdown.classList.remove("body-header-options-select-dropdown-mobile");
    arrowIconActiveOrder.style.transform = "rotate(0deg)";
    closeButton.style.display = "none";
    isSelectOpen = false;
    }) 
  })

//

//sidebar show-all-colors script
const bodySidebarShowAllColors = document.querySelector<HTMLElement>('.body-sidebar-show-all-colors');
const inputCheckboxFilterHidden = document.querySelectorAll<HTMLElement>('.input-checkbox-filter-hidden');
const spanShowColors = document.querySelector<HTMLElement>('#span-show-colors');
const arrowIconActiveColors = document.querySelector<HTMLElement>('#arrow-icon-colors');

let isInputHidden: boolean = true;

bodySidebarShowAllColors.addEventListener("click", () => {
  if (isInputHidden) {
    inputCheckboxFilterHidden.forEach(input => {
      input.style.display = "flex";
      spanShowColors.innerHTML = "Mostrar menos cores";
      arrowIconActiveColors.style.transform = "rotate(180deg)";
    })
    isInputHidden = !isInputHidden;
  } else {
    inputCheckboxFilterHidden.forEach(input => {
      input.style.display = "none";
      spanShowColors.innerHTML = "Ver todas as cores";
      arrowIconActiveColors.style.transform = "rotate(0deg)";
    })
    isInputHidden = !isInputHidden;
  }
})

//body header options select mobile onclick

const closeButton = document.querySelector<HTMLElement>(".close-button");
const closeButtonFilter = document.getElementById("close-icon-filter");

//order
const bodyHeaderOptionsSelectMobileOrder = document.querySelector<HTMLElement>('#body-header-options-select-mobile-order');

const handleOpenMobileOrder = () => {
  bodyHeaderOptionsSelectDropdown.style.display = "flex";
  bodyHeaderOptionsSelectMobileOrder.classList.add("body-header-options-select-mobile-onclick");
  bodyHeaderOptionsSelectDropdown.classList.add("body-header-options-select-dropdown-mobile");
  closeButton.style.display = "block";
}

bodyHeaderOptionsSelectMobileOrder.addEventListener("click", () => {
  handleOpenMobileOrder(); 
  isSelectOpen = !isSelectOpen;
  arrowIconActiveOrder.style.transform = "rotate(180deg)";
});

//filter
const bodyHeaderOptionsSelectMobileFilter = document.querySelector<HTMLElement>('#body-header-options-select-mobile-filter');
const bodySidebarFilterContent = document.querySelector<HTMLElement>('.body-sidebar-filter-content');
// const bodySidebarFilterColors = document.querySelector<HTMLElement>('body-sidebar-filter-colors');


bodyHeaderOptionsSelectMobileFilter.addEventListener("click", () => {
  bodySidebarFilterContent.classList.add("body-sidebar-filter-content-mobile");
  // bodyHeaderOptionsSelectMobileFilter.classList.add("body-header-options-select-mobile-onclick");
  inputCheckboxFilterHidden.forEach(input => {
    input.style.display = "flex"
  });
  // bodyHeaderOptionsSelectDropdown.classList.add("body-header-options-select-dropdown-mobile");
  closeButtonFilter.style.display = "block";
})

//filter open/close filters options

const bodySidebarFilterColorsTitle = document.querySelector<HTMLElement>('.body-sidebar-filter-colors-title');
const bodySidebarFilterColorsList = document.querySelector<HTMLElement>('.body-sidebar-filter-colors-list');

const bodySidebarFilterSizeTitle = document.querySelector<HTMLElement>('.body-sidebar-filter-size-title');
const bodySidebarFiltersGridSizesBox = document.querySelector<HTMLElement>('.body-sidebar-filters-grid-sizes-box');

const bodySidebarFilterPriceTitle = document.querySelector<HTMLElement>('.body-sidebar-filter-price-title');
const bodySidebarFilterPricesList = document.querySelector<HTMLElement>('.body-sidebar-filter-prices-list');

let isColorListOpen: boolean = false;
let isSizesListOpen: boolean = false;
let isPricesListOpen: boolean = false;

bodySidebarFilterColorsTitle.addEventListener("click", () => {
  if (isColorListOpen) {
    bodySidebarFilterColorsList.classList.remove("body-sidebar-filter-colors-list-closed");
  } else {
    bodySidebarFilterColorsList.classList.add("body-sidebar-filter-colors-list-closed");
  }

  isColorListOpen = !isColorListOpen;
})

bodySidebarFilterSizeTitle.addEventListener("click", () => {
  if (isSizesListOpen) {
    bodySidebarFiltersGridSizesBox.classList.remove("body-sidebar-filters-grid-sizes-box-closed");
  } else {
    bodySidebarFiltersGridSizesBox.classList.add("body-sidebar-filters-grid-sizes-box-closed");
  }

  isSizesListOpen = !isSizesListOpen;
})

bodySidebarFilterPriceTitle.addEventListener("click", () => {
  if (isPricesListOpen) {
    bodySidebarFilterPricesList.classList.remove("body-sidebar-filter-prices-list-closed");
  } else {
    bodySidebarFilterPricesList.classList.add("body-sidebar-filter-prices-list-closed");
  }

  isPricesListOpen = !isPricesListOpen;
})
//

//close button
const handleCloseStuff = () => {
  bodyHeaderOptionsSelectDropdown.style.display = "none";
  bodyHeaderOptionsSelectMobileOrder.classList.remove("body-header-options-select-mobile-onclick");
  bodyHeaderOptionsSelectDropdown.classList.remove("body-header-options-select-dropdown-mobile");
  bodyHeaderOptionsSelectMobileFilter.classList.remove("body-header-options-select-mobile-onclick");
  bodySidebarFilterContent.classList.remove("body-sidebar-filter-content-mobile");

  inputCheckboxFilterHidden.forEach(input => {
    input.style.display = "none"
  });

  closeButton.style.display = "none";
  closeButtonFilter.style.display = "none";
}

closeButton.addEventListener("click", () => {
  handleCloseStuff();
  isSelectOpen = !isSelectOpen;
  arrowIconActiveOrder.style.transform = "rotate(0deg)";
});

closeButtonFilter.addEventListener("click", handleCloseStuff);
//

//clean button
const cleanButton = document.querySelector<HTMLElement>(".clean-button");
const checkboxes = document.querySelectorAll<HTMLInputElement>(".checkbox");

cleanButton.addEventListener("click", () => {
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  })
})
//

//apply button
const applyButton = document.querySelector<HTMLElement>(".apply-button");

applyButton.addEventListener("click", handleCloseStuff);

