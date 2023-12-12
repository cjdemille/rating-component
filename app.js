const ratingForm = document.querySelector('.rating-form');

const thankYou = document.querySelector('#thank-you');

const ratingNum = document.getElementById('rating-num')

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const ele = document.getElementsByTagName('input');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].type = "radio") {
            if (ele[i].checked) {
                ratingNum.innerHTML = ele[i].value
            }
        }
    }
    ratingForm.classList.toggle('hidden')
    thankYou.classList.toggle('hidden')
    thankYou.classList.add('thank-you')
})
