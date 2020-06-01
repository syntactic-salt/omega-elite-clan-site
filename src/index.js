import './index.css';

const hero = document.getElementById('hero');
const header = document.getElementById('header');

const handleScroll = () => {
    const scrollPosition = window.scrollY;
    hero.style.top = `${-(scrollPosition * 0.3)}px`;
    header.style.opacity = String(scrollPosition / 400);
};

handleScroll();
window.addEventListener('scroll', handleScroll);

document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
