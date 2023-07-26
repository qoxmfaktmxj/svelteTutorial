<script>
    import {page} from '$app/stores';
    const greetings = {
        en : 'hello!',
        es:  "Hola!",
        kr: "안녕"
    }

    const {lang = 'kr'} = $page.params;
    const greeting = greetings[lang];
</script>

<h1>{greeting}</h1>