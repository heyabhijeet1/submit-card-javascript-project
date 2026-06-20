// let h1 = document.querySelector("h1");

// h1.addEventListener("click", function(){
//     h1.style.color="red";
// });

// let p = document.createElement("p");
// p.textContent="Click anywhere to get back click me";

// h1.addEventListener("dblclick", function(){
//     h1.style.display='none';
//     document.body.append(p)
// });

// document.addEventListener("click", function(){
//     h1.style.display='block';
//     p.remove();
// });

// let inp = document.querySelector('input');

// inp.addEventListener("input", function(a){
//     if (a.data !==null){
//         console.log(a.data)
//     }
// });


// let sel = document.querySelector('select');
// let career = document.querySelector('#career');

// sel.addEventListener("change", function(a){
//     career.textContent=`${a.target.value} Career Selected`;
// });

// let h = document.querySelector("h1")

// window.addEventListener("keydown", function(a){
//     // console.log(dets.key)
//     if (a.key=== " "){
//         h.textContent= "Space"
//     }
//     else{
//         h.textContent= `${a.key}`
//     }
// })

let form = document.querySelector("form");
let inp =document.querySelectorAll("input");
let cards = document.querySelector("#cards");

form.addEventListener("submit",function(dets){
    dets.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let pfp = document.createElement("div");
    pfp.classList.add("pfp");

    let img = document.createElement("img");
    img.setAttribute("src", inp[1].value);

    let h2 = document.createElement("h2");
    h2.textContent= inp[0].value;

    let h3 = document.createElement("h3");
    h3.textContent= inp[2].value

    let desc = document.createElement("p");
    desc.classList.add("desc");
    desc.textContent= inp[3].value;

    pfp.appendChild(img);
    card.appendChild(pfp);
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(desc);
    cards.appendChild(card);
} );



