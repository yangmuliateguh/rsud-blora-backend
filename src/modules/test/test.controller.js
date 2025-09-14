const service = require('./test.service');

async function getTest(req, res) {
  try {
    const data = await service.getAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function addTest(req, res) {
  const { name } = req.body;
  try {
    const data = await service.create(name);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getTest, addTest };
