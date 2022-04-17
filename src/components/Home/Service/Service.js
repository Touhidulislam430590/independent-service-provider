import React from 'react';
import useProduct from '../../hook/useProduct';
import SingleProduct from './SingleProduct/SingleProduct';


const Service = () => {
    const [products, setProduct] = useProduct();

    return (
        <div id='service' className='container'>
            <h2 className="text-center mt-3 mb-5">Services</h2>
            <div className="row">
                {
                    products.map(product=><SingleProduct key={product.id} product={product}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Service;