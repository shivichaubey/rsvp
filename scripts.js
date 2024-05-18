document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const guests = document.getElementById('guests').value;
    const attendance = document.getElementById('attendance').value;

    const response = document.getElementById('response');
    response.innerHTML = `Thank you, ${name}. You've indicated ${attendance === 'yes' ? `you will attend with ${guests} guest(s).` : 'you will not attend.'}`;
});
