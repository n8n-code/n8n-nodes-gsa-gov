import type { INodeProperties } from 'n8n-workflow';

export const naicsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Naics"
					]
				}
			},
			"options": [
				{
					"name": "List Naics GET",
					"value": "List Naics GET",
					"action": "This endpoint lists all of the NAICS codes that are relevant to the OASIS family of vehicles",
					"description": "<p>This endpoint lists all of the NAICS codes that are relevant to the OASIS family of vehicles. It takes no parameters.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/naics/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/naics/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Naics"
					],
					"operation": [
						"List Naics GET"
					]
				}
			}
		},
];
