exports.subscribe = (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send({
      message: 'Method Not Allowed',
    });
  }

  if (req.get('content-type') !== 'application/csp-report') {
    res.status(412).send({
      message: 'Precondition Failed',
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
