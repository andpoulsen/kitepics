document.querySelectorAll('.pick-image img').forEach((img) => {
  const link = document.createElement('a');
  link.href = img.src;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  img.parentNode.insertBefore(link, img);
  link.appendChild(img);
});
