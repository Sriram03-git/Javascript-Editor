// ====================================================
// JS 500 CONCEPTS - COMPREHENSIVE LEARNING PLATFORM
// ====================================================
// Free Tier: Concepts 1-50 (Core Fundamentals)
// Premium Tier: Concepts 51-500 (All Advanced Topics)
// ====================================================

const CONCEPT_DATA = [
  // ==========================================
  // CORE FUNDAMENTALS (1-50) - FREE TIER
  // ==========================================

  // 1-10: Variables & Scope
  {
    id: 1,
    category: "Core Fundamentals",
    title: "Variable Scope - Global",
    premium: false,
    code: `log('=== Global Scope ===');\nlet global = 'I am global';\nfunction testGlobal() {\n  log('Inside function: ' + global);\n}\ntestGlobal();\nlog('Outside function: ' + global);\nlog('✓ Global variables accessible everywhere');`,
    output:
      "Shows how global variables are accessible inside and outside functions",
  },
  {
    id: 2,
    category: "Core Fundamentals",
    title: "Variable Scope - Local",
    premium: false,
    code: `log('=== Local Scope ===');\nfunction localDemo() {\n  let local = 'I am local';\n  log('Inside function: ' + local);\n}\nlocalDemo();\ntry {\n  log(local);\n} catch(e) {\n  log('❌ ' + e.message);\n}\nlog('✓ Local variables not accessible outside function');`,
    output: "Demonstrates that local variables are scoped to their function",
  },
  {
    id: 3,
    category: "Core Fundamentals",
    title: "Variable Scope - Block",
    premium: false,
    code: `log('=== Block Scope ===');\nvar varBlock = 'var';\nlet letBlock = 'let';\nconst constBlock = 'const';\n{\n  var varInside = '(re)declared';\n  let letInside = 'block scoped';\n  const constInside = 'block scoped';\n}\nlog('var after block: ' + (typeof varInside !== 'undefined' ? 'exists' : 'undefined'));\nlog('let after block: ' + (typeof letInside !== 'undefined' ? 'exists' : 'undefined'));\nlog('const after block: ' + (typeof constInside !== 'undefined' ? 'exists' : 'undefined'));`,
    output: "Contrasts block scoping between var, let, and const",
  },
  {
    id: 4,
    category: "Core Fundamentals",
    title: "Hoisting - var",
    premium: false,
    code: `log('=== Hoisting: var ===');\nlog('x before: ' + (typeof x));\nvar x = 5;\nlog('x after: ' + x);\n\nfunction hoistTest() {\n  log('y before: ' + y);\n  var y = 10;\n  log('y after: ' + y);\n}\nhoistTest();\nlog('✓ var declarations hoisted, initialized to undefined');`,
    output: "Shows var hoisting behavior (undefined, then value)",
  },
  {
    id: 5,
    category: "Core Fundamentals",
    title: "Hoisting - let/const",
    premium: false,
    code: `log('=== Hoisting: let/const ===');\nfunction hoistLet() {\n  try {\n    log(z);\n  } catch(e) {\n    log('❌ ReferenceError: ' + e.message);\n  }\n  let z = 20;\n  log('After declaration: ' + z);\n}\nhoistLet();\nlog('✓ let/const in TDZ (Temporal Dead Zone)');`,
    output: "Demonstrates Temporal Dead Zone for let/const",
  },
  {
    id: 6,
    category: "Core Fundamentals",
    title: "Closures - Basic",
    premium: false,
    code: `log('=== Closures ===');\nfunction outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    return 'Count: ' + count;\n  };\n}\n\nconst counter = outer();\nlog(counter());\nlog(counter());\nlog(counter());\nlog('✓ Closure preserves access to count variable');`,
    output: "Counter that increments using a closure",
  },
  {
    id: 7,
    category: "Core Fundamentals",
    title: "Closures - Module Pattern",
    premium: false,
    code: `log('=== Module Pattern ===');\nconst calculator = (() => {\n  let memory = 0;\n  return {\n    add: (n) => { memory += n; return memory; },\n    subtract: (n) => { memory -= n; return memory; },\n    getMemory: () => memory,\n    reset: () => { memory = 0; return 0; }\n  };\n})();\n\nlog('Add 10: ' + calculator.add(10));\nlog('Add 5: ' + calculator.add(5));\nlog('Subtract 3: ' + calculator.subtract(3));\nlog('Memory: ' + calculator.getMemory());`,
    output: "Private state using module pattern",
  },
  {
    id: 8,
    category: "Core Fundamentals",
    title: "Type Coercion - Truthy/Falsy",
    premium: false,
    code: `log('=== Truthy/Falsy ===');\nconst values = [0, 1, '', 'hello', null, undefined, [], {}];\nvalues.forEach(val => {\n  log(JSON.stringify(val) + ' is ' + (val ? '✓ Truthy' : '❌ Falsy'));\n});\nlog('\\n⚠ Empty arrays [] and objects {} are TRUTHY!');`,
    output: "Demonstrates truthy and falsy values in JavaScript",
  },
  {
    id: 9,
    category: "Core Fundamentals",
    title: "Type Coercion - Comparison",
    premium: false,
    code: `log('=== Type Coercion in Comparisons ===');\nlog('0 == false: ' + (0 == false));\nlog('0 === false: ' + (0 === false));\nlog('"" == false: ' + ("" == false));\nlog('"" === false: ' + ("" === false));\nlog('null == undefined: ' + (null == undefined));\nlog('null === undefined: ' + (null === undefined));\nlog('\\n⚠ Always use === (strict equality)');`,
    output: "Shows difference between == and === operators",
  },
  {
    id: 10,
    category: "Core Fundamentals",
    title: "This Keyword - Context",
    premium: false,
    code: `log('=== This Keyword ===');\nconst obj = {\n  name: 'Object',\n  method: function() {\n    log('this.name in method: ' + this.name);\n  },\n  arrow: () => {\n    log('this in arrow: ' + (this === window || this === globalThis ? 'Global' : 'Bound'));\n  }\n};\n\nobj.method();\nobj.arrow();\n\nconst detached = obj.method;\ndetached();`,
    output: "Demonstrates this binding in different contexts",
  },

  // 11-20: Functions & Arrow Functions
  {
    id: 11,
    category: "Core Fundamentals",
    title: "Function Declaration vs Expression",
    premium: false,
    code: `log('=== Function Declaration vs Expression ===');\nlog('Declaration hoisted: ' + (typeof declaration === 'function' ? '✓ Yes' : '❌ No'));\nlog('Expression not hoisted: ' + (typeof expression === 'undefined' ? '✓ undefined' : expression));\n\nfunction declaration() {\n  return 'I am hoisted';\n}\n\nconst expression = function() {\n  return 'I am not hoisted';\n};\n\nlog('Declaration result: ' + declaration());\nlog('Expression result: ' + expression());`,
    output: "Shows hoisting differences between declarations and expressions",
  },
  {
    id: 12,
    category: "Core Fundamentals",
    title: "Arrow Functions - Basics",
    premium: false,
    code: `log('=== Arrow Functions ===');\nconst add = (a, b) => a + b;\nconst square = x => x * x;\nconst greet = () => 'Hello';\n\nlog('add(3, 4): ' + add(3, 4));\nlog('square(5): ' + square(5));\nlog('greet(): ' + greet());\nlog('\\n✓ Arrow functions: Shorter syntax, implicit return, lexical this');`,
    output: "Different arrow function syntax variants",
  },
  {
    id: 13,
    category: "Core Fundamentals",
    title: "Arrow Function vs Regular Function - This",
    premium: false,
    code: `log('=== Arrow vs Regular Function - this ===');\nconst obj = {\n  name: 'Object',\n  regular: function() {\n    return 'this.name: ' + this.name;\n  },\n  arrow: () => {\n    return 'this in arrow (global): ' + typeof this.name;\n  }\n};\n\nlog(obj.regular());\nlog(obj.arrow());\nlog('\\n⚠ Arrow functions inherit this from parent scope');`,
    output: "Shows this binding difference between functions",
  },
  {
    id: 14,
    category: "Core Fundamentals",
    title: "Default Parameters",
    premium: false,
    code: `log('=== Default Parameters ===');\nconst greet = (name = 'Guest', greeting = 'Hello') => {\n  return greeting + ', ' + name + '!';\n};\n\nlog(greet());\nlog(greet('Alice'));\nlog(greet('Bob', 'Hi'));\nlog('\\n✓ Defaults used when arguments not provided');`,
    output: "Multiple function calls with default parameters",
  },
  {
    id: 15,
    category: "Core Fundamentals",
    title: "Rest Parameters",
    premium: false,
    code: `log('=== Rest Parameters ===');\nconst sum = (...numbers) => {\n  return numbers.reduce((acc, num) => acc + num, 0);\n};\n\nconst describe = (first, ...rest) => {\n  log('First: ' + first);\n  log('Rest: ' + JSON.stringify(rest));\n};\n\nlog('sum(1, 2, 3, 4, 5): ' + sum(1, 2, 3, 4, 5));\ndescribe('apple', 'banana', 'orange');`,
    output: "Collecting multiple arguments with rest operator",
  },
  {
    id: 16,
    category: "Core Fundamentals",
    title: "Spread Operator - Arrays",
    premium: false,
    code: `log('=== Spread Operator ===');\nconst arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\n\nconst combined = [...arr1, ...arr2];\nlog('Combined: ' + JSON.stringify(combined));\n\nconst copy = [...arr1];\nlog('Copy: ' + JSON.stringify(copy));\n\nconst withItem = [0, ...arr1, 3.5, ...arr2];\nlog('With items: ' + JSON.stringify(withItem));`,
    output: "Spreading arrays and combining them",
  },
  {
    id: 17,
    category: "Core Fundamentals",
    title: "Destructuring - Arrays",
    premium: false,
    code: `log('=== Array Destructuring ===');\nconst colors = ['red', 'green', 'blue'];\nconst [first, second, third] = colors;\nlog('First: ' + first + ', Second: ' + second + ', Third: ' + third);\n\nconst [a, , c] = colors;\nlog('\\nSkipping middle: ' + a + ', ' + c);\n\nconst [x, ...rest] = colors;\nlog('First and rest: ' + x + ', ' + JSON.stringify(rest));`,
    output: "Unpacking array elements into variables",
  },
  {
    id: 18,
    category: "Core Fundamentals",
    title: "Destructuring - Objects",
    premium: false,
    code: `log('=== Object Destructuring ===');\nconst user = { name: 'Alice', age: 30, email: 'alice@example.com' };\nconst { name, age } = user;\nlog('Name: ' + name + ', Age: ' + age);\n\nconst { email: userEmail, ...rest } = user;\nlog('Email: ' + userEmail);\nlog('Rest: ' + JSON.stringify(rest));\n\nconst { city = 'Unknown' } = user;\nlog('City (default): ' + city);`,
    output: "Extracting object properties into variables",
  },
  {
    id: 19,
    category: "Core Fundamentals",
    title: "Template Literals",
    premium: false,
    code: `log('=== Template Literals ===');\nconst name = 'World';\nconst num = 42;\n\nlog(\`Hello, \${name}!\`);\nlog(\`Number: \${num}, Squared: \${num * num}\`);\n\nconst multi = \`Line 1\\nLine 2\\nLine 3\`;\nlog('Multi-line:\\n' + multi);\n\nlog(\`Expression: \${5 + 5} = 10\`);`,
    output: "String interpolation and multi-line strings",
  },
  {
    id: 20,
    category: "Core Fundamentals",
    title: "Object Shorthand",
    premium: false,
    code: `log('=== Object Shorthand ===');\nconst name = 'Alice';\nconst age = 30;\nconst city = 'NYC';\n\nconst person = { name, age, city };\nlog('Object: ' + JSON.stringify(person));\n\nconst greet = function() { return 'Hi'; };\nconst obj = {\n  greet,\n  welcome() { return 'Welcome'; }\n};\nlog('greet(): ' + obj.greet());\nlog('welcome(): ' + obj.welcome());`,
    output: "Using shorthand in object literals",
  },

  // 21-30: Objects & Arrays
  {
    id: 21,
    category: "Core Fundamentals",
    title: "Objects - Creating & Accessing",
    premium: false,
    code: `log('=== Creating Objects ===');\nconst obj1 = {};\nconst obj2 = { name: 'Bob', age: 25 };\nconst obj3 = new Object();\n\nobj1.prop = 'value';\nobj1['key'] = 'data';\n\nlog('obj1: ' + JSON.stringify(obj1));\nlog('obj2.name: ' + obj2.name);\nlog('obj2[\\'age\\']: ' + obj2['age']);\nlog('\\n✓ Multiple ways to create and access objects');`,
    output: "Different methods of creating objects",
  },
  {
    id: 22,
    category: "Core Fundamentals",
    title: "Object.keys(), values(), entries()",
    premium: false,
    code: `log('=== Object Methods ===');\nconst user = { name: 'Alice', age: 30, city: 'NYC' };\n\nlog('Keys: ' + JSON.stringify(Object.keys(user)));\nlog('Values: ' + JSON.stringify(Object.values(user)));\nlog('Entries: ' + JSON.stringify(Object.entries(user)));\n\nObject.entries(user).forEach(([key, value]) => {\n  log(\`  \${key}: \${value}\`);\n});`,
    output: "Iterating object keys, values, and entries",
  },
  {
    id: 23,
    category: "Core Fundamentals",
    title: "Object.assign() - Merging",
    premium: false,
    code: `log('=== Object.assign() ===');\nconst obj1 = { a: 1, b: 2 };\nconst obj2 = { b: 20, c: 3 };\nconst obj3 = { c: 30, d: 4 };\n\nconst merged = Object.assign({}, obj1, obj2, obj3);\nlog('Merged: ' + JSON.stringify(merged));\n\nconst target = { x: 1 };\nObject.assign(target, { y: 2, z: 3 });\nlog('Target after assign: ' + JSON.stringify(target));`,
    output: "Combining multiple objects",
  },
  {
    id: 24,
    category: "Core Fundamentals",
    title: "Arrays - Creating & Methods",
    premium: false,
    code: `log('=== Array Creation ===');\nconst arr1 = [1, 2, 3];\nconst arr2 = new Array(5);\nconst arr3 = Array.from('hello');\n\nlog('arr1: ' + JSON.stringify(arr1));\nlog('arr2 length: ' + arr2.length);\nlog('arr3: ' + JSON.stringify(arr3));\n\narr1.push(4);\narr1.unshift(0);\nlog('After push/unshift: ' + JSON.stringify(arr1));`,
    output: "Array creation and basic methods",
  },
  {
    id: 25,
    category: "Core Fundamentals",
    title: "Array Methods - map()",
    premium: false,
    code: `log('=== Array map() ===');\nconst numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(n => n * 2);\nlog('Original: ' + JSON.stringify(numbers));\nlog('Doubled: ' + JSON.stringify(doubled));\n\nconst users = [{name: 'A', age: 20}, {name: 'B', age: 25}];\nconst names = users.map(u => u.name);\nlog('Names: ' + JSON.stringify(names));`,
    output: "Transforming array elements",
  },
  {
    id: 26,
    category: "Core Fundamentals",
    title: "Array Methods - filter()",
    premium: false,
    code: `log('=== Array filter() ===');\nconst numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nconst evens = numbers.filter(n => n % 2 === 0);\nlog('Evens: ' + JSON.stringify(evens));\n\nconst odds = numbers.filter(n => n % 2 !== 0);\nlog('Odds: ' + JSON.stringify(odds));\n\nconst greaterThan5 = numbers.filter(n => n > 5);\nlog('> 5: ' + JSON.stringify(greaterThan5));`,
    output: "Filtering arrays based on conditions",
  },
  {
    id: 27,
    category: "Core Fundamentals",
    title: "Array Methods - reduce()",
    premium: false,
    code: `log('=== Array reduce() ===');\nconst numbers = [1, 2, 3, 4, 5];\n\nconst sum = numbers.reduce((acc, num) => acc + num, 0);\nlog('Sum: ' + sum);\n\nconst product = numbers.reduce((acc, num) => acc * num, 1);\nlog('Product: ' + product);\n\nconst words = ['Hello', ' ', 'World'];\nconst sentence = words.reduce((acc, word) => acc + word, '');\nlog('Sentence: ' + sentence);`,
    output: "Reducing arrays to single values",
  },
  {
    id: 28,
    category: "Core Fundamentals",
    title: "Array Methods - find() & findIndex()",
    premium: false,
    code: `log('=== Array find() & findIndex() ===');\nconst users = [\n  { id: 1, name: 'Alice' },\n  { id: 2, name: 'Bob' },\n  { id: 3, name: 'Charlie' }\n];\n\nconst found = users.find(u => u.name === 'Bob');\nlog('Found: ' + JSON.stringify(found));\n\nconst index = users.findIndex(u => u.id === 2);\nlog('Index: ' + index);\n\nconst notFound = users.find(u => u.id === 99);\nlog('Not found: ' + (notFound === undefined ? 'undefined' : notFound));`,
    output: "Finding elements in arrays",
  },
  {
    id: 29,
    category: "Core Fundamentals",
    title: "Array Methods - includes() & indexOf()",
    premium: false,
    code: `log('=== Array includes() & indexOf() ===');\nconst fruits = ['apple', 'banana', 'orange', 'grape'];\n\nlog('includes(\\'banana\\'): ' + fruits.includes('banana'));\nlog('includes(\\'mango\\'): ' + fruits.includes('mango'));\n\nlog('indexOf(\\'orange\\'): ' + fruits.indexOf('orange'));\nlog('indexOf(\\'kiwi\\'): ' + fruits.indexOf('kiwi'));\n\nconst numbers = [10, 20, 30, 10, 40];\nlog('lastIndexOf(10): ' + numbers.lastIndexOf(10));`,
    output: "Checking array contents",
  },
  {
    id: 30,
    category: "Core Fundamentals",
    title: "Array Methods - some() & every()",
    premium: false,
    code: `log('=== Array some() & every() ===');\nconst numbers = [2, 4, 6, 8, 10];\nconst hasOdd = numbers.some(n => n % 2 !== 0);\nlog('Has odd numbers: ' + hasOdd);\n\nconst allEven = numbers.every(n => n % 2 === 0);\nlog('All even: ' + allEven);\n\nconst scores = [85, 90, 78, 92];\nconst hasFailure = scores.some(s => s < 60);\nlog('Has score < 60: ' + hasFailure);\nconst allPassing = scores.every(s => s >= 70);\nlog('All >= 70: ' + allPassing);`,
    output: "Checking conditions across arrays",
  },

  // 31-40: Control Flow & Operators
  {
    id: 31,
    category: "Core Fundamentals",
    title: "If...Else & Ternary",
    premium: false,
    code: `log('=== If...Else & Ternary ===');\nconst age = 20;\n\nif (age < 13) {\n  log('Child');\n} else if (age < 18) {\n  log('Teen');\n} else if (age < 65) {\n  log('Adult');\n} else {\n  log('Senior');\n}\n\nconst category = age < 18 ? 'Minor' : 'Adult';\nlog('Ternary result: ' + category);\n\nconst status = age >= 18 ? '✓ Can vote' : '❌ Too young';\nlog(status);`,
    output: "Conditional statements and ternary operator",
  },
  {
    id: 32,
    category: "Core Fundamentals",
    title: "Switch Statement",
    premium: false,
    code: `log('=== Switch Statement ===');\nconst day = 3;\nlet dayName;\n\nswitch(day) {\n  case 1:\n    dayName = 'Monday';\n    break;\n  case 2:\n    dayName = 'Tuesday';\n    break;\n  case 3:\n    dayName = 'Wednesday';\n    break;\n  default:\n    dayName = 'Unknown';\n}\n\nlog('Day ' + day + ': ' + dayName);\n\nconst color = 'blue';\nconst colorCode = {\n  'red': '#FF0000',\n  'blue': '#0000FF'\n}[color] || '#000000';\nlog('Color code: ' + colorCode);`,
    output: "Switch statement execution flow",
  },
  {
    id: 33,
    category: "Core Fundamentals",
    title: "Logical Operators - AND, OR, NOT",
    premium: false,
    code: `log('=== Logical Operators ===');\nconst x = 5, y = 10;\n\nlog(x > 0 && y > 0 ? '✓ Both true' : '❌ At least one false');\nlog(x > 10 || y > 5 ? '✓ At least one true' : '❌ Both false');\nlog(!false ? '✓ NOT is true' : '❌ NOT is false');\n\nconst user = { name: 'Alice' };\nconst name = user && user.name ? user.name : 'Guest';\nlog('Name: ' + name);\n\nconst config = undefined || {};\nlog('Config type: ' + typeof config);`,
    output: "Logical operator behavior",
  },
  {
    id: 34,
    category: "Core Fundamentals",
    title: "Nullish Coalescing (??)",
    premium: false,
    code: `log('=== Nullish Coalescing ===');\nconst a = null;\nconst b = undefined;\nconst c = 0;\nconst d = '';\n\nlog('null ?? \\'default\\': ' + (a ?? 'default'));\nlog('undefined ?? \\'default\\': ' + (b ?? 'default'));\nlog('0 ?? \\'default\\': ' + (c ?? 'default'));\nlog('\\'\\'  ?? \\'default\\': ' + (d ?? 'default'));\n\nconst user = { age: null };\nconst age = user.age ?? 18;\nlog('Age (with null): ' + age);`,
    output: "Nullish coalescing vs OR operator",
  },
  {
    id: 35,
    category: "Core Fundamentals",
    title: "Optional Chaining (?.)",
    premium: false,
    code: `log('=== Optional Chaining ===');\nconst user = { profile: { name: 'Alice' } };\nconst emptyUser = {};\n\nlog('user.profile?.name: ' + user.profile?.name);\nlog('emptyUser.profile?.name: ' + emptyUser.profile?.name);\nlog('undefined?.property: ' + (undefined?.property === undefined ? 'undefined' : undefined?.property));\n\nconst data = null;\nlog('data?.value: ' + data?.value);\n\nconst arr = [1, 2, 3];\nlog('arr?.[0]: ' + arr?.[0]);\nlog('null?.[0]: ' + null?.[0]);`,
    output: "Safe property access with optional chaining",
  },
  {
    id: 36,
    category: "Core Fundamentals",
    title: "For Loop",
    premium: false,
    code: `log('=== For Loops ===');\nlog('Regular for loop:');\nfor (let i = 0; i < 5; i++) {\n  log('  i = ' + i);\n}\n\nlog('\\nNested loop (3x3 grid):');\nfor (let i = 0; i < 3; i++) {\n  let row = '';\n  for (let j = 0; j < 3; j++) {\n    row += '█ ';\n  }\n  log('  ' + row);\n}\n\nlog('\\nBreak & Continue:');\nfor (let i = 0; i < 10; i++) {\n  if (i === 3) continue;\n  if (i === 7) break;\n  log('  ' + i);\n}`,
    output: "Different loop variations",
  },
  {
    id: 37,
    category: "Core Fundamentals",
    title: "For...In Loop",
    premium: false,
    code: `log('=== For...In Loop ===');\nconst obj = { name: 'Alice', age: 30, city: 'NYC' };\n\nlog('Iterating object:');\nfor (let key in obj) {\n  log('  ' + key + ': ' + obj[key]);\n}\n\nconst arr = ['a', 'b', 'c'];\nlog('\\nIterating array (not recommended):');\nfor (let index in arr) {\n  log('  ' + index + ': ' + arr[index]);\n}\n\nlog('\\n⚠ for...in includes inherited properties');`,
    output: "Iterating object keys with for...in",
  },
  {
    id: 38,
    category: "Core Fundamentals",
    title: "For...Of Loop",
    premium: false,
    code: `log('=== For...Of Loop ===');\nconst arr = ['apple', 'banana', 'orange'];\n\nlog('For...of on array:');\nfor (const item of arr) {\n  log('  ' + item);\n}\n\nconst str = 'Hello';\nlog('\\nFor...of on string:');\nfor (const char of str) {\n  log('  ' + char);\n}\n\nconst entries = [[1, 'a'], [2, 'b'], [3, 'c']];\nlog('\\nDestructuring in for...of:');\nfor (const [num, letter] of entries) {\n  log('  ' + num + ': ' + letter);\n}`,
    output: "Iterating values with for...of",
  },
  {
    id: 39,
    category: "Core Fundamentals",
    title: "While Loop",
    premium: false,
    code: `log('=== While & Do...While ===');\nlet count = 0;\nlog('While loop:');\nwhile (count < 3) {\n  log('  count = ' + count);\n  count++;\n}\n\nlet x = 0;\nlog('\\nDo...While (executes at least once):');\ndo {\n  log('  x = ' + x);\n  x++;\n} while (x < 2);\n\nlog('\\n✓ Do...while executes body before checking condition');`,
    output: "While and do...while loops",
  },
  {
    id: 40,
    category: "Core Fundamentals",
    title: "Try...Catch - Error Handling",
    premium: false,
    code: `log('=== Try...Catch ===');\nfunction riskyOperation(shouldThrow) {\n  if (shouldThrow) {\n    throw new Error('Something went wrong');\n  }\n  return 'Success';\n}\n\ntry {\n  log(riskyOperation(false));\n} catch (error) {\n  log('Caught: ' + error.message);\n}\n\ntry {\n  riskyOperation(true);\n} catch (error) {\n  log('Error: ' + error.message);\n} finally {\n  log('Cleanup code runs regardless');\n}`,
    output: "Error handling and finally block",
  },

  // 41-50: ES6+ Fundamentals
  {
    id: 41,
    category: "Core Fundamentals",
    title: "Classes - Basics",
    premium: false,
    code: `log('=== ES6 Classes ===');\nclass Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  \n  speak() {\n    return this.name + ' makes a sound';\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    return this.name + ' barks';\n  }\n}\n\nconst dog = new Dog('Buddy');\nlog('Animal: ' + dog.speak());\nlog('Instanceof Dog: ' + (dog instanceof Dog));\nlog('Instanceof Animal: ' + (dog instanceof Animal));`,
    output: "Defining and extending classes",
  },
  {
    id: 42,
    category: "Core Fundamentals",
    title: "Class Getters & Setters",
    premium: false,
    code: `log('=== Getters & Setters ===');\nclass Circle {\n  constructor(radius) {\n    this._radius = radius;\n  }\n  \n  get radius() {\n    return this._radius;\n  }\n  \n  set radius(value) {\n    if (value <= 0) {\n      log('❌ Radius must be positive');\n      return;\n    }\n    this._radius = value;\n  }\n  \n  get area() {\n    return Math.PI * this._radius * this._radius;\n  }\n}\n\nconst circle = new Circle(5);\nlog('Radius: ' + circle.radius);\nlog('Area: ' + circle.area.toFixed(2));\ncircle.radius = 10;\nlog('New area: ' + circle.area.toFixed(2));`,
    output: "Using computed properties",
  },
  {
    id: 43,
    category: "Core Fundamentals",
    title: "Static Methods",
    premium: false,
    code: `log('=== Static Methods ===');\nclass Math2 {\n  static add(a, b) {\n    return a + b;\n  }\n  \n  static multiply(a, b) {\n    return a * b;\n  }\n  \n  static quadratic(a, b, c, x) {\n    return a * x * x + b * x + c;\n  }\n}\n\nlog('add(3, 4): ' + Math2.add(3, 4));\nlog('multiply(5, 6): ' + Math2.multiply(5, 6));\nlog('quadratic(1, 2, 3, 2): ' + Math2.quadratic(1, 2, 3, 2));\n\nlog('\\n✓ Static methods called on class, not instance');`,
    output: "Static methods and properties",
  },
  {
    id: 44,
    category: "Core Fundamentals",
    title: "Symbol Type",
    premium: false,
    code: `log('=== Symbols ===');\nconst sym1 = Symbol('id');\nconst sym2 = Symbol('id');\n\nlog('sym1 === sym2: ' + (sym1 === sym2));\nlog('sym1.toString(): ' + sym1.toString());\nlog('typeof sym1: ' + typeof sym1);\n\nconst obj = {\n  [sym1]: 'value1',\n  [sym2]: 'value2',\n  name: 'Object'\n};\n\nlog('obj[sym1]: ' + obj[sym1]);\nlog('Object.keys(obj): ' + JSON.stringify(Object.keys(obj)));\nlog('\\n✓ Symbols create unique, hidden object keys');`,
    output: "Symbol creation and usage",
  },
  {
    id: 45,
    category: "Core Fundamentals",
    title: "Map & Set - Collections",
    premium: false,
    code: `log('=== Map & Set ===');\nconst map = new Map();\nmap.set('a', 1);\nmap.set('b', 2);\nmap.set('c', 3);\n\nlog('map.get(\\'b\\'): ' + map.get('b'));\nlog('map.size: ' + map.size);\nlog('map.has(\\'a\\'): ' + map.has('a'));\n\nconst set = new Set([1, 2, 2, 3, 3, 3]);\nlog('\\nset size (duplicates removed): ' + set.size);\nlog('set.has(2): ' + set.has(2));\nlog('set values: ' + JSON.stringify(Array.from(set)));`,
    output: "Using Map and Set data structures",
  },
  {
    id: 46,
    category: "Core Fundamentals",
    title: "WeakMap & WeakSet",
    premium: false,
    code: `log('=== WeakMap & WeakSet ===');\nconst weakMap = new WeakMap();\nlet obj1 = { id: 1 };\nweakMap.set(obj1, 'value1');\n\nlog('weakMap.get(obj1): ' + weakMap.get(obj1));\nlog('weakMap.has(obj1): ' + weakMap.has(obj1));\n\nconst weakSet = new WeakSet();\nlet obj2 = { name: 'test' };\nweakSet.add(obj2);\nlog('\\nweakSet.has(obj2): ' + weakSet.has(obj2));\n\nlog('\\n✓ WeakMap/WeakSet hold weak references');\nlog('✓ Allow garbage collection of references');`,
    output: "WeakMap and WeakSet behavior",
  },
  {
    id: 47,
    category: "Core Fundamentals",
    title: "Proxy Object",
    premium: false,
    code: `log('=== Proxy ===');\nconst target = { name: 'original', value: 0 };\n\nconst handler = {\n  get(obj, prop) {\n    log('Getting: ' + prop);\n    return obj[prop];\n  },\n  set(obj, prop, value) {\n    log('Setting ' + prop + ' to ' + value);\n    obj[prop] = value;\n    return true;\n  }\n};\n\nconst proxy = new Proxy(target, handler);\nlog('Reading name:');\nlog(proxy.name);\nlog('\\nSetting value:');\nproxy.value = 42;`,
    output: "Intercepting property access",
  },
  {
    id: 48,
    category: "Core Fundamentals",
    title: "Reflect API",
    premium: false,
    code: `log('=== Reflect API ===');\nconst obj = { name: 'Test', age: 25 };\n\nlog('Reflect.has(obj, \\'name\\'): ' + Reflect.has(obj, 'name'));\nlog('Reflect.get(obj, \\'age\\'): ' + Reflect.get(obj, 'age'));\nReflect.set(obj, 'city', 'NYC');\nlog('After set: ' + JSON.stringify(obj));\n\nlog('Reflect.ownKeys(obj): ' + JSON.stringify(Reflect.ownKeys(obj)));\n\nconst target = {};\nconst result = Reflect.defineProperty(target, 'prop', {\n  value: 'defined',\n  writable: false\n});\nlog('\\ndefineProperty success: ' + result);`,
    output: "Using Reflect for meta-operations",
  },
  {
    id: 49,
    category: "Core Fundamentals",
    title: "Generators - Basic",
    premium: false,
    code: `log('=== Generators ===');\nfunction* simpleGenerator() {\n  yield 'First';\n  yield 'Second';\n  yield 'Third';\n}\n\nconst gen = simpleGenerator();\nlog(gen.next());\nlog(gen.next());\nlog(gen.next());\nlog(gen.next());\n\nfunction* countdown(n) {\n  while (n > 0) {\n    yield n;\n    n--;\n  }\n}\n\nlog('\\nCountdown from 3:');\nfor (const num of countdown(3)) {\n  log('  ' + num);\n}`,
    output: "Generator functions and iteration",
  },
  {
    id: 50,
    category: "Core Fundamentals",
    title: "BigInt Type",
    premium: false,
    code: `log('=== BigInt ===');\nconst big1 = BigInt(9007199254740991);\nconst big2 = 9007199254740992n;\nconst big3 = BigInt('999999999999999999999');\n\nlog('big1: ' + big1);\nlog('big2: ' + big2);\nlog('big1 === big2: ' + (big1 === big2));\nlog('big1 + big2: ' + (big1 + big2));\nlog('\\nbig3 (300 digits): ' + big3);\n\nconst result = 5n ** 10n;\nlog('5n ** 10n: ' + result);`,
    output: "Working with arbitrary precision integers",
  },

  // ==========================================
  // DOM MANIPULATION (51-100) - PREMIUM
  // ==========================================

  {
    id: 51,
    category: "DOM Manipulation",
    title: "Selecting Elements - getElementById",
    premium: true,
    code: `log('=== getElementById ===');\nconst demoDiv = document.createElement('div');\ndemoDiv.id = 'demo';\ndemoDiv.textContent = 'Hello World';\nvisualArea.appendChild(demoDiv);\n\nconst selected = document.getElementById('demo');\nlog('Found: ' + (selected !== null ? '✓ Yes' : '❌ No'));\nlog('Text: ' + selected.textContent);`,
    output: "Getting element by ID",
  },

  {
    id: 52,
    category: "DOM Manipulation",
    title: "Selecting Elements - querySelector",
    premium: true,
    code: `log('=== querySelector ===');\nconst wrapper = document.createElement('div');\nwrapper.innerHTML = '<p class="para">First</p><p class="para">Second</p>';\nvisualArea.appendChild(wrapper);\n\nconst first = wrapper.querySelector('.para');\nlog('First .para: ' + first.textContent);\n\nconst second = wrapper.querySelector('p:nth-child(2)');\nlog('Second p: ' + second.textContent);\n\nconst notFound = wrapper.querySelector('.nonexistent');\nlog('Non-existent: ' + (notFound === null ? 'null' : notFound));`,
    output: "CSS selector queries",
  },

  {
    id: 53,
    category: "DOM Manipulation",
    title: "Selecting Elements - querySelectorAll",
    premium: true,
    code: `log('=== querySelectorAll ===');\nconst container = document.createElement('div');\nfor(let i = 1; i <= 3; i++) {\n  const p = document.createElement('p');\n  p.className = 'item';\n  p.textContent = 'Item ' + i;\n  container.appendChild(p);\n}\nvisualArea.appendChild(container);\n\nconst items = container.querySelectorAll('.item');\nlog('Total items: ' + items.length);\nitems.forEach((item, index) => {\n  log('  Item ' + (index + 1) + ': ' + item.textContent);\n});`,
    output: "Getting multiple elements",
  },

  {
    id: 54,
    category: "DOM Manipulation",
    title: "Creating Elements - createElement",
    premium: true,
    code: `log('=== createElement ===');\nconst container = document.createElement('div');\n\nconst heading = document.createElement('h3');\nheading.textContent = 'Dynamic Element';\nheading.style.color = '#22d3ee';\ncontainer.appendChild(heading);\n\nconst paragraph = document.createElement('p');\nparagraph.innerHTML = 'This was <strong>created</strong> dynamically';\ncontainer.appendChild(paragraph);\n\nvisualArea.appendChild(container);\nlog('✓ Elements created and appended');`,
    output: "Dynamically creating DOM elements",
  },

  {
    id: 55,
    category: "DOM Manipulation",
    title: "innerHTML vs textContent",
    premium: true,
    code: `log('=== innerHTML vs textContent ===');\nconst div1 = document.createElement('div');\nconst div2 = document.createElement('div');\n\nconst html = '<p>Paragraph</p><strong>Bold</strong>';\ndiv1.innerHTML = html;\ndiv2.textContent = html;\n\nvisualArea.appendChild(div1);\nvisualArea.appendChild(document.createElement('hr'));\nvisualArea.appendChild(div2);\n\nlog('innerHTML parses HTML tags');\nlog('textContent treats as plain text');`,
    output: "Difference between innerHTML and textContent",
  },

  {
    id: 56,
    category: "DOM Manipulation",
    title: "addClass & removeClass",
    premium: true,
    code: `log('=== classList Methods ===');\nconst div = document.createElement('div');\ndiv.textContent = 'Styled Element';\ndiv.style.padding = '10px';\n\nvisualArea.appendChild(div);\n\ndiv.classList.add('highlight');\nlog('Added class: ' + (div.classList.contains('highlight') ? '✓' : '❌'));\n\ndiv.classList.remove('highlight');\nlog('Removed class: ' + (div.classList.contains('highlight') ? '❌' : '✓'));\n\ndiv.classList.toggle('active');\nlog('Toggled (now active): ' + div.classList.contains('active'));\ndiv.classList.toggle('active');\nlog('Toggled (now inactive): ' + !div.classList.contains('active'));`,
    output: "Manipulating CSS classes",
  },

  {
    id: 57,
    category: "DOM Manipulation",
    title: "Style Properties",
    premium: true,
    code: `log('=== Setting Inline Styles ===');\nconst box = document.createElement('div');\nbox.textContent = 'Styled Box';\nbox.style.backgroundColor = '#3b82f6';\nbox.style.color = 'white';\nbox.style.padding = '20px';\nbox.style.borderRadius = '8px';\nbox.style.textAlign = 'center';\nbox.style.marginBottom = '10px';\n\nvisualArea.appendChild(box);\n\nlog('Background: ' + box.style.backgroundColor);\nlog('Color: ' + box.style.color);\nlog('✓ Styles applied programmatically');`,
    output: "Inline style manipulation",
  },

  {
    id: 58,
    category: "DOM Manipulation",
    title: "Attributes - Getting & Setting",
    premium: true,
    code: `log('=== Element Attributes ===');\nconst link = document.createElement('a');\nlink.setAttribute('href', '#');\nlink.setAttribute('title', 'Click me');\nlink.setAttribute('data-id', '123');\nlink.textContent = 'Link';\n\nvisualArea.appendChild(link);\n\nlog('href: ' + link.getAttribute('href'));\nlog('title: ' + link.getAttribute('title'));\nlog('data-id: ' + link.getAttribute('data-id'));\nlog('hasAttribute(title): ' + link.hasAttribute('title'));\n\nlink.removeAttribute('title');\nlog('After remove: ' + link.getAttribute('title'));`,
    output: "Working with HTML attributes",
  },

  {
    id: 59,
    category: "DOM Manipulation",
    title: "Data Attributes (data-*)",
    premium: true,
    code: `log('=== Data Attributes ===');\nconst card = document.createElement('div');\ncard.dataset.userId = '42';\ncard.dataset.userName = 'Alice';\ncard.dataset.role = 'admin';\ncard.textContent = 'User Card';\ncard.style.padding = '15px';\ncard.style.border = '1px solid #ccc';\n\nvisualArea.appendChild(card);\n\nlog('userId: ' + card.dataset.userId);\nlog('userName: ' + card.dataset.userName);\nlog('role: ' + card.dataset.role);\nlog('All data: ' + JSON.stringify(card.dataset));`,
    output: "Using HTML5 data attributes",
  },

  {
    id: 60,
    category: "DOM Manipulation",
    title: "Parent, Child & Sibling Nodes",
    premium: true,
    code: `log('=== Node Relationships ===');\nconst parent = document.createElement('div');\nconst child1 = document.createElement('p');\nconst child2 = document.createElement('p');\n\nchild1.textContent = 'Child 1';\nchild2.textContent = 'Child 2';\nparent.appendChild(child1);\nparent.appendChild(child2);\n\nvisualArea.appendChild(parent);\n\nlog('child1.parentElement: ' + (child1.parentElement === parent ? 'parent' : 'other'));\nlog('parent.children.length: ' + parent.children.length);\nlog('child1.nextElementSibling: ' + child1.nextElementSibling.textContent);\nlog('child2.previousElementSibling: ' + child2.previousElementSibling.textContent);`,
    output: "Navigating DOM tree",
  },

  {
    id: 61,
    category: "DOM Manipulation",
    title: "appendChild & insertBefore",
    premium: true,
    code: `log('=== appendChild & insertBefore ===');\nconst list = document.createElement('ul');\nconst li1 = document.createElement('li');\nli1.textContent = 'Item 1';\nconst li2 = document.createElement('li');\nli2.textContent = 'Item 2';\n\nlist.appendChild(li1);\nlist.appendChild(li2);\n\nconst li3 = document.createElement('li');\nli3.textContent = 'Inserted Item (between 1 & 2)';\nlist.insertBefore(li3, li2);\n\nvisualArea.appendChild(list);\nlog('List created with 3 items');`,
    output: "Inserting elements",
  },

  {
    id: 62,
    category: "DOM Manipulation",
    title: "removeChild & remove",
    premium: true,
    code: `log('=== removeChild & remove ===');\nconst container = document.createElement('div');\nconst item1 = document.createElement('p');\nitem1.textContent = 'To Remove (removeChild)';\nconst item2 = document.createElement('p');\nitem2.textContent = 'To Remove (remove)';\nconst item3 = document.createElement('p');\nitem3.textContent = 'Keep this';\n\ncontainer.appendChild(item1);\ncontainer.appendChild(item2);\ncontainer.appendChild(item3);\n\ncontainer.removeChild(item1);\nitem2.remove();\n\nvisualArea.appendChild(container);\nlog('✓ Items removed, one item remains');`,
    output: "Removing elements",
  },

  {
    id: 63,
    category: "DOM Manipulation",
    title: "cloneNode & insertAdjacentHTML",
    premium: true,
    code: `log('=== cloneNode & insertAdjacentHTML ===');\nconst original = document.createElement('div');\noriginal.id = 'original';\noriginal.textContent = 'Original';\noriginal.style.padding = '10px';\noriginal.style.marginBottom = '10px';\n\nconst clone = original.cloneNode(true);\nclone.id = 'clone';\nclone.textContent = 'Cloned';\n\nvisualArea.appendChild(original);\nvisualArea.appendChild(clone);\n\nconst ref = document.createElement('div');\nref.textContent = 'Reference';\nref.style.marginBottom = '10px';\nvisualArea.appendChild(ref);\n\nref.insertAdjacentHTML('afterend', '<div style=\"padding: 10px; background: #0ea5e9; color: white;\">Inserted HTML</div>');\nlog('✓ Clone created and HTML inserted');`,
    output: "Cloning and inserting HTML",
  },

  {
    id: 64,
    category: "DOM Manipulation",
    title: "Event Listeners - click",
    premium: true,
    code: `log('=== Event Listeners ===');\nconst btn = document.createElement('button');\nbtn.textContent = 'Click Me';\nbtn.style.padding = '10px 20px';\nbtn.style.backgroundColor = '#22d3ee';\nbtn.style.color = 'white';\nbtn.style.border = 'none';\nbtn.style.borderRadius = '4px';\nbtn.style.cursor = 'pointer';\nbtn.style.marginBottom = '10px';\n\nlet clickCount = 0;\nbtn.addEventListener('click', function() {\n  clickCount++;\n  log('Button clicked ' + clickCount + ' time(s)');\n});\n\nbtn.addEventListener('mouseenter', () => {\n  btn.style.opacity = '0.8';\n});\n\nbtn.addEventListener('mouseleave', () => {\n  btn.style.opacity = '1';\n});\n\nvisualArea.appendChild(btn);`,
    output: "Attaching event listeners",
  },

  {
    id: 65,
    category: "DOM Manipulation",
    title: "Event Delegation",
    premium: true,
    code: `log('=== Event Delegation ===');\nconst list = document.createElement('ul');\nfor(let i = 1; i <= 3; i++) {\n  const li = document.createElement('li');\n  li.textContent = 'Item ' + i;\n  li.style.padding = '8px';\n  li.style.cursor = 'pointer';\n  li.style.marginBottom = '5px';\n  list.appendChild(li);\n}\n\nlist.addEventListener('click', (e) => {\n  if(e.target.tagName === 'LI') {\n    log('Clicked: ' + e.target.textContent);\n  }\n});\n\nvisualArea.appendChild(list);\nlog('✓ Click any item');`,
    output: "Event bubbling and delegation",
  },

  {
    id: 66,
    category: "DOM Manipulation",
    title: "Input Events & Form Handling",
    premium: true,
    code: `log('=== Input Events ===');\nconst input = document.createElement('input');\ninput.type = 'text';\ninput.placeholder = 'Type something...';\ninput.style.padding = '8px';\ninput.style.marginBottom = '10px';\ninput.style.width = '100%';\n\nconst output = document.createElement('div');\noutput.textContent = 'You typed: ';\noutput.style.padding = '10px';\noutput.style.backgroundColor = '#1e293b';\noutput.style.borderRadius = '4px';\n\ninput.addEventListener('input', (e) => {\n  output.textContent = 'You typed: ' + e.target.value;\n});\n\nvisualArea.appendChild(input);\nvisualArea.appendChild(output);\nlog('✓ Real-time input handling');`,
    output: "Handling input changes",
  },

  {
    id: 67,
    category: "DOM Manipulation",
    title: "Form Submission & Validation",
    premium: true,
    code: `log('=== Form Submission ===');\nconst form = document.createElement('form');\nconst nameInput = document.createElement('input');\nnameInput.type = 'text';\nnameInput.name = 'name';\nnameInput.placeholder = 'Enter name';\nnameInput.style.padding = '8px';\nnameInput.style.marginBottom = '10px';\nnameInput.style.display = 'block';\n\nconst btn = document.createElement('button');\nbtn.type = 'submit';\nbtn.textContent = 'Submit';\nbtn.style.padding = '8px 16px';\nform.appendChild(nameInput);\nform.appendChild(btn);\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  log('Submitted: ' + nameInput.value);\n  nameInput.value = '';\n});\n\nvisualArea.appendChild(form);`,
    output: "Form submission handling",
  },

  {
    id: 68,
    category: "DOM Manipulation",
    title: "getBoundingClientRect()",
    premium: true,
    code: `log('=== getBoundingClientRect() ===');\nconst box = document.createElement('div');\nbox.textContent = 'Positioned Box';\nbox.style.padding = '20px';\nbox.style.backgroundColor = '#3b82f6';\nbox.style.color = 'white';\nbox.style.width = '200px';\nbox.style.position = 'relative';\n\nvisualArea.appendChild(box);\n\nconst rect = box.getBoundingClientRect();\nlog('Width: ' + Math.round(rect.width));\nlog('Height: ' + Math.round(rect.height));\nlog('Top: ' + Math.round(rect.top));\nlog('Left: ' + Math.round(rect.left));\nlog('Right: ' + Math.round(rect.right));\nlog('Bottom: ' + Math.round(rect.bottom));`,
    output: "Getting element position and size",
  },

  {
    id: 69,
    category: "DOM Manipulation",
    title: "scrollIntoView() & scroll positioning",
    premium: true,
    code: `log('=== scrollIntoView ===');\nconst container = document.createElement('div');\ncontainer.style.maxHeight = '150px';\ncontainer.style.overflow = 'auto';\ncontainer.style.border = '1px solid #ccc';\ncontainer.style.marginBottom = '10px';\n\nfor(let i = 1; i <= 10; i++) {\n  const p = document.createElement('p');\n  p.textContent = 'Item ' + i;\n  p.style.padding = '10px';\n  container.appendChild(p);\n}\n\nconst target = container.children[7];\nvisualArea.appendChild(container);\n\nconst btn = document.createElement('button');\nbtn.textContent = 'Scroll to Item 8';\nbtn.onclick = () => target.scrollIntoView({ behavior: 'smooth', block: 'start' });\nvisualArea.appendChild(btn);`,
    output: "Scrolling to specific elements",
  },

  {
    id: 70,
    category: "DOM Manipulation",
    title: "IntersectionObserver API",
    premium: true,
    code: `log('=== IntersectionObserver ===');\nconst observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if(entry.isIntersecting) {\n      entry.target.style.backgroundColor = '#4ade80';\n      log('Box ' + entry.target.textContent + ' is visible');\n    } else {\n      entry.target.style.backgroundColor = '#ef4444';\n    }\n  });\n}, { threshold: 0.5 });\n\nconst boxes = [];\nfor(let i = 1; i <= 3; i++) {\n  const box = document.createElement('div');\n  box.textContent = i;\n  box.style.width = '100%';\n  box.style.padding = '40px';\n  box.style.marginBottom = '200px';\n  box.style.backgroundColor = '#ef4444';\n  box.style.textAlign = 'center';\n  box.style.fontWeight = 'bold';\n  visualArea.appendChild(box);\n  observer.observe(box);\n  boxes.push(box);\n}`,
    output: "Observing element visibility",
  },

  {
    id: 71,
    category: "DOM Manipulation",
    title: "MutationObserver",
    premium: true,
    code: `log('=== MutationObserver ===');\nconst target = document.createElement('div');\ntarget.textContent = 'Original';\ntarget.style.padding = '10px';\ntarget.style.marginBottom = '10px';\n\nconst observer = new MutationObserver((mutations) => {\n  mutations.forEach(mutation => {\n    if(mutation.type === 'childList') {\n      log('✓ Child nodes modified');\n    }\n    if(mutation.type === 'attributes') {\n      log('✓ Attribute changed: ' + mutation.attributeName);\n    }\n    if(mutation.type === 'characterData') {\n      log('✓ Text content changed');\n    }\n  });\n});\n\nobserver.observe(target, {\n  childList: true,\n  attributes: true,\n  characterData: true,\n  subtree: true\n});\n\nvisualArea.appendChild(target);\n\nsetTimeout(() => {\n  target.textContent = 'Modified';\n}, 100);`,
    output: "Watching for DOM changes",
  },

  {
    id: 72,
    category: "DOM Manipulation",
    title: "ResizeObserver",
    premium: true,
    code: `log('=== ResizeObserver ===');\nconst box = document.createElement('div');\nbox.textContent = 'Resize Me';\nbox.style.width = '200px';\nbox.style.height = '100px';\nbox.style.backgroundColor = '#3b82f6';\nbox.style.color = 'white';\nbox.style.padding = '10px';\nbox.style.resize = 'both';\nbox.style.overflow = 'auto';\n\nconst observer = new ResizeObserver((entries) => {\n  entries.forEach(entry => {\n    log('Width: ' + Math.round(entry.contentRect.width) + ', Height: ' + Math.round(entry.contentRect.height));\n  });\n});\n\nobserver.observe(box);\nvisualArea.appendChild(box);`,
    output: "Observing element resize",
  },

  {
    id: 73,
    category: "DOM Manipulation",
    title: "Template Element",
    premium: true,
    code: `log('=== Template Element ===');\nconst template = document.createElement('template');\ntemplate.innerHTML = '<div style=\"padding: 10px; background: #0ea5e9; color: white; border-radius: 4px; margin-bottom: 5px;\"><strong>Name:</strong> <span class=\"name\"></span></div>';\n\nconst data = [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}];\n\ndata.forEach(item => {\n  const clone = template.content.cloneNode(true);\n  clone.querySelector('.name').textContent = item.name;\n  visualArea.appendChild(clone);\n});\n\nlog('✓ Template cloned 3 times');`,
    output: "Using template elements for reusable markup",
  },

  {
    id: 74,
    category: "DOM Manipulation",
    title: "Shadow DOM - Encapsulation",
    premium: true,
    code: `log('=== Shadow DOM ===');\nconst host = document.createElement('div');\nhost.style.marginBottom = '10px';\nvisualArea.appendChild(host);\n\nconst shadow = host.attachShadow({ mode: 'open' });\nconst style = document.createElement('style');\nstyle.textContent = 'div { background: #6366f1; color: white; padding: 10px; border-radius: 4px; }';\nshadow.appendChild(style);\n\nconst content = document.createElement('div');\ncontent.textContent = 'Shadow DOM Content (Encapsulated)';\nshadow.appendChild(content);\n\nlog('✓ Shadow DOM created with encapsulated styles');`,
    output: "Component encapsulation with Shadow DOM",
  },

  {
    id: 75,
    category: "DOM Manipulation",
    title: "Custom Elements",
    premium: true,
    code: `log('=== Custom Elements ===');\nclass MyButton extends HTMLElement {\n  connectedCallback() {\n    this.style.padding = '10px 20px';\n    this.style.backgroundColor = '#f59e0b';\n    this.style.color = 'white';\n    this.style.border = 'none';\n    this.style.borderRadius = '4px';\n    this.style.cursor = 'pointer';\n    this.style.marginBottom = '10px';\n    \n    this.addEventListener('click', () => {\n      log('Custom button clicked!');\n    });\n  }\n}\n\ncustomElements.define('my-button', MyButton);\n\nconst btn = document.createElement('my-button');\nbtn.textContent = 'Custom Element';\nvisualArea.appendChild(btn);`,
    output: "Creating custom HTML elements",
  },

  {
    id: 76,
    category: "DOM Manipulation",
    title: "fullscreen API",
    premium: true,
    code: `log('=== Fullscreen API ===');\nconst box = document.createElement('div');\nbox.textContent = 'Fullscreen Box';\nbox.style.padding = '40px';\nbox.style.backgroundColor = '#1e293b';\nbox.style.color = 'white';\nbox.style.textAlign = 'center';\nbox.style.cursor = 'pointer';\nbox.style.marginBottom = '10px';\n\nbox.onclick = async () => {\n  try {\n    if (!document.fullscreenElement) {\n      await box.requestFullscreen();\n      log('✓ Entering fullscreen');\n    } else {\n      await document.exitFullscreen();\n      log('✓ Exiting fullscreen');\n    }\n  } catch(err) {\n    log('❌ ' + err.message);\n  }\n};\n\nvisualArea.appendChild(box);`,
    output: "Fullscreen mode control",
  },

  {
    id: 77,
    category: "DOM Manipulation",
    title: "Pointer Lock API",
    premium: true,
    code: `log('=== Pointer Lock API ===');\nconst canvas = document.createElement('div');\ncanvas.textContent = 'Click to lock pointer';\ncanvas.style.width = '100%';\ncanvas.style.height = '200px';\ncanvas.style.backgroundColor = '#0ea5e9';\ncanvas.style.color = 'white';\ncanvas.style.display = 'flex';\ncanvas.style.alignItems = 'center';\ncanvas.style.justifyContent = 'center';\ncanvas.style.cursor = 'pointer';\ncanvas.style.borderRadius = '4px';\ncanvas.style.marginBottom = '10px';\n\ncanvas.addEventListener('click', () => {\n  canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock;\n  canvas.requestPointerLock();\n  log('✓ Pointer locked (click again to unlock)');\n});\n\nvisualArea.appendChild(canvas);`,
    output: "Locking mouse pointer for games",
  },

  {
    id: 78,
    category: "DOM Manipulation",
    title: "vibration API",
    premium: true,
    code: `log('=== Vibration API ===');\nconst btn = document.createElement('button');\nbtn.textContent = 'Vibrate';\nbtn.style.padding = '10px 20px';\nbtn.style.marginBottom = '10px';\nbtn.style.marginRight = '10px';\n\nconst patterns = {\n  'Single': 100,\n  'Pulse': [100, 100, 100],\n  'Rhythm': [100, 50, 200, 50, 100],\n  'Stop': 0\n};\n\nfor(const [name, pattern] of Object.entries(patterns)) {\n  const b = document.createElement('button');\n  b.textContent = name;\n  b.style.padding = '8px 16px';\n  b.style.marginRight = '8px';\n  b.style.marginBottom = '10px';\n  b.onclick = () => {\n    if(navigator.vibrate) {\n      navigator.vibrate(pattern);\n      log('✓ Vibrating: ' + name);\n    } else {\n      log('❌ Vibration API not supported');\n    }\n  };\n  visualArea.appendChild(b);\n}`,
    output: "Device vibration patterns",
  },

  {
    id: 79,
    category: "DOM Manipulation",
    title: "Drag and Drop API",
    premium: true,
    code: `log('=== Drag and Drop ===');\nconst draggable = document.createElement('div');\ndraggable.textContent = 'Drag Me';\ndraggable.draggable = true;\ndraggable.style.padding = '10px 20px';\ndraggable.style.backgroundColor = '#f59e0b';\ndraggable.style.color = 'white';\ndraggable.style.cursor = 'grab';\ndraggable.style.marginBottom = '10px';\n\nconst dropZone = document.createElement('div');\ndropZone.textContent = 'Drop Here';\ndropZone.style.padding = '40px';\ndropZone.style.border = '2px dashed #22d3ee';\ndropZone.style.textAlign = 'center';\ndropZone.style.minHeight = '100px';\n\ndraggable.addEventListener('dragstart', () => log('Drag started'));\ndropZone.addEventListener('dragover', (e) => e.preventDefault());\ndropZone.addEventListener('drop', () => {\n  log('✓ Dropped');\n  dropZone.style.backgroundColor = '#4ade80';\n});\n\nvisualArea.appendChild(draggable);\nvisualArea.appendChild(dropZone);`,
    output: "Drag and drop file/element handling",
  },

  {
    id: 80,
    category: "DOM Manipulation",
    title: "Clipboard API",
    premium: true,
    code: `log('=== Clipboard API ===');\nconst text = 'Copied to clipboard!';\nconst btn = document.createElement('button');\nbtn.textContent = 'Copy Text';\nbtn.style.padding = '10px 20px';\nbtn.style.marginRight = '10px';\nbtn.style.marginBottom = '10px';\n\nbtn.onclick = async () => {\n  try {\n    await navigator.clipboard.writeText(text);\n    log('✓ Text copied: ' + text);\n  } catch(err) {\n    log('❌ Copy failed: ' + err);\n  }\n};\n\nconst pasteBtn = document.createElement('button');\npastBtn.textContent = 'Paste Text';\npastBtn.style.padding = '10px 20px';\npastBtn.style.marginBottom = '10px';\n\npastBtn.onclick = async () => {\n  try {\n    const clipboardText = await navigator.clipboard.readText();\n    log('Pasted: ' + clipboardText);\n  } catch(err) {\n    log('❌ Paste failed: ' + err);\n  }\n};\n\nvisualArea.appendChild(btn);\nvisualArea.appendChild(pasteBtn);`,
    output: "Reading and writing clipboard",
  },

  {
    id: 81,
    category: "DOM Manipulation",
    title: "Web Storage - localStorage",
    premium: true,
    code: `log('=== localStorage ===');\nlocalStorage.setItem('user', 'Alice');\nlocalStorage.setItem('theme', 'dark');\nlocalStorage.setItem('counter', '42');\n\nlog('user: ' + localStorage.getItem('user'));\nlog('theme: ' + localStorage.getItem('theme'));\nlog('All keys: ' + Object.keys(localStorage).slice(-3).join(', '));\nlog('\\nSize: ' + Object.keys(localStorage).length + ' items');\n\nconst hasFav = localStorage.getItem('favorite');\nlog('Has favorite: ' + (hasFav !== null ? '✓ Yes' : '❌ No'));\n\nlocalStorage.removeItem('counter');\nlog('After remove: ' + (localStorage.getItem('counter') === null ? '✓ Removed' : '❌ Still exists'));`,
    output: "Persistent client-side storage",
  },

  {
    id: 82,
    category: "DOM Manipulation",
    title: "Web Storage - sessionStorage",
    premium: true,
    code: `log('=== sessionStorage ===');\nsessionStorage.setItem('sessionId', 'xyz123');\nsessionStorage.setItem('tempData', JSON.stringify({a: 1, b: 2}));\n\nlog('sessionId: ' + sessionStorage.getItem('sessionId'));\n\nconst data = JSON.parse(sessionStorage.getItem('tempData'));\nlog('tempData parsed: ' + JSON.stringify(data));\n\nlog('sessionStorage length: ' + sessionStorage.length);\nlog('\\n✓ Cleared when tab closes');\nlog('✓ Not shared between tabs');`,
    output: "Session-only storage",
  },

  {
    id: 83,
    category: "DOM Manipulation",
    title: "IndexedDB - Opening Database",
    premium: true,
    code: `log('=== IndexedDB ===');\nconst request = indexedDB.open('myDB', 1);\n\nrequest.onerror = () => log('❌ DB open failed');\nrequest.onsuccess = () => {\n  const db = request.result;\n  log('✓ Database opened');\n  log('DB name: ' + db.name);\n};\n\nrequest.onupgradeneeded = (e) => {\n  const db = e.target.result;\n  if(!db.objectStoreNames.contains('users')) {\n    db.createObjectStore('users', { keyPath: 'id' });\n    log('✓ Object store created');\n  }\n};`,
    output: "Opening and creating IndexedDB",
  },

  {
    id: 84,
    category: "DOM Manipulation",
    title: "Service Workers - Registration",
    premium: true,
    code: `log('=== Service Workers ===');\nif('serviceWorker' in navigator) {\n  log('✓ Service Worker supported');\n  \n  navigator.serviceWorker.register('/sw.js')\n    .then(reg => {\n      log('✓ Service Worker registered');\n      log('Scope: ' + reg.scope);\n    })\n    .catch(err => {\n      log('❌ Registration failed: ' + err);\n    });\n  \n  navigator.serviceWorker.getRegistrations()\n    .then(regs => {\n      log('Total registrations: ' + regs.length);\n    });\n} else {\n  log('❌ Service Worker not supported');\n}`,
    output: "Service Worker management",
  },

  {
    id: 85,
    category: "DOM Manipulation",
    title: "Performance API - Timing",
    premium: true,
    code: `log('=== Performance API ===');\nconst perf = performance.now();\nlet sum = 0;\nfor(let i = 0; i < 1000000; i++) {\n  sum += i;\n}\nconst duration = performance.now() - perf;\n\nlog('Loop duration: ' + duration.toFixed(2) + ' ms');\n\nconst timing = performance.timing;\nlog('DOM Content Loaded: ' + (timing.domContentLoadedEventEnd - timing.navigationStart) + ' ms');\nlog('Page Load: ' + (timing.loadEventEnd - timing.navigationStart) + ' ms');\n\nconst entries = performance.getEntries();\nlog('Performance entries: ' + entries.length);`,
    output: "Measuring performance metrics",
  },

  {
    id: 86,
    category: "DOM Manipulation",
    title: "Geolocation API",
    premium: true,
    code: `log('=== Geolocation API ===');\nif('geolocation' in navigator) {\n  log('✓ Geolocation supported');\n  \n  const btn = document.createElement('button');\n  btn.textContent = 'Get Location';\n  btn.style.padding = '10px 20px';\n  btn.onclick = () => {\n    navigator.geolocation.getCurrentPosition(\n      (position) => {\n        log('Latitude: ' + position.coords.latitude.toFixed(4));\n        log('Longitude: ' + position.coords.longitude.toFixed(4));\n        log('Accuracy: ' + position.coords.accuracy.toFixed(0) + ' m');\n      },\n      (error) => {\n        log('❌ ' + error.message);\n      }\n    );\n  };\n  visualArea.appendChild(btn);\n} else {\n  log('❌ Geolocation not supported');\n}`,
    output: "Getting user location",
  },

  {
    id: 87,
    category: "DOM Manipulation",
    title: "Notification API",
    premium: true,
    code: `log('=== Notification API ===');\nif('Notification' in window) {\n  log('✓ Notifications supported');\n  \n  const btn = document.createElement('button');\n  btn.textContent = 'Send Notification';\n  btn.style.padding = '10px 20px';\n  \n  btn.onclick = async () => {\n    if(Notification.permission === 'granted') {\n      new Notification('Hello!', {\n        body: 'This is a notification',\n        icon: 'data:image/svg+xml,<svg>...</svg>'\n      });\n      log('✓ Notification sent');\n    } else if(Notification.permission !== 'denied') {\n      const perm = await Notification.requestPermission();\n      if(perm === 'granted') {\n        new Notification('Permission granted!');\n      }\n    }\n  };\n  visualArea.appendChild(btn);\n} else {\n  log('❌ Notifications not supported');\n}`,
    output: "Sending desktop notifications",
  },

  {
    id: 88,
    category: "DOM Manipulation",
    title: "Battery Status API",
    premium: true,
    code: `log('=== Battery Status API ===');\nif('getBattery' in navigator) {\n  navigator.getBattery().then(battery => {\n    log('Battery level: ' + (battery.level * 100).toFixed(0) + '%');\n    log('Charging: ' + (battery.charging ? '✓ Yes' : '❌ No'));\n    \n    battery.addEventListener('levelchange', () => {\n      log('Level changed to: ' + (battery.level * 100).toFixed(0) + '%');\n    });\n  });\n} else if('BatteryManager' in window) {\n  log('Battery API available but deprecated');\n} else {\n  log('❌ Battery API not supported');\n}`,
    output: "Device battery information",
  },

  {
    id: 89,
    category: "DOM Manipulation",
    title: "MediaDevices - Camera & Microphone",
    premium: true,
    code: `log('=== Media Devices ===');\nif('mediaDevices' in navigator) {\n  const btn = document.createElement('button');\n  btn.textContent = 'Request Camera';\n  btn.style.padding = '10px 20px';\n  \n  btn.onclick = async () => {\n    try {\n      const stream = await navigator.mediaDevices.getUserMedia({\n        video: true,\n        audio: false\n      });\n      log('✓ Camera access granted');\n      log('Video tracks: ' + stream.getVideoTracks().length);\n      stream.getTracks().forEach(t => t.stop());\n    } catch(err) {\n      log('❌ ' + err.name + ': ' + err.message);\n    }\n  };\n  visualArea.appendChild(btn);\n} else {\n  log('❌ MediaDevices not supported');\n}`,
    output: "Accessing camera and microphone",
  },

  {
    id: 90,
    category: "DOM Manipulation",
    title: "FileReader API",
    premium: true,
    code: `log('=== FileReader API ===');\nconst input = document.createElement('input');\ninput.type = 'file';\ninput.style.marginBottom = '10px';\n\nconst output = document.createElement('div');\noutput.style.padding = '10px';\noutput.style.backgroundColor = '#1e293b';\noutput.style.borderRadius = '4px';\noutput.style.maxHeight = '150px';\noutput.style.overflow = 'auto';\n\ninput.addEventListener('change', (e) => {\n  const file = e.target.files[0];\n  const reader = new FileReader();\n  \n  reader.onload = (event) => {\n    log('File: ' + file.name);\n    log('Size: ' + (file.size / 1024).toFixed(2) + ' KB');\n    log('Type: ' + file.type);\n    output.textContent = event.target.result.slice(0, 200);\n  };\n  \n  reader.readAsText(file);\n});\n\nvisualArea.appendChild(input);\nvisualArea.appendChild(output);`,
    output: "Reading file contents",
  },

  {
    id: 91,
    category: "DOM Manipulation",
    title: "Canvas - Basic Drawing",
    premium: true,
    code: `log('=== Canvas API ===');\nconst canvas = document.createElement('canvas');\ncanvas.width = 300;\ncanvas.height = 150;\ncanvas.style.border = '1px solid #ccc';\n\nconst ctx = canvas.getContext('2d');\nctx.fillStyle = '#3b82f6';\nctx.fillRect(10, 10, 100, 80);\n\nctx.fillStyle = '#f59e0b';\nctx.beginPath();\nctx.arc(200, 50, 40, 0, Math.PI * 2);\nctx.fill();\n\nctx.fillStyle = '#white';\nctx.font = '16px Arial';\nctx.fillText('Canvas Drawing', 10, 140);\n\nvisualArea.appendChild(canvas);\nlog('✓ Canvas with rectangle, circle, and text');`,
    output: "Drawing shapes on canvas",
  },

  {
    id: 92,
    category: "DOM Manipulation",
    title: "SVG - Scalable Graphics",
    premium: true,
    code: `log('=== SVG ===');\nconst svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\nsvg.setAttribute('width', '300');\nsvg.setAttribute('height', '150');\nsvg.style.border = '1px solid #ccc';\n\nconst rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');\nrect.setAttribute('x', '10');\nrect.setAttribute('y', '10');\nrect.setAttribute('width', '100');\nrect.setAttribute('height', '80');\nrect.setAttribute('fill', '#3b82f6');\n\nconst circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');\ncircle.setAttribute('cx', '200');\ncircle.setAttribute('cy', '50');\ncircle.setAttribute('r', '40');\ncircle.setAttribute('fill', '#f59e0b');\n\nsvg.appendChild(rect);\nsvg.appendChild(circle);\nvisualArea.appendChild(svg);\nlog('✓ SVG with rectangle and circle');`,
    output: "Creating SVG graphics",
  },

  {
    id: 93,
    category: "DOM Manipulation",
    title: "requestAnimationFrame",
    premium: true,
    code: `log('=== requestAnimationFrame ===');\nconst canvas = document.createElement('canvas');\ncanvas.width = 300;\ncanvas.height = 100;\ncanvas.style.backgroundColor = '#0f172a';\ncanvas.style.border = '1px solid #ccc';\n\nconst ctx = canvas.getContext('2d');\nlet x = 0;\n\nfunction animate() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  ctx.fillStyle = '#22d3ee';\n  ctx.fillRect(x, 40, 20, 20);\n  \n  x += 2;\n  if(x > canvas.width) x = -20;\n  \n  requestAnimationFrame(animate);\n}\n\nanimate();\nvisualArea.appendChild(canvas);\nlog('✓ Smooth animation running');`,
    output: "Smooth animation loop",
  },

  {
    id: 94,
    category: "DOM Manipulation",
    title: "Page Visibility API",
    premium: true,
    code: `log('=== Page Visibility API ===');\nif('hidden' in document) {\n  const checkVis = () => {\n    if(document.hidden) {\n      log('⚠ Page is hidden');\n    } else {\n      log('✓ Page is visible');\n    }\n    log('State: ' + document.visibilityState);\n  };\n  \n  checkVis();\n  \n  document.addEventListener('visibilitychange', checkVis);\n  log('✓ Visibility listener attached');\n} else {\n  log('❌ Page Visibility API not supported');\n}`,
    output: "Detecting when page is hidden",
  },

  {
    id: 95,
    category: "DOM Manipulation",
    title: "requestIdleCallback",
    premium: true,
    code: `log('=== requestIdleCallback ===');\nif('requestIdleCallback' in window) {\n  log('✓ requestIdleCallback supported');\n  \n  requestIdleCallback((deadline) => {\n    log('Idle time available: ' + deadline.timeRemaining().toFixed(0) + ' ms');\n    log('Timeout: ' + (deadline.didTimeout ? '✓ Yes' : '❌ No'));\n  });\n  \n  log('High-priority task scheduled');\n} else {\n  log('❌ requestIdleCallback not supported');\n}`,
    output: "Scheduling low-priority tasks",
  },

  {
    id: 96,
    category: "DOM Manipulation",
    title: "Print API - window.print()",
    premium: true,
    code: `log('=== Print API ===');\nconst div = document.createElement('div');\ndiv.style.padding = '10px';\ndiv.style.marginBottom = '10px';\ndiv.innerHTML = '<p style=\"font-size: 18px;\">This content can be printed</p>';\n\nconst btn = document.createElement('button');\nbtn.textContent = 'Open Print Dialog';\nbtn.style.padding = '10px 20px';\nbtn.onclick = () => {\n  log('✓ Print dialog opened');\n  window.print();\n};\n\nvisualArea.appendChild(div);\nvisualArea.appendChild(btn);`,
    output: "Printing page content",
  },

  {
    id: 97,
    category: "DOM Manipulation",
    title: "Hash Navigation - window.location.hash",
    premium: true,
    code: `log('=== Hash Navigation ===');\nconst div1 = document.createElement('div');\ndiv1.textContent = 'Section 1';\ndiv1.id = 'section1';\ndiv1.style.padding = '10px';\ndiv1.style.backgroundColor = '#3b82f6';\ndiv1.style.color = 'white';\ndiv1.style.marginBottom = '10px';\n\nconst link = document.createElement('a');\nlink.href = '#section1';\nlink.textContent = 'Go to Section 1';\nlink.style.cursor = 'pointer';\nlink.style.color = '#22d3ee';\n\nwindow.addEventListener('hashchange', () => {\n  log('Hash changed to: ' + window.location.hash);\n});\n\nvisualArea.appendChild(link);\nvisualArea.appendChild(div1);\nlog('✓ Click link to navigate');`,
    output: "Single-page app routing with hash",
  },

  {
    id: 98,
    category: "DOM Manipulation",
    title: "History API - pushState",
    premium: true,
    code: `log('=== History API ===');\nconst btn1 = document.createElement('button');\nbtn1.textContent = 'Push State';\nbtn1.style.padding = '8px 16px';\nbtn1.style.marginRight = '10px';\nbtn1.onclick = () => {\n  history.pushState({ page: 1 }, 'Page 1', '?page=1');\n  log('✓ State pushed: page=1');\n};\n\nconst btn2 = document.createElement('button');\nbtn2.textContent = 'Replace State';\nbtn2.style.padding = '8px 16px';\nbtn2.onclick = () => {\n  history.replaceState({ page: 2 }, 'Page 2', '?page=2');\n  log('✓ State replaced: page=2');\n};\n\nwindow.addEventListener('popstate', (e) => {\n  log('Popped state: ' + JSON.stringify(e.state));\n});\n\nvisualArea.appendChild(btn1);\nvisualArea.appendChild(btn2);`,
    output: "Browser history manipulation",
  },

  {
    id: 99,
    category: "DOM Manipulation",
    title: "postMessage - Cross-frame Communication",
    premium: true,
    code: `log('=== postMessage ===');\nconst btn = document.createElement('button');\nbtn.textContent = 'Send Message to Parent';\nbtn.style.padding = '10px 20px';\n\nbtn.onclick = () => {\n  if(window.parent !== window) {\n    window.parent.postMessage({\n      type: 'greeting',\n      text: 'Hello from child frame!'\n    }, '*');\n    log('✓ Message sent to parent');\n  } else {\n    log('⚠ Not in iframe');\n  }\n};\n\nwindow.addEventListener('message', (e) => {\n  log('Message received: ' + e.data.text);\n});\n\nvisualArea.appendChild(btn);`,
    output: "Cross-window messaging",
  },

  {
    id: 100,
    category: "DOM Manipulation",
    title: "Web Components Lifecycle",
    premium: true,
    code: `log('=== Web Components Lifecycle ===');\nclass LifecycleComponent extends HTMLElement {\n  constructor() {\n    super();\n    log('✓ constructor() called');\n  }\n  \n  connectedCallback() {\n    log('✓ connectedCallback() called');\n    this.textContent = 'Connected';\n  }\n  \n  disconnectedCallback() {\n    log('✓ disconnectedCallback() called');\n  }\n  \n  attributeChangedCallback(name, oldVal, newVal) {\n    log('✓ Attribute ' + name + ' changed');\n  }\n  \n  static get observedAttributes() {\n    return ['data-value'];\n  }\n}\n\ncustomElements.define('lifecycle-component', LifecycleComponent);\nconst comp = document.createElement('lifecycle-component');\nvisualArea.appendChild(comp);`,
    output: "Custom element lifecycle hooks",
  },
  // 101-150: ES6+ Advanced Features
  {
    id: 101,
    category: "ES6+ Features",
    title: "Async/Await - Basics",
    premium: true,
    code: `log('=== Async/Await ===');
async function fetchData() {
  try {
    const response = await new Promise((resolve) => {
      setTimeout(() => resolve('Data fetched'), 1000);
    });
    log('Result: ' + response);
  } catch(err) {
    log('Error: ' + err);
  }
}
fetchData();
log('✓ Async/await makes async code look synchronous');`,
    output: "Using async/await for cleaner promise handling",
  },
  {
    id: 102,
    category: "ES6+ Features",
    title: "Promise.all() - Parallel Execution",
    premium: true,
    code: `log('=== Promise.all() ===');
const p1 = Promise.resolve('First');
const p2 = new Promise(r => setTimeout(() => r('Second'), 100));
const p3 = Promise.resolve('Third');

Promise.all([p1, p2, p3]).then(results => {
  log('All resolved: ' + JSON.stringify(results));
});

log('✓ Promise.all waits for all promises to complete');`,
    output: "Executing multiple promises in parallel",
  },
  {
    id: 103,
    category: "ES6+ Features",
    title: "Promise.race() - First Winner",
    premium: true,
    code: `log('=== Promise.race() ===');
const fast = new Promise(r => setTimeout(() => r('Fast'), 100));
const slow = new Promise(r => setTimeout(() => r('Slow'), 1000));

Promise.race([fast, slow]).then(winner => {
  log('Winner: ' + winner);
});

log('✓ Promise.race returns the first resolved promise');`,
    output: "Racing multiple promises to completion",
  },
  {
    id: 104,
    category: "ES6+ Features",
    title: "Promise.allSettled() - All Results",
    premium: true,
    code: `log('=== Promise.allSettled() ===');
const p1 = Promise.resolve('Success');
const p2 = Promise.reject('Error');
const p3 = Promise.resolve('Success again');

Promise.allSettled([p1, p2, p3]).then(results => {
  results.forEach(r => {
    log(r.status + ': ' + (r.value || r.reason));
  });
});

log('✓ allSettled returns all results regardless');`,
    output: "Getting results from all promises including rejections",
  },
  {
    id: 105,
    category: "ES6+ Features",
    title: "for...await...of Loop",
    premium: true,
    code: `log('=== for...await...of ===');
async function* asyncGen() {
  yield 1;
  yield new Promise(r => setTimeout(() => r(2), 100));
  yield 3;
}

(async () => {
  for await (const val of asyncGen()) {
    log('Value: ' + val);
  }
})();

log('✓ Iterate async iterables with for...await');`,
    output: "Looping through async generators",
  },
  {
    id: 106,
    category: "ES6+ Features",
    title: "Optional Chaining - Safe Access",
    premium: true,
    code: `log('=== Optional Chaining ===');
const user = { profile: { age: 30 } };
const guest = {};

log('user.profile?.age: ' + user.profile?.age);
log('guest.profile?.age: ' + guest.profile?.age);
log('guest.profile?.address?.city: ' + guest.profile?.address?.city);

log('✓ Optional chaining prevents errors on null/undefined');`,
    output: "Safe property access with optional chaining",
  },
  {
    id: 107,
    category: "ES6+ Features",
    title: "Nullish Coalescing (??) vs OR",
    premium: true,
    code: `log('=== ?? vs || ===');
const val1 = 0 || 'default'; // 'default'
const val2 = 0 ?? 'default'; // 0
const val3 = null ?? 'default'; // 'default'
const val4 = null || 'default'; // 'default'

log('0 || fallback: ' + val1);
log('0 ?? fallback: ' + val2);
log('null ?? fallback: ' + val3);
log('null || fallback: ' + val4);

log('✓ ?? only replaces null/undefined, || replaces all falsy');`,
    output: "Difference between nullish coalescing and OR operator",
  },
  {
    id: 108,
    category: "ES6+ Features",
    title: "Logical Assignment Operators",
    premium: true,
    code: `log('=== Logical Assignment ===');
let obj = { a: null, b: 0, c: undefined };

obj.a ??= 'nullish'; // Sets because null
obj.b ??= 'nullish'; // Doesn't set, 0 is not nullish
obj.c ||= 'falsy';   // Sets because falsy

log('a: ' + obj.a);
log('b: ' + obj.b);
log('c: ' + obj.c);

log('✓ Logical assignment combines operators with assignment');`,
    output: "Using ||=, &&=, and ??= operators",
  },
  {
    id: 109,
    category: "ES6+ Features",
    title: "String.matchAll() - Global Matching",
    premium: true,
    code: `log('=== String.matchAll() ===');
const regex = /([a-z]+)=([0-9]+)/g;
const str = 'name=John&age=30&city=NYC';

const matches = Array.from(str.matchAll(regex));
matches.forEach(m => {
  log('Match: ' + m[1] + ' = ' + m[2]);
});

log('✓ matchAll returns an iterator of all matches');`,
    output: "Finding all regex matches with groups",
  },
  {
    id: 110,
    category: "ES6+ Features",
    title: "String.replaceAll() - Replace All",
    premium: true,
    code: `log('=== String.replaceAll() ===');
const str = 'hello hello world hello';

const result1 = str.replace(/hello/g, 'hi');
const result2 = str.replaceAll('hello', 'hi');

log('replace with regex: ' + result1);
log('replaceAll: ' + result2);

log('✓ replaceAll is simpler than replace with /g');`,
    output: "Replacing all occurrences of a substring",
  },
  {
    id: 111,
    category: "ES6+ Features",
    title: "Promise.any() - First Fulfilled",
    premium: true,
    code: `log('=== Promise.any() ===');
const p1 = Promise.reject('Error 1');
const p2 = new Promise(r => setTimeout(() => r('Success'), 100));
const p3 = Promise.reject('Error 2');

Promise.any([p1, p2, p3])
  .then(result => log('First success: ' + result))
  .catch(err => log('All rejected: ' + err));

log('✓ Promise.any returns first fulfilled promise');`,
    output: "Getting the first successful promise",
  },
  {
    id: 112,
    category: "ES6+ Features",
    title: "Error Handling - Stack Traces",
    premium: true,
    code: `log('=== Stack Traces ===');
function outer() {
  middle();
}
function middle() {
  inner();
}
function inner() {
  throw new Error('Something broke');
}

try {
  outer();
} catch(err) {
  log('Error: ' + err.message);
  log('Stack contains function chain: outer→middle→inner');
}`,
    output: "Understanding JavaScript stack traces",
  },
  {
    id: 113,
    category: "ES6+ Features",
    title: "Error.cause - Root Cause Exception",
    premium: true,
    code: `log('=== Error.cause ===');
try {
  try {
    throw new Error('Network failed');
  } catch(err) {
    throw new Error('Request failed', { cause: err });
  }
} catch(err) {
  log('Error: ' + err.message);
  log('Caused by: ' + err.cause.message);
}

log('✓ Error.cause tracks the root exception');`,
    output: "Chaining errors together for better debugging",
  },
  {
    id: 114,
    category: "ES6+ Features",
    title: "WeakRef - Weak References",
    premium: true,
    code: `log('=== WeakRef ===');
let obj = { data: 'Important' };
const weakRef = new WeakRef(obj);

log('Reference exists: ' + (weakRef.deref() ? 'Yes' : 'No'));

obj = null; // Delete strong reference
log('After null: ' + (weakRef.deref() ? 'Yes' : 'No'));

log('✓ WeakRef allows object garbage collection');`,
    output: "Using weak references for memory optimization",
  },
  {
    id: 115,
    category: "ES6+ Features",
    title: "FinalizationRegistry - GC Callbacks",
    premium: true,
    code: `log('=== FinalizationRegistry ===');
const registry = new FinalizationRegistry((tag) => {
  log('✓ Object collected: ' + tag);
});

let obj = { value: 42 };
registry.register(obj, 'MyObject');

log('Object created: ' + obj.value);
obj = null;

log('✓ FinalizationRegistry runs after garbage collection');`,
    output: "Detecting object garbage collection",
  },
  {
    id: 116,
    category: "ES6+ Features",
    title: "Array.from() - Convert Iterable",
    premium: true,
    code: `log('=== Array.from() ===');
const str = 'Hello';
const arr1 = Array.from(str);
log('String to array: ' + JSON.stringify(arr1));

const arr2 = Array.from([1, 2, 3], x => x * 2);
log('Map during conversion: ' + JSON.stringify(arr2));

const set = new Set([1, 2, 2, 3]);
const arr3 = Array.from(set);
log('Set to array: ' + JSON.stringify(arr3));

log('✓ Array.from converts iterables to arrays');`,
    output: "Converting iterables and array-likes",
  },
  {
    id: 117,
    category: "ES6+ Features",
    title: "Array.of() vs Array Constructor",
    premium: true,
    code: `log('=== Array.of() ===');
const a1 = new Array(5);
const a2 = Array.of(5);
const a3 = Array.of(1, 2, 3);

log('new Array(5) length: ' + a1.length + ', filled: ' + (a1[0] === undefined));
log('Array.of(5) length: ' + a2.length + ', value: ' + a2[0]);
log('Array.of(1,2,3): ' + JSON.stringify(a3));

log('✓ Array.of is more predictable than constructor');`,
    output: "Creating arrays reliably with Array.of()",
  },
  {
    id: 118,
    category: "ES6+ Features",
    title: "Array.prototype.flat() - Flattening",
    premium: true,
    code: `log('=== Array.flat() ===');
const nested = [1, [2, [3, [4, 5]]]];

const flat1 = nested.flat();
const flat2 = nested.flat(2);
const flatAll = nested.flat(Infinity);

log('flat(): ' + JSON.stringify(flat1));
log('flat(2): ' + JSON.stringify(flat2));
log('flat(Infinity): ' + JSON.stringify(flatAll));

log('✓ flat() removes nesting, up to specified depth');`,
    output: "Flattening nested arrays",
  },
  {
    id: 119,
    category: "ES6+ Features",
    title: "Array.prototype.flatMap()",
    premium: true,
    code: `log('=== Array.flatMap() ===');
const numbers = [1, 2, 3];

const result = numbers.flatMap(n => [n, n * 2]);
log('flatMap result: ' + JSON.stringify(result));

const words = ['hello world', 'foo bar'];
const chars = words.flatMap(w => w.split(' '));
log('Split and flatten: ' + JSON.stringify(chars));

log('✓ flatMap combines map and flat operations');`,
    output: "Mapping and flattening in one operation",
  },
  {
    id: 120,
    category: "ES6+ Features",
    title: "Object.fromEntries() - Array to Object",
    premium: true,
    code: `log('=== Object.fromEntries() ===');
const entries = [['name', 'Alice'], ['age', 30], ['city', 'NYC']];
const obj = Object.fromEntries(entries);

log('Object: ' + JSON.stringify(obj));

const params = new URLSearchParams('a=1&b=2&c=3');
const paramObj = Object.fromEntries(params);
log('From URLSearchParams: ' + JSON.stringify(paramObj));

log('✓ fromEntries is inverse of Object.entries()');`,
    output: "Converting entry arrays back to objects",
  },
  {
    id: 121,
    category: "ES6+ Features",
    title: "String.prototype.padStart/padEnd",
    premium: true,
    code: `log('=== String Padding ===');
const str = '5';

const padded1 = str.padStart(3, '0');
const padded2 = str.padEnd(3, '.');

log('padStart(3, "0"): "' + padded1 + '"');
log('padEnd(3, "."): "' + padded2 + '"');

const nums = ['5', '42', '100'].map(n => n.padStart(3, '0'));
log('Numbers padded: ' + JSON.stringify(nums));

log('✓ Padding functions for formatting');`,
    output: "Padding strings to fixed lengths",
  },
  {
    id: 122,
    category: "ES6+ Features",
    title: "String.prototype.repeat()",
    premium: true,
    code: `log('=== String.repeat() ===');
const star = '★';
const repeated = star.repeat(5);

log('Repeated 5 times: ' + repeated);

const line = '─'.repeat(20);
log('Line: ' + line);

const pattern = 'ab'.repeat(10);
log('Pattern: ' + pattern);

log('✓ repeat() duplicates strings efficiently');`,
    output: "Creating repetitive string patterns",
  },
  {
    id: 123,
    category: "ES6+ Features",
    title: "Template Literal Tagged Functions",
    premium: true,
    code: `log('=== Tagged Templates ===');
function highlight(strings, ...values) {
  let result = '';
  strings.forEach((str, i) => {
    result += str + (values[i] ? '[' + values[i] + ']' : '');
  });
  return result;
}

const name = 'Alice';
const age = 30;
const output = highlight\`Hello \${name}, age \${age}\`;

log('Tagged result: ' + output);
log('✓ Tagged templates process template literals');`,
    output: "Using tagged template functions",
  },
  {
    id: 124,
    category: "ES6+ Features",
    title: "Array.prototype.includes() - Contains",
    premium: true,
    code: `log('=== Array.includes() ===');
const arr = [1, 2, 3, NaN, null];

log('includes(2): ' + arr.includes(2));
log('includes(NaN): ' + arr.includes(NaN));
log('includes(null): ' + arr.includes(null));

const str = 'Hello World';
log('String includes: ' + str.includes('World'));

log('✓ includes() is simpler than indexOf() !== -1');`,
    output: "Checking if array/string contains value",
  },
  {
    id: 125,
    category: "ES6+ Features",
    title: "Exponentiation Operator (**)",
    premium: true,
    code: `log('=== Exponentiation ===');
const base = 2;
const exp = 3;

const result = base ** exp;
const sqrt = 16 ** 0.5;
const inverse = 10 ** -1;

log(base + ' ** ' + exp + ' = ' + result);
log('√16 = 16 ** 0.5 = ' + sqrt);
log('10 ** -1 = ' + inverse);

log('✓ ** operator for exponentiation');`,
    output: "Using exponentiation operator",
  },
  {
    id: 126,
    category: "ES6+ Features",
    title: "Bitwise Operators - Flags",
    premium: true,
    code: `log('=== Bitwise Operators ===');
const READ = 1;    // 001
const WRITE = 2;   // 010
const EXECUTE = 4; // 100

let permissions = 0;
permissions |= READ;    // Add READ
permissions |= WRITE;   // Add WRITE

log('Has READ: ' + (permissions & READ ? '✓' : '✗'));
log('Has WRITE: ' + (permissions & WRITE ? '✓' : '✗'));
log('Has EXECUTE: ' + (permissions & EXECUTE ? '✓' : '✗'));

log('✓ Bitwise operators for flag management');`,
    output: "Using bitwise operators for flags",
  },
  {
    id: 127,
    category: "ES6+ Features",
    title: "Destructuring with Rest in Arrays",
    premium: true,
    code: `log('=== Array Destructuring Rest ===');
const [first, second, ...rest] = [1, 2, 3, 4, 5];

log('first: ' + first);
log('second: ' + second);
log('rest: ' + JSON.stringify(rest));

const [head, ...tail] = 'Hello';
log('head: ' + head);
log('tail: ' + JSON.stringify(tail));

log('✓ Rest in destructuring captures remaining items');`,
    output: "Using rest operator in destructuring",
  },
  {
    id: 128,
    category: "ES6+ Features",
    title: "Destructuring with Default Values",
    premium: true,
    code: `log('=== Destructuring Defaults ===');
const [a = 10, b = 20, c = 30] = [1];

log('a: ' + a);
log('b: ' + b);
log('c: ' + c);

const {name = 'Guest', role = 'user'} = {name: 'Alice'};
log('Defaults in objects:');
log('name: ' + name);
log('role: ' + role);

log('✓ Defaults work in all destructuring patterns');`,
    output: "Providing default values in destructuring",
  },
  {
    id: 129,
    category: "ES6+ Features",
    title: "Renaming Variables in Destructuring",
    premium: true,
    code: `log('=== Destructuring Rename ===');
const {firstName: fn, lastName: ln} = {firstName: 'John', lastName: 'Doe'};

log('fn (firstName): ' + fn);
log('ln (lastName): ' + ln);

const [x: numX, y: numY] = [5, 10]; // Note: This syntax doesn't work for arrays
// Arrays don't support renaming, but objects do

log('✓ Object destructuring supports renaming with : syntax');`,
    output: "Renaming properties during destructuring",
  },
  {
    id: 130,
    category: "ES6+ Features",
    title: "Computed Property Names",
    premium: true,
    code: `log('=== Computed Property Names ===');
const key = 'dynamicKey';
const obj = {
  [key]: 'value',
  ['key_' + 1]: 'one',
  [2 + 3]: 'five'
};

log('obj[dynamicKey]: ' + obj.dynamicKey);
log('obj.key_1: ' + obj.key_1);
log('obj[5]: ' + obj[5]);

log('✓ [expression] creates computed property names');`,
    output: "Using expressions as object keys",
  },
  {
    id: 131,
    category: "ES6+ Features",
    title: "Method Definitions - Shorthand",
    premium: true,
    code: `log('=== Method Shorthand ===');
const obj = {
  name: 'Test',
  getName() {
    return this.name;
  },
  setName(n) {
    this.name = n;
    return this;
  }
};

log('Initial: ' + obj.getName());
obj.setName('Updated');
log('After update: ' + obj.getName());

log('✓ Method shorthand eliminates function keyword');`,
    output: "Using method shorthand syntax",
  },
  {
    id: 132,
    category: "ES6+ Features",
    title: "Getters and Setters - Advanced",
    premium: true,
    code: `log('=== Custom Getters/Setters ===');
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
}

const user = new User('John', 'Doe');
log('Full name: ' + user.fullName);
user.fullName = 'Jane Smith';
log('Updated: ' + user.firstName + ', ' + user.lastName);`,
    output: "Advanced getter and setter usage",
  },
  {
    id: 133,
    category: "ES6+ Features",
    title: "Private Fields in Classes",
    premium: true,
    code: `log('=== Private Fields ===');
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
log('After deposit(100): ' + account.deposit(100));
log('Balance: ' + account.getBalance());

log('✓ Private fields with # prevent direct access');`,
    output: "Encapsulation with private fields",
  },
  {
    id: 134,
    category: "ES6+ Features",
    title: "Static Fields in Classes",
    premium: true,
    code: `log('=== Static Fields ===');
class Config {
  static version = '1.0.0';
  static debug = true;
  static timeout = 5000;

  static getVersion() {
    return 'Version: ' + this.version;
  }
}

log('Config.version: ' + Config.version);
log('Config.getVersion(): ' + Config.getVersion());

log('✓ Static fields shared across all instances');`,
    output: "Using static fields and methods",
  },
  {
    id: 135,
    category: "ES6+ Features",
    title: "super Keyword in Classes",
    premium: true,
    code: `log('=== super Keyword ===');
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name + ' makes a sound';
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  speak() {
    return super.speak() + ' - Woof!';
  }
}

const dog = new Dog('Rex', 'Labrador');
log('Dog: ' + dog.speak());

log('✓ super accesses parent class methods');`,
    output: "Using super for inheritance",
  },
  {
    id: 136,
    category: "ES6+ Features",
    title: "Spread in Function Calls",
    premium: true,
    code: `log('=== Spread in Function Calls ===');
function sum(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
const result = sum(...nums);

log('sum(...[1, 2, 3]) = ' + result);

const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];

log('Combined: ' + JSON.stringify(combined));

log('✓ Spread unpacks arrays into arguments/elements');`,
    output: "Using spread operator",
  },
  {
    id: 137,
    category: "ES6+ Features",
    title: "Spread in Object Literals",
    premium: true,
    code: `log('=== Object Spread ===');
const defaults = {theme: 'light', lang: 'en'};
const user = {name: 'Alice', theme: 'dark'};

const merged = {...defaults, ...user};
log('Merged: ' + JSON.stringify(merged));

const extended = {id: 1, ...user, admin: false};
log('Extended: ' + JSON.stringify(extended));

log('✓ Object spread copies/merges properties');`,
    output: "Using spread in object literals",
  },
  {
    id: 138,
    category: "ES6+ Features",
    title: "Iterators - Custom",
    premium: true,
    code: `log('=== Custom Iterator ===');
const range = {
  from: 1,
  to: 3,
  [Symbol.iterator]() {
    let value = this.from;
    return {
      next: () => {
        if (value <= this.to) {
          return {value: value++, done: false};
        } else {
          return {done: true};
        }
      }
    };
  }
};

for (const num of range) {
  log('Value: ' + num);
}

log('✓ Custom iterators with Symbol.iterator');`,
    output: "Creating custom iterators",
  },
  {
    id: 139,
    category: "ES6+ Features",
    title: "Generators - Advanced",
    premium: true,
    code: `log('=== Generator Delegation ===');
function* gen1() {
  yield 1;
  yield 2;
}

function* gen2() {
  yield* gen1();
  yield 3;
}

const g = gen2();
for (const val of g) {
  log('Value: ' + val);
}

log('✓ yield* delegates to another generator');`,
    output: "Delegating between generators",
  },
  {
    id: 140,
    category: "ES6+ Features",
    title: "Map vs Object - Performance",
    premium: true,
    code: `log('=== Map vs Object ===');
const obj = {};
const map = new Map();

obj['key1'] = 'val1';
map.set('key1', 'val1');

log('Object keys: ' + Object.keys(obj).length);
log('Map size: ' + map.size);
log('Map.get(): ' + map.get('key1'));

log('✓ Map is better for key-value collections');`,
    output: "Comparing Map and Object performance",
  },
  {
    id: 141,
    category: "ES6+ Features",
    title: "Set Operations - Unique Values",
    premium: true,
    code: `log('=== Set Operations ===');
const arr = [1, 1, 2, 2, 3];
const unique = new Set(arr);

log('Unique from array: ' + JSON.stringify(Array.from(unique)));

const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);

const intersection = new Set([...set1].filter(x => set2.has(x)));
const union = new Set([...set1, ...set2]);

log('Intersection: ' + JSON.stringify(Array.from(intersection)));
log('Union: ' + JSON.stringify(Array.from(union)));

log('✓ Sets for unique value management');`,
    output: "Set operations and unique values",
  },
  {
    id: 142,
    category: "ES6+ Features",
    title: "Unicode Support in Strings",
    premium: true,
    code: `log('=== Unicode Support ===');
const emoji = '😀😃😄';
log('Emoji: ' + emoji);
log('Length: ' + emoji.length);

for (const char of emoji) {
  log('Char: ' + char);
}

const codePoints = Array.from(emoji).map(c => c.codePointAt(0));
log('Code points: ' + JSON.stringify(codePoints));

log('✓ for...of handles Unicode correctly');`,
    output: "Unicode and emoji handling",
  },
  {
    id: 143,
    category: "ES6+ Features",
    title: "Regular Expressions - Named Groups",
    premium: true,
    code: `log('=== Named Groups in Regex ===');
const pattern = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/;
const date = '2024-12-25';

const match = date.match(pattern);
log('Year: ' + match.groups.year);
log('Month: ' + match.groups.month);
log('Day: ' + match.groups.day);

log('✓ Named groups make regex more readable');`,
    output: "Using named capture groups in regex",
  },
  {
    id: 144,
    category: "ES6+ Features",
    title: "Lookbehind/Lookahead Assertions",
    premium: true,
    code: `log('=== Regex Assertions ===');
const text = 'Price: $100';

const lookahead = /\\d+(?=\\s*$)/;
const matchAhead = text.match(lookahead);
log('Lookahead (digit before end): ' + matchAhead?.[0]);

const lookbehind = /(?<=\\$)\\d+/;
const matchBehind = text.match(lookbehind);
log('Lookbehind (digit after $): ' + matchBehind?.[0]);

log('✓ Assertions check without consuming');`,
    output: "Using lookahead and lookbehind in regex",
  },
  {
    id: 145,
    category: "ES6+ Features",
    title: "DotAll Flag (s) in Regex",
    premium: true,
    code: `log('=== DotAll Flag ===');
const text = 'line1\\nline2\\nline3';

const withoutDotAll = /line1.*line3/;
const withDotAll = /line1.*line3/s;

log('Without s flag: ' + (withoutDotAll.test(text) ? 'Match' : 'No match'));
log('With s flag: ' + (withDotAll.test(text) ? 'Match' : 'No match'));

log('✓ s flag makes . match newlines too');`,
    output: "DotAll regex flag for multiline",
  },
  {
    id: 146,
    category: "ES6+ Features",
    title: "Numeric Separators - Readability",
    premium: true,
    code: `log('=== Numeric Separators ===');
const big = 1_000_000;
const binary = 0b1111_0000;
const hex = 0xFF_00_00;
const pi = 3.141_592_653;

log('One million: ' + big);
log('Binary: ' + binary);
log('Hex: ' + hex);
log('Pi: ' + pi);

log('✓ _ separators improve number readability');`,
    output: "Using numeric separators for clarity",
  },
  {
    id: 147,
    category: "ES6+ Features",
    title: "BigInt Literals - Large Numbers",
    premium: true,
    code: `log('=== BigInt Literals ===');
const max = Number.MAX_SAFE_INTEGER;
const beyond = max + 1;
const bigNum = BigInt(max) + 1n;

log('MAX_SAFE_INTEGER: ' + max);
log('max + 1 (lossy): ' + beyond);
log('BigInt(max) + 1: ' + bigNum);

const result = 9007199254740992n ** 2n;
log('Very large calc: ' + result);

log('✓ BigInt for arbitrary precision');`,
    output: "Working with BigInt for large numbers",
  },
  {
    id: 148,
    category: "ES6+ Features",
    title: "Array Indices - Typed Behavior",
    premium: true,
    code: `log('=== Array Index Behavior ===');
const arr = [1, 2, 3];

arr[10] = 'sparse';
log('Length after arr[10]: ' + arr.length);
log('arr[5]: ' + arr[5]);

const arr2 = ['a'];
arr2[-1] = 'negative';
log('arr2[-1]: ' + arr2[-1]);
log('arr2.length: ' + arr2.length);

log('✓ Arrays have different index behaviors');`,
    output: "Understanding array index behavior",
  },
  {
    id: 149,
    category: "ES6+ Features",
    title: "Buffer and TypedArrays",
    premium: true,
    code: `log('=== TypedArrays ===');
const buffer = new ArrayBuffer(16);
const int32 = new Int32Array(buffer);
const uint8 = new Uint8Array(buffer);

int32[0] = 0x12345678;
log('Int32 value: ' + int32[0].toString(16));
log('Uint8 view: ' + uint8[0].toString(16));

const floats = new Float32Array([1.1, 2.2, 3.3]);
log('Float values: ' + JSON.stringify(Array.from(floats)));

log('✓ TypedArrays for binary data');`,
    output: "Working with binary buffers and typed arrays",
  },
  {
    id: 150,
    category: "ES6+ Features",
    title: "DataView - Endianness Control",
    premium: true,
    code: `log('=== DataView ===');
const buffer = new ArrayBuffer(4);
const view = new DataView(buffer);

view.setInt32(0, 0x12345678);
const littleEndian = view.getInt32(0, true);
const bigEndian = view.getInt32(0, false);

log('Little-endian: ' + littleEndian.toString(16));
log('Big-endian: ' + bigEndian.toString(16));

log('✓ DataView controls byte order (endianness)');`,
    output: "Controlling endianness with DataView",
  },

  // 151-200: Async JavaScript
  {
    id: 151,
    category: "Async Programming",
    title: "Callbacks - The Old Way",
    premium: true,
    code: `log('=== Callbacks ===');
function fetchUser(id, callback) {
  setTimeout(() => {
    callback({id: id, name: 'Alice'});
  }, 100);
}

fetchUser(1, (user) => {
  log('User: ' + user.name);
});

log('✓ Callbacks execute after async operation');`,
    output: "Understanding callback functions",
  },
  {
    id: 152,
    category: "Async Programming",
    title: "Callback Hell - Pyramid of Doom",
    premium: true,
    code: `log('=== Callback Hell ===');
function step1(cb) { setTimeout(() => cb('result1'), 50); }
function step2(res1, cb) { setTimeout(() => cb(res1 + '→result2'), 50); }
function step3(res2, cb) { setTimeout(() => cb(res2 + '→result3'), 50); }

step1(res1 => {
  step2(res1, res2 => {
    step3(res2, res3 => {
      log('Final: ' + res3);
    });
  });
});

log('✓ Deeply nested callbacks are hard to read');`,
    output: "Demonstrating callback hell",
  },
  {
    id: 153,
    category: "Async Programming",
    title: "Promise - Basic Creation",
    premium: true,
    code: `log('=== Promise Basics ===');
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 100);
});

promise.then(result => {
  log('Result: ' + result);
}).catch(err => {
  log('Error: ' + err);
});

log('✓ Promising simplicity');`,
    output: "Creating and resolving promises",
  },
  {
    id: 154,
    category: "Async Programming",
    title: "Promise.then() Chaining",
    premium: true,
    code: `log('=== Promise Chaining ===');
Promise.resolve('Start')
  .then(val => {
    log('Step 1: ' + val);
    return val + '→Step2';
  })
  .then(val => {
    log('Step 2: ' + val);
    return val + '→Step3';
  })
  .then(val => {
    log('Final: ' + val);
  });

log('✓ Chaining makes async code linear');`,
    output: "Chaining multiple promise operations",
  },
  {
    id: 155,
    category: "Async Programming",
    title: "Promise Error Handling",
    premium: true,
    code: `log('=== Promise Error Handling ===');
Promise.resolve('OK')
  .then(val => {
    throw new Error('Oops!');
  })
  .catch(err => {
    log('Caught: ' + err.message);
    return 'Recovered';
  })
  .then(val => {
    log('After recovery: ' + val);
  });

log('✓ Catch handles any error in chain');`,
    output: "Error handling in promise chains",
  },
  {
    id: 156,
    category: "Async Programming",
    title: "Promise.finally() - Cleanup",
    premium: true,
    code: `log('=== Promise.finally() ===');
Promise.reject('Error')
  .then(val => log('Success: ' + val))
  .catch(err => log('Failure: ' + err))
  .finally(() => {
    log('✓ Cleanup executed regardless');
  });

log('Setup complete');`,
    output: "Using finally for cleanup code",
  },
  {
    id: 157,
    category: "Async Programming",
    title: "Async Function - Syntax Sugar",
    premium: true,
    code: `log('=== Async Function ===');
async function fetchData() {
  return'Data loaded';
}

fetchData().then(data => {
  log('Data: ' + data);
});

log('✓ Async functions return promises');`,
    output: "Creating async functions",
  },
  {
    id: 158,
    category: "Async Programming",
    title: "Await - Pause Execution",
    premium: true,
    code: `log('=== Await ===');
async function loadData() {
  log('Loading...');
  const data = await new Promise(r => setTimeout(() => r('Done'), 100));
  log('Data: ' + data);
}

loadData();
log('Async function started');`,
    output: "Using await to pause execution",
  },
  {
    id: 159,
    category: "Async Programming",
    title: "Async/Await Error Handling",
    premium: true,
    code: `log('=== Async/Await Errors ===');
async function safeFetch() {
  try {
    throw new Error('Network error');
  } catch(err) {
    log('Caught: ' + err.message);
  }
  return 'Safe';
}

safeFetch().then(result => {
  log('Result: ' + result);
});

log('✓ Try/catch works with async/await');`,
    output: "Error handling with async/await",
  },
  {
    id: 160,
    category: "Async Programming",
    title: "Parallel Async Operations",
    premium: true,
    code: `log('=== Parallel Async ===');
async function parallel() {
  const p1 = new Promise(r => setTimeout(() => r('Task 1'), 100));
  const p2 = new Promise(r => setTimeout(() => r('Task 2'), 100));

  const [r1, r2] = await Promise.all([p1, p2]);
  log('Results: ' + r1 + ', ' + r2);
}

parallel();
log('✓ Promise.all runs in parallel');`,
    output: "Running multiple async operations in parallel",
  },
  {
    id: 161,
    category: "Async Programming",
    title: "Sequential Async Operations",
    premium: true,
    code: `log('=== Sequential Async ===');
async function sequential() {
  const r1 = await new Promise(r => setTimeout(() => r('Task 1'), 100));
  log('Step 1: ' + r1);

  const r2 = await new Promise(r => setTimeout(() => r('Task 2'), 100));
  log('Step 2: ' + r2);
}

sequential();
log('✓ Await makes async sequential');`,
    output: "Sequential async execution",
  },
  {
    id: 162,
    category: "Async Programming",
    title: "Fetch API - Basic GET",
    premium: true,
    code: `log('=== Fetch GET ===');
// Simulating fetch
const mockFetch = (url) => Promise.resolve({
  json: () => Promise.resolve({id: 1, name: 'Alice'})
});

(async () => {
  const response = await mockFetch('/api/user');
  const data = await response.json();
  log('User: ' + JSON.stringify(data));
})();

log('✓ Fetch returns Response object');`,
    output: "Making GET requests with Fetch",
  },
  {
    id: 163,
    category: "Async Programming",
    title: "Fetch API - POST Request",
    premium: true,
    code: `log('=== Fetch POST ===');
const mockFetch = (url, opts) => Promise.resolve({
  json: () => Promise.resolve({id: 1, created: true})
});

(async () => {
  const response = await mockFetch('/api/user', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name: 'Alice'})
  });
  const data = await response.json();
  log('Response: ' + JSON.stringify(data));
})();

log('✓ POST request with fetch');`,
    output: "Making POST requests with Fetch",
  },
  {
    id: 164,
    category: "Async Programming",
    title: "Fetch Error Handling",
    premium: true,
    code: `log('=== Fetch Error Handling ===');
const mockFetch = (url) => {
  if (url === '/error') {
    return Promise.reject(new Error('Network error'));
  }
  return Promise.resolve({ok: true});
};

(async () => {
  try {
    const res = await mockFetch('/error');
  } catch(err) {
    log('Error: ' + err.message);
  }
})();

log('✓ Fetch errors must be caught');`,
    output: "Error handling with Fetch",
  },
  {
    id: 165,
    category: "Async Programming",
    title: "AbortController - Cancel Requests",
    premium: true,
    code: `log('=== AbortController ===');
const controller = new AbortController();

setTimeout(() => {
  log('Cancelling request...');
  controller.abort();
}, 100);

(async () => {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Aborted')), 200);
    });
  } catch(err) {
    log('Request cancelled: ' + err.message);
  }
})();

log('✓ AbortController cancels async operations');`,
    output: "Cancelling async operations",
  },
  {
    id: 166,
    category: "Async Programming",
    title: "TimeOut Pattern",
    premium: true,
    code: `log('=== Timeout Pattern ===');
function withTimeout(promise, time) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout')), time)
    )
  ]);
}

(async () => {
  try {
    await withTimeout(
      new Promise(r => setTimeout(() => r('Done'), 500)),
      100
    );
  } catch(err) {
    log('Error: ' + err.message);
  }
})();

log('✓ Timeout pattern stops slow operations');`,
    output: "Implementing timeout for async operations",
  },
  {
    id: 167,
    category: "Async Programming",
    title: "Retry Logic",
    premium: true,
    code: `log('=== Retry Logic ===');
async function retryAsync(fn, maxRetries) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch(err) {
      if (i === maxRetries - 1) throw err;
      log('Attempt ' + (i + 1) + ' failed, retrying...');
    }
  }
}

(async () => {
  let attempts = 0;
  await retryAsync(async () => {
    attempts++;
    if (attempts < 2) throw new Error('Failed');
    return 'Success';
  }, 3).then(result => log('Result: ' + result));
})();

log('✓ Retry pattern for fault tolerance');`,
    output: "Implementing retry logic",
  },
  {
    id: 168,
    category: "Async Programming",
    title: "Debouncing Async Operations",
    premium: true,
    code: `log('=== Debouncing ===');
function debounce(fn, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

const asyncFn = debounce((text) => {
  log('Search: ' + text);
}, 300);

asyncFn('h');
asyncFn('he');
asyncFn('hel');
asyncFn('hell');
asyncFn('hello');

setTimeout(() => log('✓ Only last call executed'), 400);`,
    output: "Debouncing rapid async calls",
  },
  {
    id: 169,
    category: "Async Programming",
    title: "Throttling Async Operations",
    premium: true,
    code: `log('=== Throttling ===');
function throttle(fn, delay) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      fn(...args);
      lastCall = now;
    }
  };
}

const throttled = throttle((n) => log('Value: ' + n), 100);

for (let i = 0; i < 5; i++) {
  throttled(i);
}

log('✓ Throttle limits call frequency');`,
    output: "Throttling function calls",
  },
  {
    id: 170,
    category: "Async Programming",
    title: "Queue Pattern - Serialized Execution",
    premium: true,
    code: `log('=== Queue Pattern ===');
class AsyncQueue {
  constructor() {
    this.queue = [];
    this.running = false;
  }

  async add(fn) {
    this.queue.push(fn);
    if (!this.running) this.run();
  }

  async run() {
    this.running = true;
    while (this.queue.length) {
      await this.queue.shift()();
    }
    this.running = false;
  }
}

const q = new AsyncQueue();
q.add(async () => log('Task 1'));
q.add(async () => log('Task 2'));

log('✓ Queue serializes async tasks');`,
    output: "Queue pattern for sequential execution",
  },
  {
    id: 171,
    category: "Async Programming",
    title: "Event Emitter Pattern",
    premium: true,
    code: `log('=== Event Emitter ===');
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(listener);
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(fn => fn(...args));
    }
  }
}

const emitter = new EventEmitter();
emitter.on('greet', (name) => log('Hello ' + name));
emitter.emit('greet', 'Alice');

log('✓ Event emitter for loose coupling');`,
    output: "Event emitter pattern",
  },
  {
    id: 172,
    category: "Async Programming",
    title: "Observable-like Pattern",
    premium: true,
    code: `log('=== Observable Pattern ===');
class Observable {
  constructor(subscribe) {
    this.subscribe = subscribe;
  }

  static of(...values) {
    return new Observable(observer => {
      values.forEach(v => observer.next(v));
      observer.complete();
    });
  }
}

Observable.of(1, 2, 3).subscribe({
  next: v => log('Value: ' + v),
  complete: () => log('✓ Complete')
});`,
    output: "Observable pattern basics",
  },
  {
    id: 173,
    category: "Async Programming",
    title: "Worker Threads - Background Tasks",
    premium: true,
    code: `log('=== Web Workers ===');
// Simulating worker
const workerCode = 'self.onmessage = e => self.postMessage(e.data * 2)';

// Worker creation
log('Worker would be created with:');
log('const worker = new Worker("worker.js");');
log('worker.postMessage(5);');
log('worker.onmessage = e => log(e.data); // 10');

log('✓ Workers run code in background threads');`,
    output: "Using Web Workers for background tasks",
  },
  {
    id: 174,
    category: "Async Programming",
    title: "Microtask Queue - Event Loop",
    premium: true,
    code: `log('=== Microtask Queue ===');
log('1. Script start');

setTimeout(() => log('4. setTimeout (macrotask)'), 0);

Promise.resolve()
  .then(() => log('2. Promise.then (microtask)'));

log('3. Script end');

log('\\nOrder: Script → Microtasks → Macrotasks');
log('✓ Promises execute before setTimeout');`,
    output: "Understanding microtask vs macrotask queue",
  },
  {
    id: 175,
    category: "Async Programming",
    title: "setImmediate vs nextTick (Node.js)",
    premium: true,
    code: `log('=== Event Loop Phases ===');
log('Node.js event loop phases:');
log('1. timers (setTimeout)');
log('2. pending callbacks');
log('3. idle, prepare');
log('4. poll');
log('5. check (setImmediate)');
log('6. close callbacks');
log('');
log('process.nextTick runs before all phases');
log('Promise.then also runs early (microtask)');

log('✓ Understanding execution order');`,
    output: "Event loop phases in Node.js",
  },
  {
    id: 176,
    category: "Async Programming",
    title: "Streaming Data - ReadableStream",
    premium: true,
    code: `log('=== ReadableStream ===');
const stream = {
  async *[Symbol.asyncIterator]() {
    for (let i = 1; i <= 3; i++) {
      yield new Promise(r => setTimeout(() => r(i), 100));
    }
  }
};

(async () => {
  for await (const chunk of stream) {
    log('Chunk: ' + chunk);
  }
})();

log('✓ Streaming processes data in chunks');`,
    output: "Working with streams",
  },
  {
    id: 177,
    category: "Async Programming",
    title: "Race Conditions - Synchronization",
    premium: true,
    code: `log('=== Race Conditions ===');
let shared = 0;

async function increment() {
  await new Promise(r => setTimeout(r, 0));
  shared++;
}

(async () => {
  await Promise.all([increment(), increment()]);
  log('Shared: ' + shared);
})();

log('Note: Race conditions occur with shared state');
log('✓ Use locks or atomic operations');`,
    output: "Understanding race conditions",
  },
  {
    id: 178,
    category: "Async Programming",
    title: "Mutex/Lock Implementation",
    premium: true,
    code: `log('=== Mutex Pattern ===');
class Mutex {
  constructor() {
    this.locked = false;
    this.queue = [];
  }

  async acquire() {
    return new Promise(resolve => {
      if (!this.locked) {
        this.locked = true;
        resolve();
      } else {
        this.queue.push(resolve);
      }
    });
  }

  release() {
    if (this.queue.length > 0) {
      this.queue.shift()();
    } else {
      this.locked = false;
    }
  }
}

log('✓ Mutex prevents concurrent access');`,
    output: "Implementing mutual exclusion locks",
  },
  {
    id: 179,
    category: "Async Programming",
    title: "Async Generators - Streaming",
    premium: true,
    code: `log('=== Async Generator ===');
async function* asyncRange(start, end) {
  for (let i = start; i <= end; i++) {
    await new Promise(r => setTimeout(r, 50));
    yield i;
  }
}

(async () => {
  for await (const num of asyncRange(1, 3)) {
    log('Num: ' + num);
  }
})();

log('✓ Async generators combine async + generators');`,
    output: "Using async generators",
  },
  {
    id: 180,
    category: "Async Programming",
    title: "Composing Async Functions",
    premium: true,
    code: `log('=== Compose Async ===');
const compose = (...fns) => x =>
  fns.reduce((acc, fn) => fn(acc), x);

async function double(x) {
  return x * 2;
}

async function addTen(x) {
  return x + 10;
}

const pipeline = compose(async x => x + 1, double, addTen);
pipeline(5).then(r => log('Result: ' + r));

log('✓ Function composition works with async');`,
    output: "Composing async functions",
  },
  {
    id: 181,
    category: "Async Programming",
    title: "Memoization of Async Functions",
    premium: true,
    code: `log('=== Async Memoization ===');
function memoizeAsync(fn) {
  const cache = new Map();
  return async (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      log('From cache');
      return cache.get(key);
    }
    const result = await fn(...args);
    cache.set(key, result);
    return result;
  };
}

const memoized = memoizeAsync(async (x) => {
  await new Promise(r => setTimeout(r, 100));
  return x * 2;
});

log('✓ Caching reduces redundant async calls');`,
    output: "Memoizing async function results",
  },
  {
    id: 182,
    category: "Async Programming",
    title: "Pool Pattern - Concurrent Limit",
    premium: true,
    code: `log('=== Connection Pool ===');
class Pool {
  constructor(size) {
    this.available = Array(size).fill(null).map((_, i) => i);
    this.queue = [];
  }

  async acquire() {
    if (this.available.length > 0) {
      return this.available.pop();
    }
    return new Promise(resolve => this.queue.push(resolve));
  }

  release(conn) {
    if (this.queue.length > 0) {
      this.queue.shift()(conn);
    } else {
      this.available.push(conn);
    }
  }
}

log('✓ Pool limits concurrent resource usage');`,
    output: "Implementing connection pooling",
  },
  {
    id: 183,
    category: "Async Programming",
    title: "Backpressure Handling",
    premium: true,
    code: `log('=== Backpressure ===');
async function processData(source, sink) {
  for await (const data of source) {
    while (sink.buffer.length > 1000) {
      await new Promise(r => sink.once('drain', r));
    }
    sink.write(data);
  }
}

log('✓ Backpressure prevents memory overflow');
log('✓ Used in streams to slow down producers');`,
    output: "Handling backpressure in async operations",
  },
  {
    id: 184,
    category: "Async Programming",
    title: "Lazy Evaluation with Async",
    premium: true,
    code: `log('=== Lazy Async ===');
function lazy(fn) {
  let result;
  let computed = false;
  return async () => {
    if (!computed) {
      result = await fn();
      computed = true;
    }
    return result;
  };
}

const lazyFetch = lazy(async () => {
  await new Promise(r => setTimeout(r, 100));
  return 'Data';
});

lazyFetch().then(d => log('Got: ' + d));

log('✓ Lazy evaluation defers computation');`,
    output: "Lazy evaluation with async",
  },
  {
    id: 185,
    category: "Async Programming",
    title: "Transducers - Composable Transforms",
    premium: true,
    code: `log('=== Transducers Concept ===');
const map = f => xf => ({
  '@@transducer/init': () => xf['@@transducer/init']?.(),
  '@@transducer/result': x => xf['@@transducer/result']?.(x),
  '@@transducer/step': (result, input) =>
    xf['@@transducer/step'](result, f(input))
});

log('Transducers:');
log('- Decouple transformation from iteration');
log('- Can be composed without intermediate arrays');
log('- Work with multiple data sources');

log('✓ Advanced async pattern for efficiency');`,
    output: "Introduction to transducers",
  },
  {
    id: 186,
    category: "Async Programming",
    title: "Saga Pattern - Complex Workflows",
    premium: true,
    code: `log('=== Saga Pattern ===');
class Saga {
  async execute() {
    try {
      await this.step1();
      await this.step2();
      await this.step3();
      log('Saga completed');
    } catch(err) {
      log('Rolling back...');
      await this.compensate();
    }
  }

  async step1() { return 'Step1'; }
  async step2() { return 'Step2'; }
  async step3() { return 'Step3'; }
  async compensate() { log('Compensated'); }
}

log('✓ Saga pattern for distributed transactions');`,
    output: "Saga pattern for long-running operations",
  },
  {
    id: 187,
    category: "Async Programming",
    title: "Batch Operations",
    premium: true,
    code: `log('=== Batch Operations ===');
async function batchProcess(items, batchSize, processor) {
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    await Promise.all(batch.map(processor));
    log('Processed batch of ' + batch.length);
  }
}

const items = Array.from({length: 10}, (_, i) => i + 1);
// await batchProcess(items, 3, async i => i * 2);

log('✓ Batch operations improve throughput');`,
    output: "Processing data in batches",
  },
  {
    id: 188,
    category: "Async Programming",
    title: "Exponential Backoff",
    premium: true,
    code: `log('=== Exponential Backoff ===');
async function retryWithBackoff(fn, maxRetries) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch(err) {
      if (i === maxRetries - 1) throw err;
      const delay = Math.pow(2, i) * 100;
      log('Retry in ' + delay + 'ms');
      await new Promise(r => setTimeout(r, delay));
    }
  }
}

log('✓ Exponential backoff avoids overwhelming services');`,
    output: "Exponential backoff retry strategy",
  },
  {
    id: 189,
    category: "Async Programming",
    title: "Structured Concurrency - Task Groups",
    premium: true,
    code: `log('=== Structured Concurrency ===');
class TaskGroup {
  constructor() {
    this.tasks = [];
  }

  add(task) {
    this.tasks.push(task);
  }

  async execute() {
    return Promise.all(this.tasks.map(t => t()));
  }
}

const group = new TaskGroup();
group.add(async () => 'Task 1');
group.add(async () => 'Task 2');

log('✓ Structured concurrency improves safety');`,
    output: "Task groups for structured concurrency",
  },
  {
    id: 190,
    category: "Async Programming",
    title: "Fair Scheduling",
    premium: true,
    code: `log('=== Fair Scheduling ===');
async function fairSchedule(tasks) {
  while (tasks.length > 0) {
    const task = tasks.shift();
    await task();
    await new Promise(r => setTimeout(r, 0));
  }
}

const tasks = [
  async () => log('Task 1'),
  async () => log('Task 2'),
  async () => log('Task 3')
];

fairSchedule(tasks);

log('✓ Fair scheduling prevents starvation');`,
    output: "Fair task scheduling",
  },
  {
    id: 191,
    category: "Async Programming",
    title: "Cancel Token Pattern",
    premium: true,
    code: `log('=== Cancel Token ===');
class CancelToken {
  constructor() {
    this.cancelled = false;
  }

  cancel() {
    this.cancelled = true;
  }

  throwIfCancelled() {
    if (this.cancelled) throw new Error('Cancelled');
  }
}

const token = new CancelToken();
setTimeout(() => token.cancel(), 100);

(async () => {
  try {
    token.throwIfCancelled();
  } catch(e) {
    log('Operation cancelled');
  }
})();

log('✓ Cancel tokens enable cooperative cancellation');`,
    output: "Cancel token pattern",
  },
  {
    id: 192,
    category: "Async Programming",
    title: "Completion Callbacks vs Promises",
    premium: true,
    code: `log('=== Callbacks vs Promises ===');
// Callback style (old)
function oldStyle(cb) {
  setTimeout(() => cb(null, 'result'), 50);
}

// Promise style (modern)
function modern() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('result'), 50);
  });
}

modern().then(r => log('Promise: ' + r));

log('✓ Promises are more readable and composable');`,
    output: "Comparing callbacks and promises",
  },
  {
    id: 193,
    category: "Async Programming",
    title: "Generator-based Async",
    premium: true,
    code: `log('=== Generator Async ===');
function* fetchData() {
  const data = yield new Promise(r =>
    setTimeout(() => r('Data'), 100)
  );
  return data;
}

function promisify(generator) {
  const iterator = generator();
  return Promise.resolve().then(function handle(result) {
    if (result.done) return result.value;
    return Promise.resolve(result.value).then(
      res => handle(iterator.next(res)),
      err => iterator.throw(err)
    );
  });
}

promisify(fetchData).then(r => log('Got: ' + r));

log('✓ Generators can model async (before async/await)');`,
    output: "Generator-based async patterns",
  },
  {
    id: 194,
    category: "Async Programming",
    title: "Monad Pattern - Async Chaining",
    premium: true,
    code: `log('=== Async Monad ===');
class AsyncMonad {
  constructor(promise) {
    this.promise = promise;
  }

  static of(value) {
    return new AsyncMonad(Promise.resolve(value));
  }

  flatMap(fn) {
    return new AsyncMonad(
      this.promise.then(val => fn(val).promise)
    );
  }

  map(fn) {
    return this.flatMap(val => AsyncMonad.of(fn(val)));
  }
}

log('✓ Monads provide elegant async composition');`,
    output: "Monadic async operations",
  },
  {
    id: 195,
    category: "Async Programming",
    title: "Resilience Patterns Summary",
    premium: true,
    code: `log('=== Resilience Patterns ===');
log('1. Retry - Try again on failure');
log('2. Timeout - Stop if too slow');
log('3. Circuit Breaker - Stop if failing repeatedly');
log('4. Fallback - Use alternative on failure');
log('5. Bulkhead - Isolate resources');
log('6. Rate Limit - Control request rate');
log('');
log('✓ Combine patterns for robust systems');`,
    output: "Summary of resilience patterns",
  },
  {
    id: 196,
    category: "Async Programming",
    title: "Request Deduplication",
    premium: true,
    code: `log('=== Request Deduplication ===');
class DedupCache {
  constructor() {
    this.cache = new Map();
  }

  async fetch(key, fn) {
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    const promise = fn();
    this.cache.set(key, promise);
    return promise;
  }
}

log('✓ Deduplication prevents duplicate requests');`,
    output: "Request deduplication cache",
  },
  {
    id: 197,
    category: "Async Programming",
    title: "Coroutines - Manual Control Flow",
    premium: true,
    code: `log('=== Coroutines ===');
function coroutine(generatorFn) {
  return function(...args) {
    const gen = generatorFn(...args);
    function handle(result) {
      if (result.done) return Promise.resolve(result.value);
      return Promise.resolve(result.value)
        .then(r => handle(gen.next(r)))
        .catch(e => gen.throw(e));
    }
    return handle(gen.next());
  };
}

log('✓ Coroutines offer more control than async/await');`,
    output: "Coroutine pattern",
  },
  {
    id: 198,
    category: "Async Programming",
    title: "Async Validation",
    premium: true,
    code: `log('=== Async Validation ===');
async function validateUsername(username) {
  if (username.length < 3) {
    throw new Error('Too short');
  }
  // Would check DB for uniqueness
  return true;
}

(async () => {
  try {
    await validateUsername('al');
  } catch(err) {
    log('Validation failed: ' + err.message);
  }
})();

log('✓ Async validation for complex rules');`,
    output: "Async validation functions",
  },
  {
    id: 199,
    category: "Async Programming",
    title: "Async Caching Strategy",
    premium: true,
    code: `log('=== Async Caching ===');
class AsyncCache {
  constructor(ttl = 60000) {
    this.cache = new Map();
    this.ttl = ttl;
  }

  async get(key, fn) {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.time < this.ttl) {
      return cached.value;
    }
    const value = await fn();
    this.cache.set(key, {value, time: Date.now()});
    return value;
  }
}

log('✓ TTL-based async caching');`,
    output: "Async cache with TTL",
  },
  {
    id: 200,
    category: "Async Programming",
    title: "Async Multicast - Share Computation",
    premium: true,
    code: `log('=== Async Multicast ===');
class Multicast {
  constructor(promise) {
    this.promise = promise;
    this.subscribers = [];
  }

  subscribe(fn) {
    this.promise.then(fn);
  }
}

const shared = new Multicast(
  new Promise(r => setTimeout(() => r('Data'), 100))
);

shared.subscribe(d => log('Sub1: ' + d));
shared.subscribe(d => log('Sub2: ' + d));

log('✓ Multicast shares single computation');`,
    output: "Multicast async operations",
  },

  // 281-310: Algorithms & Data Structures
  {
    id: 281,
    category: "Algorithms & Data Structures",
    title: "Linear Search Algorithm",
    premium: true,
    code: `log('=== Linear Search ===');
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
const arr = [10, 20, 30, 40, 50];
log('Search 30: ' + linearSearch(arr, 30));
log('Search 99: ' + linearSearch(arr, 99));
log('Time: O(n), Space: O(1)');
log('✓ Linear search checks each element');`,
    output: "Linear search algorithm example",
  },
  {
    id: 282,
    category: "Algorithms & Data Structures",
    title: "Binary Search Algorithm",
    premium: true,
    code: `log('=== Binary Search ===');
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
const arr = [10, 20, 30, 40, 50];
log('Search 30: ' + binarySearch(arr, 30));
log('Search 99: ' + binarySearch(arr, 99));
log('Time: O(log n), Space: O(1)');
log('✓ Binary search divides search space');`,
    output: "Binary search algorithm example",
  },
  {
    id: 283,
    category: "Algorithms & Data Structures",
    title: "Bubble Sort Algorithm",
    premium: true,
    code: `log('=== Bubble Sort ===');
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
const arr = [64, 34, 25, 12, 22, 11, 90];
log('Sorted: ' + JSON.stringify(bubbleSort([...arr])));
log('Time: O(n²), Space: O(1)');
log('✓ Bubble sort compares adjacent elements');`,
    output: "Bubble sort algorithm example",
  },
  {
    id: 284,
    category: "Algorithms & Data Structures",
    title: "Quick Sort Algorithm",
    premium: true,
    code: `log('=== Quick Sort ===');
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const mid = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  return [...quickSort(left), ...mid, ...quickSort(right)];
}
const arr = [64, 34, 25, 12, 22, 11, 90];
log('Sorted: ' + JSON.stringify(quickSort(arr)));
log('Time: O(n log n), Space: O(n)');
log('✓ Quick sort uses divide and conquer');`,
    output: "Quick sort algorithm example",
  },
  {
    id: 285,
    category: "Algorithms & Data Structures",
    title: "Merge Sort Algorithm",
    premium: true,
    code: `log('=== Merge Sort ===');
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  return result.concat(left, right);
}
const arr = [64, 34, 25, 12, 22, 11, 90];
log('Sorted: ' + JSON.stringify(mergeSort(arr)));
log('Time: O(n log n), Space: O(n)');
log('✓ Merge sort divides then merges');`,
    output: "Merge sort algorithm example",
  },
  {
    id: 286,
    category: "Algorithms & Data Structures",
    title: "Insertion Sort Algorithm",
    premium: true,
    code: `log('=== Insertion Sort ===');
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
const arr = [64, 34, 25, 12, 22, 11, 90];
log('Sorted: ' + JSON.stringify(insertionSort([...arr])));
log('Time: O(n²), Space: O(1)');
log('✓ Insertion sort builds sorted array');`,
    output: "Insertion sort algorithm example",
  },
  {
    id: 287,
    category: "Algorithms & Data Structures",
    title: "Heap Sort Algorithm",
    premium: true,
    code: `log('=== Heap Sort ===');
function heapSort(arr) {
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  return arr;
}
function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}
log('✓ Heap sort uses heap structure');
log('Time: O(n log n), Space: O(1)');`,
    output: "Heap sort algorithm example",
  },
  {
    id: 288,
    category: "Algorithms & Data Structures",
    title: "Linked List Data Structure",
    premium: true,
    code: `log('=== Linked List ===');
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = node;
    }
  }
  display() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + ' → ';
      current = current.next;
    }
    return result + 'null';
  }
}
const list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);
log('List: ' + list.display());
log('✓ Linked list chains nodes');`,
    output: "Linked list data structure",
  },
  {
    id: 289,
    category: "Algorithms & Data Structures",
    title: "Stack Data Structure",
    premium: true,
    code: `log('=== Stack ===');
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
log('Peek: ' + stack.peek());
log('Pop: ' + stack.pop());
log('Size: ' + stack.size());
log('✓ Stack is LIFO (Last In First Out)');`,
    output: "Stack data structure",
  },
  {
    id: 290,
    category: "Algorithms & Data Structures",
    title: "Queue Data Structure",
    premium: true,
    code: `log('=== Queue ===');
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  front() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
log('Front: ' + queue.front());
log('Dequeue: ' + queue.dequeue());
log('Size: ' + queue.size());
log('✓ Queue is FIFO (First In First Out)');`,
    output: "Queue data structure",
  },
  {
    id: 291,
    category: "Algorithms & Data Structures",
    title: "Binary Tree Traversal",
    premium: true,
    code: `log('=== Binary Tree Traversal ===');
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function inOrder(node) {
  if (!node) return [];
  return [...inOrder(node.left), node.value, ...inOrder(node.right)];
}
function preOrder(node) {
  if (!node) return [];
  return [node.value, ...preOrder(node.left), ...preOrder(node.right)];
}
function postOrder(node) {
  if (!node) return [];
  return [...postOrder(node.left), ...postOrder(node.right), node.value];
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
log('Inorder: ' + JSON.stringify(inOrder(root)));
log('Preorder: ' + JSON.stringify(preOrder(root)));
log('Postorder: ' + JSON.stringify(postOrder(root)));
log('✓ Tree traversal visits all nodes');`,
    output: "Binary tree traversal methods",
  },
  {
    id: 292,
    category: "Algorithms & Data Structures",
    title: "Hash Map Implementation",
    premium: true,
    code: `log('=== Hash Map ===');
class HashMap {
  constructor() {
    this.map = {};
  }
  set(key, value) {
    this.map[key] = value;
  }
  get(key) {
    return this.map[key];
  }
  has(key) {
    return key in this.map;
  }
  delete(key) {
    delete this.map[key];
  }
  size() {
    return Object.keys(this.map).length;
  }
}
const map = new HashMap();
map.set('name', 'Alice');
map.set('age', 30);
log('Get name: ' + map.get('name'));
log('Has age: ' + map.has('age'));
log('Size: ' + map.size());
log('✓ Hash map for O(1) lookups');`,
    output: "Hash map data structure",
  },
  {
    id: 293,
    category: "Algorithms & Data Structures",
    title: "Graph Representation",
    premium: true,
    code: `log('=== Graph Representation ===');
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  getNeighbors(vertex) {
    return this.adjacencyList[vertex];
  }
}
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
log('A neighbors: ' + JSON.stringify(graph.getNeighbors('A')));
log('B neighbors: ' + JSON.stringify(graph.getNeighbors('B')));
log('✓ Graph represents connections');`,
    output: "Graph data structure",
  },
  {
    id: 294,
    category: "Algorithms & Data Structures",
    title: "Depth-First Search (DFS)",
    premium: true,
    code: `log('=== DFS ===');
function dfs(graph, vertex, visited = new Set()) {
  visited.add(vertex);
  const result = [vertex];
  for (const neighbor of graph[vertex]) {
    if (!visited.has(neighbor)) {
      result.push(...dfs(graph, neighbor, visited));
    }
  }
  return result;
}
const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D'],
  'C': ['A', 'E'],
  'D': ['B'],
  'E': ['C']
};
log('DFS from A: ' + JSON.stringify(dfs(graph, 'A')));
log('Time: O(V + E)');
log('✓ DFS explores deeply');`,
    output: "Depth-first search algorithm",
  },
  {
    id: 295,
    category: "Algorithms & Data Structures",
    title: "Breadth-First Search (BFS)",
    premium: true,
    code: `log('=== BFS ===');
function bfs(graph, start) {
  const queue = [start];
  const visited = new Set([start]);
  const result = [];
  while (queue.length > 0) {
    const vertex = queue.shift();
    result.push(vertex);
    for (const neighbor of graph[vertex]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return result;
}
const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D'],
  'C': ['A', 'E'],
  'D': ['B'],
  'E': ['C']
};
log('BFS from A: ' + JSON.stringify(bfs(graph, 'A')));
log('Time: O(V + E)');
log('✓ BFS explores level by level');`,
    output: "Breadth-first search algorithm",
  },
  {
    id: 296,
    category: "Algorithms & Data Structures",
    title: "Dynamic Programming - Coin Change",
    premium: true,
    code: `log('=== Dynamic Programming ===');
function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}
const coins = [1, 2, 5];
log('Coins for 5: ' + coinChange(coins, 5));
log('Coins for 10: ' + coinChange(coins, 10));
log('Time: O(amount * coins)');
log('✓ DP stores intermediate results');`,
    output: "Dynamic programming example",
  },
  {
    id: 297,
    category: "Algorithms & Data Structures",
    title: "Sliding Window Technique",
    premium: true,
    code: `log('=== Sliding Window ===');
function maxSumSubarray(arr, k) {
  let maxSum = 0;
  let currentSum = 0;
  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }
  maxSum = currentSum;
  for (let i = k; i < arr.length; i++) {
    currentSum = currentSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
const arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
log('Max sum of 4 elements: ' + maxSumSubarray(arr, 4));
log('Time: O(n)');
log('✓ Sliding window avoids redundant work');`,
    output: "Sliding window technique",
  },
  {
    id: 298,
    category: "Algorithms & Data Structures",
    title: "Two Pointer Technique",
    premium: true,
    code: `log('=== Two Pointer ===');
function twoSum(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  return [-1, -1];
}
function removeDuplicates(arr) {
  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      j++;
      arr[j] = arr[i];
    }
  }
  return j + 1;
}
const arr = [1, 2, 3, 4, 5];
log('Two sum target 9: ' + JSON.stringify(twoSum(arr, 9)));
log('✓ Two pointer solves efficiently');`,
    output: "Two pointer technique",
  },
  {
    id: 299,
    category: "Algorithms & Data Structures",
    title: "Recursion - Fibonacci",
    premium: true,
    code: `log('=== Recursion ===');
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
function fibonacciMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}
log('Fibonacci(5) simple: ' + fibonacci(5));
log('Fibonacci(10) memoized: ' + fibonacciMemo(10));
log('✓ Recursion breaks problem into subproblems');
log('✓ Memoization avoids recalculation');`,
    output: "Recursion and memoization",
  },
  {
    id: 300,
    category: "Algorithms & Data Structures",
    title: "Backtracking - Permutations",
    premium: true,
    code: `log('=== Backtracking ===');
function permutations(arr) {
  if (arr.length <= 1) return [arr];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
    const remainingPerms = permutations(remaining);
    for (const perm of remainingPerms) {
      result.push([current, ...perm]);
    }
  }
  return result;
}
const arr = [1, 2, 3];
const perms = permutations(arr);
log('Permutations count: ' + perms.length);
log('First: ' + JSON.stringify(perms[0]));
log('Last: ' + JSON.stringify(perms[perms.length - 1]));
log('✓ Backtracking explores all possibilities');`,
    output: "Backtracking algorithm",
  },
  {
    id: 301,
    category: "Algorithms & Data Structures",
    title: "Kadane's Algorithm - Max Subarray",
    premium: true,
    code: `log('=== Kadane Algorithm ===');
function maxSubarray(arr) {
  let maxCurrent = arr[0];
  let maxGlobal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }
  return maxGlobal;
}
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
log('Max subarray sum: ' + maxSubarray(arr));
log('Answer: [4, -1, 2, 1] = 6');
log('Time: O(n), Space: O(1)');
log('✓ Kadane finds max sum efficiently');`,
    output: "Kadane's algorithm for maximum subarray",
  },
  {
    id: 302,
    category: "Algorithms & Data Structures",
    title: "Edit Distance - Levenshtein",
    premium: true,
    code: `log('=== Edit Distance ===');
function editDistance(s1, s2) {
  const m = s1.length, n = s2.length;
  const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[m][n];
}
log('Distance "kitten" to "sitting": ' + editDistance('kitten', 'sitting'));
log('Time: O(m*n)');
log('✓ Measures string similarity');`,
    output: "Edit distance algorithm",
  },
  {
    id: 303,
    category: "Algorithms & Data Structures",
    title: "Longest Common Subsequence",
    premium: true,
    code: `log('=== LCS ===');
function lcs(s1, s2) {
  const m = s1.length, n = s2.length;
  const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(''));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + s1[i - 1];
      } else {
        dp[i][j] = dp[i - 1][j].length > dp[i][j - 1].length ?
                   dp[i - 1][j] : dp[i][j - 1];
      }
    }
  }
  return dp[m][n];
}
log('LCS of "AGGTAB" and "GXTXAYB": ' + lcs('AGGTAB', 'GXTXAYB'));
log('Time: O(m*n)');
log('✓ Finds longest matching subsequence');`,
    output: "Longest common subsequence",
  },
  {
    id: 304,
    category: "Algorithms & Data Structures",
    title: "KMP Pattern Matching",
    premium: true,
    code: `log('=== KMP ===');
function buildLPS(pattern) {
  const lps = Array(pattern.length).fill(0);
  let len = 0, i = 1;
  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      lps[i] = ++len;
      i++;
    } else if (len !== 0) {
      len = lps[len - 1];
    } else {
      lps[i] = 0;
      i++;
    }
  }
  return lps;
}
function kmpSearch(text, pattern) {
  const lps = buildLPS(pattern);
  let i = 0, j = 0, count = 0;
  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++; j++;
    }
    if (j === pattern.length) {
      count++;
      j = lps[j - 1];
    } else if (i < text.length && text[i] !== pattern[j]) {
      j = j !== 0 ? lps[j - 1] : 0;
      if (j === 0 && text[i] !== pattern[0]) i++;
    }
  }
  return count;
}
log('Occurrences of "AB" in "AABBAAB": ' + kmpSearch('AABBAAB', 'AB'));
log('Time: O(n + m)');
log('✓ KMP is efficient pattern search');`,
    output: "KMP pattern matching algorithm",
  },
  {
    id: 305,
    category: "Algorithms & Data Structures",
    title: "Dijkstra's Shortest Path",
    premium: true,
    code: `log('=== Dijkstra ===');
function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();
  for (const vertex in graph) {
    distances[vertex] = Infinity;
  }
  distances[start] = 0;
  for (let i = 0; i < Object.keys(graph).length; i++) {
    let minVertex = null;
    for (const vertex in distances) {
      if (!visited.has(vertex) &&
          (minVertex === null || distances[vertex] < distances[minVertex])) {
        minVertex = vertex;
      }
    }
    if (minVertex === null || distances[minVertex] === Infinity) break;
    visited.add(minVertex);
    for (const [neighbor, weight] of Object.entries(graph[minVertex] || {})) {
      distances[neighbor] = Math.min(distances[neighbor],
                                     distances[minVertex] + weight);
    }
  }
  return distances;
}
log('✓ Dijkstra finds shortest paths');
log('Time: O(V²)');`,
    output: "Dijkstra's shortest path algorithm",
  },
  {
    id: 306,
    category: "Algorithms & Data Structures",
    title: "Trie Data Structure",
    premium: true,
    code: `log('=== Trie ===');
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }
  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isEndOfWord;
  }
}
const trie = new Trie();
trie.insert('cat');
trie.insert('car');
log('Search "cat": ' + trie.search('cat'));
log('Search "car": ' + trie.search('car'));
log('Search "dog": ' + trie.search('dog'));
log('✓ Trie for efficient prefix searches');`,
    output: "Trie data structure",
  },
  {
    id: 307,
    category: "Algorithms & Data Structures",
    title: "Heap Data Structure",
    premium: true,
    code: `log('=== Heap ===');
class MinHeap {
  constructor() {
    this.heap = [];
  }
  insert(val) {
    this.heap.push(val);
    let idx = this.heap.length - 1;
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx] <= this.heap[idx]) break;
      [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
      idx = parentIdx;
    }
  }
  extractMin() {
    if (this.heap.length === 0) return null;
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      let idx = 0;
      while (true) {
        const left = 2 * idx + 1;
        const right = 2 * idx + 2;
        let smallest = idx;
        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;
        if (smallest === idx) break;
        [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
        idx = smallest;
      }
    }
    return min;
  }
}
const heap = new MinHeap();
[3, 1, 4, 1, 5].forEach(v => heap.insert(v));
log('Extract min: ' + heap.extractMin());
log('✓ Heap maintains order efficiently');`,
    output: "Heap data structure",
  },
  {
    id: 308,
    category: "Algorithms & Data Structures",
    title: "Union-Find Disjoint Set",
    premium: true,
    code: `log('=== Union-Find ===');
class UnionFind {
  constructor(n) {
    this.parent = Array(n).fill(0).map((_, i) => i);
    this.rank = Array(n).fill(0);
  }
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
  union(x, y) {
    const px = this.find(x);
    const py = this.find(y);
    if (px === py) return;
    if (this.rank[px] < this.rank[py]) {
      this.parent[px] = py;
    } else if (this.rank[px] > this.rank[py]) {
      this.parent[py] = px;
    } else {
      this.parent[py] = px;
      this.rank[px]++;
    }
  }
  connected(x, y) {
    return this.find(x) === this.find(y);
  }
}
const uf = new UnionFind(5);
uf.union(0, 1);
uf.union(1, 2);
log('0 and 2 connected: ' + uf.connected(0, 2));
log('0 and 3 connected: ' + uf.connected(0, 3));
log('✓ Union-Find for connectivity');`,
    output: "Union-Find disjoint set",
  },
  {
    id: 309,
    category: "Algorithms & Data Structures",
    title: "Topological Sort",
    premium: true,
    code: `log('=== Topological Sort ===');
function topologicalSort(graph, vertices) {
  const visited = new Set();
  const stack = [];
  function dfs(v) {
    visited.add(v);
    for (const neighbor of graph[v] || []) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
    stack.unshift(v);
  }
  for (const vertex of vertices) {
    if (!visited.has(vertex)) {
      dfs(vertex);
    }
  }
  return stack;
}
const graph = {
  5: [2, 0],
  4: [0, 1],
  2: [3],
  3: [1]
};
const result = topologicalSort(graph, [5, 4, 2, 3, 1, 0]);
log('Topological order: ' + JSON.stringify(result));
log('✓ Topological sort for DAGs');`,
    output: "Topological sort algorithm",
  },
  {
    id: 310,
    category: "Algorithms & Data Structures",
    title: "N-Queens Problem",
    premium: true,
    code: `log('=== N-Queens ===');
function nQueens(n) {
  const solutions = [];
  const board = Array(n).fill(null).map(() => Array(n).fill('.'));
  function isSafe(row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
    }
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }
    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }
    return true;
  }
  function solve(row) {
    if (row === n) {
      solutions.push(board.map(r => r.join('')));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = 'Q';
        solve(row + 1);
        board[row][col] = '.';
      }
    }
  }
  solve(0);
  return solutions;
}
const result = nQueens(4);
log('Solutions for 4-Queens: ' + result.length);
log('✓ N-Queens uses backtracking');`,
    output: "N-Queens problem solution",
  },

  // 311-350: Security & Performance
  {
    id: 311,
    category: "Security & Performance",
    title: "XSS Prevention Techniques",
    premium: true,
    code: `log('=== XSS Prevention ===');
log('Cross-Site Scripting (XSS) Attack:');
log('  Attacker injects: <img src=x onerror="alert(\\'XSS\\')">');
log('');
log('Prevention Methods:');
log('1. Escape HTML special characters:');
log('  & → &amp;  < → &lt;  > → &gt;');
log('');
log('2. Content Security Policy (CSP):');
log('  <meta http-equiv="Content-Security-Policy"');
log('       content="default-src \'self\';">');
log('');
log('3. Use textContent instead of innerHTML:');
log('  element.textContent = userInput; // Safe');
log('  element.innerHTML = userInput; // Unsafe');
log('');
log('4. Sanitize user input:');
log('const sanitize = (str) => {');
log('  const div = document.createElement(\'div\');');
log('  div.textContent = str;');
log('  return div.innerHTML;');
log('};');
log('✓ XSS prevention protects users');`,
    output: "XSS prevention techniques",
  },
  {
    id: 312,
    category: "Security & Performance",
    title: "CSRF Protection",
    premium: true,
    code: `log('=== CSRF Protection ===');
log('Cross-Site Request Forgery Protection:');
log('');
log('Attack Pattern:');
log('1. User logged into bank.com');
log('2. Visits attacker.com (in same browser)');
log('3. attacker.com makes request to bank.com');
log('4. Request succeeds with user\'s cookies');
log('');
log('Defense: CSRF Tokens');
log('Server generates: token = random()');
log('HTML form includes: <input name="csrf" value="token">');
log('Server verifies token matches session');
log('');
log('Double Submit Cookie:');
log('1. Set cookie: CSRF-Token=abc123');
log('2. JavaScript reads cookie');
log('3. POST request includes: X-CSRF-Token: abc123');
log('4. Server compares cookie vs header');
log('');
log('✓ CSRF tokens prevent forged requests');`,
    output: "CSRF protection methods",
  },
  {
    id: 313,
    category: "Security & Performance",
    title: "SQL Injection Prevention",
    premium: true,
    code: `log('=== SQL Injection Prevention ===');
log('Vulnerable SQL:');
log('const query = "SELECT * FROM users WHERE id=" + userId;');
log('If userId = "1; DROP TABLE users;--"');
log('Query becomes: SELECT * FROM users WHERE id=1; DROP TABLE users;--');
log('');
log('Prevention: Use Parameterized Queries');
log('const query = "SELECT * FROM users WHERE id = ?";');
log('db.query(query, [userId]); // Parameter binding');
log('');
log('ORM Prevention (Sequelize, Prisma):');
log('User.findByPk(userId); // Parameterized automatically');
log('');
log('Input Validation:');
log('const validateId = (id) => {');
log('  return /^\\d+$/.test(id) ? id : null;');
log('};');
log('');
log('✓ Parameterized queries prevent injection');`,
    output: "SQL injection prevention",
  },
  {
    id: 314,
    category: "Security & Performance",
    title: "Content Security Policy (CSP)",
    premium: true,
    code: `log('=== Content Security Policy ===');
log('CSP Header Example:');
log('Content-Security-Policy:');
log('  default-src \'self\';');
log('  script-src \'self\' trusted.com;');
log('  style-src \'self\' https:;');
log('  img-src *;');
log('  font-src \'self\' data:;');
log('');
log('Policy Directives:');
log('  default-src: Default for all resources');
log('  script-src: JavaScript allowed sources');
log('  style-src: CSS allowed sources');
log('  img-src: Image allowed sources');
log('  font-src: Font allowed sources');
log('');
log('Keywords:');
log('  \'self\': Same origin only');
log('  \'unsafe-inline\': Inline scripts allowed');
log('  \'unsafe-eval\': eval() allowed');
log('  *: Allow from any source');
log('');
log('✓ CSP prevents inline attacks');`,
    output: "Content Security Policy setup",
  },
  {
    id: 315,
    category: "Security & Performance",
    title: "JWT Authentication",
    premium: true,
    code: `log('=== JWT Authentication ===');
log('JWT Structure: header.payload.signature');
log('');
log('Header: {"alg":"HS256","typ":"JWT"}');
log('Payload: {"userId":123,"role":"admin","iat":1234}');
log('Signature: HMACSHA256(header.payload, secret)');
log('');
log('Token Example:');
log('eyJhbGc...(header)');
log('.eyJ1c2...(payload)');
log('.SflKx...(signature)');
log('');
log('Verification:');
log('1. Split token into 3 parts');
log('2. Decode header and payload');
log('3. Recalculate signature with secret');
log('4. Compare calculated vs provided signature');
log('');
log('Usage:');
log('Authorization: Bearer eyJhbGc...');
log('');
log('✓ JWT enables stateless authentication');`,
    output: "JWT token authentication",
  },
  {
    id: 316,
    category: "Security & Performance",
    title: "Password Hashing - bcrypt",
    premium: true,
    code: `log('=== Password Hashing ===');
log('Never store plaintext passwords!');
log('');
log('bcrypt Example:');
log('const bcrypt = require(\'bcrypt\');');
log('');
log('Hash password:');
log('const salt = await bcrypt.genSalt(10);');
log('const hash = await bcrypt.hash(password, salt);');
log('store(userId, hash); // Store hash only');
log('');
log('Verify password:');
log('const isMatch = await bcrypt.compare(password, hash);');
log('if (isMatch) { authenticate(); }');
log('');
log('Why bcrypt?');
log('  Slow by design (prevents brute force)');
log('  Includes salt (prevents rainbow tables)');
log('  Adaptive cost factor (future-proof)');
log('');
log('Cost factor 10 = ~10ms per hash (2024)');
log('✓ bcrypt secures passwords');`,
    output: "Password hashing with bcrypt",
  },
  {
    id: 317,
    category: "Security & Performance",
    title: "HTTPS and TLS Certificates",
    premium: true,
    code: `log('=== HTTPS & TLS ===');
log('HTTPS Process:');
log('1. Client requests secure connection');
log('2. Server provides TLS certificate');
log('3. Certificate verified (trusted CA)');
log('4. Symmetric key negotiated');
log('5. Data encrypted with symmetric key');
log('');
log('Certificate Details:');
log('Domain: example.com');
log('Issuer: DigiCert');
log('Expires: 2025-12-31');
log('Public Key: (for encryption)');
log('');
log('Server Setup:');
log('const https = require(\'https\');');
log('const fs = require(\'fs\');');
log('const options = {');
log('  key: fs.readFileSync(\'key.pem\'),');
log('  cert: fs.readFileSync(\'cert.pem\')');
log('};');
log('https.createServer(options, app).listen(443);');
log('');
log('✓ TLS encrypts data in transit');`,
    output: "HTTPS and TLS certificates",
  },
  {
    id: 318,
    category: "Security & Performance",
    title: "Rate Limiting Advanced",
    premium: true,
    code: `log('=== Rate Limiting Advanced ===');
log('Sliding Window Log:');
log('1. Store request timestamps');
log('2. Remove old timestamps');
log('3. Count remaining requests');
log('');
log('Implementation:');
log('class RateLimiter {');
log('  constructor(maxReqs, windowMs) {');
log('    this.maxReqs = maxReqs;');
log('    this.windowMs = windowMs;');
log('    this.timestamps = [];');
log('  }');
log('  isAllowed() {');
log('    const now = Date.now();');
log('    this.timestamps =');
log('      this.timestamps.filter(');
log('        t => now - t < this.windowMs');
log('      );');
log('    if (this.timestamps.length < this.maxReqs) {');
log('      this.timestamps.push(now);');
log('      return true;');
log('    }');
log('    return false;');
log('  }');
log('}');
log('✓ Rate limiting stops abuse');`,
    output: "Advanced rate limiting",
  },
  {
    id: 319,
    category: "Security & Performance",
    title: "Memoization Patterns",
    premium: true,
    code: `log('=== Memoization ===');
log('Cache expensive function results');
log('');
log('Simple Memoization:');
log('function fib(n, memo = {}) {');
log('  if (n in memo) return memo[n];');
log('  if (n <= 1) return n;');
log('  memo[n] = fib(n - 1, memo)');
log('           + fib(n - 2, memo);');
log('  return memo[n];');
log('}');
log('');
log('Generic Memoization Decorator:');
log('function memoize(fn) {');
log('  const cache = {};');
log('  return function(...args) {');
log('    const key = JSON.stringify(args);');
log('    if (key in cache)');
log('      return cache[key];');
log('    const result = fn(...args);');
log('    cache[key] = result;');
log('    return result;');
log('  };');
log('}');
log('');
log('Usage:');
log('const memoFib = memoize(fib);');
log('✓ Memoization improves performance');`,
    output: "Memoization for performance",
  },
  {
    id: 320,
    category: "Security & Performance",
    title: "Debouncing Deep Dive",
    premium: true,
    code: `log('=== Debouncing ===');
log('Wait for user to STOP action before executing');
log('');
log('Use Cases:');
log('  Search input: Wait for typing to stop');
log('  Window resize: Wait for resize to complete');
log('  Auto-save: Wait for editing to stop');
log('');
log('Implementation:');
log('function debounce(fn, delay) {');
log('  let timeoutId;');
log('  return function(...args) {');
log('    clearTimeout(timeoutId);');
log('    timeoutId = setTimeout(');
log('      () => fn(...args),');
log('      delay');
log('    );');
log('  };');
log('}');
log('');
log('Usage:');
log('const search = debounce((term) => {');
log('  api.search(term);');
log('}, 300);');
log('');
log('input.addEventListener(\'input\', (e) => {');
log('  search(e.target.value);');
log('});');
log('✓ Debouncing reduces function calls');`,
    output: "Debouncing technique",
  },
  {
    id: 321,
    category: "Security & Performance",
    title: "Throttling Deep Dive",
    premium: true,
    code: `log('=== Throttling ===');
log('Execute at most once every N milliseconds');
log('');
log('Use Cases:');
log('  Scroll events: Limit checks to 16ms');
log('  Mouse move: Track at 60fps max');
log('  Button clicks: Prevent rapid fire');
log('');
log('Implementation:');
log('function throttle(fn, delay) {');
log('  let lastCall = 0;');
log('  return function(...args) {');
log('    const now = Date.now();');
log('    if (now - lastCall >= delay) {');
log('      lastCall = now;');
log('      fn(...args);');
log('    }');
log('  };');
log('}');
log('');
log('Usage:');
log('const handleScroll = throttle(() => {');
log('  log(\'Scroll position: \' +');
log('      window.scrollY);');
log('}, 100);');
log('');
log('window.addEventListener(\'scroll\',');
log('  handleScroll);');
log('✓ Throttling maintains consistent rate');`,
    output: "Throttling technique",
  },
  {
    id: 322,
    category: "Security & Performance",
    title: "Image Optimization",
    premium: true,
    code: `log('=== Image Optimization ===');
log('Techniques to reduce image size:');
log('');
log('Format Selection:');
log('  JPEG: Photos (compression)');
log('  PNG: Graphics (lossless)');
log('  WebP: Modern (better compression)');
log('  SVG: Icons (scalable)');
log('');
log('Responsive Images:');
log('<img srcset=');
log('  "small.jpg 480w,');
log('   medium.jpg 800w,');
log('   large.jpg 1200w"');
log('  src="medium.jpg">');
log('');
log('Lazy Loading:');
log('<img loading="lazy" src="image.jpg">');
log('');
log('Picture Element:');
log('<picture>');
log('  <source srcset="mobile.png"');
log('          media="(max-width: 600px)">');
log('  <source srcset="desktop.png">');
log('  <img src="default.png">');
log('</picture>');
log('✓ Image optimization reduces bandwidth');`,
    output: "Image optimization techniques",
  },
  {
    id: 323,
    category: "Security & Performance",
    title: "Caching Headers",
    premium: true,
    code: `log('=== HTTP Caching Headers ===');
log('Cache-Control Directives:');
log('');
log('max-age=3600:');
log('  Cache for 1 hour (3600 seconds)');
log('');
log('public:');
log('  Browser AND CDN can cache');
log('');
log('private:');
log('  Only browser cache (not CDN)');
log('');
log('no-cache:');
log('  Always revalidate with server');
log('  (Not the same as no-store)');
log('');
log('no-store:');
log('  Never cache (sensitive data)');
log('');
log('must-revalidate:');
log('  Cache expired = MUST revalidate');
log('');
log('Example Headers:');
log('Cache-Control: public, max-age=31536000');
log('  (1 year for static assets)');
log('');
log('Cache-Control: private, max-age=0');
log('  (No-cache equivalent)');
log('✓ Caching headers improve performance');`,
    output: "HTTP caching headers",
  },
  {
    id: 324,
    category: "Security & Performance",
    title: "Compression - Gzip",
    premium: true,
    code: `log('=== Gzip Compression ===');
log('Reduce response size by 60-80%');
log('');
log('Server Setup (Node.js):');
log('const compression = require(');
log('  \'compression\'');
log(');');
log('app.use(compression());');
log('');
log('Response Headers:');
log('Accept-Encoding: gzip, deflate');
log('Content-Encoding: gzip');
log('');
log('Before: text.js = 100KB');
log('After (gzip): text.js = 20KB');
log('Savings: 80%');
log('');
log('What to Compress:');
log('✓ Text (HTML, CSS, JS)');
log('✓ JSON responses');
log('✗ Already compressed (PNG, JPEG)');
log('✗ Video files');
log('');
log('nginx Configuration:');
log('gzip on;');
log('gzip_types text/plain');
log('           text/css');
log('           application/javascript;');
log('✓ Gzip saves bandwidth');`,
    output: "Gzip compression",
  },
  {
    id: 325,
    category: "Security & Performance",
    title: "Web Workers Tasks",
    premium: true,
    code: `log('=== Web Workers ===');
log('Run JavaScript on separate thread');
log('');
log('Main Thread (main.js):');
log('const worker = new Worker(');
log('  \'worker.js\'');
log(');');
log('');
log('Send data:');
log('worker.postMessage({');
log('  task: \'calculate\',');
log('  data: [1,2,3,4,5]');
log('});');
log('');
log('Receive result:');
log('worker.onmessage = (event) => {');
log('  const result = event.data;');
log('  log(\'Result: \' + result);');
log('};');
log('');
log('Worker Thread (worker.js):');
log('self.onmessage = (event) => {');
log('  const data = event.data;');
log('  const sum = data.reduce(');
log('    (a, b) => a + b, 0');
log('  );');
log('  self.postMessage(sum);');
log('};');
log('');
log('✓ Workers prevent UI blocking');`,
    output: "Web Workers for threading",
  },
  {
    id: 326,
    category: "Security & Performance",
    title: "Browser DevTools Performance",
    premium: true,
    code: `log('=== Performance Profiling ===');
log('Use Chrome DevTools Performance Tab:');
log('');
log('1. Open DevTools (F12)');
log('2. Go to Performance tab');
log('3. Click Record button');
log('4. Interact with page');
log('5. Click Stop');
log('');
log('Analyze:');
log('  Blue: HTML parsing');
log('  Yellow: JavaScript');
log('  Purple: Style/Layout');
log('  Green: Paint/Rendering');
log('');
log('Key Metrics:');
log('  FCP: First Contentful Paint');
log('  LCP: Largest Contentful Paint');
log('  FID: First Input Delay');
log('  CLS: Cumulative Layout Shift');
log('');
log('Flame Chart Shows:');
log('  Function call hierarchy');
log('  Execution time per function');
log('  Bottleneck identification');
log('');
log('✓ DevTools finds performance issues');`,
    output: "Browser performance profiling",
  },
  {
    id: 327,
    category: "Security & Performance",
    title: "Memory Profiling",
    premium: true,
    code: `log('=== Memory Profiling ===');
log('Find memory leaks in DevTools:');
log('');
log('1. Open DevTools (F12)');
log('2. Go to Memory tab');
log('3. Take heap snapshot');
log('4. Interact with page');
log('5. Take another snapshot');
log('6. Compare snapshots');
log('');
log('Heap Snapshot Shows:');
log('  Objects in memory');
log('  Memory size per type');
log('  Detached DOM nodes');
log('');
log('Common Memory Leaks:');
log('');
log('1. Event listeners not removed:');
log('element.addEventListener(');
log('  \'click\', handler');
log(');');
log('// Later:');
log('element.removeEventListener(');
log('  \'click\', handler');
log(');');
log('');
log('2. Global variables accumulating');
log('3. Circular references');
log('');
log('✓ Memory profiling prevents OOM');`,
    output: "Memory profiling techniques",
  },
  {
    id: 328,
    category: "Security & Performance",
    title: "Lazy Loading Images",
    premium: true,
    code: `log('=== Lazy Loading ===');
log('Load images only when visible');
log('');
log('Method 1: Native lazy:');
log('<img loading="lazy"');
log('     src="image.jpg">');
log('');
log('Method 2: IntersectionObserver:');
log('const images = document');
log('  .querySelectorAll(');
log('    "img[data-src]"');
log('  );');
log('');
log('const observer =');
log('  new IntersectionObserver(');
log('  (entries) => {');
log('    entries.forEach(entry => {');
log('      if (entry.isIntersecting) {');
log('        entry.target.src =');
log('          entry.target');
log('          .dataset.src;');
log('        observer.unobserve(');
log('          entry.target');
log('        );');
log('      }');
log('    });');
log('  }');
log(');');
log('');
log('images.forEach(img => {');
log('  observer.observe(img);');
log('});');
log('✓ Lazy loading speeds up initial load');`,
    output: "Lazy loading implementation",
  },
  {
    id: 329,
    category: "Security & Performance",
    title: "Code Splitting Webpack",
    premium: true,
    code: `log('=== Code Splitting ===');
log('Webpack Configuration:');
log('');
log('webpack.config.js:');
log('module.exports = {');
log('  mode: "production",');
log('  entry: "./src/index.js",');
log('  output: {');
log('    path: __dirname + "/dist",');
log('    filename: "[name].[hash].js"');
log('  },');
log('  optimization: {');
log('    splitChunks: {');
log('      chunks: "all",');
log('      cacheGroups: {');
log('        vendors: {');
log('          test: /node_modules/,');
log('          name: "vendors"');
log('        }');
log('      }');
log('    }');
log('  }');
log('};');
log('');
log('Dynamic Import:');
log('button.addEventListener(');
log('  "click", async () => {');
log('  const module = await');
log('    import("./heavy.js");');
log('  module.run();');
log('}');
log('✓ Code splitting reduces bundle size');`,
    output: "Code splitting with Webpack",
  },
  {
    id: 330,
    category: "Security & Performance",
    title: "CDN Caching Strategy",
    premium: true,
    code: `log('=== CDN Strategy ===');
log('Content Delivery Network Benefits:');
log('');
log('1. Geographic Distribution:');
log('  Request from Japan →');
log('  Served from Tokyo CDN edge');
log('');
log('2. Cache Strategies:');
log('  Origin: origin.example.com');
log('  CDN Edge: cdn.example.com');
log('');
log('Cache Control:');
log('X-Cache: HIT from edge');
log('  = Served from CDN cache');
log('');
log('X-Cache: MISS, Origin');
log('  = Fetched from origin');
log('');
log('Purge Cache:');
log('curl -X PURGE');
log('  https://cdn.example.com/image.jpg');
log('');
log('Versioning Static Assets:');
log('app.v1.js (v1 hash)');
log('app.v2.js (v2 hash)');
log('  = New hash = Cache buster');
log('');
log('✓ CDN reduces latency globally');`,
    output: "CDN caching strategies",
  },
  {
    id: 331,
    category: "Security & Performance",
    title: "Service Worker Caching",
    premium: true,
    code: `log('=== Service Worker Cache ===');
log('Cache API for offline support:');
log('');
log('Main Thread (index.js):');
log('navigator.serviceWorker');
log('  .register("/sw.js")');
log('  .then(reg => {');
log('    log("SW registered");');
log('  });');
log('');
log('Worker File (sw.js):');
log('const CACHE_NAME =');
log('  "v1-2024-01-01";');
log('');
log('self.addEventListener(');
log('  "install", event => {');
log('  event.waitUntil(');
log('    caches.open(CACHE_NAME)');
log('      .then(cache => {');
log('        cache.addAll([');
log('          "/",');
log('          "/index.html",');
log('          "/styles.css",');
log('          "/app.js"');
log('        ]);');
log('      })');
log('  );');
log('});');
log('');
log('Fetch Event:');
log('self.addEventListener(');
log('  "fetch", event => {');
log('  event.respondWith(');
log('    caches.match(event.request)');
log('  );');
log('});');
log('✓ Service Worker enables offline mode');`,
    output: "Service Worker caching",
  },
  {
    id: 332,
    category: "Security & Performance",
    title: "Internationalization (i18n)",
    premium: true,
    code: `log('=== Internationalization ===');
log('i18n Library Usage:');
log('');
log('Configuration:');
log('i18n.init({');
log('  lng: "en",');
log('  fallbackLng: "en",');
log('  resources: {');
log('    en: {');
log('      translation: {');
log('        "hello": "Hello",');
log('        "goodbye": "Goodbye"');
log('      }');
log('    },');
log('    es: {');
log('      translation: {');
log('        "hello": "Hola",');
log('        "goodbye": "Adiós"');
log('      }');
log('    }');
log('  }');
log('});');
log('');
log('Usage:');
log('i18n.t("hello");');
log('i18n.changeLanguage("es");');
log('i18n.t("hello"); // Hola');
log('');
log('Date/Number Formatting:');
log('const num = 1234.56;');
log('new Intl.NumberFormat(');
log('  "de-DE").format(num);');
log('  // 1.234,56');
log('✓ i18n supports multiple languages');`,
    output: "Internationalization setup",
  },
  {
    id: 333,
    category: "Security & Performance",
    title: "Localization (L10n)",
    premium: true,
    code: `log('=== Localization ===');
log('Regional Data Formatting:');
log('');
log('Date Format:');
log('new Intl.DateTimeFormat(');
log('  "en-US").format(new Date());');
log('// 1/15/2024');
log('');
log('new Intl.DateTimeFormat(');
log('  "de-DE").format(new Date());');
log('// 15.1.2024');
log('');
log('Currency Format:');
log('new Intl.NumberFormat(');
log('  "en-US",');
log('  {style: "currency",');
log('   currency: "USD"}');
log(').format(99.99);');
log('// $99.99');
log('');
log('new Intl.NumberFormat(');
log('  "de-DE",');
log('  {style: "currency",');
log('   currency: "EUR"}');
log(').format(99.99);');
log('// 99,99 €');
log('');
log('Collation (Sorting):');
log('const items = ["ä", "z", "a"];');
log('items.sort(new Intl.Collator().compare);');
log('// Respects language rules');
log('✓ L10n handles regional formats');`,
    output: "Localization formatting",
  },
  {
    id: 334,
    category: "Security & Performance",
    title: "Analytics Tracking",
    premium: true,
    code: `log('=== Analytics Tracking ===');
log('Google Analytics Setup:');
log('');
log('<script async src=');
log('"https://www.googletagmanager');
log('  .com/gtag/js?id=GA_ID"></script>');
log('<script>');
log('window.dataLayer = window.dataLayer');
log('  || [];');
log('function gtag(){');
log('  dataLayer.push(arguments);');
log('}');
log('gtag(\'js\', new Date());');
log('gtag(\'config\', \'GA_ID\');');
log('</script>');
log('');
log('Event Tracking:');
log('gtag(\'event\',');
log('  \'purchase\', {');
log('  \'event_category\':');
log('    \'engagement\',');
log('  \'event_label\':');
log('    \'button_click\',');
log('  \'value\': 42');
log('});');
log('');
log('Custom Events:');
log('gtag(\'event\', \'video_play\', {');
log('  \'video_title\': \'Nature\',');
log('  \'video_duration\': 120');
log('});');
log('✓ Analytics measure user behavior');`,
    output: "Analytics implementation",
  },
  {
    id: 335,
    category: "Security & Performance",
    title: "Error Tracking Sentry",
    premium: true,
    code: `log('=== Error Tracking ===');
log('Sentry Setup:');
log('');
log('<script src=');
log('"https://browser.sentry-cdn.com/');
log('8.0.0/bundle.min.js"></script>');
log('<script>');
log('Sentry.init({');
log('  dsn: "YOUR_SENTRY_DSN",');
log('  integrations: [');
log('    new Sentry.Replay()');
log('  ],');
log('  tracesSampleRate: 1.0,');
log('  replays: {');
log('    maskAllText: true,');
log('    blockAllMedia: true');
log('  }');
log('});');
log('</script>');
log('');
log('Manual Capture:');
log('try {');
log('  riskyFunction();');
log('} catch (error) {');
log('  Sentry.captureException(error);');
log('}');
log('');
log('Breadcrumbs:');
log('Sentry.captureMessage(');
log('  "User logged in", "info");');
log('');
log('✓ Sentry tracks production errors');`,
    output: "Error tracking with Sentry",
  },
  {
    id: 336,
    category: "Security & Performance",
    title: "Monitoring Uptime",
    premium: true,
    code: `log('=== Uptime Monitoring ===');
log('Monitoring Service (e.g., Pingdom):');
log('');
log('1. Configure checks:');
log('  Interval: Every 5 minutes');
log('  Type: HTTPS GET');
log('  URL: https://example.com/health');
log('  Expected: 200 OK');
log('');
log('2. Health Endpoint (/health):');
log('app.get("/health", (req, res) => {');
log('  const checks = {');
log('    database: dbConnected(),');
log('    cache: cacheWorking(),');
log('    api: externalApiOk()');
log('  };');
log('  const allHealthy =');
log('    Object.values(checks)');
log('    .every(v => v);');
log('');
log('  res.status(');
log('    allHealthy ? 200 : 503');
log('  ).json(checks);');
log('});');
log('');
log('3. Alerting:');
log('  SMS/Email if down');
log('  Webhook to Slack');
log('✓ Monitoring detects outages');`,
    output: "Uptime monitoring setup",
  },
  {
    id: 337,
    category: "Security & Performance",
    title: "Logging Best Practices",
    premium: true,
    code: `log('=== Logging Best Practices ===');
log('Log Levels:');
log('  DEBUG: Detailed information');
log('  INFO: Confirmation events');
log('  WARN: Warning conditions');
log('  ERROR: Error conditions');
log('  FATAL: Fatal errors');
log('');
log('Winston Logger (Node.js):');
log('const winston = require(');
log('  "winston"');
log(');');
log('const logger =');
log('  winston.createLogger({');
log('    level: "info",');
log('    format: winston.format');
log('      .json(),');
log('    transports: [');
log('      new winston.transports');
log('        .File({');
log('        filename: "error.log",');
log('        level: "error"');
log('      })');
log('    ]');
log('  });');
log('');
log('Usage:');
log('logger.info("User login");');
log('logger.error("DB error", err);');
log('');
log('✓ Logging aids debugging');`,
    output: "Logging best practices",
  },
  {
    id: 338,
    category: "Security & Performance",
    title: "Environment Variables Security",
    premium: true,
    code: `log('=== Environment Variables ===');
log('Never commit secrets:');
log('');
log('.env file (local only):');
log('DB_PASSWORD=secret123');
log('API_KEY=xyz789');
log('JWT_SECRET=abc123');
log('');
log('.gitignore:');
log('.env');
log('.env.local');
log('.env.*.local');
log('');
log('Access in Code:');
log('require("dotenv").config();');
log('const dbPassword =');
log('  process.env.DB_PASSWORD;');
log('');
log('Production (use secrets manager):');
log('AWS Secrets Manager');
log('Azure Key Vault');
log('HashiCorp Vault');
log('');
log('Deployment:');
log('export DB_PASSWORD=secret123');
log('export API_KEY=xyz789');
log('npm start');
log('');
log('✓ Environment variables protect secrets');`,
    output: "Environment variables security",
  },
  {
    id: 339,
    category: "Security & Performance",
    title: "Build Process Security",
    premium: true,
    code: `log('=== Build Process Security ===');
log('ESLint Security Plugin:');
log('npm install --save-dev');
log('  eslint-plugin-security');
log('');
log('.eslintrc.json:');
log('{');
log('  "plugins": ["security"],');
log('  "rules": {');
log('    "security/detect-eval-');
log('      with-expression": "warn",');
log('    "security/detect-non-');
log('      literal-regexp": "error"');
log('  }');
log('}');
log('');
log('SAST Tools:');
log('npm install --save-dev');
log('  snyk');
log('');
log('Check Dependencies:');
log('snyk test');
log('  (finds vulnerabilities)');
log('');
log('Husky Pre-commit Hooks:');
log('npm install husky');
log('npx husky add .husky/pre-');
log('  commit "npm run lint"');
log('');
log('✓ Security scanning in CI/CD');`,
    output: "Build security practices",
  },
  {
    id: 340,
    category: "Security & Performance",
    title: "Dependency Management",
    premium: true,
    code: `log('=== Dependency Management ===');
log('Check for Vulnerabilities:');
log('npm audit');
log('  Lists security issues');
log('');
log('Auto-fix Known Issues:');
log('npm audit fix');
log('');
log('Regular Updates:');
log('npm outdated');
log('  Shows versions behind');
log('');
log('Update to Latest:');
log('npm update');
log('  Respects semver range');
log('');
log('Lock File Strategy:');
log('package-lock.json');
log('  Commit to repo');
log('  Ensures reproducible builds');
log('');
log('npm ci');
log('  Clean install from lock');
log('');
log('Audit Regularly:');
log('npm audit --production');
log('  Check production deps only');
log('');
log('✓ Dependency management prevents CVEs');`,
    output: "Dependency management",
  },
  {
    id: 341,
    category: "Security & Performance",
    title: "Bundle Analysis",
    premium: true,
    code: `log('=== Bundle Analysis ===');
log('Webpack Bundle Analyzer:');
log('npm install --save-dev');
log('  webpack-bundle-analyzer');
log('');
log('webpack.config.js:');
log('const {');
log('  BundleAnalyzerPlugin');
log('} = require(');
log('  "webpack-bundle-analyzer"');
log(');');
log('');
log('module.exports = {');
log('  plugins: [');
log('    new BundleAnalyzerPlugin()');
log('  ]');
log('};');
log('');
log('Run Build:');
log('npm run build');
log('  Opens http://localhost:8888');
log('');
log('Analyze Output:');
log('  Visual representation');
log('  Largest modules highlighted');
log('  Unused code identified');
log('');
log('Optimize:');
log('  Remove unused deps');
log('  Split large chunks');
log('  Lazy load routes');
log('✓ Bundle analysis finds bloat');`,
    output: "Bundle analysis tools",
  },
  {
    id: 342,
    category: "Security & Performance",
    title: "Frontend Monitoring",
    premium: true,
    code: `log('=== Frontend Monitoring ===');
log('Custom Metrics:');
log('');
log('Page Load Time:');
log('window.addEventListener(');
log('  "load", () => {');
log('  const perf =');
log('    performance.timing;');
log('  const loadTime = perf');
log('    .loadEventEnd -');
log('    perf.navigationStart;');
log('  gtag("event",');
log('    "page_load", {');
log('    "value": loadTime');
log('  });');
log('});');
log('');
log('User Interactions:');
log('document.addEventListener(');
log('  "click", () => {');
log('  gtag("event",');
log('    "engagement");');
log('});');
log('');
log('Error Rate:');
log('window.onerror = (msg, url,');
log('  lineNo, colNo, error) => {');
log('  gtag("event", "error",');
log('  {"error_msg": msg});');
log('  return false;');
log('};');
log('✓ Frontend monitoring tracks UX');`,
    output: "Frontend monitoring setup",
  },
  {
    id: 343,
    category: "Security & Performance",
    title: "Progressive Enhancement",
    premium: true,
    code: `log('=== Progressive Enhancement ===');
log('Layer 1: HTML');
log('  Content structure');
log('  Works without CSS/JS');
log('');
log('<form action="/search" method="GET">');
log('  <input name="q">');
log('  <button>Search</button>');
log('</form>');
log('');
log('Layer 2: CSS');
log('  Visual presentation');
log('  Progressive fallbacks');
log('');
log('button {');
log('  background: linear-gradient(');
log('    to right, blue, purple');
log('  ); /* Fallback: blue; */');
log('}');
log('');
log('Layer 3: JavaScript');
log('  Enhanced interactivity');
log('  Client-side features');
log('');
log('form.addEventListener(');
log('  "submit", (e) => {');
log('  e.preventDefault();');
log('  fetch("/api/search?q=" +');
log('    input.value)');
log('  .then(r => r.json())');
log('  .then(show results);');
log('});');
log('✓ Progressive enhancement improves');`,
    output: "Progressive enhancement best practices",
  },
  {
    id: 344,
    category: "Advanced Topics",
    title: "TypeScript Basics",
    premium: true,
    code: `log('=== TypeScript Basics ===');
log('Static type checking');
interface User {
  id: number;
  name: string;
  email: string;
}
function greet(user: User): string {
  return \`Hello, \${user.name}\`;
}
const user: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com'
};
log(greet(user));
log('✓ TypeScript prevents type errors');`,
    output: "TypeScript interface and type checking",
  },
  {
    id: 345,
    category: "Advanced Topics",
    title: "TypeScript Generics",
    premium: true,
    code: `log('=== TypeScript Generics ===');
function identity<T>(arg: T): T {
  return arg;
}
const numId = identity<number>(42);
const strId = identity<string>('hello');
class Stack<T> {
  items: T[] = [];
  push(item: T) { this.items.push(item); }
  pop(): T | undefined { return this.items.pop(); }
}
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
log('Stack:', numberStack.items);
log('✓ Generics enable reusable type-safe code');`,
    output: "TypeScript generic types and functions",
  },
  {
    id: 346,
    category: "Advanced Topics",
    title: "TypeScript Union Types",
    premium: true,
    code: `log('=== TypeScript Union Types ===');
type Status = 'pending' | 'success' | 'error';
function handleStatus(status: Status) {
  switch(status) {
    case 'pending': return 'Processing...';
    case 'success': return 'Success!';
    case 'error': return 'Failed';
  }
}
type Value = string | number;
const processValue = (v: Value): string => {
  if (typeof v === 'string') return v.toUpperCase();
  return (v * 2).toString();
};
log(processValue('hello'));
log(processValue(21));
log('✓ Union types express multiple valid types');`,
    output: "Union types and type guards",
  },
  {
    id: 347,
    category: "Advanced Topics",
    title: "TypeScript Enums",
    premium: true,
    code: `log('=== TypeScript Enums ===');
enum Direction {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4
}
function move(dir: Direction) {
  log('Moving:', dir);
}
move(Direction.Up);
enum Color {
  Red = '#FF0000',
  Green = '#00FF00',
  Blue = '#0000FF'
}
const bgColor: Color = Color.Blue;
log('Background color:', bgColor);
log('✓ Enums provide named constants');`,
    output: "TypeScript enums for constants",
  },
  {
    id: 348,
    category: "Advanced Topics",
    title: "TypeScript Decorators",
    premium: true,
    code: `log('=== TypeScript Decorators ===');
function log_decorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function(...args: any[]) {
    log('Calling', propertyKey);
    return original.apply(this, args);
  };
}
class Calculator {
  @log_decorator
  add(a: number, b: number) {
    return a + b;
  }
}
const calc = new Calculator();
log(calc.add(2, 3));
log('✓ Decorators enhance class members');`,
    output: "TypeScript decorators for cross-cutting concerns",
  },
  {
    id: 349,
    category: "Advanced Topics",
    title: "TypeScript Interfaces vs Types",
    premium: true,
    code: `log('=== TypeScript Interfaces vs Types ===');
interface PersonInterface {
  name: string;
  age: number;
}
type PersonType = {
  name: string;
  age: number;
};
type ID = string | number;
const person1: PersonInterface = { name: 'Bob', age: 30 };
const person2: PersonType = { name: 'Carol', age: 28 };
const id1: ID = '123';
const id2: ID = 456;
log('Person1:', person1);
log('Person2:', person2);
log('✓ Interfaces extend, types alias');`,
    output: "Interfaces vs type aliases in TypeScript",
  },
  {
    id: 350,
    category: "Advanced Topics",
    title: "TypeScript Utility Types",
    premium: true,
    code: `log('=== TypeScript Utility Types ===');
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
type ReadonlyTodo = Readonly<Todo>;
type PartialTodo = Partial<Todo>;
type TodoKeys = keyof Todo;
const rtodo: ReadonlyTodo = { id: 1, title: 'Learn', completed: false };
const ptodo: PartialTodo = { title: 'Task' };
log('Record type:', Record<string, number>);
log('Pick type:', Pick<Todo, 'id' | 'title'>);
log('Omit type:', Omit<Todo, 'completed'>);
log('✓ Utility types transform existing types');`,
    output: "TypeScript utility types for type manipulation",
  },
  {
    id: 351,
    category: "Advanced Topics",
    title: "GraphQL Basics",
    premium: true,
    code: `log('=== GraphQL Basics ===');
const schema = \`
  type Query {
    user(id: ID!): User
    users: [User]
  }
  type User {
    id: ID!
    name: String
    email: String
    posts: [Post]
  }
  type Post {
    id: ID!
    title: String
    content: String
  }
\`;
const query = \`
  {
    user(id: "1") {
      name
      email
      posts { title }
    }
  }
\`;
log('GraphQL Query:');
log(query);
log('✓ GraphQL enables declarative data fetching');`,
    output: "GraphQL schema and queries",
  },
  {
    id: 352,
    category: "Advanced Topics",
    title: "GraphQL Mutations",
    premium: true,
    code: `log('=== GraphQL Mutations ===');
const mutation = \`
  mutation CreateUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
\`;
const variables = {
  name: 'David',
  email: 'david@example.com'
};
log('Mutation:', mutation);
log('Variables:', variables);
log('Response: { id: 101, name: David, email: david@example.com }');
log('✓ Mutations modify server state');`,
    output: "GraphQL mutations for data modification",
  },
  {
    id: 353,
    category: "Advanced Topics",
    title: "GraphQL Fragments",
    premium: true,
    code: `log('=== GraphQL Fragments ===');
const fragment = \`
  fragment UserFields on User {
    id
    name
    email
    createdAt
  }
\`;
const query = \`
  {
    user(id: "1") {
      ...UserFields
    }
    admin: user(id: "2") {
      ...UserFields
      role
    }
  }
  \${fragment}
\`;
log('Query with fragments:');
log(query);
log('✓ Fragments reuse selection sets');`,
    output: "GraphQL fragments for reusable queries",
  },
  {
    id: 354,
    category: "Advanced Topics",
    title: "GraphQL Subscriptions",
    premium: true,
    code: `log('=== GraphQL Subscriptions ===');
const subscription = \`
  subscription OnUserCreated {
    userCreated {
      id
      name
      email
    }
  }
\`;
log('Subscription:', subscription);
log('Server sends updates in real-time');
log('Use: WebSocket for persistent connection');
log('Benefits:');
log('  - Real-time updates');
log('  - Live notifications');
log('  - Reactive user experiences');
log('✓ Subscriptions enable real-time data');`,
    output: "GraphQL subscriptions for real-time updates",
  },
  {
    id: 355,
    category: "Advanced Topics",
    title: "GraphQL Client (Apollo)",
    premium: true,
    code: `log('=== GraphQL Client (Apollo) ===');
log('Apollo Client setup:');
log('import ApolloClient from "@apollo/client"');
log('const client = new ApolloClient({');
log('  uri: "https://api.example.com/graphql",');
log('  cache: new InMemoryCache()');
log('});');
log('Query with Apollo:');
log('client.query({');
log('  query: gql\`{ users { id name } }\`');
log('}).then(result => log(result.data));');
log('Features:');
log('  - Automatic caching');
log('  - Optimistic updates');
log('  - Error handling');
log('✓ Apollo simplifies GraphQL usage');`,
    output: "Apollo Client for GraphQL interactions",
  },
  {
    id: 356,
    category: "Advanced Topics",
    title: "Docker Basics",
    premium: true,
    code: `log('=== Docker Basics ===');
const dockerfile = \`
  FROM node:18-alpine
  WORKDIR /app
  COPY package*.json ./
  RUN npm install
  COPY . .
  EXPOSE 3000
  CMD ["npm", "start"]
\`;
log('Dockerfile:');
log(dockerfile);
log('Commands:');
log('  docker build -t myapp:1.0 .');
log('  docker run -p 3000:3000 myapp:1.0');
log('  docker ps');
log('  docker logs container-id');
log('✓ Docker containerizes applications');`,
    output: "Docker containerization basics",
  },
  {
    id: 357,
    category: "Advanced Topics",
    title: "Docker Compose",
    premium: true,
    code: `log('=== Docker Compose ===');
const yaml = \`
  version: '3.8'
  services:
    web:
      build: .
      ports:
        - "3000:3000"
      environment:
        - NODE_ENV=production
    db:
      image: postgres:14
      environment:
        - POSTGRES_PASSWORD=secret
      volumes:
        - postgres_data:/var/lib/postgresql/data
  volumes:
    postgres_data:
\`;
log('docker-compose.yml:');
log(yaml);
log('Commands:');
log('  docker-compose up');
log('  docker-compose down');
log('✓ Compose orchestrates multi-container apps');`,
    output: "Docker Compose for multi-service apps",
  },
  {
    id: 358,
    category: "Advanced Topics",
    title: "Docker Networking",
    premium: true,
    code: `log('=== Docker Networking ===');
log('Network types:');
log('  - bridge: default, containers on host');
log('  - host: container uses host network');
log('  - overlay: swarm multi-host');
log('  - macvlan: mac address to container');
log('');
log('Commands:');
log('  docker network create mynet');
log('  docker run --network mynet app1');
log('  docker run --network mynet app2');
log('');
log('Service discovery:');
log('  app2 can reach app1 via: app1:3000');
log('  Docker DNS resolves container names');
log('✓ Docker networking connects containers');`,
    output: "Docker networking for container communication",
  },
  {
    id: 359,
    category: "Advanced Topics",
    title: "Docker Volumes",
    premium: true,
    code: `log('=== Docker Volumes ===');
log('Volume types:');
log('  - Named: managed by Docker');
log('  - Bind: host directory mapping');
log('  - tmpfs: in-memory storage');
log('');
log('Dockerfile:');
log('VOLUME ["/data"]');
log('');
log('Commands:');
log('  docker volume create mydata');
log('  docker run -v mydata:/data app');
log('  docker run -v /host/dir:/app/data app');
log('');
log('Inspect volume:');
log('  docker volume inspect mydata');
log('  docker volume ls');
log('✓ Volumes persist container data');`,
    output: "Docker volumes for data persistence",
  },
  {
    id: 360,
    category: "Advanced Topics",
    title: "Docker Registry",
    premium: true,
    code: `log('=== Docker Registry ===');
log('Push image to Docker Hub:');
log('  docker tag myapp:1.0 user/myapp:1.0');
log('  docker login');
log('  docker push user/myapp:1.0');
log('');
log('Pull from registry:');
log('  docker pull user/myapp:1.0');
log('  docker run user/myapp:1.0');
log('');
log('Private registry:');
log('  docker run -d -p 5000:5000 registry:2');
log('  docker tag myapp localhost:5000/myapp');
log('  docker push localhost:5000/myapp');
log('');
log('✓ Registries centralize image storage');`,
    output: "Docker registries for image distribution",
  },
  {
    id: 361,
    category: "Advanced Topics",
    title: "CI/CD with GitHub Actions",
    premium: true,
    code: `log('=== CI/CD GitHub Actions ===');
const workflow = \`
  name: Build & Test
  on: [push, pull_request]
  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v3
        - run: npm install
        - run: npm test
        - run: npm run build
\`;
log('Workflow file: .github/workflows/ci.yml');
log(workflow);
log('Features:');
log('  - Trigger on push/PR');
log('  - Run multiple jobs');
log('  - Execute shell commands');
log('  - Publish artifacts');
log('✓ GitHub Actions automate CI/CD');`,
    output: "GitHub Actions workflow automation",
  },
  {
    id: 362,
    category: "Advanced Topics",
    title: "CI/CD Pipelines",
    premium: true,
    code: `log('=== CI/CD Pipelines ===');
log('Pipeline stages:');
log('1. Source: Code commit');
log('2. Build: Compile code');
log('3. Test: Run tests');
log('4. Deploy: Release to staging');
log('5. Release: Deploy to production');
log('');
log('Best practices:');
log('  - Fast feedback loops');
log('  - Automated testing');
log('  - Blue-green deployments');
log('  - Rollback capability');
log('  - Environment parity');
log('');
log('Tools: Jenkins, GitLab CI, GitHub Actions');
log('✓ CI/CD pipelines ensure quality releases');`,
    output: "CI/CD pipeline stages and practices",
  },
  {
    id: 363,
    category: "Advanced Topics",
    title: "Testing in CI/CD",
    premium: true,
    code: `log('=== Testing in CI/CD ===');
log('Test types:');
log('  - Unit: Functions in isolation');
log('  - Integration: Component interactions');
log('  - E2E: Full user workflows');
log('  - Performance: Speed/load tests');
log('  - Security: Vulnerability scans');
log('');
log('CI/CD test execution:');
log('  npm run test:unit');
log('  npm run test:integration');
log('  npm run test:e2e');
log('  npm run lint');
log('  npm run security');
log('');
log('Failed tests = Pipeline fails');
log('✓ CI/CD ensures only quality code merges');`,
    output: "Testing strategies in CI/CD pipelines",
  },
  {
    id: 364,
    category: "Advanced Topics",
    title: "Deployment Strategies",
    premium: true,
    code: `log('=== Deployment Strategies ===');
log('Blue-Green:');
log('  - Run old (blue) and new (green) versions');
log('  - Switch traffic after validation');
log('  - Instant rollback capability');
log('');
log('Canary:');
log('  - Deploy to small user fraction');
log('  - Monitor metrics');
log('  - Gradually increase traffic');
log('');
log('Rolling:');
log('  - Replace instances progressively');
log('  - Zero downtime');
log('  - Lower resource overhead');
log('');
log('Shadow:');
log('  - Run new version in parallel');
log('  - No traffic impact');
log('  - Validate before release');
log('✓ Deployment strategies minimize risk');`,
    output: "Advanced deployment techniques",
  },
  {
    id: 365,
    category: "Advanced Topics",
    title: "Infrastructure as Code",
    premium: true,
    code: `log('=== Infrastructure as Code ===');
log('Benefits:');
log('  - Version control for infrastructure');
log('  - Reproducible environments');
log('  - Easy automation');
log('  - Disaster recovery');
log('');
log('Tools:');
log('  - Terraform: Multi-cloud provisioning');
log('  - CloudFormation: AWS infrastructure');
log('  - Pulumi: Code-based infrastructure');
log('  - Ansible: Configuration management');
log('');
log('Example (Terraform):');
log('resource "aws_instance" "web" {');
log('  ami = "ami-0c55b159cbfafe1f0"');
log('  instance_type = "t2.micro"');
log('}');
log('✓ IaC makes infrastructure manageable');`,
    output: "Infrastructure as Code principles",
  },
  {
    id: 366,
    category: "Advanced Topics",
    title: "Kubernetes Basics",
    premium: true,
    code: `log('=== Kubernetes Basics ===');
log('Key concepts:');
log('  - Pod: Smallest deployable unit');
log('  - Service: Network abstraction');
log('  - Deployment: Manage pod replicas');
log('  - ConfigMap: Configuration data');
log('  - Secret: Sensitive data');
log('');
log('kubectl commands:');
log('  kubectl apply -f deployment.yaml');
log('  kubectl get pods');
log('  kubectl describe pod <name>');
log('  kubectl logs <pod>');
log('  kubectl scale deployment <name> --replicas=3');
log('');
log('✓ Kubernetes orchestrates containers');`,
    output: "Kubernetes container orchestration",
  },
  {
    id: 367,
    category: "Advanced Topics",
    title: "Kubernetes Deployments",
    premium: true,
    code: `log('=== Kubernetes Deployments ===');
const yaml = \`
  apiVersion: apps/v1
  kind: Deployment
  metadata:
    name: web-app
  spec:
    replicas: 3
    selector:
      matchLabels:
        app: web
    template:
      metadata:
        labels:
          app: web
      spec:
        containers:
        - name: web
          image: myapp:1.0
          ports:
          - containerPort: 3000
\`;
log('Deployment manifests:');
log(yaml);
log('Deploy: kubectl apply -f deployment.yaml');
log('✓ Deployments manage pod replicas');`,
    output: "Kubernetes deployment manifests",
  },
  {
    id: 368,
    category: "Advanced Topics",
    title: "Kubernetes Services",
    premium: true,
    code: `log('=== Kubernetes Services ===');
const yaml = \`
  apiVersion: v1
  kind: Service
  metadata:
    name: web-svc
  spec:
    type: LoadBalancer
    selector:
      app: web
    ports:
    - protocol: TCP
      port: 80
      targetPort: 3000
\`;
log('Service types:');
log('  - ClusterIP: Internal only');
log('  - NodePort: External port on node');
log('  - LoadBalancer: Cloud load balancer');
log('  - ExternalName: External DNS');
log('');
log('Service manifest:');
log(yaml);
log('✓ Services expose pod network access');`,
    output: "Kubernetes service networking",
  },
  {
    id: 369,
    category: "Advanced Topics",
    title: "Kubernetes ConfigMaps & Secrets",
    premium: true,
    code: `log('=== Kubernetes ConfigMaps & Secrets ===');
log('ConfigMap:');
log('kubectl create configmap app-config \\');
log('  --from-literal=DATABASE_URL=postgres://db:5432');
log('');
log('Secret:');
log('kubectl create secret generic db-cred \\');
log('  --from-literal=password=secret123');
log('');
log('Use in Pod:');
log('env:');
log('- name: DB_URL');
log('  valueFrom:');
log('    configMapKeyRef:');
log('      name: app-config');
log('      key: DATABASE_URL');
log('- name: DB_PASS');
log('  valueFrom:');
log('    secretKeyRef:');
log('      name: db-cred');
log('      key: password');
log('✓ ConfigMaps and Secrets manage config');`,
    output: "Kubernetes configuration management",
  },
  {
    id: 370,
    category: "Advanced Topics",
    title: "Kubernetes Ingress",
    premium: true,
    code: `log('=== Kubernetes Ingress ===');
const yaml = \`
  apiVersion: networking.k8s.io/v1
  kind: Ingress
  metadata:
    name: web-ingress
  spec:
    rules:
    - host: example.com
      http:
        paths:
        - path: /api
          pathType: Prefix
          backend:
            service:
              name: api-service
              port:
                number: 3000
        - path: /web
          backend:
            service:
              name: web-service
              port:
                number: 8080
\`;
log('Ingress manifest:');
log(yaml);
log('Benefits:');
log('  - HTTP routing');
log('  - TLS termination');
log('  - Virtual hosting');
log('✓ Ingress routes external HTTP traffic');`,
    output: "Kubernetes Ingress traffic routing",
  },
  {
    id: 371,
    category: "Advanced Topics",
    title: "Microservices Architecture",
    premium: true,
    code: `log('=== Microservices Architecture ===');
log('Characteristics:');
log('  - Small, focused services');
log('  - Independent deployment');
log('  - Service-to-service communication');
log('  - Separate data stores');
log('');
log('Service examples:');
log('  - User Service: Auth, profiles');
log('  - Product Service: Catalog, inventory');
log('  - Order Service: Checkout, fulfillment');
log('  - Payment Service: Transactions');
log('');
log('Communication:');
log('  - REST APIs');
log('  - Message queues (RabbitMQ, Kafka)');
log('  - gRPC');
log('');
log('Benefits:');
log('  - Independent scaling');
log('  - Technology diversity');
log('  - Fault isolation');
log('✓ Microservices enable scalability');`,
    output: "Microservices architectural pattern",
  },
  {
    id: 372,
    category: "Advanced Topics",
    title: "Service Mesh",
    premium: true,
    code: `log('=== Service Mesh ===');
log('Purpose:');
log('  - Inter-service communication control');
log('  - Traffic management');
log('  - Security policies');
log('  - Observability');
log('');
log('Popular implementations:');
log('  - Istio');
log('  - Linkerd');
log('  - Consul');
log('');
log('Features:');
log('  - Load balancing');
log('  - Retry logic');
log('  - Circuit breaking');
log('  - Distributed tracing');
log('  - mTLS encryption');
log('  - Rate limiting');
log('');
log('Deploy: Sidecar proxies in each pod');
log('✓ Service mesh abstracts networking');`,
    output: "Service mesh for microservices",
  },
  {
    id: 373,
    category: "Advanced Topics",
    title: "API Gateway",
    premium: true,
    code: `log('=== API Gateway ===');
log('Responsibilities:');
log('  - Request routing');
log('  - Load balancing');
log('  - Rate limiting');
log('  - Authentication');
log('  - Response transformation');
log('  - Caching');
log('');
log('Popular gateways:');
log('  - Kong');
log('  - AWS API Gateway');
log('  - Nginx');
log('  - Envoy');
log('');
log('Example (nginx):');
log('upstream api {');
log('  server service1:3000;');
log('  server service2:3000;');
log('}');
log('server {');
log('  listen 80;');
log('  location /api { proxy_pass http://api; }');
log('}');
log('✓ API gateway centralizes service access');`,
    output: "API gateway pattern for services",
  },
  {
    id: 374,
    category: "Advanced Topics",
    title: "Database Sharding",
    premium: true,
    code: `log('=== Database Sharding ===');
log('Sharding strategies:');
log('  - Range-based: ID ranges per shard');
log('  - Hash-based: Hash function determines shard');
log('  - Geographic: Data by location');
log('  - Directory: Lookup table for shards');
log('');
log('Example (hash-based):');
log('shard_id = hash(user_id) % num_shards');
log('');
log('Sharding benefits:');
log('  - Horizontal scalability');
log('  - Reduced query load');
log('  - Independent backups per shard');
log('');
log('Challenges:');
log('  - Data distribution skew');
log('  - Cross-shard queries');
log('  - Re-sharding complexity');
log('✓ Sharding distributes data horizontally');`,
    output: "Database sharding for scalability",
  },
  {
    id: 375,
    category: "Advanced Topics",
    title: "Event-Driven Architecture",
    premium: true,
    code: `log('=== Event-Driven Architecture ===');
log('Key components:');
log('  - Event producers');
log('  - Event brokers (message queue)');
log('  - Event consumers');
log('  - Event store');
log('');
log('Example flow:');
log('1. User placed order (event)');
log('2. Order service publishes OrderCreated');
log('3. Payment service processes order');
log('4. Inventory service updates stock');
log('5. Notification service sends email');
log('');
log('Technologies:');
log('  - Kafka: Distributed streaming');
log('  - RabbitMQ: Message broker');
log('  - Redis: Pub/Sub');
log('');
log('Benefits:');
log('  - Loose coupling');
log('  - Scalability');
log('  - Real-time responsiveness');
log('✓ Event-driven enables reactive systems');`,
    output: "Event-driven architecture pattern",
  },
  {
    id: 376,
    category: "Advanced Topics",
    title: "Message Queues",
    premium: true,
    code: `log('=== Message Queues ===');
log('Purpose:');
log('  - Asynchronous communication');
log('  - Decouple producers and consumers');
log('  - Ensure message delivery');
log('  - Buffer traffic spikes');
log('');
log('Popular brokers:');
log('  - RabbitMQ: Traditional queues');
log('  - Apache Kafka: Streaming platform');
log('  - AWS SQS: Cloud queue');
log('');
log('Example (RabbitMQ):');
log('channel.assertQueue("orders");');
log('channel.sendToQueue("orders", msg);');
log('channel.consume("orders", (msg) => {');
log('  process(msg.content);');
log('});');
log('');
log('Features:');
log('  - Persistence');
log('  - Acknowledgments');
log('  - Dead letter queues');
log('✓ Message queues enable async workflows');`,
    output: "Message queue systems for async communication",
  },
  {
    id: 377,
    category: "Advanced Topics",
    title: "Apache Kafka",
    premium: true,
    code: `log('=== Apache Kafka ===');
log('Architecture:');
log('  - Brokers: Kafka servers');
log('  - Topics: Message categories');
log('  - Partitions: Parallel processing');
log('  - Consumer Groups: Scalable consumers');
log('');
log('Producer:');
log('const producer = kafka.producer();');
log('await producer.send({');
log('  topic: "events",');
log('  messages: [{ value: "event_data" }]');
log('});');
log('');
log('Consumer:');
log('const consumer = kafka.consumer();');
log('await consumer.subscribe({ topic: "events" });');
log('await consumer.run({');
log('  eachMessage: async ({ message }) => {');
log('    processEvent(message.value);');
log('  }');
log('});');
log('✓ Kafka enables high-throughput streaming');`,
    output: "Apache Kafka message streaming",
  },
  {
    id: 378,
    category: "Advanced Topics",
    title: "Serverless Computing",
    premium: true,
    code: `log('=== Serverless Computing ===');
log('Characteristics:');
log('  - No server management');
log('  - Pay-per-execution');
log('  - Auto-scaling');
log('  - Event-driven');
log('');
log('Platforms:');
log('  - AWS Lambda');
log('  - Google Cloud Functions');
log('  - Azure Functions');
log('  - IBM Cloud Functions');
log('');
log('Example (Lambda):');
log('exports.handler = async (event) => {');
log('  const user = await db.query(event.userId);');
log('  return {');
log('    statusCode: 200,');
log('    body: JSON.stringify(user)');
log('  };');
log('};');
log('');
log('Use cases:');
log('  - REST APIs');
log('  - Background jobs');
log('  - Image processing');
log('✓ Serverless reduces operational overhead');`,
    output: "Serverless computing architecture",
  },
  {
    id: 379,
    category: "Advanced Topics",
    title: "Lambda Functions in Production",
    premium: true,
    code: `log('=== Lambda in Production ===');
log('Best practices:');
log('  - Cold start optimization');
log('  - Timeout configuration');
log('  - Memory allocation');
log('  - Environment variables');
log('  - Logging and monitoring');
log('  - Error handling');
log('');
log('Warm up Lambda:');
log('exports.handler = (event) => {');
log('  if (event.source === "aws.events") {');
log('    log("Lambda warming up");');
log('    return;');
log('  }');
log('  // Process request');
log('};');
log('');
log('Challenges:');
log('  - Cold starts (first invocation):');
log('    Node.js: 200-400ms');
log('    Python: 100-200ms');
log('  - 15min execution limit');
log('  - 10GB max memory');
log('✓ Manage Lambda lifecycle efficiently');`,
    output: "Production Lambda best practices",
  },
  {
    id: 380,
    category: "Advanced Topics",
    title: "Caching Strategies",
    premium: true,
    code: `log('=== Caching Strategies ===');
log('Cache-Aside (Lazy Loading):');
log('1. Check cache');
log('2. If miss, fetch from DB');
log('3. Update cache');
log('');
log('Write-Through:');
log('1. Write to cache');
log('2. Write to database');
log('3. Return');
log('');
log('Write-Behind (Write-Back):');
log('1. Write to cache');
log('2. Queue DB update');
log('3. Return immediately');
log('4. Batch update database');
log('');
log('Refresh-Ahead:');
log('1. Predictively refresh cache');
log('2. Before expiration');
log('');
log('Tools: Redis, Memcached');
log('✓ Caching strategies optimize performance');`,
    output: "Caching patterns and strategies",
  },
  {
    id: 381,
    category: "Advanced Topics",
    title: "Vue.js Basics",
    premium: true,
    code: `log('=== Vue.js Basics ===');
const app = {
  data() {
    return {
      message: 'Hello Vue!',
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  },
  template: \`
    <div>
      <p>{{ message }}</p>
      <p>Count: {{ count }}</p>
      <button @click="increment">Increment</button>
    </div>
  \`
};
log('Vue 3 Composition API:');
log('const { ref } = Vue;');
log('const count = ref(0);');
log('const increment = () => count.value++;');
log('✓ Vue provides reactive component framework');`,
    output: "Vue.js framework basics",
  },
  {
    id: 382,
    category: "Advanced Topics",
    title: "Vue.js Components",
    premium: true,
    code: `log('=== Vue.js Components ===');
const UserCard = {
  props: ['user'],
  template: \`
    <div class="card">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
      <button @click="$emit('follow')">Follow</button>
    </div>
  \`
};
log('Component relationship:');
log('Parent -> Child communication: props');
log('Child -> Parent communication: emits');
log('');
log('Template example:');
log('<UserCard :user="currentUser" @follow="onFollow" />');
log('✓ Components enable reusable UI pieces');`,
    output: "Vue.js component architecture",
  },
  {
    id: 383,
    category: "Advanced Topics",
    title: "Vue.js Directives",
    premium: true,
    code: `log('=== Vue.js Directives ===');
log('Common directives:');
log('v-if: Conditional rendering');
log('  <p v-if="isVisible">Show me</p>');
log('');
log('v-for: List rendering');
log('  <li v-for="item in items" :key="item.id">');
log('    {{ item.name }}');
log('  </li>');
log('');
log('v-bind: Property binding');
log('  <img :src="imageUrl" :alt="altText" />');
log('');
log('v-on: Event handling');
log('  <button @click="handleClick">Click me</button>');
log('');
log('v-model: Two-way binding');
log('  <input v-model="message" />');
log('✓ Directives simplify templating');`,
    output: "Vue.js template directives",
  },
  {
    id: 384,
    category: "Advanced Topics",
    title: "Vue.js State Management (Pinia)",
    premium: true,
    code: `log('=== Vue.js State (Pinia) ===');
log('Define store:');
log('export const useCounterStore = defineStore({');
log('  id: "counter",');
log('  state: () => ({ count: 0 }),');
log('  getters: {');
log('    doubled: (state) => state.count * 2');
log('  },');
log('  actions: {');
log('    increment() { this.count++; }');
log('  }');
log('});');
log('');
log('Use in component:');
log('const store = useCounterStore();');
log('store.increment();');
log('log("Count:", store.count);');
log('✓ Pinia manages global state');`,
    output: "Vue.js state management with Pinia",
  },
  {
    id: 385,
    category: "Advanced Topics",
    title: "Vue Router",
    premium: true,
    code: `log('=== Vue Router ===');
log('Define routes:');
log('const routes = [');
log('  {');
log('    path: "/",');
log('    component: Home');
log('  },');
log('  {');
log('    path: "/user/:id",');
log('    component: UserProfile');
log('  },');
log('  {');
log('    path: "/:pathMatch(.*)*",');
log('    component: NotFound');
log('  }');
log('];');
log('');
log('Navigate:');
log('<router-link to="/user/123">User</router-link>');
log('this.$router.push("/home");');
log('✓ Vue Router enables SPA navigation');`,
    output: "Vue Router for page navigation",
  },
  {
    id: 386,
    category: "Advanced Topics",
    title: "Angular Basics",
    premium: true,
    code: `log('=== Angular Basics ===');
log('Component structure:');
log('@Component({');
log('  selector: "app-root",');
log('  template: \`<h1>{{ title }}</h1>\`,');
log('  styles: ["h1 { color: blue; }"]');
log('})');
log('export class AppComponent {');
log('  title = "Angular App";');
log('  count = 0;');
log('  increment() { this.count++; }');
log('}');
log('');
log('Module setup:');
log('@NgModule({');
log('  declarations: [AppComponent],');
log('  bootstrap: [AppComponent]');
log('})');
log('export class AppModule { }');
log('✓ Angular uses TypeScript-first approach');`,
    output: "Angular framework basics",
  },
  {
    id: 387,
    category: "Advanced Topics",
    title: "Angular Services & Dependency Injection",
    premium: true,
    code: `log('=== Angular Services & DI ===');
log('@Injectable({');
log('  providedIn: "root"');
log('})');
log('export class UserService {');
log('  constructor(private http: HttpClient) {}');
log('');
log('  getUsers() {');
log('    return this.http.get("/api/users");');
log('  }');
log('}');
log('');
log('In component:');
log('constructor(private userService: UserService) {}');
log('');
log('ngOnInit() {');
log('  this.userService.getUsers()');
log('    .subscribe(users => this.users = users);');
log('}');
log('✓ DI manages service lifecycle');`,
    output: "Angular services and dependency injection",
  },
  {
    id: 388,
    category: "Advanced Topics",
    title: "Svelte",
    premium: true,
    code: `log('=== Svelte ===');
log('<script>');
log('  let count = 0;');
log('  function increment() {');
log('    count++;');
log('  }');
log('</script>');
log('');
log('<button on:click={increment}>');
log('  Clicks: {count}');
log('</button>');
log('');
log('<style>');
log('  button {');
log('    background: blue;');
log('    color: white;');
log('  }');
log('</style>');
log('');
log('Reactivity:');
log('$: doubled = count * 2; // Reactive');
log('✓ Svelte compiles to vanilla JavaScript');`,
    output: "Svelte framework basics",
  },
  {
    id: 389,
    category: "Advanced Topics",
    title: "Next.js",
    premium: true,
    code: `log('=== Next.js ===');
log('File-based routing:');
log('  pages/index.js -> /');
log('  pages/posts/[id].js -> /posts/:id');
log('');
log('Server-side rendering:');
log('export async function getServerSideProps() {');
log('  const data = await fetch("/api/data");');
log('  return { props: { data } };');
log('}');
log('');
log('Static generation:');
log('export async function getStaticProps() {');
log('  const posts = await db.posts.all();');
log('  return {');
log('    props: { posts },');
log('    revalidate: 3600 // ISR');
log('  };');
log('}');
log('✓ Next.js enables full-stack React apps');`,
    output: "Next.js full-stack React framework",
  },
  {
    id: 390,
    category: "Advanced Topics",
    title: "Nuxt.js",
    premium: true,
    code: `log('=== Nuxt.js ===');
log('Universal app:');
log('  - Server-side rendering by default');
log('  - Static site generation');
log('  - SPA mode available');
log('');
log('File structure:');
log('components/ -> Auto-imported');
log('pages/ -> Auto-routed');
log('composables/ -> Reusable logic');
log('');
log('nuxi create myapp');
log('nuxi dev');
log('');
log('Middleware example:');
log('export default defineNuxtMiddleware((context) => {');
log('  if (!context.route.path.startsWith("/admin")) return;');
log('  // Check authentication');
log('});');
log('✓ Nuxt builds full-stack Vue apps');`,
    output: "Nuxt.js Vue meta-framework",
  },
  {
    id: 391,
    category: "Advanced Topics",
    title: "Remix",
    premium: true,
    code: `log('=== Remix ===');
log('Loaders (data on server):');
log('export const loader = async ({ params }) => {');
log('  const user = await db.user.get(params.id);');
log('  return json(user);');
log('};');
log('');
log('Actions (form submission):');
log('export const action = async ({ request }) => {');
log('  if (request.method === "POST") {');
log('    await db.user.create(await request.formData());');
log('  }');
log('  return redirect("/");');
log('};');
log('');
log('Component:');
log('const user = useLoaderData();');
log('return <Form method="post">...</Form>');
log('✓ Remix optimizesfull-stack DX');`,
    output: "Remix full-stack framework",
  },
  {
    id: 392,
    category: "Advanced Topics",
    title: "Astro",
    premium: true,
    code: `log('=== Astro ===');
log('Island architecture:');
log('  - HTML + Islands of interactivity');
log('  - Zero JavaScript by default');
log('  - Mix frameworks (React, Vue, Svelte)');
log('');
log('Astro component (.astro):');
log('---');
log('import ReactComponent from "./React.jsx"');
log('---');
log('<h1>Hello</h1>');
log('<ReactComponent client:load />');
log('');
log('Partial hydration:');
log('client:load - Hydrate on page load');
log('client:idle - Hydrate when idle');
log('client:visible - Hydrate when visible');
log('');
log('npm run build');
log('✓ Astro optimizes for static content');`,
    output: "Astro static site framework",
  },
  {
    id: 393,
    category: "Advanced Topics",
    title: "SvelteKit",
    premium: true,
    code: `log('=== SvelteKit ===');
log('Routing:');
log('  src/routes/+page.svelte -> /');
log('  src/routes/posts/[slug]/+page.svelte -> /posts/:slug');
log('');
log('Page load:');
log('export async function load({ params }) {');
log('  const post = await fetch(\`/api/posts/\${params.slug}\`);');
log('  return { post };');
log('}');
log('');
log('Form actions:');
log('export const actions = {');
log('  default: async ({ request }) => {');
log('    const data = await request.formData();');
log('    await db.post.create(data);');
log('  }');
log('};');
log('✓ SvelteKit builds full-stack Svelte apps');`,
    output: "SvelteKit full-stack Svelte framework",
  },
  {
    id: 394,
    category: "Advanced Topics",
    title: "Tailwind CSS",
    premium: true,
    code: `log('=== Tailwind CSS ===');
log('Utility-first CSS:');
log('<div class="flex justify-center');
log('  items-center h-screen');
log('  bg-gradient-to-r from-blue-500');
log('  to-purple-600">');
log('  <h1 class="text-4xl font-bold');
log('    text-white mb-4">');
log('    Welcome');
log('  </h1>');
log('</div>');
log('');
log('Configuration:');
log('tailwind.config.js');
log('module.exports = {');
log('  theme: { extend: { colors: {} } }');
log('};');
log('');
log('Responsive: sm, md, lg, xl, 2xl');
log('log("✓ Tailwind accelerates UI development");`,
    output: "Tailwind CSS utility framework",
  },
  {
    id: 395,
    category: "Advanced Topics",
    title: "Webpack",
    premium: true,
    code: `log('=== Webpack ===');
log('webpack.config.js:');
log('module.exports = {');
log('  entry: "./src/index.js",');
log('  output: { filename: "bundle.js" },');
log('  module: {');
log('    rules: [');
log('      {');
log('        test: /\\\\.js$/,');
log('        use: "babel-loader"');
log('      }');
log('    ]');
log('  },');
log('  plugins: [');
log('    new HtmlWebpackPlugin()');
log('  ]');
log('};');
log('');
log('npm run build');
log('✓ Webpack bundles dependencies');`,
    output: "Webpack module bundler",
  },
  {
    id: 396,
    category: "Advanced Topics",
    title: "Vite",
    premium: true,
    code: `log('=== Vite ===');
log('vite.config.js:');
log('import { defineConfig } from "vite"');
log('import react from "@vitejs/plugin-react"');
log('');
log('export default defineConfig({');
log('  plugins: [react()],');
log('  server: { port: 3000 }');
log('});');
log('');
log('Benefits:');
log('  - ES modules in browser');
log('  - HMR (Hot Module Replacement)');
log('  - Fast cold start');
log('  - Optimized build');
log('');
log('npm run dev');
log('npm run build');
log('✓ Vite provides fast build tooling');`,
    output: "Vite next-generation build tool",
  },
  {
    id: 397,
    category: "Advanced Topics",
    title: "SCSS/SASS",
    premium: true,
    code: `log('=== SCSS/SASS ===');
log('Variables:');
log('$primary-color: #3498db;');
log('$font-stack: Helvetica, Arial, sans-serif;');
log('');
log('Nesting:');
log('.nav {');
log('  background: $primary-color;');
log('  ul { list-style: none; }');
log('  li { display: inline; }');
log('}');
log('');
log('Mixins:');
log('@mixin flex-center {');
log('  display: flex;');
log('  justify-content: center;');
log('  align-items: center;');
log('}');
log('.container { @include flex-center; }');
log('');
log('✓ SCSS enhances CSS capabilities');`,
    output: "SCSS stylesheet preprocessing",
  },
  {
    id: 398,
    category: "Advanced Topics",
    title: "PostCSS",
    premium: true,
    code: `log('=== PostCSS ===');
log('postcss.config.js:');
log('module.exports = {');
log('  plugins: [');
log('    require("autoprefixer"),');
log('    require("cssnano")({');
log('      preset: "default"');
log('    })');
log('  ]');
log('};');
log('');
log('Common plugins:');
log('  - autoprefixer: Vendor prefixes');
log('  - cssnano: CSS minification');
log('  - postcss-preset-env: Modern CSS');
log('  - tailwindcss: Utility CSS');
log('');
log('npm run css');
log('✓ PostCSS transforms CSS');`,
    output: "PostCSS CSS transformation",
  },
  {
    id: 399,
    category: "Advanced Topics",
    title: "ESLint",
    premium: true,
    code: `log('=== ESLint ===');
log('.eslintrc.json:');
log('{');
log('  "env": { "browser": true, "es2021": true },');
log('  "extends": "eslint:recommended",');
log('  "rules": {');
log('    "no-unused-vars": "warn",');
log('    "semi": ["error", "always"],');
log('    "quotes": ["error", "single"]');
log('  }');
log('}');
log('');
log('npm run lint');
log('npm run lint -- --fix');
log('');
log('Common rules:');
log('  - no-console, no-debugger');
log('  - no-unused-vars');
log('  - prefer-const');
log('✓ ESLint enforces code standards');`,
    output: "ESLint JavaScript linter",
  },
  {
    id: 400,
    category: "Advanced Topics",
    title: "Prettier",
    premium: true,
    code: `log('=== Prettier ===');
log('.prettierrc:');
log('{');
log('  "semi": true,');
log('  "singleQuote": true,');
log('  "tabWidth": 2,');
log('  "printWidth": 80,');
log('  "trailingComma": "es5"');
log('}');
log('');
log('Usage:');
log('npx prettier --write "src/**/*.js"');
log('');
log('Pre-commit:');
log('Integrate with Husky');
log('');
log('Benefits:');
log('  - Consistent code style');
log('  - No style debates');
log('  - Auto-format on save');
log('✓ Prettier formats code automatically');`,
    output: "Prettier code formatter",
  },
  {
    id: 401,
    category: "Advanced Topics",
    title: "Husky & Git Hooks",
    premium: true,
    code: `log('=== Husky & Git Hooks ===');
log('Install Husky:');
log('npm install husky -D');
log('npx husky install');
log('');
log('.husky/pre-commit:');
log('#!/bin/sh');
log('npm run lint');
log('npm run test');
log('');
log('Install hook:');
log('npx husky add .husky/pre-commit');
log('"npm run lint"');
log('');
log('With lint-staged:');
log('npx lint-staged');
log('');
log('package.json:');
log('"lint-staged": {');
log('  "*.js": ["eslint --fix", "prettier --write"]');
log('}');
log('✓ Husky ensures quality commits');`,
    output: "Husky git hooks automation",
  },
  {
    id: 402,
    category: "Advanced Topics",
    title: "Monorepo with Lerna",
    premium: true,
    code: `log('=== Monorepo Lerna ===');
log('Structure:');
log('my-monorepo/');
log('  packages/');
log('    ui-lib/');
log('    api-service/');
log('  lerna.json');
log('');
log('lerna.json:');
log('{');
log('  "version": "1.0.0",');
log('  "packages": ["packages/*"]');
log('}');
log('');
log('Commands:');
log('lerna bootstrap - Install all deps');
log('lerna publish - Publish packages');
log('lerna version - Bump versions');
log('lerna exec -- npm test');
log('');
log('Benefits:');
log('  - Shared dependencies');
log('  - Atomic versioning');
log('✓ Lerna manages monorepos');`,
    output: "Lerna monorepo management",
  },
  {
    id: 403,
    category: "Advanced Topics",
    title: "Performance Budgets",
    premium: true,
    code: `log('=== Performance Budgets ===');
log('Define budget (package.json):');
log('"bundlesize": [');
log('  {');
log('    "path": "./dist/*.js",');
log('    "maxSize": "100kb"');
log('  }');
log(']');
log('');
log('Metrics to track:');
log('  - Bundle size');
log('  - Time to Interactive (TTI)');
log('  - First Contentful Paint (FCP)');
log('  - Largest Contentful Paint (LCP)');
log('');
log('Tools:');
log('  - bundlesize');
log('  - size-limit');
log('  - lighthouse');
log('');
log('npm run bundlesize');
log('✓ Budgets prevent performance regression');`,
    output: "Performance budgets and metrics",
  },
  {
    id: 404,
    category: "Advanced Topics",
    title: "Progressive Web Apps (PWA)",
    premium: true,
    code: `log('=== Progressive Web Apps ===');
log('manifest.json:');
log('{');
log('  "name": "My PWA",');
log('  "short_name": "MyApp",');
log('  "start_url": "/",');
log('  "display": "standalone",');
log('  "background_color": "#ffffff",');
log('  "icons": [');
log('    {');
log('      "src": "/icon-192.png",');
log('      "sizes": "192x192",');
log('      "type": "image/png"');
log('    }');
log('  ]');
log('}');
log('');
log('Service Worker:');
log('navigator.serviceWorker.register("/sw.js")');
log('  .then(reg => log("SW registered"));');
log('✓ PWAswork offline & install as apps');`,
    output: "Progressive Web App implementation",
  },
  {
    id: 405,
    category: "Advanced Topics",
    title: "WebAssembly (WASM) Basics",
    premium: true,
    code: `log('=== WebAssembly ===');
log('Benefits:');
log('  - Near-native performance');
log('  - Multiple language support');
log('  - Secure sandboxed execution');
log('');
log('Rust to WASM:');
log('curl --proto "=https" --tlsv1.2');
log('  -sSf https://sh.rustup.rs | sh');
log('cargo install wasm-pack');
log('');
log('JavaScript usage:');
log('const wasm = await import("./pkg");');
log('const result = wasm.add(5, 3);');
log('log("Result:", result);');
log('');
log('Use cases:');
log('  - Image processing');
log('  - Video encoding');
log('  - Physics simulations');
log('✓ WASM provides high-performance compute');`,
    output: "WebAssembly basics and performance",
  },
  {
    id: 406,
    category: "Advanced Topics",
    title: "Build Optimization",
    premium: true,
    code: `log('=== Build Optimization ===');
log('Code Splitting:');
log('import("./heavy-module").then(m => {});');
log('');
log('Tree Shaking:');
log('export const used = () => {};');
log('export const unused = () => {};');
log('// Only used in bundle');
log('');
log('Dynamic Imports:');
log('const routes = [...];');
log('routes.forEach(r => {');
log('  r.component = () =>');
log('    import(r.path);');
log('});');
log('');
log('Compression:');
log('gzip: .js, .css files');
log('brotli: Better compression ratio');
log('');
log('Metrics:');
log('npm run analyze');
log('✓ Optimization reduces load times');`,
    output: "Build optimization techniques",
  },
  {
    id: 407,
    category: "Advanced Topics",
    title: "Error Handling Best Practices",
    premium: true,
    code: `log('=== Error Handling ===');
log('Global error handler:');
log('window.addEventListener("error", (e) => {');
log('  sendToServer({');
log('    message: e.message,');
log('    stack: e.error.stack,');
log('    url: window.location.href');
log('  });');
log('});');
log('');
log('Unhandled rejection:');
log('window.addEventListener(');
log('  "unhandledrejection", (e) => {');
log('  logger.error(e.reason);');
log('}');
log(');');
log('');
log('Try-catch for async:');
log('try {');
log('  await riskyOperation();');
log('} catch (e) {');
log('  handleError(e);');
log('}');
log('✓ Error handling improves reliability');`,
    output: "Error handling and debugging",
  },
  {
    id: 408,
    category: "Advanced Topics",
    title: "Testing Strategies",
    premium: true,
    code: `log('=== Testing Pyramid ===');
log('Unit Tests (70%):');
log('  - Function logic in isolation');
log('  - Fast execution');
log('  - Jest, Vitest');
log('');
log('Integration Tests (20%):');
log('  - Module interactions');
log('  - Database queries');
log('  - React Testing Library');
log('');
log('E2E Tests (10%):');
log('  - Full user workflows');
log('  - Browser automation');
log('  - Cypress, Playwright');
log('');
log('Code coverage target: 80%');
log('npm run test -- --coverage');
log('');
log('✓ Testing strategy ensures quality');`,
    output: "Testing pyramid and strategies",
  },
  {
    id: 409,
    category: "Advanced Topics",
    title: "DevTools & Debugging",
    premium: true,
    code: `log('=== DevTools & Debugging ===');
log('Chrome DevTools:');
log('  - Elements: DOM inspection');
log('  - Console: JavaScript REPL');
log('  - Network: HTTP requests');
log('  - Performance: Profiling');
log('  - Application: Storage');
log('');
log('Breakpoints:');
log('debugger; // Hardcoded breakpoint');
log('const x = 5; // Can set breakpointon line');
log('');
log('Conditional breakpoint:');
log('Right-click line number -> Add conditional');
log('');
log('Watch expressions:');
log('Add custom expressions to watch');
log('');
log('Source maps:');
log('Enable source map in production for debugging');
log('✓ DevTools simplify debugging');`,
    output: "DevTools debugging techniques",
  },
  {
    id: 410,
    category: "Advanced Topics",
    title: "Deployment & DevOps",
    premium: true,
    code: `log('=== Deployment Pipeline ===');
log('Environments:');
log('  - Development: Local machine');
log('  - Staging: Production-like testing');
log('  - Production: Live application');
log('');
log('Deployment checklist:');
log('✓ Code review & approval');
log('✓ Run full test suite');
log('✓ Build optimization verified');
log('✓ Backup current production');
log('✓ Database migrations');
log('✓ Environment variables updated');
log('✓ Monitoring setup');
log('✓ Rollback plan ready');
log('');
log('Post-deployment:');
log('  - Monitor error rates');
log('  - Check performance metrics');
log('  - Monitor user feedback');
log('✓ Professional deployment practices');`,
    output: "Deployment strategies and best practices",
  },
];

log('✓ 410 JavaScript concepts loaded! Platform halfway complete. Next: concepts 411-500 (90 Advanced Topics)');
