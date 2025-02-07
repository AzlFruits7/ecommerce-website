var ans = new Promise((res, rej) => {
  setTimeout(() => {
    var n = Math.floor(Math.random() * 10);
    console.log(n);
    if (n < 5) {
      return res;
    } else {
      return rej;
    }
  }, 5000);
});
ans
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));


// setInterval(()=>{
// console.log("Helo")
// },1000);

// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       if (skills.length > 0) {
//         resolve(skills)
//       } else {
//         reject('Something wrong has happened')
//       }
//     }, 2000)
//   })



//   doPromise
//     .then(result => {
//       console.log(result)
//     })
//     .catch(error => console.log(error))



// setTimeout(()=>{
//     async();
//     },5000);


// function async(){
//     fetch("https://fakestoreapi.com/products")
//     .then((response) => response.json())
//     .then((data) => {Products(data);})
// .catch((err) => {console.log(err, "This is error.");});

// function Products(data) {
//     // console.log(data);

//   const cards =   data.map((item)=>(

//     `<div class="card">
//     <div class="card__title">
//       <div class="icon">
//         <a href="#"><i class="fa fa-arrow-left"></i></a>
//       </div>
//       <h3>${item.category}</h3>
//     </div>
//     <div class="card__body">
//       <div class="half">
//         <div class="featured_text">
//           <h2>${item.title}</h2>
//           <p class="sub">Best Quality</p>
//           <p class="price"> $ ${item.price}</p>
//         </div>
//         <div class="image">
//           <img src="${item.image}" alt="">
//         </div>
//       </div>
//       <div class="half">
//         <div class="description">
//           <p>${item.description}</p>
//         </div>
//         <span class="stock"><i class="fa fa-pen"></i> In stock</span>
//         <div class="reviews">
//           <ul class="stars">
//             <li><i class="fa fa-star"></i></li>
//             <li><i class="fa fa-star"></i></li>
//             <li><i class="fa fa-star"></i></li>
//             <li><i class="fa fa-star"></i></li>
//             <li><i class="fa fa-star-o"></i></li>
//           </ul>
//           <span>(64 reviews)</span>
//         </div>
//       </div>
//     </div>
//     <div class="card__footer">
//       <div class="recommend">
//         <p>Recommended by</p>
//         <h3>Andrew Palmer</h3>
//       </div>
//       <div class="action">
//         <button type="button">Add to cart</button>
//       </div>
//     </div>
//   </div>

//     `

//     ))
//     const productsContainer = document.getElementById("products-container");
//     productsContainer.innerHTML=cards;

//   }

// }

// const search_btn = document.getElementById('search');
// search_btn.addEventListener((input),()=>{
//     search();
// })

// function search(){

// }


setTimeout(() => {
  asyncFetch();
}, 2000);

function asyncFetch() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      Products(data);
    })
    .catch((err) => {
      console.log(err, "This is error.");
    });
}

function Products(data) {
  const cards = data.map(
    (item) =>
      `<div class="card">
    <div class="card__title">
      <div class="icon">
        <a href="#"><i class="fa fa-arrow-left"></i></a>
      </div>
      <h3>${item.category}</h3>
    </div>
    <div class="card__body">
      <div class="half">
        <div class="featured_text">
          <h2>${item.title}</h2>
          <p class="sub">Best Quality</p>
          <p class="price"> $ ${item.price}</p>
        </div>
        <div class="image">
          <img src="${item.image}" alt="">
        </div>
      </div>
      <div class="half">
        <div class="description">
          <p>${item.description}</p>
        </div>
        <span class="stock"><i class="fa fa-pen"></i> In stock</span>
        <div class="reviews">
          <ul class="stars">
            <li><i class="fa fa-star"></i></li>
            <li><i class="fa fa-star"></i></li>
            <li><i class="fa fa-star"></i></li>
            <li><i class="fa fa-star"></i></li>
            <li><i class="fa fa-star-o"></i></li>
          </ul>
          <span>(64 reviews)</span>
        </div>
      </div>
    </div>
    <div class="card__footer">
      <div class="recommend">
        <p>Recommended by</p>
        <h3>Andrew Palmer</h3>
      </div>
      <div class="action">
        <button type="button">Add to cart</button>
      </div>
    </div>
  </div>`
  );

  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = cards.join("");
}

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => {
  search();
});

function search() {
  const searchProduct = document.getElementById("search-input").value.toLowerCase();
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      const filterProduct = data.filter((item) => {
        return item.title.toLowerCase().includes(searchProduct);
      });
      Products(filterProduct);
    })
    .catch((err) => {
      console.error(err, "Error");
    });
}


