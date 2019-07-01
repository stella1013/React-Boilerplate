
export interface CardField {
	type: string;
	field: string;
	label: string;
}
export interface CardDataPremium {
		type: string;
		value: string;
		label: string;
}
export interface LocationIDPremium {
	[key: string]:Array<CardDataPremium>;
}
export interface SearchCriteria {
	zip: string;
	radius: number|string;
	latitude:number;
	longitude:number;
	/*location: {
		type: string;
		coordinates: [number, number];
	};*/
}

export interface CachedResultItems {
	[key: string]: DataResponse;
}

export interface Location {
		id: string;
		name: string;
		address1: string;
		address2: string;
		city: string;
		county: string;
		state: string;
		zip: string;
		phone: string;
		location: {
			type: string;
			coordinates: [number, number];
		};
		latitude: number;
		longitude: number;
	
}

export default interface DataResponse {
	cached: boolean;
	searchCriteria: SearchCriteria;
	url: string;
	// Set these properties to the names of the corresponding field in this data set
	fieldsMap: {
		id: string;
		name: string;
		address1: string;
		address2: string;
		city: string;
		county: string;
		state: string;
		zip: string;
		phone: string;
		location: string;
	};

	// These objects map to a "field" in the data set and correspond with UI Components (YTBD)
	// and include any info the specific component needs
	additionalFields: CardField[];

	// This is the data set as returned from CMS
	data: Array<Location>;

	// Populate with premium content, OR add properties to specific CMS results somehow,
	// possibly by using a listings unique id as a key?
	
	premiumContent: Array<LocationIDPremium>;
}
