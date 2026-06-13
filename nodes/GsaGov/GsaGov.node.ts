import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { metadataDescription } from './resources/metadata';
import { naicsDescription } from './resources/naics';

export class GsaGov implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Gsa Gov',
                name: 'N8nDevGsaGov',
                icon: { light: 'file:./gsa-gov.svg', dark: 'file:./gsa-gov.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'API powers Discovery Market Research Tool.',
                defaults: { name: 'Gsa Gov' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevGsaGovApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Metadata",
					"value": "Metadata",
					"description": ""
				},
				{
					"name": "Naics",
					"value": "Naics",
					"description": ""
				}
			],
			"default": ""
		},
		...metadataDescription,
		...naicsDescription
                ],
        };
}
