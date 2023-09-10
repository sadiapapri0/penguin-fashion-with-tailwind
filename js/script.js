const allBuyButton = document.getElementsByClassName('btn-buy');
// console.log(allBuyButton);
for (const buyButton of allBuyButton) {
    buyButton.addEventListener('click', function (event) {
        // console.log('buy button has been clicked');
        console.log(event.target.innerText);
    })
}


document.getElementById('btn-id').addEventListener('click', function () {
    const titleElement = document.getElementById('title');
    titleElement.innerText = 'I AM PENGUIN';
})