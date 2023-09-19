const rewrite = document.getElementById('btn');

rewrite.addEventListener('click', () => {
  setTimeout(() => {
    document.getElementById('text').textContent= 'ボタンがクリックされました';
  }, 2000);
});