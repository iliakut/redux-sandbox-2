export const COUNTER_TWO_ADD = 'COUNTER_TWO_ADD';
export const COUNTER_TWO_REMOVE = 'COUNTER_TWO_REMOVE';
export const COUNTER_TWO_ADD_NUMBER = 'COUNTER_TWO_ADD_NUMBER';

/*
* удобно держать actionTypes в отдельных файлах
* в константах, это уменьшает количество ошибок
* вызова action из компонента и проверка типа в reducer в switch case
* так как они имеют общую строку, которая хранится в actionTypes
*/