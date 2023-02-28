export const BACKEND_URL = 'http://localhost:3000/';

export const GET_ALL_LISTS = {
  url: 'lists',
  method: 'get',
};
export const GET_LIST_BY_ID = (id) => (
  {
    url: `lists/${id}`,
    method: 'get',
  }
);
export const ADD_LIST = {
  url: 'lists',
  method: 'post',
};
