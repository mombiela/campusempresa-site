MathJax = {
  loader: {load: ['input/tex', 'input/asciimath', 'output/chtml']},
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']]
  },
  asciimath: {
    delimiters: [['`', '`']]
  }
};

function mathReload() {
  try {
    console.log("Cargando math....");
    
    // Seleccionamos solo los elementos que tengan la clase 'math'
    const elements = document.querySelectorAll('.math');
    
    // Usamos MathJax.typesetPromise para procesar solo esos elementos
    MathJax.typesetPromise(elements).then(() => {
      console.log("Math OK");
    }).catch((err) => {
      console.log("Error en MathJax:", err);
    });
  } catch (e) {
    console.log(e);
  }
}
