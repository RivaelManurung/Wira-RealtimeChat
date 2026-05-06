const lucide = require('lucide-react');
const keys = Object.keys(lucide);
console.log('Git keys:', keys.filter(k => k.toLowerCase().includes('git')));
console.log('Brand keys:', keys.filter(k => k.toLowerCase().includes('brand')));
console.log('Logo keys:', keys.filter(k => k.toLowerCase().includes('logo')));
