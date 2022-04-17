import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct/SingleProduct';


const Service = () => {
    const [products, setProduct] = useState([]);

    useEffect( () => {
        fetch('courseData.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);

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