type HouseCategory = {
    id: number,
    name: string,
    file: string
}

type House = {
    id: number,
    name: string,
    description: string,
    picture_url: string,
    neighbourhood: string,
    host_since: string,
    host_name: string,
    gallery: string[],
    amenities: string[],
    price: string,
    review_scores_rating: number,
    review_scores_accuracy: number,
    host_is_superhost: number,
    number_of_reviews: number,
    host_location: string,
    property_type: string,
    host_picture_url: string,
    host_thumbnail_url: string,
    accommodates: number,
    beds: number,
    bedrooms: number,
    bathrooms: string,
}

type APIResponse = {
    houses: {
        data: House[]
    },
    houseCategories: {
        data: HouseCategory[]
    },
}

type EngineState = { 
    locations: Array<string>,
    houseCategory: number|null,
    start_date: Date|null,
    end_date: Date|null,
    maxOccupancy: number,
    areAnimalsAllowed: boolean,
    areBabiesAllowed: boolean, 
}