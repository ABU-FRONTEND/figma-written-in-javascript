let body = document.querySelector("body")
body.style.backgroundColor = "#F2EAE2"
body.style.height = '100vh'
body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'

let container = document.createElement("div")
container.classList.add('container')
container.style.width = '600px'
container.style.backgroundColor = 'white'
container.style.borderRadius = '10px'
container.style.display = 'flex'
body.append(container)

let mainImg = document.createElement("div")
mainImg.classList.add('main_img')
mainImg.style.width = '300px'
mainImg.style.backgroundImage = 'url(../img/Bitmap.png)'
mainImg.style.backgroundRepeat = 'no-repeat'
container.append(mainImg)

let mainInfo = document.createElement("div")
mainInfo.classList.add('main_info')
mainInfo.style.width = '300px'
mainInfo.style.padding = '32px'
mainInfo.style.display = 'flex'
mainInfo.style.flexDirection = 'column'
mainInfo.style.rowGap = '19px'
container.append(mainInfo)

let companyName = document.createElement("h1")
companyName.innerText = 'perfume'
companyName.style.fontFamily = 'Montserrat'
companyName.style.color = '#6C7289'
companyName.style.textTransform = 'uppercase'
companyName.style.fontWeight = '500'
companyName.style.fontSize = '12px'
companyName.style.letterSpacing = '5px'
mainInfo.append(companyName)

let gabrielle = document.createElement("p")
gabrielle.innerText = 'Gabrielle Essence Eau De Parfum'
gabrielle.style.fontFamily = 'Fraunces'
gabrielle.style.fontSize = '32px'
mainInfo.append(gabrielle)

let perfumeInfo = document.createElement("p")
perfumeInfo.innerText = 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.'
perfumeInfo.style.color = '#6C7289'
perfumeInfo.style.fontSize = '14px'
perfumeInfo.style.fontFamily = 'Montserrat'
perfumeInfo.style.fontWeight = '500'
perfumeInfo.style.lineHeight = '23px'
mainInfo.append(perfumeInfo)

let prices = document.createElement("div")
prices.style.display = 'flex'
prices.style.alignItems = 'center'
prices.style.columnGap = '19px'
mainInfo.append(prices)

let discountPrice = document.createElement("p")
discountPrice.innerText = '$149.99'
discountPrice.style.fontFamily = 'Fraunces'
discountPrice.style.fontSize = '32px'
discountPrice.style.fontWeight = '700'
discountPrice.style.color = '#3D8168'
prices.append(discountPrice)

let oldPrice = document.createElement("p")
oldPrice.innerText = '$169.99'
oldPrice.style.fontFamily = 'Montserrat'
oldPrice.style.fontSize = '13px'
oldPrice.style.fontWeight = '500'
oldPrice.style.textDecoration = 'line-through'
oldPrice.style.color = '#3D8168'
prices.append(oldPrice)

let btn = document.createElement("button")
btn.innerText = 'add to cart'
btn.style.width = '100%'
btn.style.backgroundColor = '#3D8168'
btn.style.padding = '15px'
btn.style.border = 'none'
btn.style.borderRadius = '10px'
btn.style.color = 'white'
btn.style.textTransform = 'capitalize'
btn.style.fontWeight = '700'
btn.style.fontFamily = 'Montserrat'
btn.style.display = 'flex'
btn.style.justifyContent = 'center'
btn.style.alignItems = 'center'
btn.style.columnGap = '5px'
mainInfo.append(btn)

let basket = document.createElement("img")
basket.setAttribute("src", "img/Cart.svg")
 btn.prepend(basket)