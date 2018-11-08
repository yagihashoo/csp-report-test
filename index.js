exports.subscribe = (req, res) => {
  if (req.get('content-type') !== 'application/csp-report') {
    res.status(400).send({
      message: 'Invalid content type',
    });
  }

  req.body = JSON.parse(req.body);
  let userAgent = req.get('user-agent');

  // TODO: Stores into BigQuery

  res.status(200).send({
    message: 'ok',
    report: req.body,
    ua: userAgent,
  });
}

