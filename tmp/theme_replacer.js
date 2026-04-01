const fs = require('fs');
const path = require('path');

const cssMap = {
  'bg-[#121212]': 'bg-background',
  'bg-[#0A0F1A]': 'bg-background',
  'bg-[#18181B]': 'bg-card',
  'bg-[#111827]': 'bg-card',
  'border-[#27272A]': 'border-border',
  'border-slate-800': 'border-border',
  'text-white': 'text-text-main',
  'text-slate-200': 'text-text-sec',
  'text-slate-300': 'text-text-sec',
  'text-slate-400': 'text-text-sec',
  'text-[#121212]': 'text-background',
  'hover:border-[#3F3F46]': 'hover:border-border-hover',
  'hover:border-slate-600': 'hover:border-border-hover',
  'text-accent-teal': 'text-accent-main',
  'text-accent-blue': 'text-accent-main',
  'border-accent-teal': 'border-accent-main',
  'border-accent-blue': 'border-accent-main',
  'bg-accent-teal': 'bg-accent-main',
  'bg-accent-blue': 'bg-accent-main'
};

const directoryPath = path.join(__dirname, '../src/components');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  for (const [oldClass, newClass] of Object.entries(cssMap)) {
    // We use a global regex replacement for exact word matches if they are class names
    // To avoid replacing parts of other words, we can just do simple replaceAll
    content = content.split(oldClass).join(newClass);
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${path.basename(filePath)}`);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      replaceInFile(fullPath);
    }
  }
}

console.log('Starting theme variable replacements...');
processDirectory(directoryPath);
/* Also process App.jsx */
replaceInFile(path.join(__dirname, '../src/App.jsx'));
console.log('Complete!');
