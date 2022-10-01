const models = require('../db/models');

const getAll = async (req, res) => {
	try {
		const user = await models.User.findAll();
		return res.status(200).json({ user });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

module.exports = {
	getAll,
};
