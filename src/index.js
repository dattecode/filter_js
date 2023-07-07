const URL_API = "https://ecommercebackend.fundamentos-29.repl.co/"
const productsHtml = document.querySelector(".products")

async function getApi (url) {
    try {
        const data = await fetch(url)
        const res = await data.json()
        return res
    } catch (error) {
        console.log(error);
    }
}

// -----------------------------------main
async function main () {

    const api_comerce = await getApi(URL_API)
    forTest(api_comerce)
    buttonFilter(api_comerce)
}

main()

// ----------------------------------functions
function forTest (arr) {

    let product = ``

    for (const item of arr) {
        const {name, image, description, category} = item

        product += `
            <div class="product ${category}">
                <h3>${name}</h3>
                <img src="${image}" alt="${name}">
                <p>${description}</p>
            </div>
        `
    }
    productsHtml.innerHTML = product
}

function buttonFilter(product) {
    // llamanos a las clase de buttons
    const buttonHtml = document.querySelectorAll(".buttons .btn")

    //le damos un bucle a buttonHtml para obtener los botones
    for (const button of buttonHtml) {
        //despues de obtener los botones creamos un evento con click
        button.addEventListener("click", function(e){
            //creamos una variable que guarde el evento para ejecutar nuestra condicional
            const filterBtn = e.target.id
            // vemos el evento si es all retornamos los productos con el print que los agrega
            if (filterBtn === "all"){
                forTest(product)
            } else { // de lo contrario retornamos un filter con el nuevo arr con lso productos
                // filtrados
                const newArr = product.filter(function (product) {
                    return product.category === filterBtn
                })
                forTest(newArr)
            }
        })   
    }
}
// ---------------------------------- events

