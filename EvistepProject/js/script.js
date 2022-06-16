"use strict"
let headName = document.querySelector(".headName")
const aside = document.querySelector(".aside")
const section = document.querySelector(".section")
const sectionTwo = document.querySelector(".sectionTwo")
const sectionThree = document.querySelector(".sectionThree")
const sectionCareers = document.querySelector(".sectionCareers")
const sectionConnect = document.querySelector(".sectionConnect")
const sectionRecognition = document.querySelector(".sectionRecognition")
const sectionThreeCont = document.querySelector(".sectionThreeCont")
const recName= document.querySelector(".recName")
const containerImg = document.querySelector(".containerImg")
const recImg = document.querySelector(".recImg")
const button = document.querySelector(".experience > button")
const click = document.querySelector(".fa-chevron-down")
const closeClick = document.querySelector(".fa-chevron-up")
const openList = document.querySelector(".openList")
const twoOpenList = document.querySelector(".twoOpenList")
const twoOpen = document.getElementById("twoOpen")
const twoClose = document.getElementById("twoClose")
const bars = document.querySelector(".fa-bars")
const closeBar = document.querySelector(".fa-xmark")
const burger = document.querySelector(".burger")
const burgerFon = document.querySelector(".burgerFon")



const observer = new IntersectionObserver((entries, obs)=>{
    const asideObs =[...entries] 
    asideObs.map((elem)=>{

        if(elem.isIntersecting){
            elem.target.style.cssText="transform: translateY(0); opacity: 1"
        }
    })
    console.log(entries)
},{
    root: null,
    threshold: 0,
    rootMargin: "-100px 0px",
})
observer.observe(aside)
observer.observe(section)
observer.observe(sectionTwo)
observer.observe(sectionThree)
observer.observe(sectionThreeCont)
observer.observe(containerImg)
observer.observe(button)
observer.observe(sectionCareers)
observer.observe(sectionConnect)
observer.observe(sectionRecognition)
observer.observe(recImg)
observer.observe(recName)


click.addEventListener("click", ()=>{
    click.style.display="none"
    closeClick.style.display="inline-block"
    openList.style.cssText="display: block;"
})
closeClick.addEventListener("click", ()=>{
    click.style.display="inline-block"
    closeClick.style.display="none"
    openList.style.cssText="display: none;"
})
twoOpen.addEventListener("click", ()=>{
    twoOpen.style.display="none"
    twoClose.style.display="inline-block"
    twoOpenList.style.cssText="display: block;"
})
twoClose.addEventListener("click", ()=>{
    twoClose.style.display="none"
    twoOpen.style.display="inline-block"
    twoOpenList.style.cssText="display: none;"
})

bars.addEventListener("click", ()=>{
    burger.style.width="300px"
    closeBar.style.cssText=" opacity: 1;"
    burgerFon.style.cssText="opacity: 0.5; z-index: 1"
})
closeBar.addEventListener("click", ()=>{
    burger.style.width="0"
    closeBar.style.cssText=" opacity: 0;"
    burgerFon.style.cssText="opacity: 0; z-index: -1"
})