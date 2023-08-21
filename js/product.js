let total = 0;
const purchaseBtn = document.getElementById("purchaxe-btn");
const applybtn = document.getElementById("apply-btn");

function cardclick(target) {
  // click korle name pawer jonno
  const selectedProduct = document.getElementById("selected-product");
  const productName = target.childNodes[3].childNodes[3].innerText;
  const li = document.createElement("li");
  li.innerText = productName;
  selectedProduct.appendChild(li);
  //  price pawer jonno
  const productPrice =
    target.childNodes[3].childNodes[5].innerText.split(" ")[0];
  // price total korar jonno
  total = parseFloat(total) + parseFloat(productPrice);
  document.getElementById("total-product-price").innerText = total;
  document.getElementById("after-discount").innerText = total.toFixed(2);
  
  

  // btn enable
  if (total > 0) {
    purchaseBtn.disabled = false;
  } else {
    purchaseBtn.disabled = true;
  }
  if (total >= 200) {
    applybtn.disabled = false;
  } else {
    applybtn.disabled = true;
  }
}
// money discount calculation
document.getElementById("apply-btn").addEventListener("click", function () {
  const coupon = document.getElementById("coupon").value;
  if(coupon === 'SELL200'){
    const totalPrice = parseFloat(document.getElementById("total-product-price").innerText); 
    const discount = document.getElementById('discount');

   
    const discountPrice = (totalPrice/100) * 20;
    discount.innerText = discountPrice.toFixed(2);
    const lastTotal = totalPrice - discountPrice;
    document.getElementById("after-discount").innerText = lastTotal.toFixed(2);
  }
  
});

document.getElementById('go-home-btn').addEventListener('click',function(){
  document.getElementById("coupon").value = '';
   document.getElementById("total-product-price").innerText = '00.00';
   document.getElementById("after-discount").innerText = '00.00';
   document.getElementById('discount').innerText = '00.00';
   document.getElementById("selected-product").innerText ='';
 })