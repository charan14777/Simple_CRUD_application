document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('item-form');
    const itemIdInput = document.getElementById('item-id');
    const itemNameInput = document.getElementById('item-name');
    const itemList = document.getElementById('item-list');
    const formButton = form.querySelector('button');

    const apiUrl = 'http://localhost:3000/items';

    // --- READ ---
    // Fetch and display all items
    async function fetchItems() {
        try {
            const response = await fetch(apiUrl);
            const items = await response.json();

            itemList.innerHTML = ''; // Clear the list
            items.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span>${item.name}</span>
                    <div class="item-buttons">
                        <button class="edit-btn" data-id="${item.id}" data-name="${item.name}">✏️</button>
                        <button class="delete-btn" data-id="${item.id}">🗑️</button>
                    </div>
                `;
                itemList.appendChild(li);
            });
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    }

    // --- CREATE / UPDATE ---
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const id = itemIdInput.value;
        const name = itemNameInput.value.trim();

        if (!name) return;

        const method = id ? 'PUT' : 'POST';
        const url = id ? `${apiUrl}/${id}` : apiUrl;

        try {
            const response = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name }),
            });

            if (response.ok) {
                resetForm();
                fetchItems();
            }
        } catch (error) {
            console.error('Error saving item:', error);
        }
    });

    // --- Handle EDIT and DELETE button clicks ---
    itemList.addEventListener('click', async (e) => {
        const target = e.target;

        // Edit button
        if (target.classList.contains('edit-btn')) {
            const id = target.dataset.id;
            const name = target.dataset.name;
            itemIdInput.value = id;
            itemNameInput.value = name;
            formButton.textContent = 'Update Item';
            itemNameInput.focus();
        }

        // Delete button
        if (target.classList.contains('delete-btn')) {
            const id = target.dataset.id;
            if (confirm('Are you sure you want to delete this item?')) {
                try {
                    const response = await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
                    if (response.ok) {
                        fetchItems();
                    }
                } catch (error) {
                    console.error('Error deleting item:', error);
                }
            }
        }
    });

    // Helper to reset the form
    function resetForm() {
        itemIdInput.value = '';
        itemNameInput.value = '';
        formButton.textContent = 'Add Item';
    }

    // Initial fetch of items
    fetchItems();
});