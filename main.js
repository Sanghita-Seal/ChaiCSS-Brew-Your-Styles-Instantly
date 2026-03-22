const editor = document.getElementById("editor");
const preview = document.getElementById("preview");


let timeout;

editor.addEventListener("input", () => {
  clearTimeout(timeout);
  timeout = setTimeout(updatePreview, 200);
});

function updatePreview() {
  const html = editor.value;

  const doc = preview.contentDocument || preview.contentWindow.document;

  doc.open();
  doc.write(`
    <html>
      <body>
        ${html}
        <script src="chai-engine.js"><\/script>
        <script>
          runChaiEngine();
        <\/script>
      </body>
    </html>
  `);
  doc.close();
}
updatePreview();
