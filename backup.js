//
const search= document.querySelector('#search');
const displayContainer = document.querySelector('#display_container');
const startWith =document.querySelector('#start_with')
const anyWord=document.querySelector('#search_any_word')
const sortCountries=document.querySelector('#sort_counties')
let countSearchResult=document.querySelector('#count_search_result')
let start
let searchInput =''

const dislaySearch= (countries) => {
    displayContainer.innerHTML = ''  
    countries.forEach(country => {  
                const div=document.createElement('div')
                const h3= document.createElement('h3')
                const capital=document.createElement('p')
                const population = document.createElement('p')
                const flag=document.createElement('img')
                countSearchResult.textContent =`number of search result displayed: `+ `${displayContainer.childElementCount+1}`
                displayContainer
                h3.textContent=country.name
                capital.textContent=country.capital
                population.textContent=country.population
                flag.src=country.flag
                div.setAttribute('class','country_div')
                div.append(h3,capital,population,flag)
                displayContainer.append(div)
               });        
    };

const url = 'https://restcountries.eu/rest/v2/all'
fetch(url)
    .then(response => response.json())
    .then(countries => {
let flagg=1
    dislaySearch(countries);    
    startWith.addEventListener('click',function() {    
        flagg=1  
        searchStartWith(countries)})  
    
    anyWord.addEventListener('click',function(){
            flagg=2
        searchAnyWord(countries)   
        }) 

    sortCountries.addEventListener('click', function(){
        if (flagg==1){
            searchStartWith(countries.reverse()) 
        }
        else if(flagg==2){
           searchAnyWord(countries.reverse())  
            }
        })

    search.addEventListener('input', function(){
        if(flagg==1) {
        searchStartWith(countries)}
        else if(flagg==2) {
            searchAnyWord(countries)}
        })
 })

const searchStartWith= (countries) => {
    searchInput = search.value;     
    countries= countries.filter(country => {
        return country.name.toLowerCase().startsWith(searchInput.toLowerCase())         
        } ) 
       
        dislaySearch(countries)    
};

const searchAnyWord= (countries) => {
    searchInput =search.value;  
    countries= countries.filter(country => {
        return country.name.toLowerCase().includes(searchInput.toLowerCase())         
        } )  
        dislaySearch(countries)
};
