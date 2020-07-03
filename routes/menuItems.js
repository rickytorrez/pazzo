const express = require('express');
const router = express.Router();

const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require('../controllers/menuItems');

// route ('/') is used for:
// GET request    getItems      get all items
// POST request   createItemm   create a new menu item
router.route('/').get(getItems).post(createItem);

// route ('/:id') is used for
// GET request    getItem       gets a single item by its id
// PUT request    updateItem    updates a single item by its id
// DELETE request deleteItem    deletes a single item by its id
router.route('/:id').get(getItem).put(updateItem).delete(deleteItem);
