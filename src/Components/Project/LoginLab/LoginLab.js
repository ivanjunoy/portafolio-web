import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiCheck, FiCode, FiEye, FiEyeOff, FiLock, FiLogOut, FiRefreshCw } from 'react-icons/fi';
import styles from './LoginLab.module.css';

const DEMO_PASSWORD = 'demo1234';
const createTemplate = () => [{
  id: 'usr_001',
  name: 'Alex Morgan',
  email: 'alex@example.com',
  role: 'client',
  createdAt: '2026-01-01T12:00:00.000Z',
  password: DEMO_PASSWORD,
}];

const publicClient = ({ password, ...client }) => client;

function JsonCode({ value }) {
  const lines = JSON.stringify(value, null, 2).split('\n');
  return (
    <pre className={styles.code} aria-label="Datos de la simulación en JSON"><code>
      {lines.map((line, index) => (
        <span className={styles.codeLine} key={index}>
          <span className={styles.lineNumber} aria-hidden="true">{index + 1}</span>
          <span>{line.split(/("(?:\\.|[^"\\])*"\s*:|"(?:\\.|[^"\\])*"|\b(?:true|false|null)\b|\b\d+\b)/g).map((token, part) => {
            const color = /^".*":$/.test(token.trim()) ? 'jsonKey'
              : token.startsWith('"') ? 'jsonString'
                : /^(true|false|null|\d+)$/.test(token) ? 'jsonValue' : '';
            return <span className={styles[color]} key={part}>{token}</span>;
          })}</span>
        </span>
      ))}
    </code></pre>
  );
}

export default function LoginLab() {
  const [mode, setMode] = useState('login');
  const [clients, setClients] = useState(createTemplate);
  const [session, setSession] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState(null);
  const [lastEvent, setLastEvent] = useState('Demo lista. Podés usar el usuario de ejemplo o crear uno nuevo.');
  const [stage, setStage] = useState(0);
  const isRegister = mode === 'register';

  useEffect(() => {
    document.body.classList.add('login-lab-body');
    return () => document.body.classList.remove('login-lab-body');
  }, []);

  function changeMode(nextMode) {
    setMode(nextMode);
    setNotice(null);
    setShowPassword(false);
    setForm(current => ({ ...current, password: '' }));
  }

  function updateField(event) {
    const { name, value } = event.target;
    setForm(current => ({ ...current, [name]: value }));
    setNotice(null);
  }

  function submit(event) {
    event.preventDefault();
    const email = form.email.trim().toLowerCase();
    const existing = clients.find(client => client.email === email);
    if (isRegister) {
      if (!form.name.trim()) {
        setNotice({ type: 'error', text: 'Ingresá tu nombre para crear la cuenta.' });
        return;
      }
      if (existing) {
        setNotice({ type: 'error', text: 'Ya existe una cuenta con ese email. Podés iniciar sesión.' });
        return;
      }
      const client = {
        id: `usr_${String(clients.length + 1).padStart(3, '0')}`,
        name: form.name.trim(), email, role: 'client',
        createdAt: new Date().toISOString(), password: form.password,
      };
      setClients(current => [...current, client]);
      setMode('login');
      setShowPassword(false);
      setForm({ name: '', email, password: '' });
      setNotice({ type: 'success', text: '¡Cuenta creada! Tu usuario ya está en el JSON. Iniciá sesión para continuar.' });
      setLastEvent(`Usuario ${client.id} creado. Esperando inicio de sesión.`);
      setStage(1);
      return;
    }
    if (!existing || existing.password !== form.password) {
      setNotice({ type: 'error', text: 'El email o la contraseña no coinciden. Intentá de nuevo.' });
      setLastEvent('Inicio de sesión rechazado. Revisá tus credenciales.');
      return;
    }
    setSession({ userId: existing.id, authenticated: true, loggedInAt: new Date().toISOString() });
    setForm({ name: '', email: '', password: '' });
    setShowPassword(false);
    setNotice(null);
    setLastEvent(`Sesión iniciada para ${existing.name}.`);
    setStage(2);
  }

  function logout() {
    setSession(null);
    setLastEvent('Sesión cerrada. Los usuarios creados siguen disponibles.');
    setNotice({ type: 'success', text: 'Cerraste sesión. Podés volver a entrar con cualquiera de tus cuentas.' });
    setStage(1);
  }

  function reset() {
    setClients(createTemplate());
    setSession(null);
    setMode('login');
    setForm({ name: '', email: '', password: '' });
    setShowPassword(false);
    setNotice(null);
    setStage(0);
    setLastEvent('Demo reiniciada. Solo queda el usuario de ejemplo.');
  }

  const activeClient = clients.find(client => client.id === session?.userId);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.backLink} to="/proyectos"><FiArrowLeft /> Proyectos</Link>
        <span className={styles.wordmark}><span className={styles.brandIcon}><FiCode /></span> login<span className={styles.brandLight}>lab</span><span className={styles.version}>/ 01</span></span>
        <span className={styles.demoBadge}><span /> Demo interactiva</span>
      </header>

      <div className={styles.workspace}>
        <section className={styles.formPanel} aria-labelledby="login-heading">
          <div className={styles.formContent}>
            <p className={styles.eyebrow}>UN PEQUEÑO EXPERIMENTO DE IDENTIDAD</p>
            <h1 id="login-heading">Un formulario.<br />Todo un <span>flujo.</span></h1>
            <p className={styles.intro}>De un primer hola a una sesión iniciada.<br />Explorá qué pasa con tus datos en cada paso.</p>

            {activeClient ? (
              <div className={styles.successCard}>
                <span className={styles.successIcon}><FiCheck /></span>
                <span className={styles.eyebrow}>SESIÓN INICIADA</span>
                <h2>¡Hola, {activeClient.name}!</h2>
                <p>Estás logueado. Tu sesión ya aparece en el panel de datos.</p>
                <div className={styles.identity}><span>{activeClient.name.slice(0, 1).toUpperCase()}</span><div><strong>{activeClient.name}</strong><small>{activeClient.email}</small></div></div>
                <button className={styles.primaryButton} onClick={logout}>Cerrar sesión <FiLogOut /></button>
              </div>
            ) : (
              <>
                <div className={styles.modeSwitch} role="group" aria-label="Tipo de formulario">
                  <button type="button" aria-pressed={!isRegister} className={!isRegister ? styles.selectedMode : ''} onClick={() => changeMode('login')}>Iniciar sesión</button>
                  <button type="button" aria-pressed={isRegister} className={isRegister ? styles.selectedMode : ''} onClick={() => changeMode('register')}>Crear cuenta</button>
                </div>
                <form onSubmit={submit} className={styles.form}>
                  <h2>{isRegister ? 'Hagamos las presentaciones.' : 'Bienvenido de nuevo.'}</h2>
                  {isRegister && <div className={styles.field}><label htmlFor="login-name">Nombre completo</label><input id="login-name" name="name" autoComplete="name" placeholder="¿Cómo te llamás?" value={form.name} onChange={updateField} maxLength={80} required /></div>}
                  <div className={styles.field}><label htmlFor="login-email">Email</label><input id="login-email" name="email" type="email" autoComplete="email" placeholder="vos@ejemplo.com" value={form.email} onChange={updateField} maxLength={120} required /></div>
                  <div className={styles.field}>
                    <label htmlFor="login-password">Contraseña {isRegister && <span>Mínimo 8 caracteres</span>}</label>
                    <div className={styles.passwordField}><input id="login-password" name="password" type={showPassword ? 'text' : 'password'} autoComplete={isRegister ? 'new-password' : 'current-password'} placeholder={isRegister ? 'Creá una contraseña de prueba' : 'Ingresá tu contraseña'} value={form.password} onChange={updateField} minLength={isRegister ? 8 : undefined} maxLength={128} required /><button type="button" aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'} aria-pressed={showPassword} onClick={() => setShowPassword(current => !current)}>{showPassword ? <FiEyeOff /> : <FiEye />}</button></div>
                  </div>
                  {notice && <p className={`${styles.notice} ${notice.type === 'error' ? styles.error : styles.success}`} role={notice.type === 'error' ? 'alert' : 'status'}>{notice.text}</p>}
                  <button type="submit" className={styles.primaryButton}>{isRegister ? 'Crear mi cuenta' : 'Iniciar sesión'}<FiArrowRight /></button>
                </form>
                {!isRegister && <div className={styles.demoUser}><span>¿Solo estás explorando?</span><button type="button" onClick={() => { setForm({ name: '', email: 'alex@example.com', password: DEMO_PASSWORD }); setNotice(null); }}>Usar usuario de ejemplo <FiArrowRight /></button><small>alex@example.com · {DEMO_PASSWORD}</small></div>}
              </>
            )}
            <p className={styles.localNote}><FiLock /> Entorno de prueba. Usá datos ficticios.<br /><span>Los datos se reinician al recargar la página.</span></p>
          </div>
          <footer className={styles.formFooter}><span>APRENDER HACIENDO</span><span>Registro → Login → Sesión</span></footer>
        </section>

        <section className={styles.dataPanel} aria-labelledby="data-heading">
          <div className={styles.dataHeading}>
            <div>
              <p className={styles.eyebrow}>DEL OTRO LADO DEL FORMULARIO</p>
              <h2 id="data-heading">Los datos, en vivo<span>.</span></h2>
            </div>
            <span className={styles.liveBadge}><span /> LIVE</span>
          </div>
          <p className={styles.dataIntro}>Cada acción tiene su reflejo. Este es el estado de tu demo.</p>
          <div className={styles.stats}>
            <div>
              <span>Usuarios</span><strong>{String(clients.length).padStart(2, '0')}<small>{clients.length === 1 ? 'usuario de ejemplo' : 'usuarios disponibles'}</small></strong>
            </div>
            <div>
              <span>Estado de sesión</span><strong className={session ? styles.authenticated : styles.disconnected}><i />{session ? 'Iniciada' : 'Sin sesión'}</strong>
            </div>
          </div>
          <div className={styles.editor}>
            <div className={styles.editorToolbar}><span><FiCode /> database.json</span><span className={styles.jsonBadge}>JSON</span></div>
            <JsonCode value={{ clients: clients.map(publicClient), session }} />
            <div className={styles.editorFooter}><span><span className={styles.statusDot} /> {session ? 'Sesión autenticada' : 'Esperando una acción'}</span><span>Solo en memoria</span></div>
          </div>
          <p className={styles.passwordNote}><FiLock /> Las contraseñas no se muestran en este panel.</p>
          <div className={styles.event} role="status"><span className={styles.eventIcon}>{session ? <FiCheck /> : <FiArrowRight />}</span><div><span>ÚLTIMO EVENTO</span><p>{lastEvent}</p></div></div>
          <ol className={styles.steps} aria-label="Etapas de la simulación">{['Completá los datos', 'Creá un usuario', 'Iniciá sesión'].map((label, index) => <li key={label} className={stage >= index ? styles.activeStep : ''}><span>{stage > index ? <FiCheck /> : `0${index + 1}`}</span>{label}</li>)}</ol>
        </section>
      </div>
      <footer className={styles.pageFooter}><span>Una simulación de autenticación, paso a paso.</span><button type="button" onClick={reset}><FiRefreshCw /> Reiniciar demo</button></footer>
    </main>
  );
}
