import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import { Link } from 'react-router-dom';

// 1) Tema
import 'prismjs/themes/prism-tomorrow.css';
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

const codeExample2 = `function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12`

const Closures = () => {
  const [result, setResult] = useState();

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
      return name;
    }
    return displayName;
  }

  function handleClick() {
    const res = makeFunc(); // ejecuta el closure
    setResult(res);       // guarda el resultado en el estado
  }

  return (
    <div>
      <Link to="/learning">Go back</Link>
      <h2>Closures</h2>

      <p>Un closure (o clausura) es cuando una función “recuerda” las variables del lugar donde fue creada, incluso después de que esa función externa ya terminó de ejecutarse.</p>

      <pre><code className="language-js">{codeExample1}</code></pre>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={handleClick}>Test</button>
        {result && (
          <p style={{ margin: 0 }}>
            {result}
          </p>
        )}
      </div>

      <p>Aquí hay un ejemplo un poco más interesante: una función makeAdder:</p>
      <pre><code className="language-js">{codeExample2}</code></pre>

    </div>
  );
};

export default Closures;
