// @ts-nocheck
export const load = async (loadEvent) => {
	
	const { fetch } = loadEvent;
	const response = await fetch('/api/postcodes');
	const postcodes = await response.json();
	const addressList = postcodes.map((postcode) => {
		return `${postcode.buildingName}, ${postcode.departmentName} ,${postcode.oragnizationName}, ${postcode.town}, ${postcode.country}, ${postcode.postcode}, ${postcode.undefinedkk},`;
	});
	return { addressList };
};