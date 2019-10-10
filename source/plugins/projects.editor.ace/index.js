import Ace from './views/AceEditor.vue';

export default function setup (options, imports, register)
{
	const studio = imports;
	studio.projects.registerEditor('EDITOR_ACE',['txt','md','py','js','json','sh','less','css','html','php','vue','c','cpp','d',''], Ace);
	
	register (null, {});
}
