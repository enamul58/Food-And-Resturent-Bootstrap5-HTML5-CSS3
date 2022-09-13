// document.addEventListener("DOMContentLoaded", () => {
//   function counter(id, start, end, duration) {
//     let obj = document.getElementById(id),
//       current = start,
//       range = end - start,
//       increment = end > start ? 1 : -1,
//       step = Math.abs(Math.floor(duration / range));
//     timer = setInterval(() => {
//       current += increment;
//       obj.textContent = current;
//       console.log(obj);
//       if (current == end) {
//         clearInterval(timer);
//       }
//     }, step);
//   }
//   counter("count-1", 1, 1287, 3000);
//   counter("count-2", 100, 5786, 2500);
//   counter("count-3", 0, 1440, 3000);
//   counter("count-4", 0, 7110, 3000);
// });

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count-1", 0, 1287, 3000);
  counter("count-2", 100, 5786, 2500);
  counter("count-3", 0, 1440, 3000);
  counter("count-4", 0, 7110, 3000);
});
