import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

const base_url = 'https://www.omdbapi.com';

const baseQuery = fetchBaseQuery({
  baseUrl: base_url,
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let newArgs = '/?apikey=817cec18';
  console.log('args + newArgs', args, newArgs, newArgs + args);
  newArgs += args;
  console.log('baseQueryWithReauth called: ', newArgs, api, extraOptions);
  let result = await baseQuery(newArgs, api, extraOptions);
  console.log('baseQueryWithReauth result: ', api, newArgs, result);

  return result;
};

export const movieApi = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: 'movieApi',
  endpoints: build => ({
    getMovieDetails: build.query<GetMovieDetailsResponse, string>({
      query: title => {
        return `&i=${title}`;
      },
    }),
    getMoviesByTitle: build.query<
      GetMoviesByTitleResponse,
      GetMoviesByTitleArgs
    >({
      query: param => {
        let url = `&s=${param.title}`;
        if (param.page) {
          url += `&page=${param.page}`;
        }
        return url;
      },
    }),
  }),
});
export const {
  useGetMoviesByTitleQuery,
  useLazyGetMoviesByTitleQuery,
  useGetMovieDetailsQuery,
} = movieApi;

export type GetMoviesByTitleArgs = {title: string; page?: number};

export type MovieItemType = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

type GetMoviesByTitleResponse = {
  Response: string;
  Search: MovieItemType[];
  totalResults: string;
};

type Rating = {
  Source: string;
  Value: string;
};

export type GetMovieDetailsResponse = {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: Rating[];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
};
