// @ts-nocheck
//import {error} from '@sveltejs/kit';
import {redirect} from '@sveltejs/kit';
export const load = async (serverLoadEvent) =>{
    const {fetch, params, url, route} = serverLoadEvent;
    console.log({params, url, route: route.id});
    const {productId} = params;
    if(productId > 10) {
        // throw error(404, {message: '프로덕트가 없어 !! ',
        //                 hint: '다른 제품번호 넣어볼랭?'});
        throw redirect(307, '/products'); //리다이렉트
    }
    const title = "Product Details";
    const notification = "End of season sael! 50% off!!";
    const response = await fetch(`http://localhost:4000/products/${productId}`);
    const product = await response.json();
    return {
        title,
        product,
        notification
    };
};