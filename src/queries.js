import { createClient } from "@urql/core";

export const APIURL = "https://api.lens.dev";
export const LENS_HUB_CONTRACT_ADDRESS =
  "0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d";

export const urlClient = createClient({
  url: APIURL,
});

export const queryRecommendedProfiles = `query ProfileRecommendations {
  profileRecommendations(request: { for: "PROFILE_ID" }) {
    items {
      ...Profile
    }
    pageInfo {
      ...PaginatedResultInfo
    }
  }
}`;

export const queryExplorePublications = `query ExplorePublications($request: ExplorePublicationRequest!) {
  explorePublications(request: $request) {
    items {
      ... on Post {
        ...Post
      }
      ... on Quote {
        ...Quote
      }
    }
    pageInfo {
      prev
      next
    }
  }
}`;
