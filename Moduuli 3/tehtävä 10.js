document.querySelector("#source").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.querySelector('input[name="firstname"]').value;
    const lastName = document.querySelector('input[name="lastname"]').value;

    const target = document.querySelector("#target");
    target.textContent = `Your name is ${firstName} ${lastName}`;
});
