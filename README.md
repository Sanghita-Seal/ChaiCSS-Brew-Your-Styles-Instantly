# ⚡ ChaiCSS — Brew Your Styles Instantly

A lightweight **utility-first CSS engine** powered by JavaScript.

Build modern UIs using simple class names like `chai-p-20`, `chai-bg-red` — without writing any CSS.

---

## ✨ Features

* ⚡ Utility-first styling (inspired by Tailwind)
* 🧠 Parses class names dynamically
* 🔌 Reusable in any HTML project
* 🎯 No external CSS required
* 🪶 Lightweight and fast

---

## 🚀 Live Demo

👉 https://tailwind-shilpo.vercel.app/

---

## 📦 How to Use

### 1. Include via CDN

```html
<script src="https://cdn.jsdelivr.net/gh/Sanghita-Seal/ChaiCSS-Brew-Your-Styles-Instantly@main/chai-engine.js"></script>
```

---

### 2. Use Utility Classes

```html
<div class="chai-p-20 chai-bg-red chai-text-center">
  Hello ChaiCSS 🚀
</div>
```

---

### 3. Done!

No CSS. No setup. Just class names.

---

## 🧪 Quick Start (Test in 10 seconds)

You can test ChaiCSS instantly by creating a simple HTML file.

### 1. Create a file: `index.html`

### 2. Paste this code:

```html
<!doctype html>
<html>
<body>

<h2 class="chai-text-center chai-bg-blue chai-p-20 chai-text-white">
  ChaiCSS is Working 🚀
</h2>

<div class="chai-flex chai-justify-center chai-gap-20 chai-mt-20">
  <div class="chai-bg-red chai-p-10 chai-text-white">Box 1</div>
  <div class="chai-bg-green chai-p-10 chai-text-white">Box 2</div>
</div>

<script src="https://cdn.jsdelivr.net/gh/Sanghita-Seal/ChaiCSS-Brew-Your-Styles-Instantly@main/chai-engine.js"></script>

</body>
</html>
```

---

### 3. Open in browser

👉 If you see styled elements → **ChaiCSS is working ✅**

---

## 🔁 Reusability

ChaiCSS is a **plug-and-play client-side library**.

To use it in any project:

```html
<script src="https://cdn.jsdelivr.net/gh/Sanghita-Seal/ChaiCSS-Brew-Your-Styles-Instantly@main/chai-engine.js"></script>
```

Then simply use `chai-*` classes in your HTML.

No configuration required.

---

## ⚙️ How It Works

1. Scans the DOM after page load
2. Finds all classes starting with `chai-`
3. Parses the class names
4. Converts them into inline styles
5. Applies styles dynamically

---

## 🧩 Supported Utilities

### 📦 Spacing

| Class      | Output               |
| ---------- | -------------------- |
| chai-p-20  | padding: 20px        |
| chai-m-10  | margin: 10px         |
| chai-px-20 | padding-left & right |

---

### 🎨 Colors

| Class          | Output                |
| -------------- | --------------------- |
| chai-bg-red    | background-color: red |
| chai-text-blue | color: blue           |

---

### 🔤 Typography

| Class            | Output             |
| ---------------- | ------------------ |
| chai-fs-20       | font-size: 20px    |
| chai-fw-700      | font-weight: 700   |
| chai-text-center | text-align: center |

---

### 📐 Layout

| Class               | Output                  |
| ------------------- | ----------------------- |
| chai-flex           | display: flex           |
| chai-justify-center | justify-content: center |
| chai-items-center   | align-items: center     |
| chai-gap-20         | gap: 20px               |

---

### 🟦 Borders

| Class                       | Output              |
| --------------------------- | ------------------- |
| chai-rounded-10             | border-radius: 10px |
| chai-border-1px-solid-black | border              |

---

### 🎯 Effects

| Class                         | Output     |
| ----------------------------- | ---------- |
| chai-opacity-0.7              | opacity    |
| chai-shadow-2px-2px-10px-gray | box-shadow |

---

## 🛠️ Example

```html
<section class="chai-bg-blue chai-p-40 chai-text-center chai-text-white">
  <h1 class="chai-fs-30 chai-mb-20">Welcome 🚀</h1>
  <button class="chai-bg-white chai-text-blue chai-p-10 chai-rounded-5">
    Click Me
  </button>
</section>
```

---

## 📁 Project Structure

```
chai-tailwind/
│── chai-engine.js   # Core reusable engine
│── main.js          # Playground logic
│── index.html       # Playground UI
│── style.css        # Playground styling
```

---

## 🎥 Demo Video

👉 [Add your video link here]

---

## 🐦 Twitter (X) Post

👉 [Add your Twitter/X post link here]

---

## 💡 Future Improvements

* Custom color system
* Responsive utilities
* Hover & animation support
* Advanced parsing (Tailwind-like)

---

## 🙌 Author

**Sanghita Seal**

---

## ⭐ Support

If you found this useful, consider giving it a ⭐ on GitHub!
