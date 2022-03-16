function Calculate() {
  let a, t, b, y, x, w;
  a = Number(document.forma.a.value);
  b = Number(document.forma.b.value);
  x = Number(document.forma.x.value);
  y =
    Math.pow(x, 2) * Math.pow(Math.tan(Math.pow(x + b, 2)), 2) +
    a / Math.sqrt(x + b);
  w = (b* Math.pow(x,2) - a*y)/(Math.pow(Math.E,a*x)-1)
  document.forma.y.value = Number(y);
  document.forma.w.value = Number(w);
}

let btn = document.getElementById('btn');

btn.addEventListener('click', Calculate);
