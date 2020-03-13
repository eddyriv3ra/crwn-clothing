import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_ERROR
} from "./shop.constants";

export const fetchCollectionStart = () => ({
  type: FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = collectionsMap => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionError = errorMessage => ({
  type: FETCH_COLLECTIONS_ERROR,
  payload: errorMessage
});
