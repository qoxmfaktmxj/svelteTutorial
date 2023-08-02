export const load = async (serverLoadEvent) =>{
    const {fetch, params, url, route} = serverLoadEvent;
    console.log({params, url, route: route.id});
    const {productId} = params;
    const title = "Product Details";
    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const product = await response.json();
    return {
        title,
        product
    };
};