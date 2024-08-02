const columns = document.querySelectorAll(".column");
columns.forEach((culumn) => {
  new Sortable(culumn, {
    group: "shared",
    animation: 150,
    ghostClass: "blue-background-class",
  });
});
