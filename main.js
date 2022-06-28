const img = document.querySelector(".about-image");
const images = [
  "https://images.unsplash.com/photo-1616493039661-8a63de6ead09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2F0emV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1531748774806-58179918dba4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2F0emV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1597586755950-3e029f817855?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1568887539570-e5dea6ebbefa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aHVuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
];
let a = 0;
setInterval(function () {
  if (a == images.length) a = 0;
  img.style.backgroundImage = "url('" + images[a] + "')";
  a++;
}, 2000);
