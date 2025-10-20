import React, { useEffect } from 'react';
import Prism from 'prismjs';
import { Link } from 'react-router-dom';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';

const codeExample1 = `function init() {
  var name = "Mozilla"; 
  function displayName() {
    // displayName() 
    console.log(name); 
  }
  displayName();
}
init();`

const codeExample2 = `function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12`

const codeExample3 = `function makeSizer(size) {
  return function () {
    document.body.style.fontSize = \`\${size}px\`;
  };
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);
`

const Closures = () => {

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <Link to="/learning">Go back</Link>
      <h1>Closures</h1>

      <p>Un closure (o clausura) es cuando una función “recuerda” las variables del lugar donde fue creada, incluso después de que esa función externa ya terminó de ejecutarse.</p>
      <p>Sirven para crear funciones con “memoria” o con datos privados.</p>

      <pre><code className="language-js">{codeExample1}</code></pre>
      
      <p>
        Una variable local normal deja de existir cuando la función termina.
        En cambio, si una función interna la usa, esa variable queda “viva” dentro del closure, incluso después de que la función externa haya finalizado.
      </p>
      <p>Aquí hay un ejemplo un poco más interesante: una función makeAdder:</p>
      <pre><code className="language-js">{codeExample2}</code></pre>
      <p>
        makeAdder crea funciones que recuerdan el valor que se les pasó.
        Cada una guarda su propio entorno: add5 recuerda que x = 5 y add10 que x = 10.
        Por eso son closures: funciones que mantienen acceso a variables externas incluso después de que la función original terminó.
      </p>

      <h3>Closures Prácticos</h3>

      <p>Otro ejemplo práctico: crear funciones para cambiar el tamaño de fuente:</p>
      <pre><code className="language-js">{codeExample3}</code></pre>

      <p>
        Este ejemplo muestra cómo los closures pueden ser útiles para crear funciones
        que "recuerdan" un valor específico. Cada función size12, size14, size16
        recuerda su propio valor de size.
      </p>

    </div>
  );
};

export default Closures;
