const params=new URLSearchParams(location.search);
const categoryname=params.get("category");

async function getproducts(){
    const respons= await axios.get(`https://dummyjson.com/products/category/${categoryname}`);
    return respons.data.products;
}

 const displayproducts=async()=>{
    const products=await getproducts();

    
     document.querySelector('.product-title').innerHTML=categoryname;
     document.querySelector('.product-number').innerHTML= `${products.length} products available in this category`;


    const data=products.map((product)=>{
     
      return`

        <a href="./product-details.html?category=${categoryname}&productid=${product.id}" class="bg-[#151f33] rounded-2xl px-2.5 py-7 hover:border hover:border-[#ffa600] transition-all">
         <div>
          <img src=${product.thumbnail} alt="g" class="w-full h-[200px] object-cover">
         </div>
          
          <div class="text-white text-start h-[30px]">
          ${product.title}
          </div>

          <div class="flex justify-between items-center text-[#ffa600] mt-6">
            $${product.price}

            <div>
            <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </a>
      `       
    }
).join(" ");


    document.querySelector('.product').innerHTML=data;

 }

 displayproducts();