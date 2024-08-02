// function func() {
//   let text = event.target.tagName;
//   document.getElementById("show").innerHTML = text;
// }

// const item = document.querySelector(".item");

// item.addEventListener("dragstart", (e) => {
//   console.log("드래그 시작");
// });

// item.addEventListener("drag", (e) => {
//   console.log("드래그 하면 나와라!");
// });

// const container = document.querySelector(".container");
// container.addEventListener("dragenter", (e) => {
//   console.log("1박스 영역에 최초 진입!");
// });

// container.addEventListener("dragleave", (e) => {
//   console.log("1박스 영역 떠나면 발생!");
// });

// container.addEventListener("dragover", (e) => {
//   console.log("1여기 있어!");
//   e.preventDefault();
// });

// container.addEventListener("drop", (e) => {
//   console.log("1번 박스영역에 드롭");
// });

// const container2 = document.querySelector(".container2");
// container2.addEventListener("dragenter", (e) => {
//   console.log("2박스 영역에 최초 진입!");
// });

// container2.addEventListener("dragleave", (e) => {
//   console.log("2박스 영역 떠나면 발생!");
// });

// container2.addEventListener("dragover", (e) => {
//   console.log("2여기 있어!");
//   e.preventDefault();
// });

// container2.addEventListener("drop", (e) => {
//   console.log("2번 박스영역에 드롭");
// });

// document.getElementById("appendChildBtn").onclick = function () {
//   const parent = document.getElementById("parent");
//   const newElement = document.createElement("div");
//   newElement.textContent = "New Child";
//   parent.appendChild(newElement);
// };

// document.getElementById("insertBeforBtn").onclick = function () {
//   const parentEl = document.getElementById("parent");
//   const newElementEl = document.createElement("div");
//   newEl.textContent = "New child";

//   const reference = document.getElementById("reference");
//   parentEl.insertBefore(newEl, reference);
// };

// 드래그 & 드롭
const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElement = getDragAferElement(container, e.clientX);
    const draggable = document.querySelector(".dragging");
    if (afterElement === undefined) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });
});

function getDragAferElement(container, x) {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = x - box.left - box.width / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

/*
dragstart : 사용자가 객체를 드래그 하려고 시작할 떄 발생함
drag : 대상 객체르 드래그하면서 마우스를 움직일 때 발생
dragenter : 마우스가 대상 객체의 위로 처음 진입할 떄 발생
dragover : 드래그하면서 마우스가 대상 객체의 영역 위에 자리 잡고 있을 떄 발생
drop : 드래그가 끝나서 드래그하던 객체를 놓는 장소에 위치한 객체에서 발생
dragleave : 드래그가 끝나서 마우스가 대상 객체의 위에서 벗어날 때 발생함
dragend : 대상 객체를 드래그하다가 마우스 버튼을 놓는 순간 발생함
*/
