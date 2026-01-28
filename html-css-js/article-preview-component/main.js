const cardFooter = document.querySelector('.card-footer');
const shareBtn = document.querySelector('.share-btn');
const shareState = document.querySelector('.share-state');

shareBtn.addEventListener('click', (e) => {
    cardFooter.classList.toggle('active');
})