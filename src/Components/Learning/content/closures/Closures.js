import LearningArticle, { CodeExample, LessonNote, LessonSection } from '../../LearningArticle';

const sections = [
  { id: 'entorno', title: 'Una función con memoria' },
  { id: 'sumadores', title: 'Cada cierre, su entorno' },
  { id: 'usos', title: 'Un uso práctico' },
];

const codeExample1 = `function init() {
  const name = "Mozilla";
  function displayName() {
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
  return (
    <LearningArticle number="01" title="Funciones con" accent="memoria." description="Cierres (Closures): funciones que mantienen acceso al entorno donde nacieron. Un concepto pequeño con muchos usos." sections={sections} related={{ to: '/learning/event-loop', label: 'Bucle de eventos (Event Loop)' }} sources={[{ label: 'MDN · Cierres (Closures)', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures' }]}>
      <LessonSection id="entorno" number="01" title="Una función recuerda dónde nació">
        <p>Un <strong>closure</strong> (o cierre) combina una función con referencias a su entorno léxico. La función mantiene acceso a esas variables, incluso si la función externa ya terminó de ejecutarse.</p>
        <p>En este primer ejemplo, <code>displayName</code> puede leer <code>name</code> porque fue creada dentro de <code>init</code>.</p>
        <CodeExample title="entorno-lexico.js" code={codeExample1} output="Mozilla" />
        <LessonNote><p>El entorno depende de dónde se define la función. No de dónde se la llama después.</p></LessonNote>
      </LessonSection>
      <LessonSection id="sumadores" number="02" title="Un mismo código, dos entornos distintos">
        <p>Ahora devolvemos la función interna y la usamos después. <code>makeAdder</code> crea sumadores que mantienen acceso a su propio valor de <code>x</code>.</p>
        <CodeExample title="make-adder.js" code={codeExample2} output={'7\n12'} />
        <p><code>add5</code> conserva el entorno donde <code>x = 5</code>, y <code>add10</code> el entorno donde <code>x = 10</code>. La llamada a <code>makeAdder</code> ya terminó, pero esas referencias siguen disponibles para las funciones retornadas.</p>
        <LessonNote><p>Un closure conserva referencias a variables, no una copia congelada de sus valores. Si una variable compartida cambia, el cierre puede observar el cambio.</p></LessonNote>
      </LessonSection>
      <LessonSection id="usos" number="03" title="De la idea a un uso práctico">
        <p>Podemos crear funciones que recuerden un tamaño de fuente y asociarlas a botones.</p>
        <CodeExample title="make-sizer.js" code={codeExample3.trim()} />
        <p>Las funciones <code>size12</code>, <code>size14</code> y <code>size16</code> conservan su propio <code>size</code>. Invocar <code>size14()</code> cambiaría el tamaño base de la fuente del documento a 14 píxeles.</p>
        <p>Este patrón también sirve para preparar callbacks y mantener datos internos sin exponerlos como variables globales.</p>
      </LessonSection>
    </LearningArticle>
  );
};

export default Closures;
