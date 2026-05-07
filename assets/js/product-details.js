const params=new URLSearchParams(location.search);
const productid=params.get("productid");

async function getproducts(){
    const respons= await axios.get(`https://dummyjson.com/products/${productid}`);
    return respons.data;
}

 const displayproductsdetails=async()=>{
    const product=await getproducts();
   const image = `
    <img src="${product.thumbnail}" 
         class="w-full h-[400px] rounded-4xl object-cover">
  `;
   document.querySelector('.pr-img').innerHTML=image;

   document.querySelector('.category').innerHTML=product.category;

    document.querySelector('.productname').innerHTML=product.title;

    document.querySelector('.brand').innerHTML=`Brand: ${ product.brand}`;

    document.querySelector('.price').innerHTML=product.price;

    document.querySelector('.instock').innerHTML=`In Stock (${product.stock} items)`;

    document.querySelector('.description').innerHTML=product.description;

    document.querySelector('.reviews').innerHTML=`Reviews (${product.reviews.length})`;
    


const reviews=product.reviews.map((review)=>{

       let stars = "";

    for (let i = 1; i <= 5; i++) {
        if (i <= review.rating) {
            stars += `<span class="text-yellow-500 text-lg">&#9733;</span>`;
        } else {
            stars += `<span class="text-gray-400 text-lg">&#9733;</span>`;
        }
    }

    return `
    <div class="bg-slate-800/50 border border-white/10 rounded-2xl p-6">
        <div class="flex items-center justify-between gap-4 mb-2">
         <h4 class="text-white font-bold">${review.reviewerName}</h4>
         <div>${stars}</div>
        </div>

        <span class="text-sm text-gray-400">${review.date.split("T")[0]}</span>
        <p class="text-[#a1a1a1] mt-1.5">${review.comment}</p>
    </div>
    `;
   }).join('');

   document.querySelector('.Reviews').innerHTML=reviews;
 }

 displayproductsdetails();