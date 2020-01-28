// done functionality

const search= document.querySelector('#search');
const container = document.querySelector('#container');
let searchInput=''
const startWith =document.querySelector('#start_with')
const anyWord=document.querySelector('#search_any_word')
const sortCountries=document.querySelector('#sort_counties')
let start, countries, countries01,countries2
let doReverse
countries=[...countriesInfo]
const dislaySearch= (countries) => {
    container.innerHTML = ''  
    countries.forEach(country => {  
                const div=document.createElement('div')
                const h3= document.createElement('h3')
                const capital=document.createElement('p')
                const population = document.createElement('p')
                const flag=document.createElement('img')
                h3.textContent=country.name
                capital.textContent=country.capital
                population.textContent=country.population
                flag.src=country.flag
                div.setAttribute('class','country_div')
                div.append(h3,capital,population,flag)
                container.append(div)
               });        
    };
dislaySearch(countries);

const searchStartWith= () => {search.addEventListener('input', e => {
    searchInput = e.target.value;     
    countries= countriesInfo.filter(country => {
        return country.name.toLowerCase().startsWith(searchInput.toLowerCase())         
        } )    
        dislaySearch(countries)    
})};

const searchAnyWord= () => {search.addEventListener('input', e => {
    searchInput = e.target.value;  
    countries= countriesInfo.filter(country => {
        return country.name.toLowerCase().includes(searchInput.toLowerCase())         
        } )  
        dislaySearch(countries)
})};

startWith.addEventListener('click',searchStartWith)
anyWord.addEventListener('click',searchAnyWord)

sortCountries.addEventListener('click', function(){
   dislaySearch(countries.reverse())
})
