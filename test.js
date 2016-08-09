/* eslint-env node, mocha */

// Pull in azure credentials from .env. Your .env file should look like this:
/*
AZURE_STORAGE_ACCOUNT=XXX
AZURE_STORAGE_ACCESS_KEY=XXX
AZURE_CONTAINER=XXX
*/
// The adapter also will not create the storage container for you, so you'll
// need to do that before running the test. It should have publically readable
// blobs.

require('dotenv').config();
const S3Adapter = require('./index');

describe('azure file field', function () {
	beforeEach(function () {
		// this.timeout(10000);
	});

	require('keystone/test/fileadapter')(S3Adapter, {
		azure: {
			container: process.env.AZURE_CONTAINER,
		},
	}, {
		filename: true,
		size: true,
		mimetype: true,
		path: true,
		originalname: true,
		url: true,

		// Extras for azure
		schema: true,
		etag: true,
	})();

	it('304s when you request the file using the returned etag');
	it('the returned etag doesnt contain enclosing quotes');

});