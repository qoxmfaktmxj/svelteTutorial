<script>
// @ts-nocheck

    export let product;
</script>
    <a href={`/products/${product.id}`}>
    <h2>{product.title}</h2>
    </a>   
    <p>{product.price}</p>
    <p>{product.description}</p>
    <hr />