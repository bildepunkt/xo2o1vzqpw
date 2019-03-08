function fetchSource (path) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path);
  xhr.onload = function () {
    if (xhr.status === 200) {
      var block = document.querySelector("pre > code");
      block.innerHTML = xhr.responseText;
      if (Prism) {
        Prism.highlightElement(block);
      }
    }
  };
  xhr.send();
}
