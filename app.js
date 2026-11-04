const header=document.querySelector('#header');
const updateHeader=()=>header.classList.toggle('scrolled',window.scrollY>8);
window.addEventListener('scroll',updateHeader,{passive:true});updateHeader();
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#nav-links');
function closeMenu(){toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open menu');nav.classList.remove('open')}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu');nav.classList.toggle('open',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});let count=0;document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&!card.dataset.category.split(' ').includes(button.dataset.filter);if(!card.hidden)count++});document.querySelector('#filter-status').textContent=`Showing ${count} ${count===1?'project':'projects'}.`}));
document.querySelector('#year').textContent=new Date().getFullYear();

document.querySelector('#copy-email').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('eolufunmiwa158@gmail.com');status.textContent='Email address copied.';}catch{status.textContent='Copy this address: eolufunmiwa158@gmail.com';}});
