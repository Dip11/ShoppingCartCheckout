import { useEffect, useState } from 'react';
import { ProductInterface } from '../../app/contracts/product/product.interface';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addNewProductAsync, getProductListAsync, productList } from './productListStore';

export default function ProductListView() {
    const products = useAppSelector(productList);
    const [productCode, setProductCode] = useState<string>("");
    const [productName, setProductName] = useState<string>("");
    const [productPrice, setProductPrice] = useState<number>(0);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProductListAsync());
    }, [])

    const handelAddNewProduct = () => {
        let product: ProductInterface = {
            productCode : productCode,
            name: productName,
            price: productPrice
        }
        dispatch(addNewProductAsync(product));
    }
    
    return (
        <>
            <div className="container">
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
                            <tbody>
                                {products.map(item => {
                                    return <tr key={item.productCode}>
                                        <td>{item.productCode}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}€</td>
                                        <td>
                                            <button className="btn btn-primary">
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
