import furnitureClient from "./furniture-api";
import userClient from "./user-api";
import imageClient from "./image-api";
import listingClient from "./listing-api";


export default class client {
    static furniture = furnitureClient
    static user = userClient
    static image = imageClient
    static listing = listingClient
}