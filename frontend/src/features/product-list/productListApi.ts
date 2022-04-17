import { API_BASE_URL } from "../../app/contracts/const";
import { ProductInterface } from "../../app/contracts/product/product.interface";

// Fetching Products from the API
export function fetchProducts() {
    return new Promise<ProductInterface[]>((resolve) =>
       fetch(`${API_BASE_URL}/product/get-all`).then(res=>resolve(res.json()))
    );
  }
  
// Sending Request to add new Product to the API
export function addNewProduct(product: ProductInterface) {
    return new Promise<ProductInterface[]>((resolve) =>
       fetch(`${API_BASE_URL}/product`,{
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body:  JSON.stringify(product)
       })
       .then(res=>resolve(res.json()))
       .catch(error => new Error("Invalid"))
    );
  }
  