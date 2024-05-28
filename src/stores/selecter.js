import { createSelector } from "@reduxjs/toolkit";

export const selectCount = (state) => state.count.value;
export const selectTodo = (state) => state.todos.todos;
export const selectedFilterText = (state) => state.filter.search;

export const selectFilterRadios = (state) => state.filter.status;
export const selectPrioritys = (state) => state.filter.priorities;
export const returnTodoList = createSelector(
  selectTodo,
  selectedFilterText,
  selectFilterRadios,
  selectPrioritys,
  (todos, filterText, filterRadio, filterPriority) => {
    return todos.filter((todo) => {
      if (filterRadio === "All") {
        return filterPriority.length
          ? todo.name.toLowerCase().includes(filterText.toLowerCase()) &&
              filterPriority.includes(todo.priority)
          : todo.name.toLowerCase().includes(filterText.toLowerCase());
      }
      return (
        todo.name.toLowerCase().includes(filterText.toLowerCase()) &&
        (filterRadio === "Completed" ? todo.completed : !todo.completed) &&
        (filterPriority.length ? filterPriority.includes(todo.priority) : true)
      );
    });
  }
);
