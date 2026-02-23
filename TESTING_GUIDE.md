# Testing Guide - Run Code Execution & Animation Stage

## Quick Test Examples

### Test 1: Console Output Redirection
**Copy and paste in editor:**
```javascript
log("✓ Console redirection works!");
console.log("This also works via console.log");

const obj = { name: "Test", items: [1, 2, 3] };
console.log(obj);

for (let i = 1; i <= 3; i++) {
  log(`Line ${i} of output`);
}
```
**Expected:** All output appears in the Output Logs section (bottom)

---

### Test 2: GSAP Animation
**Copy and paste in editor:**
```javascript
const box = document.createElement('div');
box.style.cssText = `
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-radius: 8px;
  position: relative;
`;
visualStage.appendChild(box);

gsap.to(box, {
  duration: 2,
  x: 300,
  rotation: 360,
  repeat: -1,
  yoyo: true
});

log("✓ GSAP animation started - watch the box move!");
```
**Expected:** Green box appears and animates across the visual stage

---

### Test 3: Anime.js Animation
**Copy and paste in editor:**
```javascript
const circle = document.createElement('div');
circle.style.cssText = `
  width: 50px;
  height: 50px;
  background: #f59e0b;
  border-radius: 50%;
  margin: 20px;
`;
visualStage.appendChild(circle);

anime({
  targets: circle,
  translateX: 250,
  rotate: 360,
  backgroundColor: '#ec4899',
  duration: 2000,
  loop: true,
  easing: 'easeInOutQuad'
});

log("✓ Anime.js animation running!");
```
**Expected:** Orange circle animates and changes color

---

### Test 4: Multiple Elements
**Copy and paste in editor:**
```javascript
for (let i = 0; i < 3; i++) {
  const div = document.createElement('div');
  div.style.cssText = `
    width: 40px;
    height: 40px;
    background: hsl(${i * 120}, 80%, 50%);
    margin: 10px;
    display: inline-block;
  `;
  visualStage.appendChild(div);
  
  gsap.to(div, {
    delay: i * 0.2,
    duration: 1.5,
    y: 100,
    rotation: 180,
    repeat: -1,
    yoyo: true
  });
}

log("✓ Three animated boxes created!");
```
**Expected:** Three colored boxes animate up and down sequentially

---

### Test 5: Error Handling
**Copy and paste in editor:**
```javascript
log("Testing error...");
log("Count: " + undefinedVariable);
```
**Expected:** "Error: undefinedVariable is not defined" in red

---

### Test 6: DOM Creation & Styling
**Copy and paste in editor:**
```javascript
const container = document.createElement('div');
container.style.cssText = `
  padding: 20px;
  background: #1e293b;
  border: 2px solid #22d3ee;
  border-radius: 8px;
  text-align: center;
  color: #22d3ee;
  font-family: monospace;
`;

container.innerHTML = `
  <h3>JavaScript Playground</h3>
  <p>Run any code and see results!</p>
  <p>Total Concepts: 410/500</p>
`;

visualStage.appendChild(container);
log("✓ DOM manipulation works!");
```
**Expected:** Styled container appears in visual stage

---

### Test 7: Interactivity
**Copy and paste in editor:**
```javascript
const btn = document.createElement('button');
btn.textContent = "Click Me";
btn.style.cssText = `
  padding: 10px 20px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
`;

let clicks = 0;
btn.onclick = () => {
  clicks++;
  log(`Button clicked ${clicks} time(s)!`);
  gsap.to(btn, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 });
};

visualStage.appendChild(btn);
log("✓ Click the button!");
```
**Expected:** Clickable button that logs clicks and animates

---

## Features to Verify

### ✓ Run Button
- [ ] Green gradient background
- [ ] Glowing box shadow
- [ ] Hover lift animation
- [ ] Contains Play icon (▶)
- [ ] Label says "Run Code"

### ✓ Visual Stage
- [ ] Has cyan border
- [ ] Dark background
- [ ] Takes up top half of output area
- [ ] Scrolls if content overflows
- [ ] Clears before each run

### ✓ Output Logs
- [ ] Console output appears here
- [ ] Scrolls independently
- [ ] Takes up bottom half
- [ ] Shows errors in red
- [ ] Shows success messages in green

### ✓ Code Execution
- [ ] Runs arbitrary code
- [ ] Variables persist during execution
- [ ] Errors are caught
- [ ] console.log redirects to output
- [ ] log() function works

### ✓ Animation Support
- [ ] GSAP available
- [ ] Anime.js available
- [ ] DOM access works
- [ ] No element duplication
- [ ] Multiple animations work

### ✓ Mobile Responsiveness
- [ ] Hamburger menu visible on mobile
- [ ] Run button responsive
- [ ] Output area stacks vertically
- [ ] Visual stage fits screen
- [ ] Sidebar opens/closes smoothly

---

## Console Commands for Testing

**In browser DevTools console:**
```javascript
// Check if GSAP is loaded
console.log(window.gsap);

// Check if Anime is loaded
console.log(window.anime);

// Check concepts count
console.log(CONCEPT_DATA.length);

// Test log function
log("Test from console");

// Access visual stage
console.log(document.getElementById('visualStage'));
```

---

## Expected Output Examples

### Animation Test Should Show:
- Colored boxes moving
- Smooth transitions
- Repeated animations
- No stutter or lag

### Console Test Should Show:
- Each log appears as a separate line
- Objects are formatted
- Errors show in red
- Success messages in green

### Code Execution Should:
- Run instantly on "Run Code" click
- Handle syntax errors gracefully
- Persist output between executions
- Clear visual stage when needed

