import type { INodeProperties } from 'n8n-workflow';

export const metadataDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Metadata"
					]
				}
			},
			"options": [
				{
					"name": "Metadata GET",
					"value": "Metadata GET",
					"action": "This endpoint returns metadata for the most recent data loads of SAM and FPDS data",
					"description": "<p>This endpoint returns metadata for the most recent data loads of SAM and FPDS data. It takes no parameters.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/metadata/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/metadata/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Metadata"
					],
					"operation": [
						"Metadata GET"
					]
				}
			}
		},
];
