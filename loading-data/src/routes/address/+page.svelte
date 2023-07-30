<script>
	let address = '';
	export let data;
	const { addressList } = data;
</script>

<h1>Select your address</h1>

<select bind:value={address}>
	<option value="">받으실 주소를 선택하세요</option>
	{#each addressList as addressItem}
		<option value={addressItem}>{addressItem}</option>
	{/each}
</select>