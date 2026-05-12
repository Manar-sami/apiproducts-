const getproducts = async () => {

   try{
    const respons = await axios.get(`https://dummyjson.com/products`);
  return respons.data.products;
   }
   catch(error){
    console.log(error);
   }
} 


const displayproducts = async (index) => {
  
   

  try{
       const products = await getproducts(); 
       const limit = 10;

           const start = (index - 1) * limit;
           const end = index * limit;
      const data = products.slice(start, end).map((product) => { 
          
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
      document.querySelector('.products').innerHTML = data;

  }

  catch(error){ 
    console.log(error);
  }

 


 
   }
  

 displayproducts(1);

 const goPage = (page) => {
  displayproducts(page);
};


const searchproducts = async () => {
   try{
     const productsall = await getproducts();
     
    const searchInput = document.querySelector('input');

    searchInput.addEventListener('input', function (e) {

        const value = e.target.value.toLowerCase();

        const filteredproducts = productsall.filter((product) => {
            return product.title.toLowerCase().includes(value);
        });

             const productsContainer = document.querySelector('.products');


             if(filteredproducts.length === 0){
                productsContainer.innerHTML = `<p class="text-white text-2xl flex justify-center">No products found</p>`;
             }
             else{
             const data = filteredproducts.map((product) => {
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
        }).join("");

 
       productsContainer .innerHTML = data;
             }
      

      
    });
   }
    catch(error){ 
    console.log(error);
    }
};

 searchproducts();


 


const arrsort = async () => {

    const productsall = await getproducts();

    const sortSelect = document.querySelector('select');

    sortSelect.addEventListener('change', function (e) {

        const value = e.target.value;

        let sortedproducts = [...productsall];

        if (value === "asc") {
            sortedproducts.sort((a, b) => a.price - b.price);
        }

        if (value === "desc") {
            sortedproducts.sort((a, b) => b.price - a.price);
        }

        const data = sortedproducts.map((product) => {
            return `
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
            `;
        }).join("");

        document.querySelector('.products').innerHTML = data;
    });
};

arrsort();















