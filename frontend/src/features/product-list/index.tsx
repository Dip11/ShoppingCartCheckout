import { useEffect, useState } from 'react';
import { ProductInterface } from '../../app/contracts/product/product.interface';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addToBasket, basketQuantity } from '../basket/basketStore';
import { addNewProductAsync, getProductListAsync, productList } from './productListStore';

export default function ProductListView() {
    const dispatch = useAppDispatch();

    // Getting the Products from the Store
    const products = useAppSelector(productList);

    // Declaring local State Variable for Adding a Product
    const [productCode, setProductCode] = useState<string>("");
    const [productName, setProductName] = useState<string>("");
    const [productPrice, setProductPrice] = useState<number>(0);
    
    // Getting the total number of products of the Basket
    const basketQty = useAppSelector(basketQuantity);


    useEffect(() => {
        // Dispatching Funtion to the product list from the API 
        dispatch(getProductListAsync());
    }, [])


    const handelAddNewProduct = () => {
        let product: ProductInterface = {
            productCode : productCode,
            name: productName,
            price: productPrice
        }

        // Dispatching function to add new product into the API 
        dispatch(addNewProductAsync(product));
    }
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h5>Product in the Basket:  <strong>{basketQty}</strong> </h5>
                    </div>
                </div>
                <div className="row">
                    <h5>Add New Product</h5>
                    <div className="col-md-3">
                        <input type="text" onChange={(e) => setProductCode(e.target.value)} /> 
                    </div>
                    <div className="col-md-3">
                        <input type="text" onChange={(e) => setProductName(e.target.value)} /> 
                    </div>
                    <div className="col-md-3">
                        <input type="text" onChange={(e) => setProductPrice(Number(e.target.value))} /> 
                    </div>
                    <div className="col-md-3"> 
                        <button className="btn btn-secondary" onClick={handelAddNewProduct}>
                            Add Product
                        </button>
                    </div>
                </div>
                <div className="row p-2">
                    <div className="col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Product Code</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>product
                                {products.map(product => {
                                    return <tr key={product.productCode}>
                                        <td>{product.productCode}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}€</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={()=>dispatch(addToBasket(product))}>
                                                Add to Basket
                                            </button>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div> 
                </div>
            </div>
        </>
    )
}
