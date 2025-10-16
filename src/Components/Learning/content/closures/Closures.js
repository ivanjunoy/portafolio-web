import React, { useEffect } from 'react';
import Prism from 'prismjs';

// 1) Tema
import 'prismjs/themes/prism-tomorrow.css';
// 2) Lenguaje (js/ts/jsx/tsx según uses)
import 'prismjs/components/prism-javascript';

const codeExample1 = `function init() {
  var name = "Mozilla"; // name es una variable local creada por init
  function displayName() {
    // displayName() es la función interna que forma el closure
    console.log(name); // usar la variable declarada en la función padre
  }
  displayName();
}
init();`

const Closures = () => {
  
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <h2>Closures</h2>

      <p>Un closure en JavaScript es una función que "recuerda" el entorno en el que fue creada, lo que le permite acceder a las variables de su ámbito externo incluso después de que la función externa haya terminado de ejecutarse</p>

      <pre><code className="language-js">{codeExample1}</code></pre>
      
    </div>
  );
};

export default Closures;
