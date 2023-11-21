// var cart = JSON.parse(localStorage.getItem('cart')) || [];
// function addProductToCart(id, img, name, price) {
//     // Thêm sản phẩm mới vào giỏ hàng
//     var newProduct = { id: 3, name: 'Product 3', price: 30 };
//     cart.push(newProduct);

//     localStorage.setItem('cart', JSON.stringify(cart));
//     // var cartJSON = localStorage.getItem('cart');
//     // var cart = JSON.parse(cartJSON);
//     console.log(localStorage);

// }



        // $(document).ready(function () {
        //     $("#btnCart").click(function() {
        //         showCart();
        //     });
        // });
    
window.addEventListener("load", () => {
    // Thực hiện một số tác vụ khi trang được tải hoàn toàn
    // console.log(cartData);
    console.log(cart.get());
  });


// // Tạo danh sách các sản phẩm cần thêm vào giỏ hàng
// let cart_count=0;
// const cartData = localStorage.getItem("cart");
// if (cartData === null) {
//     cart = [];
//   } else {
//     // Nếu dữ liệu giỏ hàng tồn tại, chuyển đổi dữ liệu giỏ hàng từ chuỗi sang đối tượng
//     cart = JSON.parse(cartData);
//   }





// function addProductToCart() {
//     // Tạo đối tượng Item
// const item = {
//     id: 1,
//     name: "Sản phẩm 1",
//     image: "product-image-1.png",
//     price: 100000,
//     quantity: 1,
//   };
  
//   // Thêm sản phẩm vào giỏ hàng
//   localStorage.setItem("cart", JSON.stringify(item));
//   cart_count++;

//       console.log(localStorage);
//       console.log(cartData);
//       console.log(cart);
//       console.log(cart_count);
// }



// Cập nhật tổng giá trị giỏ hàng
// let totalPrice = 0;
// for (const item of cart) {
//   totalPrice += item.price * item.quantity;
// }



const Cart = function() {
  this.products = [];
};

Cart.prototype.add = function(productName, quantity) {
  this.products.push({
    name: productName,
    quantity: quantity,
  });
};

Cart.prototype.remove = function(productName) {
  const index = this.products.findIndex((product) => product.name === productName);
  if (index !== -1) {
    this.products.splice(index, 1);
  }
};

Cart.prototype.update = function(productName, quantity) {
  const product = this.products.find((product) => product.name === productName);
  if (product !== undefined) {
    product.quantity = quantity;
  }
};

Cart.prototype.get = function() {
  return this.products;
};

// Tạo một đối tượng giỏ hàng
const cart = new Cart();

function addProductToCart() {
// Thêm sản phẩm vào giỏ hàng
// cart.add("Sản phẩm 1", 1);
cart.add("Sản phẩm 2", 2);
// Lưu trữ giỏ hàng trong cookie
const cartData = JSON.stringify(cart.get());
document.cookie = "cartData=" + cartData;
console.log(cart.get());
}



// Kiểm tra trạng thái giỏ hàng
console.log(cart.get());
// [
//   {
//     name: "Sản phẩm 1",
//     quantity: 1,
//   },
//   {
//     name: "Sản phẩm 2",
//     quantity: 2,
//   },
// ]


