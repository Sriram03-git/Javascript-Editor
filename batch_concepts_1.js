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
