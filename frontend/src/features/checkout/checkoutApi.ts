import { API_BASE_URL } from "../../app/contracts/const";

// Sending ProductCodes from the Basket to Checkout
export function checkout(productCodes: string[]) {
    return new Promise<string>((resolve) =>
    fetch(`${API_BASE_URL}/checkout`,{
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body:  JSON.stringify(productCodes)
       })
       .then((res)=>{
            resolve(res.json())
        }
        )
       .catch(error => new Error("Invalid"))
    );
  }
  
