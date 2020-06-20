export const COUNTER_ONE_ADD = 'COUNTER_ONE_ADD';
export const COUNTER_ONE_REMOVE = 'COUNTER_ONE_REMOVE';
export const COUNTER_ONE_ADD_NUMBER = 'COUNTER_ONE_ADD_NUMBER';
export const COUNTER_ONE_DELAYED_ADD = 'COUNTER_ONE_DELAYED_ADD';
export const COUNTER_ONE_ASYNC_GET_NAME = 'COUNTER_ONE_ASYNC_GET_NAME';

/*
* удобно держать actionTypes в отдельных файлах
* в константах, это уменьшает количество ошибок
* вызова action из компонента и проверка типа в reducer в switch case
* так как они имеют общую строку, которая хранится в actionTypes
*/