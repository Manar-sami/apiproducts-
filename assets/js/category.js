
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
     
    const data=categories.map((category) => {
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
displayCategories();