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
