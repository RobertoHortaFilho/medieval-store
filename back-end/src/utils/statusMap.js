const ERRORS = {
  'NOTFOUND': 404,
  'INTERNAL': 500,
}

const STATUS = {
  'OK': 200,
  'CREATED': 201,
}

const mapper = (e) => ERRORS[e] || 500

module.exports = { ERRORS, STATUS, mapper }