#!/usr/bin/env node
import prompt from 'prompt';
import escribir_coco from '../lib/index';

const schema = {
	properties: {
		organizacion: {
			description: 'Nombre de tu organización',
			type: 'string',
			required: true
		},
		email: {
			description: 'Email de soporte de tu organización',
			type: 'string',
			required: true,
			pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		},
		corto: {
			description: 'Código de Ética y Conducta corto o largo? (corto | largo)',
			type: 'string',
			required: true,
			pattern: /^(corto|largo)$/
		}
	}
};

prompt.start();
console.log('\nIngresa los siguientes datos para generar tu código de ética y conducta.\n');
prompt.get(schema, function(err, { organizacion, email, corto }) {
	if (err) throw Error('Fatal error.');

	escribir_coco(corto === 'corto', organizacion, email);
});
