import { useEffect, useState } from "react";


const useProduct = () => {
    const [product, setProduct] = useState();

    useEffect( () => {
        fetch('courseData.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);

    console.log(product);

    return [product, setProduct];
}

export default useProduct;
