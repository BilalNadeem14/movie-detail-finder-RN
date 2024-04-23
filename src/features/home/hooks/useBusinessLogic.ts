import {
  GetMoviesByTitleArgs,
  useLazyGetMoviesByTitleQuery,
} from '@services/api';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {debounce} from 'lodash';

const useBusinessLogic = () => {
  const [refetch, {data, isLoading, currentData, isFetching}] =
    useLazyGetMoviesByTitleQuery();
  const [moviesList, setMoviesList] = useState<MovieItemType[]>([]);
  const [searchText, setSearchText] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = React.useState('');
  const [page, setPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = React.useState(false);
  const [error, setError] = useState('');

  const pages = useMemo(() => {
    if (data?.totalResults) {
      //wrapped the parseInt function to remove the floating number
      return parseInt(parseInt(data?.totalResults) / 10);
    }
    return 1;
  }, [data?.totalResults]);

  useEffect(() => {
    if (debouncedSearchTerm !== '') {
      fetchMovies({title: debouncedSearchTerm});
    } else {
      fetchMovies({title: 'blade'});
    }
    setPage(1);
  }, [debouncedSearchTerm]);

  const onSearch = useCallback(
    debounce((search: string) => {
      setDebouncedSearchTerm(search);
    }, 1000),
    [],
  );

  const fetchMovies = useCallback(
    async (args: GetMoviesByTitleArgs) => {
      const res = await refetch(args);
      if (error !== '') {
        setError('');
      }
      if (res.data?.Search && args.page) {
        setMoviesList(prev => [...prev, ...res.data.Search]);
      } else if (res.data?.Search) {
        setMoviesList([...res.data.Search]);
      } else if (res.data?.Error === 'Too many results.') {
        setError('Please enter a valid title to search');
      }

      setIsLoadingMore(false);
    },
    [refetch, setMoviesList, moviesList, error, setError],
  );

  const onRefresh = async () => {
    const apiArgs = {
      title: searchText !== '' ? searchText : 'blade',
    };
    setPage(1);
    setDebouncedSearchTerm('');
    setSearchText('');
    fetchMovies(apiArgs);
  };

  const onEndReached = useCallback(() => {
    const apiArgs = {
      title: searchText !== '' ? searchText : 'blade',
      page: page + 1,
    };
    if (page < pages) {
      setIsLoadingMore(true);
      setPage(prevState => prevState + 1);
      fetchMovies(apiArgs);
    }
  }, [searchText, page, pages, data, setPage]);

  return {
    pages,
    fetchMovies,
    onSearch,
    onRefresh,
    onEndReached,
    moviesList,
    searchText,
    setSearchText,
    debouncedSearchTerm,
    page,
    isFetching,
    isLoadingMore,
    error,
  };
};

export default useBusinessLogic;
