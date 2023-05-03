const products = [];

function addProduct() {
  const product = document.getElementById("product").value;
  const price = Number(document.getElementById("price").value);
  const quantity = Number(document.getElementById("quantity").value);
  const total = price * quantity;
  const item = { product, price, quantity, total };
  products.push(item);
  document.getElementById("product").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
  displayProducts();
  axios
    .delete("https://crudcrud.com/api/55307d47034940c0ae2850eaf74b17d7/E-Com",item)
    .then(function (response) {
     console.log(response);
    })
     .catch(function (error) {
      console.log(error);
      alert("An error occurred while sending the data.");
    });
}

function displayProducts() {
    const list = document.getElementById("list");
    list.innerHTML = "";
    let totalPrice = 0;
    products.forEach(function(item, index) {
      const listItem = document.createElement("li");
      const text = `${item.product}: ${item.price} x ${item.quantity} = ${item.total}`;
      listItem.innerText = text;
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener("click", function() {
        products.splice(index, 1);
        displayProducts();
      });
      listItem.appendChild(deleteButton);
      list.appendChild(listItem);
      totalPrice += item.total;
    });
    document.getElementById("total").innerText = `${totalPrice}`;

    
  }
