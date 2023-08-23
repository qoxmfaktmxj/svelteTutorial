<script>
    import {page} from '$app/stores';
    export let data;
    // @ts-ignore
    const { username } = data;

</script>

<svelte:head>
    <title>{$page.data.title || '석이석이'} </title>
</svelte:head>


{#if $page.data.notification}
<p>{$page.data.notification}</p>
{/if}
<p>Notification banner</p>
<div>Welcome, {username}</div>
<slot />