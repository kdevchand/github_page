async function showUsers(type) {
  const modal = document.getElementById('user-modal');
  const content = document.getElementById('modal-content');
  
  const response = await fetch(`data/github_jsons/${type}_users.json`);
  const users = await response.json();
  
  content.innerHTML = `
    <table>
      <thead><tr><th>Username</th><th>Email</th></tr></thead>
      <tbody>
        ${users.map(u => `<tr><td>${u.username}</td><td>${u.email}</td></tr>`).join('')}
      </tbody>
    </table>
  `;
  
  modal.hidden = false;
}
