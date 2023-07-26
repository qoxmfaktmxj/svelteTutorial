<script>
    import {goto, beforeNavigate, afterNavigate} from '$app/navigation'
    const handleClick = () =>{
        console.log('placing your order');
        goto('/products');
    };

    beforeNavigate(((navigation) =>{
        console.log({before: navigation});
    }));
    afterNavigate((navigation) =>{
        console.log({after: navigation});
    });

</script>
<h1>Welcome Home!</h1>

<a href="/about">about</a>
<a href="/profile">profile</a>
<a href="/blog">blog</a>
<a href="/products">프로덕트</a>

<button on:click={handleClick}>Place Order</button>