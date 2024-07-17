let dashboard = document.querySelector(".dashboard")
let dropbtn = document.querySelector(".dropDownBtn")

dashboard.addEventListener("click", function(){
    if(dropbtn.classList.contains("dropDownItem")){
        dropbtn.classList.remove("dropDownItem")
    }
    else{
        dropbtn.classList.add("dropDownItem")
    }
});

let page = document.querySelector(".page")
let pagebtn = document.querySelector(".page-btn")

page.addEventListener("click", function(){
    if(pagebtn.classList.contains("pageBtnItem")){
        pagebtn.classList.remove("pageBtnItem")
    }
    else{
        pagebtn.classList.add("pageBtnItem")
    }
});

let destination = document.querySelector(".destination")
let destinationBtn = document.querySelector(".destinationBtn")

destination.addEventListener("click", function(){
    if(destinationBtn.classList.contains("destinationBtnItem")){
        destinationBtn.classList.remove("destinationBtnItem")
    }
    else{
        destinationBtn.classList.add("destinationBtnItem")
    }
});

let person = document.querySelector(".person")
let personBtn = document.querySelector(".personBtn")

person.addEventListener("click", function(){
    if(personBtn.classList.contains("personBtnItem")){
        personBtn.classList.remove("personBtnItem")
    }
    else{
        personBtn.classList.add("personBtnItem")
    }
});

let category = document.querySelector(".category")
let categoryBtn = document.querySelector(".categoryBtn")

category.addEventListener("click", function(){
    if(categoryBtn.classList.contains("categoryBtnItem")){
        categoryBtn.classList.remove("categoryBtnItem")
    }
    else{
        categoryBtn.classList.add("categoryBtnItem")
    }
});

let language = document.querySelector(".language")
let arabic = document.querySelector(".arabic")

language.addEventListener("click", function(){
    if(arabic.classList.contains("arabicBtn")){
        arabic.classList.remove("arabicBtn")
    }
    else{
        arabic.classList.add("arabicBtn")
    }
});

let country = document.querySelector(".country")
let usd = document.querySelector(".usd")

country.addEventListener("click", function(){
    if(usd.classList.contains("usdBtn")){
        usd.classList.remove("usdBtn")
    }
    else{
        usd.classList.add("usdBtn")
    }
});
