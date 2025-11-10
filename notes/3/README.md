# Untitled

## 🧩 Q1: Difference between Named Export, Default Export, and `as` Export

ES6 modules let you **share code** across files.

There are three main ways to export and import modules:

---

### **1️⃣ Named Export**

- Allows **multiple exports** per file.
- Must use the **same names** inside `{}` when importing.

```jsx
// MyComponent.js
export const MyComponent = () => {}
export const MyComponent2 = () => {}

```

```jsx
// import
import { MyComponent, MyComponent2 } from "./MyComponent";
import { MyComponent2 as CustomName } from "./MyComponent";

```

✅ **Key point:** Export multiple components, functions, or constants together.

---

### **2️⃣ Default Export**

- Allows **only one export** per file.
- Can be imported with **any name**.
- **No `{}`** needed when importing.

```jsx
// MyComponent.js
const MyComponent = () => {}
export default MyComponent;

```

```jsx
// import
import Anything from "./MyComponent";

```

✅ **Key point:** Best for the main component or function in a file.

---

### **3️⃣ `as` Export**

- Imports **everything** from a file into a single object.
- Useful for **grouped imports**.

```jsx
// MyComponent.js
export const Header = () => {}
export const Footer = () => {}
export const Sidebar = () => {}

```

```jsx
// import all
import * as Layout from "./MyComponent";

// use
<Layout.Header />
<Layout.Footer />
<Layout.Sidebar />

```

✅ **Key point:** Access all exports using `ObjectName.propertyName`.

---

### **💡 Combined Export Example**

```jsx
// MyComponent.js
export const Helper = () => {}
const MyComponent = () => {}
export default MyComponent;

```

```jsx
// import
import MyComponent, { Helper } from "./MyComponent";

```

---

### **🧭 Module Import/Export Flow**

```
┌──────────────────┐
│  MyComponent.js  │
│------------------│
│ export const A   │
│ export default B │
└───────┬──────────┘
        │
        ▼
┌──────────────────┐
│    App.js        │
│------------------│
│ import { A }     │
│ import B         │
└──────────────────┘

```

---

## ⚙️ Q2: Importance of `config.js` File

The `config.js` file stores **app-specific configuration values** like API URLs, keys, and constants.

This separates **logic** from **environment settings**, making maintenance easier.

**Example:**

```jsx
// config.js
export const CONFIG = {
  APP_NAME: "React Interview Prep",
  API_URL: "https://api.example.com",
  VERSION: "1.0.0",
};

```

**Usage:**

```jsx
import { CONFIG } from "./config";
console.log(CONFIG.API_URL);

```

✅ **Key point:** Centralized configuration means cleaner code and easier environment switching.

---

### **🗂️ Config Flow Diagram**

```
┌───────────────┐
│  config.js    │
│---------------│
│ export CONFIG │
└──────┬────────┘
       │
       ▼
┌─────────────────────┐
│ Any React Component │
│---------------------│
│ import { CONFIG }   │
│ use CONFIG.API_URL  │
└─────────────────────┘

```

---

## ⚛️ Q3: What Are React Hooks?

Hooks (introduced in React 16.8) let you **use state, lifecycle, and context** in **functional components**.

They make code more reusable and easier to maintain.

---

### **Common React Hooks**

| Hook | Purpose | Example |
| --- | --- | --- |
| `useState` | Manage local state | `const [count, setCount] = useState(0)` |
| `useEffect` | Handle side effects | `useEffect(() => {...}, [])` |
| `useContext` | Consume context | `useContext(UserContext)` |
| `useReducer` | Complex state logic | `useReducer(reducer, initialState)` |
| `useCallback` | Memoize functions | `useCallback(fn, deps)` |
| `useMemo` | Memoize values | `useMemo(() => compute(), deps)` |
| `useRef` | Access DOM nodes | `ref.current` |
| `useLayoutEffect` | Sync DOM updates | Similar to`useEffect`but runs earlier |
| `useDebugValue` | Debug custom hooks | For React DevTools display |

✅ **Key point:** Hooks make stateful logic **reusable without class components**.

---

### **🌀 React Hook Lifecycle Flow (Simplified)**

```
Component Render
       │
       ▼
 ┌───────────────┐
 │ useState()    │ → initialize state
 └───────────────┘
       │
       ▼
 ┌───────────────┐
 │ useEffect()   │ → perform side effects (API calls, timers)
 └───────────────┘
       │
       ▼
 ┌───────────────┐
 │ Re-render if  │
 │ state changes │
 └───────────────┘

```

---

## ⚡ Q4: Why Do We Need `useState` Hook?

The `useState` Hook **stores and updates local state** in functional components.

**Syntax:**

```jsx
const [state, setState] = useState(initialValue);

```

**Example:**

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <><p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

```

✅ **Key points:**

- Persists value between re-renders.
- You can call multiple `useState`s for different variables.
- Triggers re-render when state updates.

---

### **🧩 useState Flow Diagram**

```
User Action (Click)
        │
        ▼
┌────────────────┐
│ setState(new)  │
└────────────────┘
        │
        ▼
┌────────────────┐
│ React re-renders│
│ with new state  │
└────────────────┘

```

---

## 🔁 Summary Table

| Concept | Syntax | Import Style | Use Case |
| --- | --- | --- | --- |
| **Named Export** | `export const name = ...` | `import { name } from ...` | Multiple exports |
| **Default Export** | `export default ...` | `import anyName from ...` | Single main export |
| **`* as`Export** | `import * as Obj from ...` | `Obj.property` | Grouped imports |
| **config.js** | Key-value constants | Normal import | Config management |
| **React Hooks** | `useState()`,`useEffect()` | From React | Functional logic reuse |

### **Q1: What is the difference between useEffect and useLayoutEffect?**

- **useEffect:** Runs **after** the render is committed to the screen (asynchronous).
- **useLayoutEffect:** Runs **before** the browser paints (synchronous).✅ Use `useEffect` for side effects and `useLayoutEffect` for DOM measurements or layout logic.

```
Render → paint → useEffect()
Render → useLayoutEffect() → paint

```

---

### **Q2: What is the difference between useMemo and useCallback?**

- **useMemo:** Caches the **result/value** of a computation.
- **useCallback:** Caches the **function definition** itself.✅ Both prevent **unnecessary re-renders** by memoizing dependencies.

```jsx
const memoValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoFn = useCallback(() => handleClick(a, b), [a, b]);

```

---

### **Q3: Can we use Hooks inside loops or conditions?**

❌ **No.** Hooks must be called at the **top level** of a component or custom Hook.

✅ This ensures React maintains the **correct order** of Hook calls during re-renders.

✅ **Correct:**

```jsx
function App() {
  const [count, setCount] = useState(0);
}

```

❌ **Incorrect:**

```jsx
if (condition) {
  const [count, setCount] = useState(0);
}

```

---

### **Q4: What are Custom Hooks?**

A **Custom Hook** is a **reusable function** that starts with `use` and **encapsulates logic** using other Hooks.

**Example:**

```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url).then(res => res.json()).then(setData);
  }, [url]);
  return data;
}

```

✅ Custom Hooks help **reuse logic** (not state) across multiple components.

---

### **Q5: Why is useRef used and how is it different from useState?**

- `useRef` provides a **mutable object** (`.current`) that **doesn't trigger re-renders** when changed.
- `useState` triggers a **re-render** when its value updates.

**Example:**

```jsx
const inputRef = useRef();
<input ref={inputRef} />

```

✅ **useRef** is ideal for DOM access, focus management, timers, and persisting values between renders.