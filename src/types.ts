import { GraphQLResolveInfo } from 'graphql';
import { DataSourceContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Amenity = {
  __typename?: 'Amenity';
  category: AmenityCategory;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export enum AmenityCategory {
  AccommodationDetails = 'ACCOMMODATION_DETAILS',
  Outdoors = 'OUTDOORS',
  SpaceSurvival = 'SPACE_SURVIVAL'
}

export type CreateListingInput = {
  /** The Listing's amenities  */
  amenities: Array<Scalars['ID']['input']>;
  /** The cost per night */
  costPerNight: Scalars['Float']['input'];
  /** The listing's description */
  description: Scalars['String']['input'];
  /** The location type of the listing */
  locationType: LocationType;
  /** The number of beds available */
  numOfBeds: Scalars['Int']['input'];
  /** The thumbnail image for the listing */
  photoThumbnail: Scalars['String']['input'];
  /** The listing's title */
  title: Scalars['String']['input'];
};

export type CreateListingResponse = MutationResponse & {
  __typename?: 'CreateListingResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int']['output'];
  /** The newly created listing */
  listing?: Maybe<Listing>;
  /** Human-readable message for the UI */
  message: Scalars['String']['output'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean']['output'];
};

/** Coordinates in the galaxy */
export type GalacticCoordinates = {
  __typename?: 'GalacticCoordinates';
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  nickname?: Maybe<Scalars['String']['output']>;
};

export type Host = {
  __typename?: 'Host';
  id: Scalars['ID']['output'];
};

export type Listing = {
  __typename?: 'Listing';
  /** The amenities available for this listing */
  amenities: Array<Maybe<Amenity>>;
  /** Where this listing is located in the galaxy */
  coordinates?: Maybe<GalacticCoordinates>;
  /** The cost per night */
  costPerNight: Scalars['Float']['output'];
  /** The listing's description */
  description: Scalars['String']['output'];
  /** Owner of the listing */
  host: Host;
  id: Scalars['ID']['output'];
  /** The location type of the listing */
  locationType: LocationType;
  /** The number of beds available */
  numOfBeds: Scalars['Int']['output'];
  /**
   * Photo edited for homepage
   * @deprecated Unused field.
   */
  photoInHexagonShape?: Maybe<Scalars['String']['output']>;
  /** The thumbnail image for the listing */
  photoThumbnail: Scalars['String']['output'];
  /** The listing's title */
  title: Scalars['String']['output'];
};

export enum LocationType {
  Apartment = 'APARTMENT',
  Campsite = 'CAMPSITE',
  House = 'HOUSE',
  Room = 'ROOM',
  Spaceship = 'SPACESHIP'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a new listing for the currently authenticated host */
  createListing: CreateListingResponse;
  /** Updates an existing listing */
  updateListing: UpdateListingResponse;
};


export type MutationCreateListingArgs = {
  listing: CreateListingInput;
};


export type MutationUpdateListingArgs = {
  listing: UpdateListingInput;
  listingId: Scalars['ID']['input'];
};

export type MutationResponse = {
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int']['output'];
  /** Human-readable message for the UI */
  message: Scalars['String']['output'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean']['output'];
};

/** Listing Graph */
export type Query = {
  __typename?: 'Query';
  /** A curated array of listings to feature on the homepage */
  featuredListings: Array<Listing>;
  /** Return the listings that belong to the currently logged-in host */
  hostListings: Array<Listing>;
  /** Returns the details about this listing */
  listing?: Maybe<Listing>;
  /** Returns all possible amenities for a listing */
  listingAmenities: Array<Amenity>;
  /** Search results for listings that fit the criteria provided */
  searchListings: Array<Listing>;
};


/** Listing Graph */
export type QueryListingArgs = {
  id: Scalars['ID']['input'];
};


/** Listing Graph */
export type QuerySearchListingsArgs = {
  criteria?: InputMaybe<SearchListingsInput>;
};

export type SearchListingsInput = {
  checkInDate: Scalars['String']['input'];
  checkOutDate: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  numOfBeds?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<SortByCriteria>;
};

export enum SortByCriteria {
  CostAsc = 'COST_ASC',
  CostDesc = 'COST_DESC',
  RatingDesc = 'RATING_DESC'
}

/** Updates the properties included. If none are given, don't update anything */
export type UpdateListingInput = {
  /** The Listing's amenities  */
  amenities?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** The cost per night */
  costPerNight?: InputMaybe<Scalars['Float']['input']>;
  /** The listing's description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The location type of the listing */
  locationType?: InputMaybe<LocationType>;
  /** The number of beds available */
  numOfBeds?: InputMaybe<Scalars['Int']['input']>;
  /** The thumbnail image for the listing */
  photoThumbnail?: InputMaybe<Scalars['String']['input']>;
  /** The listing's title */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateListingResponse = MutationResponse & {
  __typename?: 'UpdateListingResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int']['output'];
  /** The newly created listing */
  listing?: Maybe<Listing>;
  /** Human-readable message for the UI */
  message: Scalars['String']['output'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
  MutationResponse: ( CreateListingResponse ) | ( UpdateListingResponse );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Amenity: ResolverTypeWrapper<Amenity>;
  AmenityCategory: AmenityCategory;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateListingInput: CreateListingInput;
  CreateListingResponse: ResolverTypeWrapper<CreateListingResponse>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  GalacticCoordinates: ResolverTypeWrapper<GalacticCoordinates>;
  Host: ResolverTypeWrapper<Host>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Listing: ResolverTypeWrapper<Listing>;
  LocationType: LocationType;
  Mutation: ResolverTypeWrapper<{}>;
  MutationResponse: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['MutationResponse']>;
  Query: ResolverTypeWrapper<{}>;
  SearchListingsInput: SearchListingsInput;
  SortByCriteria: SortByCriteria;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateListingInput: UpdateListingInput;
  UpdateListingResponse: ResolverTypeWrapper<UpdateListingResponse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Amenity: Amenity;
  Boolean: Scalars['Boolean']['output'];
  CreateListingInput: CreateListingInput;
  CreateListingResponse: CreateListingResponse;
  Float: Scalars['Float']['output'];
  GalacticCoordinates: GalacticCoordinates;
  Host: Host;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Listing: Listing;
  Mutation: {};
  MutationResponse: ResolversInterfaceTypes<ResolversParentTypes>['MutationResponse'];
  Query: {};
  SearchListingsInput: SearchListingsInput;
  String: Scalars['String']['output'];
  UpdateListingInput: UpdateListingInput;
  UpdateListingResponse: UpdateListingResponse;
};

export type AmenityResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Amenity'] = ResolversParentTypes['Amenity']> = {
  category?: Resolver<ResolversTypes['AmenityCategory'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateListingResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreateListingResponse'] = ResolversParentTypes['CreateListingResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  listing?: Resolver<Maybe<ResolversTypes['Listing']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GalacticCoordinatesResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['GalacticCoordinates'] = ResolversParentTypes['GalacticCoordinates']> = {
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  nickname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HostResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Host'] = ResolversParentTypes['Host']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListingResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Listing'] = ResolversParentTypes['Listing']> = {
  amenities?: Resolver<Array<Maybe<ResolversTypes['Amenity']>>, ParentType, ContextType>;
  coordinates?: Resolver<Maybe<ResolversTypes['GalacticCoordinates']>, ParentType, ContextType>;
  costPerNight?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  host?: Resolver<ResolversTypes['Host'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  locationType?: Resolver<ResolversTypes['LocationType'], ParentType, ContextType>;
  numOfBeds?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  photoInHexagonShape?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoThumbnail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createListing?: Resolver<ResolversTypes['CreateListingResponse'], ParentType, ContextType, RequireFields<MutationCreateListingArgs, 'listing'>>;
  updateListing?: Resolver<ResolversTypes['UpdateListingResponse'], ParentType, ContextType, RequireFields<MutationUpdateListingArgs, 'listing' | 'listingId'>>;
};

export type MutationResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['MutationResponse'] = ResolversParentTypes['MutationResponse']> = {
  __resolveType: TypeResolveFn<'CreateListingResponse' | 'UpdateListingResponse', ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  featuredListings?: Resolver<Array<ResolversTypes['Listing']>, ParentType, ContextType>;
  hostListings?: Resolver<Array<ResolversTypes['Listing']>, ParentType, ContextType>;
  listing?: Resolver<Maybe<ResolversTypes['Listing']>, ParentType, ContextType, RequireFields<QueryListingArgs, 'id'>>;
  listingAmenities?: Resolver<Array<ResolversTypes['Amenity']>, ParentType, ContextType>;
  searchListings?: Resolver<Array<ResolversTypes['Listing']>, ParentType, ContextType, Partial<QuerySearchListingsArgs>>;
};

export type UpdateListingResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['UpdateListingResponse'] = ResolversParentTypes['UpdateListingResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  listing?: Resolver<Maybe<ResolversTypes['Listing']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  Amenity?: AmenityResolvers<ContextType>;
  CreateListingResponse?: CreateListingResponseResolvers<ContextType>;
  GalacticCoordinates?: GalacticCoordinatesResolvers<ContextType>;
  Host?: HostResolvers<ContextType>;
  Listing?: ListingResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MutationResponse?: MutationResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UpdateListingResponse?: UpdateListingResponseResolvers<ContextType>;
};

