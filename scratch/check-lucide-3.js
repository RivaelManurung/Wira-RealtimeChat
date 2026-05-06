const lucide = require('lucide-react');
const keys = Object.keys(lucide);
console.log('Github keys:', keys.filter(k => k.toLowerCase().includes('github')));
console.log('Chrome keys:', keys.filter(k => k.toLowerCase().includes('chrome')));
console.log('Google keys:', keys.filter(k => k.toLowerCase().includes('google')));
