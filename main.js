const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

// Debounce (smooth typing)
let timeout;

editor.addEventListener("input", () => {
  clearTimeout(timeout);
  timeout = setTimeout(updatePreview, 200);
});

function updatePreview() {
  const html = editor.value;

  const doc = preview.contentDocument || preview.contentWindow.document;

  doc.open();
  doc.write(html);
  doc.close();

  runChaiEngine(doc);
}

//Traverse the DOM

function runChaiEngine(root) {
  const elements = root.querySelectorAll("*");
  elements.forEach((el) => {
    //for each el -> (classList -> for each cls starting with "chai-" -> push into an arr-> applyChaiStyles(el, clses in the arr)-> move to next el
    const chaiClasses = [];
    el.classList.forEach((cls) => {
      if (cls.startsWith("chai-")) {
        chaiClasses.push(cls);
      }
    });

    if (chaiClasses.length > 0) {
      applyChaiStyles(el, chaiClasses);
    }
  });
}

function applyChaiStyles(el, chaiClasses) {
  //take a str var-> for each cls in chaiClasses->
  let styleString = "";

  chaiClasses.forEach((cls) => {
    const style = parseClass(cls);
    styleString += style;
  });

  const existing = el.getAttribute("style") ||"";
  el.setAttribute("style", existing + styleString);

  //remove the els already executed...to avoid rerun loop
  chaiClasses.forEach((cls) => {
    el.classList.remove(cls);
  });
}

function parseClass(cls) {
  const chaiMap = {
  
  // ========================
  // SPACING (SAFE)
  // ========================
  p: (v) => `padding:${formatValues(v)};`, 
  pt: (v) => `padding-top:${formatValues(v)};`, 
  pb: (v) => `padding-bottom:${formatValues(v)};`, 
  pl: (v) => `padding-left:${formatValues(v)};`, 
  pr: (v) => `padding-right:${formatValues(v)};`,  
  px: (v) => `padding-left:${formatValues(v)};padding-right:${formatValues(v)};`, 
  py: (v) => `padding-top:${formatValues(v)};padding-bottom:${formatValues(v)};`, 

  m: (v) => `margin:${formatValues(v)};`, 
  mt: (v) => `margin-top:${formatValues(v)};`, 
  mb: (v) => `margin-bottom:${formatValues(v)};`, 
  ml: (v) => `margin-left:${formatValues(v)};`, 
  mr: (v) => `margin-right:${formatValues(v)};`, 
  mx: (v) => `margin-left:${formatValues(v)};margin-right:${formatValues(v)};`, 
  my: (v) => `margin-top:${formatValues(v)};margin-bottom:${formatValues(v)};`,

  // ========================
  // SIZE (SAFE)
  // ========================
  w: (v) => `width:${formatValues(v)};`,
  h: (v) => `height:${formatValues(v)};`,

  // ========================
  // TYPOGRAPHY (SAFE)
  // ========================
  text: (v) => {
    const alignments = ["left", "center", "right"];
    if (alignments.includes(v[0])) {
      return `text-align:${v[0]};`;
    }
    return `color:${v[0]};`;
  },
  fs: (v) => `font-size:${formatValues(v)};`,
  fw: (v) => `font-weight:${v[0]};`,

  // ========================
  // BACKGROUND (SAFE - SIMPLE COLORS ONLY)
  // ========================
  bg: (v) => `background-color:${v[0]};`,

  // ========================
  // FLEXBOX (SAFE)
  // ========================
  flex: () => `display:flex;`,
  inlineflex: () => `display:inline-flex;`,
  justify: (v) => `justify-content:${v[0]};`,
  items: (v) => `align-items:${v[0]};`,
  gap: (v) => `gap:${formatValues(v)};`,

  // ========================
  // BORDER (SAFE)
  // ========================
  border: (v) => `border:${v.join(" ")};`,
  rounded: (v) => `border-radius:${formatValues(v)};`,

  // ========================
  // POSITION (SAFE)
  // ========================
  pos: (v) => `position:${v[0]};`,
  top: (v) => `top:${formatValues(v)};`,
  bottom: (v) => `bottom:${formatValues(v)};`,
  left: (v) => `left:${formatValues(v)};`,
  right: (v) => `right:${formatValues(v)};`,

  // ========================
  // DISPLAY (SAFE)
  // ========================
  block: () => `display:block;`,
  inline: () => `display:inline;`,
  inlineblock: () => `display:inline-block;`,
  hidden: () => `display:none;`,

  // ========================
  // EFFECTS (LIMITED BUT SAFE)
  // ========================
  opacity: (v) => `opacity:${v[0]};`,
  cursor: (v) => `cursor:${v[0]};`,
  shadow: (v) => `box-shadow:${v.join(" ")};`,
}

 
  

  const parts = cls.split("-");
  console.log(parts);
  if (parts.length < 2) return "";
  const type = parts[1];
  //const values=parts[2]; //return like ->center
  const values = parts.slice(2); //return like ->['20'] array

  if (chaiMap[type]) {
    return chaiMap[type](values);
  }
  return "";
}
function formatValues(values, unit="px"){
    return values
            .map(v=>{
                if(v==="auto") return "auto";
                if(v.includes("%")) return v;
                return isNaN(v)? v: v+unit;
            })
            .join(" ");
}
updatePreview();
