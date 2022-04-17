import { useEffect, useState } from "react";


const useProduct = () => {
    const [products, setProduct] = useState([]);

    useEffect( () => {
        fetch('courseData.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);

    return [products, setProduct];
}

export default useProduct;
