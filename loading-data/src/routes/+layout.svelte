<script>
    export let data;
    // @ts-ignore
    const { username } = data;

</script>
<div>Welcome, {username}</div>
<slot />