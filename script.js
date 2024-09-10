let userRatingValue = 0;

document.querySelectorAll('.btn').forEach(function(button) {
    button.addEventListener('click', function() {
        userRatingValue = this.innerText;
    });
});

document.querySelector('.submitBtn').addEventListener('click', function() {
    if (userRatingValue > 0) {
        document.querySelector('.main').style.display = 'none'; 
        document.querySelector('.thank-you-page').style.display = 'block'; 
        document.getElementById('userRating').innerText = userRatingValue; 
    } else {
        alert("Please select a rating before submitting!"); 
    }
});
