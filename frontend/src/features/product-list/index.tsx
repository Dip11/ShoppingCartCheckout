import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getProductListAsync, productList } from './productListStore';

export default function ProductListView() {
    const products = useAppSelector(productList);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProductListAsync());
    }, [])
    
    return (
        <>
            <div className="row">
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
                                return <tr key={item.product_code}>
                                    <td>{item.product_code}</td>
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
        </>
    )
}
