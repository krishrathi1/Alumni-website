// Add script for navigation bar links and event listeners

document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
        document.querySelector('.hero').classList.remove('show');
        document.querySelector('.about').classList.remove('show');
        document.querySelector('.contact').classList.remove('show');
        document.querySelector('.services').classList.remove('show');
        document.querySelector('.blog').classList.remove('show');

        switch (link.hash) {
            case '#home':
                document.querySelector('.hero').classList.add('show');
                break;
            case '#about':
                document.querySelector('.about').classList.add('show');
                break;
            case '#contact':
                document.querySelector('.contact').classList.add('show');
                break;
            case '#services':
                document.querySelector('.services').classList.add('show');
                break;
            case '#blog':
                document.querySelector('.blog').classList.add('show');
                break;
        }
    });
});

async function renderPage() {
    try {
        const response = await fetch('./index.json');
        console.log(response.url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
}

renderPage();