function onClick(clickId, idName,price) {
    document.getElementById(clickId).addEventListener("click", function () {
        updatePrice(idName,price);
    });
}
onClick("sixteenGB", "memory-cost", 300);
onClick("eightGB", "memory-cost", 0);
onClick("ssd1", "storage-cost", 0);
onClick("ssd2", "storage-cost", 200);
onClick("ssd3", "storage-cost", 300);
onClick("paid-delivery", "delivery-cost", 20);
onClick("free-delivery", "delivery-cost", 0);
function updatePrice(idName,price) {
    let idNameText = document.getElementById(idName);
    idNameText.innerText = price;
    const totalPrice = document.getElementById('total-price');
    const memoryCost = document.getElementById('memory-cost').innerText;
    const bestPrice = document.getElementById('best-price').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const total = parseFloat(bestPrice)+parseInt(memoryCost) + parseFloat(storageCost) + parseFloat(deliveryCost);
    totalPrice.innerText = total;
}
// let promoCode = 'keepRolling';
//  const totalPrice = document.getElementById('total-price');
// if (promoCode === 'keepRolling') {
//     if (parseFloat(totalPrice.innerText)>2000) {
//         totalPrice.innerText = (totalPrice * 20) / 100;
//     }
// }

document.getElementById('promo-code').addEventListener('click', function () {
    let pinGenerator = document.getElementById('pin-generator');
    pinGenerator.style.display = 'block'
})
function pinGenerator() {
    let pin = Math.round(Math.random() * 10000)
    let pinLength = pin + '';
    if (pinLength.length === 4) {
        return pin;
    }
    else {
        return pinGenerator();
    }
}
let pinInput = document.getElementById('pin-input');
document.getElementById('generate-pin').addEventListener('click', function () {
    pinInput.value = pinGenerator();
})

document.getElementById('apply-btn').addEventListener('click', function () {
    let promoInput = document.getElementById('promo-input');
    let totalPrice = document.getElementById('total-price');
    let appliedText = document.getElementById('applied-text');
    let couldNot = document.getElementById('couldnot');
    if (promoInput.value === pinInput.value) {
        promoInput.value = '';
        if (parseFloat(totalPrice.innerText)>1500) {
            let discount = (parseFloat(totalPrice.innerText) * 10)/100;
            totalPrice.innerText = parseFloat(totalPrice.innerText) - discount;
            console.log(appliedText);
            appliedText.style.display = 'block';
            couldNot.style.display = 'none'
        }
        else {
            couldNot.innerText = "Buy More Than 1500$"
            appliedText.style.display = 'none';
            couldNot.style.display = 'block'
        }
    }
    else {
        appliedText.style.display = 'none';
        couldNot.style.display = 'block'
    }
})