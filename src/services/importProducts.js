export function getProducts(setProducts,setLoading){
    setLoading(true);
    fetch("/data/products.json")
        .then(r => r.json())
        .then(data => {
            if(data.length==0) console.error("Unable to load any products");
            else{
                setLoading(false);
                setProducts(data);
            }
        }).catch(error => {
            console.error(error);
        })
}