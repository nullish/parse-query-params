# parse-query-params
Takes an  array of objects containing key / value pairs and returns them in form of query string.

## Installation

Install the module in your repo using Node Package Manager.

`npm install parse-query-params`

## Example usage

```javascript
const pqp = require('parse-query-params');

const params = [
	{
		"name": "foo1",
		"value": "bar1"
	},
	{
		"name": "foo2",
		"value": "bar2"
	}
];

console.log(pqp(params));
```

Outputs:

`foo1=bar1&foo2=bar2`