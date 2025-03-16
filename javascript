// script.js (Client-side JavaScript)
document.getElementById('userForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const data = {
        nama: document.getElementById('nama').value,
        email: document.getElementById('email').value
    };

    try {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        if (result.success) {
            loadData();
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

async function loadData() {
    const response = await fetch('/api/users');
    const data = await response.json();
    
    const container = document.getElementById('data-container');
    container.innerHTML = data.map(user => `
        <div class="user-card">
            <h3>${user.nama}</h3>
            <p>${user.email}</p>
        </div>
    `).join('');
}

// Load initial data
loadData();
