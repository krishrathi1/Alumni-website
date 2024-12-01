function openModal(name, company, department, description) {
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalDetails').innerHTML = `Company: ${company}<br>Department: ${department}<br>Description: ${description}`;
    document.getElementById('myModal').style.display = "flex";
  }

  function closeModal() {
    document.getElementById('myModal').style.display = "none";
  }

  window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  async function renderPage() {
    try {
        const response = await fetch('./connect.json');
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