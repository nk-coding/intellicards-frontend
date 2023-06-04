import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Chapter = Node & {
  __typename?: 'Chapter';
  flashcards: FlashcardConnection;
  /** The unique id of this node */
  id: Scalars['ID']['output'];
  material: Material;
  title: Scalars['String']['output'];
};


export type ChapterFlashcardsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FlashcardFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<FlashcardOrder>;
};

/** The connection type for Chapter. */
export type ChapterConnection = {
  __typename?: 'ChapterConnection';
  /** A list of all edges of the current page. */
  edges: Array<ChapterEdge>;
  /** A list of all nodes of the current page. */
  nodes: Array<Chapter>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type ChapterEdge = {
  __typename?: 'ChapterEdge';
  /** A cursor used in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Chapter;
};

/** Filter used to filter Chapter */
export type ChapterFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<ChapterFilterInput>>;
  /** Filter by flashcards */
  flashcards?: InputMaybe<FlashcardListFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<ChapterFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<ChapterFilterInput>>;
  /** Filter by title */
  title?: InputMaybe<StringFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type ChapterListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<ChapterFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<ChapterFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<ChapterFilterInput>;
};

/** Defines the order of a Chapter list */
export type ChapterOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<ChapterOrderField>;
};

/** Fields a list of Chapter can be sorted by */
export type ChapterOrderField =
  /** Order by id */
  | 'ID';

export type CreateChapterInput = {
  material: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type CreateChapterPayload = {
  __typename?: 'CreateChapterPayload';
  /** The created chapter */
  chapter?: Maybe<Chapter>;
};

export type CreateFlashcardInput = {
  answer: Scalars['String']['input'];
  chapter: Scalars['ID']['input'];
  question: Scalars['String']['input'];
};

export type CreateFlashcardPayload = {
  __typename?: 'CreateFlashcardPayload';
  /** The created flashcard */
  flashcard?: Maybe<Flashcard>;
};

export type CreateMaterialInput = {
  title: Scalars['String']['input'];
};

export type CreateMaterialPayload = {
  __typename?: 'CreateMaterialPayload';
  /** The created material */
  material?: Maybe<Material>;
};

export type Flashcard = Node & {
  __typename?: 'Flashcard';
  answer: Scalars['String']['output'];
  chapter: Chapter;
  /** The unique id of this node */
  id: Scalars['ID']['output'];
  question: Scalars['String']['output'];
};

/** The connection type for Flashcard. */
export type FlashcardConnection = {
  __typename?: 'FlashcardConnection';
  /** A list of all edges of the current page. */
  edges: Array<FlashcardEdge>;
  /** A list of all nodes of the current page. */
  nodes: Array<Flashcard>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type FlashcardEdge = {
  __typename?: 'FlashcardEdge';
  /** A cursor used in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Flashcard;
};

/** Filter used to filter Flashcard */
export type FlashcardFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<FlashcardFilterInput>>;
  /** Filter by answer */
  answer?: InputMaybe<StringFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<FlashcardFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<FlashcardFilterInput>>;
  /** Filter by question */
  question?: InputMaybe<StringFilterInput>;
};

/** Used to filter by a connection-based property. Fields are joined by AND */
export type FlashcardListFilterInput = {
  /** Filters for nodes where all of the related nodes match this filter */
  all?: InputMaybe<FlashcardFilterInput>;
  /** Filters for nodes where any of the related nodes match this filter */
  any?: InputMaybe<FlashcardFilterInput>;
  /** Filters for nodes where none of the related nodes match this filter */
  none?: InputMaybe<FlashcardFilterInput>;
};

/** Defines the order of a Flashcard list */
export type FlashcardOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<FlashcardOrderField>;
};

/** Fields a list of Flashcard can be sorted by */
export type FlashcardOrderField =
  /** Order by id */
  | 'ID';

/** Filter which can be used to filter for Nodes with a specific ID field */
export type IdFilterInput = {
  /** Matches values which are equal to the provided value */
  eq?: InputMaybe<Scalars['ID']['input']>;
  /** Matches values which are equal to any of the provided values */
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type Material = Node & {
  __typename?: 'Material';
  chapters: ChapterConnection;
  /** The unique id of this node */
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  user: User;
};


export type MaterialChaptersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ChapterFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChapterOrder>;
};

/** The connection type for Material. */
export type MaterialConnection = {
  __typename?: 'MaterialConnection';
  /** A list of all edges of the current page. */
  edges: Array<MaterialEdge>;
  /** A list of all nodes of the current page. */
  nodes: Array<Material>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type MaterialEdge = {
  __typename?: 'MaterialEdge';
  /** A cursor used in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Material;
};

/** Filter used to filter Material */
export type MaterialFilterInput = {
  /** Connects all subformulas via and */
  and?: InputMaybe<Array<MaterialFilterInput>>;
  /** Filter by chapters */
  chapters?: InputMaybe<ChapterListFilterInput>;
  /** Filter by id */
  id?: InputMaybe<IdFilterInput>;
  /** Negates the subformula */
  not?: InputMaybe<MaterialFilterInput>;
  /** Connects all subformulas via or */
  or?: InputMaybe<Array<MaterialFilterInput>>;
};

/** Defines the order of a Material list */
export type MaterialOrder = {
  /** The direction to order by, defaults to ASC */
  direction?: InputMaybe<OrderDirection>;
  /** The field to order by, defaults to ID */
  field?: InputMaybe<MaterialOrderField>;
};

/** Fields a list of Material can be sorted by */
export type MaterialOrderField =
  /** Order by id */
  | 'ID'
  /** Order by title */
  | 'TITLE';

export type Mutation = {
  __typename?: 'Mutation';
  createChapter?: Maybe<CreateChapterPayload>;
  createFlashcard?: Maybe<CreateFlashcardPayload>;
  createMaterial?: Maybe<CreateMaterialPayload>;
};


export type MutationCreateChapterArgs = {
  input: CreateChapterInput;
};


export type MutationCreateFlashcardArgs = {
  input: CreateFlashcardInput;
};


export type MutationCreateMaterialArgs = {
  input: CreateMaterialInput;
};

/** Base class of all nodes */
export type Node = {
  /** The unique id of this node */
  id: Scalars['ID']['output'];
};

/** Possible direction in which a list of nodes can be ordered */
export type OrderDirection =
  /** Ascending */
  | 'ASC'
  /** Descending */
  | 'DESC';

/** Information about the current page in a connection */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating backwards, the cursor to continue */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating forwards, the cursor to continue */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** Get a Node by id */
  node?: Maybe<Node>;
  user: User;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};

/** Filter which can be used to filter for Nodes with a specific String field */
export type StringFilterInput = {
  /** Matches Strings which contain the provided value */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches Strings which end with the provided value */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** Matches values which are equal to the provided value */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Matches values which are greater than the provided value */
  gt?: InputMaybe<Scalars['String']['input']>;
  /** Matches values which are greater than or equal to the provided value */
  gte?: InputMaybe<Scalars['String']['input']>;
  /** Matches values which are equal to any of the provided values */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches values which are lesser than the provided value */
  lt?: InputMaybe<Scalars['String']['input']>;
  /** Matches values which are lesser than or equal to the provided value */
  lte?: InputMaybe<Scalars['String']['input']>;
  /** Matches Strings using the provided RegEx */
  matches?: InputMaybe<Scalars['String']['input']>;
  /** Matches Strings which start with the provided value */
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = Node & {
  __typename?: 'User';
  /** The unique id of this node */
  id: Scalars['ID']['output'];
  materials: MaterialConnection;
  username: Scalars['String']['output'];
};


export type UserMaterialsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<MaterialFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MaterialOrder>;
};

export type GetMaterialsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMaterialsQuery = { __typename?: 'Query', user: { __typename?: 'User', materials: { __typename?: 'MaterialConnection', nodes: Array<{ __typename?: 'Material', id: string, title: string, chapters: { __typename?: 'ChapterConnection', nodes: Array<{ __typename?: 'Chapter', id: string, title: string }> } }> } } };

export type GetChapterQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetChapterQuery = { __typename?: 'Query', node?: { __typename?: 'Chapter', id: string, title: string, flashcards: { __typename?: 'FlashcardConnection', nodes: Array<{ __typename?: 'Flashcard', id: string, question: string, answer: string }> } } | { __typename?: 'Flashcard' } | { __typename?: 'Material' } | { __typename?: 'User' } | null };

export type CreateMaterialMutationVariables = Exact<{
  title: Scalars['String']['input'];
}>;


export type CreateMaterialMutation = { __typename?: 'Mutation', createMaterial?: { __typename?: 'CreateMaterialPayload', material?: { __typename?: 'Material', id: string } | null } | null };


export const GetMaterialsDocument = gql`
    query getMaterials {
  user {
    materials {
      nodes {
        id
        title
        chapters {
          nodes {
            id
            title
          }
        }
      }
    }
  }
}
    `;
export const GetChapterDocument = gql`
    query getChapter($id: ID!) {
  node(id: $id) {
    ... on Chapter {
      id
      title
      flashcards {
        nodes {
          id
          question
          answer
        }
      }
    }
  }
}
    `;
export const CreateMaterialDocument = gql`
    mutation createMaterial($title: String!) {
  createMaterial(input: {title: $title}) {
    material {
      id
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getMaterials(variables?: GetMaterialsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetMaterialsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMaterialsQuery>(GetMaterialsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMaterials', 'query');
    },
    getChapter(variables: GetChapterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetChapterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetChapterQuery>(GetChapterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getChapter', 'query');
    },
    createMaterial(variables: CreateMaterialMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateMaterialMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateMaterialMutation>(CreateMaterialDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createMaterial', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;