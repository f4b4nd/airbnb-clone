type TCategory = {
    label: string,
    file: string
}

type TApartment = {
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
}

type APIResponse = {
    apartments: TApartment[],
    categories: TCategory[],
}