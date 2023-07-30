export async function GET() {
	const response = await fetch('http://localhost:4000/postcodes');
	const postcodes = await response.json();
	const appPostCodes = postcodes.map((postcode) => {
		return {
			buildingName: postcode.building_name,
			departmentName: postcode.department_name,
			oragnizationName: postcode.organization_name,
			town: postcode.post_town,
			country: postcode.country,
			postcode: postcode.postcode
		};
	});
	return new Response(JSON.stringify(appPostCodes), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
}