# Untitled

## Q1: What is Microservice Architecture?

**Microservices** (or **microservice architecture**) is an **approach to software design** where an application is divided into **small, independent services** that communicate using **well-defined APIs**.

Each service (like Database, API Server, or UI) is:

- **Independent** and deployable on its own
- **Owned by a small team**
- **Built around business capabilities**

This architecture allows **faster development, easier scaling, and better fault isolation**.

### 🧩 **Benefits of Microservices**

- **Flexible Scaling** – Scale individual services independently
- **Easy Deployment** – Update a single service without redeploying the whole app
- **Technological Freedom** – Each service can use different languages or frameworks
- **Reusable Code** – Shared across different applications
- **Resilience** – Failure in one service doesn’t bring down the entire system

---

## 🏗️ Q2: What is Monolithic Architecture?

A **Monolithic Architecture** is a **single-tiered** software structure where **all components** (UI, business logic, and data access) are **tightly coupled** and built as **one unit**.

- All features share **a single codebase** and **database**
- Any small change requires **redeploying the entire application**
- Becomes **complex and less scalable** as the codebase grows

✅ **In short:** Everything is contained in one large application file — no modular separation.

---

## 🔁 Q3: Difference Between Monolith and Microservice

| Feature | Monolithic Architecture | Microservice Architecture |
| --- | --- | --- |
| **Structure** | Single, unified codebase | Collection of independent services |
| **Deployment** | Entire app redeployed together | Each service can be deployed separately |
| **Scalability** | Scale entire system | Scale individual services |
| **Tech Stack** | Usually one stack | Different tech per service |
| **Failure Impact** | One failure can crash the app | Isolated failures |
| **Development Speed** | Slower as app grows | Faster and parallel development |

✅ **Key takeaway:**

Microservices = modular, flexible, scalable

Monolith = simple, but rigid and hard to scale

---

## ⚛️ Q4: Why Do We Need `useEffect` Hook?

The `useEffect` Hook lets you **handle side effects** in React components like fetching APIs, setting timers, or updating the DOM.

**Syntax:**

```jsx
useEffect(() => {
  // side effect logic
}, [dependencies]);

```

- **Callback function** → performs the side effect
- **Dependency array** → determines when effect runs

**Examples:**

```jsx
// Runs only once on mount
useEffect(() => {
  console.log("Mounted");
}, []);

// Runs whenever currentState changes
useEffect(() => {
  setCurrentState("true");
}, [currentState]);

// Runs on every render (not recommended)
useEffect(() => {
  console.log("Always runs");
});

```

✅ **Key point:**

`useEffect` helps synchronize UI with side effects safely.

---

## 🧭 Q5: What is Optional Chaining?

The **Optional Chaining (`?.`)** operator lets you **safely access nested object properties** without causing runtime errors if a property is `undefined` or `null`.

**Example:**

```jsx
const user = { profile: { name: "Sunny" } };
console.log(user.profile?.name); // ✅ "Sunny"
console.log(user.address?.city); // ✅ undefined (no error)

```

✅ **Key point:** Prevents “Cannot read property of undefined” errors and improves code safety.

---

## 💡 Q6: What is Shimmer UI?

**Shimmer UI** (or Skeleton Loader) is a **visual placeholder** that imitates the structure of actual content while data is loading.

It enhances **user experience** by giving feedback during long load times.

**Example:**

```jsx
// Instead of a loading spinner
<div className="shimmer-card"></div> // grey animated placeholder

```

✅ **Good UX practice:**

Shows visual layout before real content arrives, making the app feel faster.

---

## 🧮 Q7: Difference Between JS Expression and JS Statement

| Type | Returns Value | Example |
| --- | --- | --- |
| **Expression** | ✅ Yes | `1 + 2`, `"foo".toUpperCase()`, `isTrue ? 'Yes' : 'No'` |
| **Statement** | ❌ No | `let x;`, `if() {}`, `for(){}` |

**In JSX:**

```jsx
{/* Expression */}
{user.name}

{/* Statement - wrapped properly */}
{(() => { if (isAdmin) return <AdminPanel /> })()}

```

✅ **Key point:**

JSX allows **expressions**, not **statements**, directly.

---

## 🔄 Q8: What is Conditional Rendering in React?

Conditional rendering means **rendering components based on conditions** (similar to `if-else` in JS).

**Examples:**

```jsx
// 1️⃣ Ternary Operator
{isLoggedIn ? <UserGreeting /> : <GuestGreeting />}

// 2️⃣ if-else Statement
{(() => {
  if (isLoggedIn) return <UserGreeting />;
  else return <GuestGreeting />;
})()}

// 3️⃣ Logical AND (short-circuit)
{isLoggedIn && <button>Logout</button>}

```

✅ **Key point:**

Lets React render different UI fragments dynamically based on state.

---

## 🌐 Q9: What is CORS?

**CORS (Cross-Origin Resource Sharing)** is a **security feature** in browsers that allows or restricts requests to a **different domain, protocol, or port** from the one serving the page.

- Controlled using **HTTP headers** like `Access-Control-Allow-Origin`
- Prevents malicious cross-domain requests

✅ **Key point:**

Enables safe cross-origin API communication between client and server.

---

## ⚡ Q10: What are Async and Await?

**`async`** and **`await`** simplify working with **Promises** in JavaScript.

- `async` declares a function that returns a **Promise**
- `await` pauses the function until the **Promise resolves**

**Example:**

```jsx
async function getRestaurants() {
  const data = await fetch("FOODFIRE_API_URL");
  const json = await data.json();
  console.log(json);
}

```

✅ **Key points:**

- Makes asynchronous code look synchronous
- `await` can only be used **inside async functions**
- Prevents callback hell

---

## 🧩 Q11: Why do we use `const json = await data.json();`?

The `fetch()` API returns a **Response object**.

`response.json()` is an **asynchronous method** that parses the response body into a **JavaScript object**.

**Example:**

```jsx
const data = await fetch("API_URL");
const json = await data.json();

```

- `data` → raw HTTP response
- `data.json()` → converts JSON body to usable JS object
- `await` → waits for parsing to complete before continuing

✅ **Key point:**

`await data.json()` ensures we get a **fully parsed JSON object**, not a pending promise