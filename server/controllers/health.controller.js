const getHealth = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Annapravah API is running",
  });
};

module.exports = {
  getHealth,
};
