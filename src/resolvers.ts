import { Resolvers } from './types'
import { validateFullAmenities } from "./helpers";

export const resolvers: Resolvers = {
  Query: {
    featuredListings: (_, __, {dataSources}) => {
      return dataSources.listingAPI.getFeaturedListings();
    },
    listing: (_, { id }, { dataSources }) => {
      return dataSources.listingAPI.getListing(id);
    }
  },
  Listing: {
    amenities: ({ id, amenities }, _, { dataSources }) => {
      return validateFullAmenities(amenities)
        ? amenities
        : dataSources.listingAPI.getAmenities(id);
    },
    host: ({ hostId }) => {
      return { id: hostId }
    }
  },
  Mutation: {
    createListing: async (_, {listing}, {dataSources}) => {

      try {
      const response = await dataSources.listingAPI.createListing(listing);
      console.log(response);
      // everything succeeds with the mutation
      return {
        code: 200,
        success: true,
        message: "Listing successfully created!",
        listing: response
      }
    } catch (err) {
      return {
        code: 500,
        success: false,
        message: `Something went wrong: ${err.extensions.response.body}`,
        listing: null,
      };
    }

    }
  }
};