
// getcategories
const getcategories = async () => {

  try{
     const respons= await axios.get("https://dummyjson.com/products/category-list");
   

   return respons.data;

  }
  catch(error){
    console.log(error);
  }
}

// displayCategories
const displayCategories = async () => {


     const loader = document.querySelector('.loader');
     loader.style.display = "inline-block";

   try{
     const categories = await getcategories();
     
    const data=categories.slice(0,8).map((category) => {
     return`
     
       <a href="./product.html?category=${category}" class="text-white flex  justify-between items-center group
           text-center py-5 px-4 bg-[#151f33] rounded-2xl  hover:bg-[#151f337b] hover: border-[#ffd230]
           hover:border hover:text-[#ffd230] transition-all
          ">
            <h3 >${category}</h3>
            <i class="fa-solid fa-angle-right"></i>

          </a>
     
     `

    }).join(" ");
    document.querySelector('.category').innerHTML = data;
   }
    catch(error){
      console.log(error);
    }

    finally{
      loader.style.display = "none";
    }
}


const getproducts = async () => {

   try{
    const respons = await axios.get(`https://dummyjson.com/products/`);
  return respons.data.products;
   }
   catch(error){
    console.log(error);
   }
} 


const displayproducts = async () => {
  const loader = document.querySelector('.loader');
     loader.style.display = "inline-block";

  try{
       const products = await getproducts(); 

      const data = products.slice(0, 10).map((product) => { 

         return`

        <a href="./product-details.html?category=${product.category}&productid=${product.id}" class="bg-[#151f33] rounded-2xl px-2.5 py-7 hover:border hover:border-[#ffa600] transition-all">
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
      }).join(" ");
      document.querySelector('.product').innerHTML = data;

  }

  catch(error){ 
    console.log(error);
  }

  finally{
      loader.style.display = "none";
  }


 
   }
  

displayCategories();

 displayproducts();

const header=document.querySelector('.header');
const homelink=document.querySelector('.home-link');
window.addEventListener("scroll",()=>{
   
    if(window.scrollY > 100){
       header.classList.remove("absolute");
      header.classList.add("bg-slate-900",'fixed','top-0','z-50','shadow-lg','shadow-[#e3bc2f24]');
      homelink.classList.add("text-[#e3bc2f]");
      homelink.classList.remove("text-white");
     
    } else {
      header.classList.add("absolute");
      header.classList.remove("bg-slate-900",'fixed','top-0','z-50','shadow-lg','shadow-[#e3bc2f24]');
    }
  })
