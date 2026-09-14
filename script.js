
const rivers = [
  {
    name: "Sutang River",
    location: "Habiganj",
    status: "Needs research",
    description: "A starter profile for documenting historical importance, present condition, human impacts, and verified restoration information.",
    href: "sutang-river.html"
  },
  {
    name: "Buriganga River",
    location: "Dhaka",
    status: "Under pressure",
    description: "A major river beside Dhaka. Add verified information about water quality, encroachment, navigation, and restoration.",
    href: "buriganga"
  },
  {
    name: "Turag River",
    location: "Dhaka",
    status: "Under pressure",
    description: "A river connected to the Dhaka waterway system. Add verified historical and present-day data.",
    href: "turag"
  }
];

const grid = document.getElementById("riverGrid");
const search = document.getElementById("search");

function render(list) {
  grid.innerHTML = list.length
    ? list.map(r => `
      <article class="river-card" onclick="window.location.href='${r.href}'">
        <span class="status">${r.status}</span>
        <h3>${r.name}</h3>
        <small>📍 ${r.location}</small>
        <p>${r.description}</p>
        <strong>Profile →</strong>
      </article>
    `).join("")
    : "<p>No river found.</p>";
}

search.addEventListener("input", e => {
  const q = e.target.value.toLowerCase();

  render(
    rivers.filter(r =>
      (r.name + r.location).toLowerCase().includes(q)
    )
  );
});

render(rivers);