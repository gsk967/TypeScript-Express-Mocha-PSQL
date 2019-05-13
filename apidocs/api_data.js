define({
	"api": [
		{
			"type": "get",
			"url": "/books/:bookId",
			"title": "Request for get book info",
			"name": "getBookInfo",
			"group": "books",
			"parameter": {
				"fields": {
					"Parameter": [
						{
							"group": "Parameter",
							"type": "ObjectId",
							"optional": false,
							"field": "bookId",
							"description": "<p>book id</p>"
						}
					]
				}
			},
			"success": {
				"fields": {
					"Success 200": [
						{
							"group": "Success 200",
							"type": "ObjectId",
							"optional": false,
							"field": "id",
							"description": "<p>Id of the book record.</p>"
						},
						{
							"group": "Success 200",
							"type": "String",
							"optional": false,
							"field": "name",
							"description": "<p>Book name.</p>"
						},
						{
							"group": "Success 200",
							"type": "String",
							"optional": false,
							"field": "author_name",
							"description": "<p>Book author name.</p>"
						},
						{
							"group": "Success 200",
							"type": "String",
							"optional": false,
							"field": "description",
							"description": "<p>Book description.</p>"
						},
						{
							"group": "Success 200",
							"type": "Date",
							"optional": false,
							"field": "created_at",
							"description": "<p>Book record created time.</p>"
						},
						{
							"group": "Success 200",
							"type": "Date",
							"optional": false,
							"field": "updated_at",
							"description": "<p>Book record updated time.</p>"
						},
						{
							"group": "Success 200",
							"type": "Date",
							"optional": false,
							"field": "deleted_at",
							"description": "<p>Book record deleted time.</p>"
						}
					]
				},
				"examples": [
					{
						"title": "Success-Response:",
						"content": " HTTP/1.1 200 OK\n {\n    \"id\": \"6d3eac8f-0c72-45cc-975d-2389ce387a49\",\n    \"register_id\": \"12312312312\",\n    \"name\": \"Thomas Calculus\",\n    \"author_name\": \"George B. Thomas\",\n    \"description\": \"Thomas Calculus Early Transcendentals Media Upgrade, Eleventh Edition, responds to the needs of todays readers by developing their conceptual understanding while strengthening their skills in algebra and trigonometry, two areas of knowledge vital to the mastery of calculus\",\n    \"created_at\": \"2019-05-13T06:27:53.448Z\",\n    \"deleted_at\": null,\n    \"updated_at\": null\n}",
						"type": "json"
					}
				]
			},
			"error": {
				"fields": {
					"401": [
						{
							"group": "401",
							"type": "String",
							"optional": false,
							"field": "message",
							"description": "<p>Message of the error response.</p>"
						},
						{
							"group": "401",
							"type": "Boolean",
							"optional": false,
							"field": "success",
							"description": "<p>Status of the response.</p>"
						}
					]
				},
				"examples": [
					{
						"title": "Error-Response:",
						"content": "HTTP/1.1 401 Unauthorized\n{\n  \"success\": false,\n  \"message\": \"Unauthorized. Token missing.\"\n}",
						"type": "json"
					}
				]
			},
			"version": "0.0.0",
			"filename": "dist/modules/controllers/books/getBooks.js",
			"groupTitle": "books"
		},
		{
			"type": "get",
			"url": "/books",
			"title": "Request for get books list",
			"name": "getBooksList",
			"group": "books",
			"success": {
				"fields": {
					"Success 200": [
						{
							"group": "Success 200",
							"type": "ObjectId",
							"optional": false,
							"field": "id",
							"description": "<p>Id of the book record.</p>"
						},
						{
							"group": "Success 200",
							"type": "String",
							"optional": false,
							"field": "name",
							"description": "<p>Book name.</p>"
						},
						{
							"group": "Success 200",
							"type": "String",
							"optional": false,
							"field": "author_name",
							"description": "<p>Book author name.</p>"
						},
						{
							"group": "Success 200",
							"type": "String",
							"optional": false,
							"field": "description",
							"description": "<p>Book description.</p>"
						},
						{
							"group": "Success 200",
							"type": "Date",
							"optional": false,
							"field": "created_at",
							"description": "<p>Book record created time.</p>"
						},
						{
							"group": "Success 200",
							"type": "Date",
							"optional": false,
							"field": "updated_at",
							"description": "<p>Book record updated time.</p>"
						},
						{
							"group": "Success 200",
							"type": "Date",
							"optional": false,
							"field": "deleted_at",
							"description": "<p>Book record deleted time.</p>"
						}
					]
				},
				"examples": [
					{
						"title": "Success-Response:",
						"content": " HTTP/1.1 200 OK\n [\n {\n    \"id\": \"6d3eac8f-0c72-45cc-975d-2389ce387a49\",\n    \"register_id\": \"12312312312\",\n    \"name\": \"Thomas Calculus\",\n    \"author_name\": \"George B. Thomas\",\n    \"description\": \"Thomas Calculus Early Transcendentals Media Upgrade, Eleventh Edition, responds to the needs of todays readers by developing their conceptual understanding while strengthening their skills in algebra and trigonometry, two areas of knowledge vital to the mastery of calculus\",\n    \"created_at\": \"2019-05-13T06:27:53.448Z\",\n    \"deleted_at\": null,\n    \"updated_at\": null\n},{},{}..\n ]",
						"type": "json"
					}
				]
			},
			"error": {
				"fields": {
					"401": [
						{
							"group": "401",
							"type": "String",
							"optional": false,
							"field": "message",
							"description": "<p>Message of the error response.</p>"
						},
						{
							"group": "401",
							"type": "Boolean",
							"optional": false,
							"field": "success",
							"description": "<p>Status of the response.</p>"
						}
					]
				},
				"examples": [
					{
						"title": "Error-Response:",
						"content": "HTTP/1.1 401 Unauthorized\n{\n  \"success\": false,\n  \"message\": \"Unauthorized. Token missing.\"\n}",
						"type": "json"
					}
				]
			},
			"version": "0.0.0",
			"filename": "dist/modules/controllers/books/getBooks.js",
			"groupTitle": "books"
		}
	]
});
