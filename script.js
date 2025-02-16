const facts = [
    "The term 'computer bug' was coined when a real moth was found causing a malfunction in the Harvard Mark II computer in 1947.",
    "Email was invented in 1971 by Ray Tomlinson, which is over two decades before the World Wide Web was introduced in 1991.",
    "In 1980, IBM introduced the first 1GB hard drive, which weighed over 500 pounds and cost $40,000.",
    "The name 'Bluetooth' comes from a 10th-century Scandinavian king, Harald 'Bluetooth' Gormsson, who united Denmark and Norway.",
    "The first website ever created was info.cern.ch, launched by Tim Berners-Lee in 1991.",
    "According to the United Nations, more people in the world have access to a mobile phone than to a toilet.",
    "The first webcam was used at the University of Cambridge to monitor a coffee pot.",
    "Google’s first storage was made from LEGO bricks.",
    "The first computer virus, known as 'Creeper,' was detected on ARPANET in the early 1970s.",
    "The QWERTY keyboard layout was designed to prevent jamming in early typewriters."
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
