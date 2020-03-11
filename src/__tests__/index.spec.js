require('jest');
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');

document.documentElement.innerHTML = html.toString();

describe('homework', () => {
  it('should find 4 div', () => {
    expect(document.getElementsByTagName('div')).toHaveLength(4);
  });
  it('should find correct text', () => {
    expect(document.getElementsByTagName('h1')[0].innerHTML).toBe('Hello World!')
  });
});
