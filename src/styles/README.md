# Colores del design system

`colors.css` contiene **20 colores y 20 variables**, compartidos por toda la
interfaz. Se importa una vez en `src/index.js` y los publica en `:root` para CSS
global, CSS Modules, estilos de React y SVG inline. No requiere Sass.

## Paleta

Los números identifican colores; no representan una escala de luminosidad.

| Variable | Uso |
| --- | --- |
| `primary01` | Verde bosque: paneles oscuros |
| `primary02` | Tinta: texto principal y superficies oscuras secundarias |
| `primary03` | Oliva: títulos destacados, iconos y foco |
| `primary04` | Lima: acciones principales, indicadores y cadenas de código |
| `primary05` | Verde claro apagado: texto secundario sobre fondos oscuros |
| `primary06` | Verde oscuro intermedio: bordes y detalles de paneles oscuros |
| `neutral01` | Blanco: CV, campos y controles seleccionados |
| `neutral02` | Lienzo: fondo de página y superficies secundarias |
| `neutral03` | Papel: tarjetas y paneles claros |
| `neutral04` | Texto secundario sobre fondos claros |
| `neutral05` | Bordes claros y texto claro sobre fondos oscuros |
| `neutral06` | Interior oscuro de editores y cuadrículas |
| `error01` | Fondo de error |
| `error02` | Texto de error y avisos del CV |
| `success01` | Fondo de éxito, notas y controles con tinte verde |
| `success02` | Texto de éxito y enlaces verdes sobre fondos claros |
| `warning01` | Ámbar: números de código y comida de Snake |
| `info01` | Azul: enlaces y navegación alternativa |
| `secondary01` | Turquesa: acentos y enlaces del CV |
| `syntax01` | Violeta: palabras clave y booleanos de código |

## Criterio de reducción

La primera migración conservaba cada matiz original: había 298 colores y 309
variables contando alias. Esta paleta agrupa los tonos cercanos y prioriza los
colores más usados: bordes, lima, texto secundario, bosque, blanco, tinta y papel.
Los acentos que distinguen estados, sintaxis y enlaces se conservan.

Los componentes usan directamente estas 20 variables. No hay alias ni variables
por componente. Cambiar un valor en `colors.css` actualiza todos sus usos.

## Uso

```css
.card {
  background: var(--neutral03);
  color: var(--primary02);
  border: 1px solid var(--neutral05);
}

.error {
  background: var(--error01);
  color: var(--error02);
}
```

```jsx
<span style={{ color: 'var(--primary03)' }}>Destacado</span>
```

Las transparencias de sombras y superposiciones se derivan de un color existente
con `color-mix()`. El hover del botón principal mezcla lima y oliva. No agregan
variables ni colores base a la paleta:

```css
.button {
  background: var(--primary04);
  box-shadow: 0 4px 12px color-mix(in srgb, var(--primary02) 10%, transparent);
}

.button:hover {
  background: color-mix(in srgb, var(--primary04) 80%, var(--primary03));
}
```

Para SVG que hereden la paleta, usar el import `ReactComponent` de React Scripts
y atributos como `fill="var(--primary04)"`. Las vistas previas de proyectos ya
usan este mecanismo.

Reutilizar esta paleta antes de incorporar un tono nuevo. Las imágenes
rasterizadas conservan sus píxeles; los colores de instalación del navegador en
`public/index.html` y `public/manifest.json` son metadatos estáticos, que no
resuelven variables CSS.
