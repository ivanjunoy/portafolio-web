import LearningArticle, { CodeExample, LessonNote, LessonSection } from '../../LearningArticle';

const sections = [
  { id: 'como-funciona', title: 'El orden de ejecución' },
  { id: 'ejemplo', title: 'Un ejemplo paso a paso' },
  { id: 'recordar', title: 'Qué conviene recordar' },
];

const example = `console.log("1. Inicio");

setTimeout(() => {
  console.log("4. Timer");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Promesa");
});

console.log("2. Fin del código síncrono");`;

export default function EventLoop() {
  return (
    <LearningArticle number="02" title="Bucle de" accent="eventos." description="El orden detrás de lo asíncrono. Una mirada al Event Loop del navegador, las tareas y las microtareas." sections={sections} related={{ to: '/learning/closures', label: 'Cierres (Closures)' }} sources={[
      { label: 'MDN · Modelo de ejecución de JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model' },
      { label: 'MDN · Guía de microtareas', url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide' },
    ]}>
      <LessonSection id="como-funciona" number="01" title="¿Quién decide qué se ejecuta primero?">
        <p>En el navegador, el código JavaScript de un mismo hilo se ejecuta hasta terminar su trabajo actual. El <strong>Event Loop</strong> coordina cuándo pueden ejecutarse los callbacks pendientes.</p>
        <ul>
          <li><strong>Pila de ejecución:</strong> contiene las llamadas que se están procesando. La llamada más reciente se resuelve antes de volver a la anterior.</li>
          <li><strong>Microtareas:</strong> incluyen los callbacks de promesas listas y de <code>queueMicrotask()</code>. En un punto de control de microtareas, se vacía esta cola antes de la siguiente tarea.</li>
          <li><strong>Tareas:</strong> incluyen callbacks de timers y eventos. Un timer listo espera su oportunidad para ejecutarse.</li>
        </ul>
        <LessonNote><p>Para este ejemplo: primero el código síncrono, después las microtareas pendientes y luego el callback del timer.</p></LessonNote>
      </LessonSection>
      <LessonSection id="ejemplo" number="02" title="Un timer de cero no se ejecuta primero">
        <p>Antes de mirar la salida, pensá en qué orden aparecerán estos cuatro mensajes.</p>
        <CodeExample title="event-loop.js" code={example} output={'1. Inicio\n2. Fin del código síncrono\n3. Promesa\n4. Timer'} />
        <ol>
          <li>Se imprime <code>1. Inicio</code>. El timer se registra y la promesa resuelta agenda su callback como microtarea.</li>
          <li>Se imprime <code>2. Fin del código síncrono</code>, y termina el trabajo síncrono.</li>
          <li>Se ejecuta la microtarea de la promesa: <code>3. Promesa</code>.</li>
          <li>El callback del timer puede ejecutarse como una tarea posterior: <code>4. Timer</code>.</li>
        </ol>
      </LessonSection>
      <LessonSection id="recordar" number="03" title="Asíncrono no significa inmediato">
        <p><code>setTimeout(fn, 0)</code> no interrumpe el código actual ni promete un instante exacto. Su callback solo puede ejecutarse más adelante.</p>
        <p>Una tarea larga bloquea la respuesta de ese hilo. Además, las microtareas que agregan más microtareas pueden retrasar las tareas y el renderizado. Conviene mantener cada trabajo breve.</p>
        <LessonNote><p>Esta nota describe el navegador. Node.js tiene su propio ciclo de eventos y detalles de planificación diferentes.</p></LessonNote>
      </LessonSection>
    </LearningArticle>
  );
}
