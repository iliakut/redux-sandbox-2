export const ADD = 'ADD';
export const REMOVE = 'REMOVE';

/*
* удобно держать actionTypes в отдельных файлах
* в константах, это уменьшает количество ошибок
* вызова action из компонента и проверка типа в reducer в switch case
* так как они имеют общую строку, которая хранится в actionTypes
*/