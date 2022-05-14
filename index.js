const parseQueryParams = (params) => {
  // Takes array of objects containing key / value pairs and returns in form of query string
  let qString = params.map(e => `&${e.name}=${e.value}`).join().replace(/,/g, "");
  qString = qString.replace(/^&/, "");
  return qString;
}

module.exports = parseQueryParams;