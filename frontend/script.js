
const API = "https://me-api-playground-74g2.onrender.com";

/* Load profile */
fetch(`${API}/profile`)
  .then(res => {
    if (!res.ok) throw new Error("Failed to load profile");
    return res.json();
  })
  .then(data => {
    profile.innerText = JSON.stringify(data, null, 2);
    profileStatus.innerText = "Backend connected successfully ✅";
  })
  .catch(err => {
    profile.innerText = "";
    profileStatus.innerText = err.message;
    profileStatus.classList.add("error");
  });

/* Search projects */
function search() {
  const skill = document.getElementById("skill").value.trim();
  const status = document.getElementById("projectStatus");
  const list = document.getElementById("results");

  list.innerHTML = "";
  status.innerText = "";

  if (!skill) {
    status.innerText = "Please enter a skill.";
    status.className = "error";
    return;
  }

  status.innerText = "Searching…";

  fetch(`${API}/projects?skill=${skill}`)
    .then(res => {
      if (!res.ok) throw new Error("Search failed");
      return res.json();
    })
    .then(data => {
      if (data.length === 0) {
        status.innerText = "No projects found.";
        return;
      }

      status.innerText = `Found ${data.length} project(s)`;
      data.forEach(p => {
        const li = document.createElement("li");
        li.innerText = p.title;
        list.appendChild(li);
      });
    })
    .catch(err => {
      status.innerText = err.message;
      status.className = "error";
    });
}
