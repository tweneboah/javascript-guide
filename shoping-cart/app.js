const output = document.createElement('div');
document.body.appendChild(output);


const output1 = document.createElement('div');
document.body.appendChild(output1);


const itemInput1 = document.createElement('input');
itemInput1.setAttribute('type', 'text');
itemInput1.setAttribute('placeholder', 'Item name')
document.body.appendChild(itemInput1);


const itemInput2 = document.createElement('input');
itemInput2.setAttribute('type', 'number');
itemInput2.setAttribute('placeholder', 'cost');
document.body.appendChild(itemInput2);

const itemButton = document.createElement('button');
itemButton.textContent = 'Add Item';
itemButton.addEventListener('click', addItem);
output.appendChild(itemButton);



const items = [];



function Item(name, cost) {
    this.name = name;
    this.cost = cost;
    //Add method
    this.withTax = function () {
        return (this.cost * 1.5).toFixed(2);
    }

    this.shipping = function () {
        return (this.cost * 1.05).toFixed(2);
    }
}


function Cart() { };



function addItem() {
    //Get the value from input
    let tempName = itemInput1.value || 'Test 1';
    let tempValue = itemInput2.value || 1;

    let tempItem = new Item(tempName, tempValue);

    //console.log(tempItem)
    items.push(tempItem);
    console.log(items)

    let div = document.createElement('div');
    div.innerHTML = `<h3>${tempName}</h3>$${tempValue}`;
    div.style.border = "1px solid #ddd";
    div.style.display = "inline-block";
    div.style.width = "100px";
    div.addEventListener('click', function () {
        cart.adder(tempName, tempValue);
        cart.output();
    });

    div.tempName = tempName;
    div.tempValue = tempValue;
    document.body.appendChild(div);
    itemInput1.value = "";
    itemInput2.value = "";
}
