<script>
	export let data;
</script>

<span>Most active stock - {data.mostActiveStock.symbol} {data.mostActiveStock.price}</span>
<span>Top gaining stock - {data.topGainingStock.symbol}</span>
<span>Top losing stock - {data.topLosingStock.symbol}</span>
<slot />

<style>
	span {
		margin-right: 30px;
		font-size: 24px;
	}
</style>