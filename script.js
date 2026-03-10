/* Hamburger */
const hBtn=document.getElementById('hamburgerBtn'),mNav=document.getElementById('mobileNav');
hBtn.addEventListener('click',()=>{const o=hBtn.classList.toggle('open');mNav.classList.toggle('open',o)});
function closeMob(){hBtn.classList.remove('open');mNav.classList.remove('open')}
document.addEventListener('click',e=>{if(!hBtn.contains(e.target)&&!mNav.contains(e.target))closeMob()});

/* Navbar + scroll top */
const navbar=document.getElementById('navbar'),toTopBtn=document.getElementById('toTop');
window.addEventListener('scroll',()=>{navbar.classList.toggle('scrolled',scrollY>50);toTopBtn.classList.toggle('show',scrollY>420)},{passive:true});

/* Scroll reveal */
const revObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');revObs.unobserve(e.target)}})},{threshold:.1});
document.querySelectorAll('.rv,.rv-l,.rv-r').forEach(el=>revObs.observe(el));

/* Popup */
function openPopup(){document.getElementById('popupOverlay').classList.add('open');document.body.style.overflow='hidden'}
function closePopup(){document.getElementById('popupOverlay').classList.remove('open');document.body.style.overflow=''}
function handleOverlayClick(e){if(e.target===document.getElementById('popupOverlay'))closePopup()}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closePopup()});

/* Form submit */
function submitForm(e,formId,btnId){
  e.preventDefault();
  const btn=document.getElementById(btnId);
  btn.textContent='Submitting...';btn.disabled=true;
  setTimeout(()=>{
    btn.textContent="✓ We'll contact you soon!";btn.classList.add('success');
    document.getElementById(formId).reset();
    setTimeout(()=>{btn.textContent='Enquire Now';btn.classList.remove('success');btn.disabled=false;if(formId==='popupForm')setTimeout(closePopup,300)},4000);
  },1000);
}