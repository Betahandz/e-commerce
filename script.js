// *********** SELECTED ELEMENTS
const thumbnails = document.querySelector(".thumbnails");
const thumb = [... thumbnails.querySelectorAll("img")];
const Product = document.querySelector(".prodPic");
const firstPic = Product.querySelectorAll("img")[0];
const changePicBtn = document.querySelectorAll(".products button");
const checkout = document.querySelector(".basket img");
const itemsinbasket = document.querySelector(".numOfItems");
const itemdisplaybox = document.querySelector(".display");
const checkout2 = document.querySelector(".checkout2");
const checkout1 = document.querySelector(".checkout1");
const cart = document.querySelector(".cart");
const btnquantity = document.querySelectorAll(".quantity button");
const quantity = document.querySelector(".amount");
const msg = document.querySelector(".msg");
const nav = document.querySelector(".compass");
const navopener = document.getElementById("menu");
const navcloser = document.querySelector(".comclose");

// ************ OPTIONS OR CONDITIONS
// getting width every second divided by two
let width;
setInterval(() => {
    width = firstPic.clientWidth + 10;
}, 500);



// ****************** FUMCTIONS

// function nextPhoto
const nextPhoto = (e) => {
    let elemdata = e.currentTarget.dataset.photo;
    thumb.forEach(item => {
        item.classList.remove("active");
    })
    e.currentTarget.classList.add("active");
    
    switch (elemdata) {
        case "thumbtwo":
            Product.scrollLeft = width;
            break;
        case "thumbthree":
            Product.scrollLeft = width * 2;
            break;
        case "thumbfour":
            Product.scrollLeft = width * 3;
            break;
        default:
            Product.scrollLeft = 0;
    }
}
// function thumbing
const thumbing = (num) => {
    thumb.forEach(item => {
        item.classList.remove("active");
    })
    thumb[num].classList.add("active");
}
// function change pix
let numming = 0;
const changepix = (e) => {
    let klass = e.currentTarget.classList;
    let n = thumb.length - 1;
    if (klass == "next") {
        numming >= n ? numming = n : numming++;
        thumbing(numming);
        Product.scrollLeft += width;
    }else {
        numming <= 0 ? numming = 0 : numming--;
        thumbing(numming);
        Product.scrollLeft -= width;
    }
}
// funcition to showcart
const showCart = () => {
    cart.classList.toggle("show");
}
const closecart = () => {
    cart.classList.remove("show");
}
// funcition calculate 
const calculate = (e) => {
    let char = e.currentTarget.classList;
    let calcNum = Number(quantity.textContent);
    char == "add" ? calcNum++ : calcNum--;
    quantity.textContent = calcNum;
}
// function showing
const showing = () => {
    let num = itemdisplaybox.children.length;
    console.log(num)
    if(num <= 0) {
        msg.classList.add("show");
        itemsinbasket.classList.remove("show");
        itemsinbasket.textContent = num;
        itemdisplaybox.classList.remove("show");
        checkout1.classList.remove("show");
    }else {
        msg.classList.remove("show");
        itemsinbasket.classList.add("show");
        itemsinbasket.textContent = num;
        console.log(itemdisplaybox);
        itemdisplaybox.classList.add("show");
        checkout1.classList.add("show");
    }
}
// function checkout two
const addToCart = () => {
    let imagesource = firstPic.src.slice(86);
    let numofitems = Number(quantity.textContent);

    let discount = document.querySelector(".discountprice").textContent;
    discount = discount.slice(1);
    discount = discount.slice(0, 3);

    let nameOfitem = document.querySelector(".title").textContent;
    
    let product = discount * numofitems;
    if(numofitems == 0) {
        return;
    }else {
        itemdisplaybox.innerHTML = `<article class="itembox">
        <img src="${imagesource}" alt="item img">
        <div class="itemdet">
          <p class="nameofitem">${nameOfitem}</p>
          <p class="calculated">$<span class="discountcost">${discount}</span> x <span class="numofitem">${numofitems}</span> <b class="total">${product}</b></p>
        </div>
        <img src="images/icon-delete.svg" alt="delete" class="deleteItem">
      </article>`
    }
  const delbtn = document.querySelectorAll(".deleteItem");
  delbtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.currentTarget.parentNode.remove();
        showing();
    })
  })
  showing();
}
// function to toggle menu
const toggleMenu = () => {
    nav.classList.toggle("trans");
    console.log(toggleMenu);
}


// ************* EVENT LISTENERS
// nav opener listerner
navopener.addEventListener("click", toggleMenu);
// nav closer listener;
navcloser.addEventListener("click", toggleMenu);
// check out two listener
checkout2.addEventListener("click", addToCart);
// checkout listerner
checkout.addEventListener("click", showCart);
// checkout.addEventListener("blur", closecart);
// thumb fuction
thumb.forEach(thumbnail => {
    thumbnail.addEventListener("click", nextPhoto)
})
// button for products function 
changePicBtn.forEach(btn => {
    btn.addEventListener("click", changepix);
})
// quant buttons
btnquantity.forEach(btn => {
    btn.addEventListener("click", calculate);
})

/**************** abstrct learning */