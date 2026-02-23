
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
log('✓ Progressive enhancement improves').
