document.querySelector('button').addEventListener('click', getColor);

function changeColor(){
    document.getElementById("square").style.backgroundColor =
    document.querySelector('input').value;
  }

async function getColor(){
    const colName = document.querySelector('input').value
    try {
        const response = await fetch(`https://color-picker-api-na.herokuapp.com/api/colors/${colName}`)
        const data = await response.json()

        document.querySelector('p').innerText =
        `${data.name}
        ${data.RGB}
        ${data.Hex}
        ${data.HSL}`

    } catch (err){
        console.log(err)
    }
}