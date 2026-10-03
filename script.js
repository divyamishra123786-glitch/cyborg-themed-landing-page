const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('#navLinks');
const initBtn = document.querySelector('#initBtn');
const msg = document.querySelector('#systemMsg');

menuBtn?.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? 'none' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '78px';
  nav.style.right = '5vw';
  nav.style.flexDirection = 'column';
  nav.style.background = '#080d12';
  nav.style.padding = '20px';
  nav.style.border = '1px solid #1d3039';
});

initBtn?.addEventListener('click', () => {
  msg.textContent = '> CONNECTION ESTABLISHED — WELCOME TO CYBORG-X.';
  initBtn.textContent = 'SYSTEM INITIALIZED ✓';
  initBtn.disabled = true;
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 850) nav.style.display = 'none';
  });
});
