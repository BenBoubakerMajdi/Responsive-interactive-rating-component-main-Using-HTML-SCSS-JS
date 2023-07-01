const submission = document.querySelectorAll('.rating');

const score = document.getElementById('score_review');
const submission_btn = document.getElementById('submit');

const rating_card = document.getElementById('rating_state');
const review_card = document.getElementById('thank_you');


submission_btn.addEventListener('click', () => {
    submission.forEach((sub) => {
        sub.classList.add('animate-color-transition');

        sub.addEventListener('animationend', () => {
            sub.classList.remove('animate-color-transition');

        });
    });
    
});

submission.forEach((sub) => {
    sub.addEventListener('click', () => {
        sub.classList.contains('bg-orange')
        removeActiveClass();
        sub.classList.add('bg-orange');

        score.innerHTML = sub.innerHTML;

        submission_btn.addEventListener('click', () => {
            rating_card.style.display = 'none';
            review_card.style.display = 'block';
        });
    });
});

function removeActiveClass() {
    submission.forEach((sub) => {
        sub.classList.remove('bg-orange');
    });
}