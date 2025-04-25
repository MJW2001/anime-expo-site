document.querySelectorAll('.question').forEach(q => {
    q.style.cursor = 'pointer';
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });
  
  // 默认隐藏所有答案
  document.querySelectorAll('.answer').forEach(a => {
    a.style.display = 'none';
  });
  