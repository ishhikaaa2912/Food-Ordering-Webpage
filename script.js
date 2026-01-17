let cartItems = [];
let totalPrice = 0;

function addToCart(item, price) {
    cartItems.push(item);
    totalPrice += price;

    const li = document.createElement("li");
    li.textContent = `${item} - ₹${price}`;
    document.getElementById("cart").appendChild(li);

    document.getElementById("total").innerText = totalPrice;
}

function placeOrder() {
    if (cartItems.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const name = prompt("Enter your name:");
    const table = prompt("Enter table number:");

    if (!name || !table) {
        alert("Please enter name and table number.");
        return;
    }

    alert(
        `✅ Order Placed Successfully!\n\n` +
        `Name: ${name}\n` +
        `Table No: ${table}\n` +
        `Items: ${cartItems.join(", ")}\n` +
        `Total: ₹${totalPrice}`
    );

    // Reset
    cartItems = [];
    totalPrice = 0;
    document.getElementById("cart").innerHTML = "";
    document.getElementById("total").innerText = "0";
}
