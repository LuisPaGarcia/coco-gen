#!/usr/bin/env node
"use strict";var _prompt=_interopRequireDefault(require("prompt")),_index=_interopRequireDefault(require("../lib/index"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var schema={properties:{organizacion:{description:"Nombre de tu organizaci\xF3n:",type:"string",required:!0},email:{description:"Email de soporte de tu organizaci\xF3n:",type:"string",required:!0,pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/},corto:{description:"C\xF3digo de \xC9tica y Conducta corto o largo? (corto | largo):",type:"string",required:!0,pattern:/^(corto|largo)$/}}};_prompt["default"].start(),console.log("\nIngresa los siguientes datos para generar tu c\xF3digo de \xE9tica y conducta.\n"),_prompt["default"].get(schema,function(a,b){var c=b.organizacion,d=b.email,e=b.corto;if(a)throw Error("Fatal error.");(0,_index["default"])("corto"===e,c,d)});