
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('successModal');
    const closeBtn = document.querySelector('.close-btn');
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success');

    if (success === '1') {
        document.getElementById('successModal').style.display = 'flex';
        // Close the modal after 5 seconds (5000 milliseconds)
        setTimeout(function () {
            modal.style.display = 'none';
        }, 5000);

        // Close the modal on click of the close button
        closeBtn.addEventListener('click', function () {
            modal.style.display = 'none';
        });

        // Close the modal on click anywhere in the modal
        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});