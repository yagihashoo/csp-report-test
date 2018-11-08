exports.subscribe = (req, res) => {
  let message = req.query.message || req.body.message || 'it works';
  res.status(200).send(message);
}

