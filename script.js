const facts = [
    "The term 'computer bug' was coined when a real moth was found causing issues in the Harvard Mark II computer in 1947.",
    "Email was invented in 1971 by Ray Tomlinson, which is over two decades before the World Wide Web was introduced in 1991.",
    "In 1980, IBM introduced the first 1GB hard drive, which weighed over 500 pounds and cost $40,000.",
    "The @ symbol was chosen for email addresses because it was rarely used in computing and had no significant meaning, making it a perfect separator.",
    "As of recent years, there are more mobile phones in the world than there are people, with the number of active mobile devices surpassing the global population.",
    "The first webcam was used at the University of Cambridge to monitor a coffee pot, ensuring that researchers didn't make a trip to an empty pot.",
    "The first domain name ever registered was Symbolics.com on March 15, 1985.",
    "Google’s first storage was made from LEGO bricks. The founders used LEGO to create a case for 10 4GB hard drives, totaling 40GB of storage.",
    "The QWERTY keyboard layout was designed to prevent jamming in early typewriters by spacing out commonly used letter pairings.",
    "Wi-Fi technology was invented by accident during a failed experiment to detect mini black holes."
];

document.getElementById('showFactButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const factDisplay = document.getElementById('factDisplay');
    factDisplay.textContent = facts[randomIndex];
    factDisplay.classList.remove('show');
    setTimeout(() => {
        factDisplay.classList.add('show');
    }, 10);
});
