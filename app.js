let movies=[
    {
        odgledan:false,
        naziv:'The Power of the Dog',
        godina:2021,
        drzava:"USA",
        napomena:"Western Drama",
        glumci:["Jesse Plemons","Benedict Cumberbatch"]
    },
    {
        odgledan:false,
        naziv:'Dune',
        godina:2021,
        drzava:"USA",
        napomena:"Action Adventure Drama",
        glumci:["Zendaya","Rebecca Ferguson"]
    },
    {
        odgledan:false,
        naziv:'The card counter',
        godina:2021,
        drzava:"USA",
        napomena:" - ",
        glumci:["Oscar Isaac"]
    }
];

let tableBody = document.getElementById("tbody");

function displayMovies(){
    let text = '';
    movies.forEach(item=>{
        text+=`<tr class=${item.odgledan?"watched":"not_watched"}>
            <td><input type="checkbox" ${item.odgledan?"checked":""}></td>
            <td>${item.naziv}</td>
            <td>${item.godina}</td>
            <td>${item.drzava}</td>
            <td>${item.napomena}</td>
            <td>${item.glumci.join(", ")}</td>
        </tr>
        `
    });
    tableBody.innerHTML = text;
    checkEvent()
}

function checkEvent(){
let checkboxes = document.querySelectorAll("input[type='checkbox']")
checkboxes.forEach((item,index)=>{
    item.addEventListener('change',()=>{
        if(item.checked){
            movies[index].odgledan = true
        }
        else{
            movies[index].odgledan = false
        }
        displayMovies()
    })
})
}

function clearFormInputs(){
    let formInputs = document.querySelectorAll(".form-control");
    formInputs.forEach(item=>item.value = "")
}

displayMovies();

let formSubmitting = document.getElementById("addingMovie");

formSubmitting.addEventListener("submit",(e)=>{
    e.preventDefault();
    let odgledan = false;
    let naziv = document.getElementById("movie_name").value;
    let godina = document.getElementById("year").value;
    let drzava = document.getElementById("country").value || " - ";
    let napomena = document.getElementById("reminder").value || " - ";
    let glumci = document.getElementById("actors").value.split(",").map(item=>item.trim()); 
    movies.push({odgledan,naziv,godina,drzava,napomena,glumci});
    clearFormInputs();
    displayMovies()
})

document.getElementById("x_button").addEventListener("click",()=>clearFormInputs());
document.getElementById("close_button").addEventListener("click",()=>clearFormInputs());
