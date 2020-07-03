// @desc    Get all items
// @route   GET /api/v1/pazzoashburn/menu
// @access  Public
exports.getItems = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all menu items' });
};

// @desc    Get a single item
// @route   GET /api/v1/pazzoashburn/menus/:id
// @access  Public
exports.getItem = (req, res, next) => {
  res
    .status(200)
    .json({
      success: true,
      msg: `Show a single menu item of ${req.params.id} id`,
    });
};

// @desc    Create a single item
// @route   POST /api/v1/pazzoashburn/menus
// @access  Private
exports.createItem = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Create a menu item of ${req.params.id} id` });
};

// @desc    Update a single item
// @route   PUT /api/v1/pazzoashburn/menus/:id
// @access  Private
exports.updateItem = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Updated menu item of ${req.params.id} id` });
};

// @desc    Delte a single item
// @route   DELETE /api/v1/pazzoashburn/menus/:id
// @access  Private
exports.deleteItem = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete menu item of ${req.params.id} id` });
};
