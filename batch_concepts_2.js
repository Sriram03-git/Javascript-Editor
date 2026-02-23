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
