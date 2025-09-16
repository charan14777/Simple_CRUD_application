const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Allows requests from any origin
app.use(express.json()); // Parses incoming JSON requests
app.use(express.static('public')); // Serves static files from the 'public' directory

// In-memory "database"
let items = [
    { id: 1, name: "Buy groceries" },
    { id: 2, name: "Finish project report" }
];
let nextId = 3;

// --- API Endpoints (CRUD) ---

// READ all items (GET /items)
app.get('/items', (req, res) => {
    res.json(items);
});

// CREATE a new item (POST /items)
app.post('/items', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Item name is required' });
    }
    const newItem = { id: nextId++, name };
    items.push(newItem);
    res.status(201).json(newItem);
});

// UPDATE an existing item (PUT /items/:id)
app.put('/items/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const item = items.find(i => i.id === parseInt(id));

    if (!item) {
        return res.status(404).json({ error: 'Item not found' });
    }

    item.name = name || item.name;
    res.json(item);
});

// DELETE an item (DELETE /items/:id)
app.delete('/items/:id', (req, res) => {
    const { id } = req.params;
    const itemIndex = items.findIndex(i => i.id === parseInt(id));

    if (itemIndex === -1) {
        return res.status(404).json({ error: 'Item not found' });
    }

    items.splice(itemIndex, 1);
    res.status(204).send(); // 204 No Content
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});