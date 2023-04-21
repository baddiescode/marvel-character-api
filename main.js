
document.querySelector("button").addEventListener("click", getCharacter)


function getCharacter(){

    let enterCharacter = document.querySelector("input").value;



    fetch(`/api/${enterCharacter}`) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data) 

        document.querySelector(".name").textContent = `${enterCharacter}`
        document.querySelector(".superPower").textContent = data.superPower
        document.querySelector(".originUniverse").textContent = data.originUniverse
        document.querySelector(".alterEgo").textContent = data.alterEgo




    })
    .catch(err => { 
        console.log(`error ${err}`) 
    });



}
