window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  let topButton = document.getElementById('topBtn');
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topButton.style.display = 'block';
  } else {
    topButton.style.display = 'none';
  }
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
