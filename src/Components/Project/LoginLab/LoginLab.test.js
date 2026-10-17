import { fireEvent, render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import LoginLab from './LoginLab';

function setup() {
  render(<MemoryRouter><LoginLab /></MemoryRouter>);
}

const interact = {
  click: element => fireEvent.click(element),
  clear: element => fireEvent.change(element, { target: { value: '' } }),
  type: (element, value) => fireEvent.change(element, { target: { value } }),
};

function fillCredentials(email, password) {
  interact.clear(screen.getByLabelText('Email'));
  interact.type(screen.getByLabelText('Email'), email);
  interact.type(screen.getByLabelText(/^Contraseña/), password);
}

test('template user can log in and log out without exposing a password in JSON', () => {
  setup();
  const json = screen.getByLabelText('Datos de la simulación en JSON');
  expect(json.textContent).toContain('alex@example.com');
  expect(json.textContent).not.toContain('password');
  interact.click(screen.getByRole('button', { name: /Usar usuario de ejemplo/ }));
  interact.click(within(screen.getByRole('heading', { name: 'Bienvenido de nuevo.' }).closest('form')).getByRole('button', { name: 'Iniciar sesión' }));
  expect(screen.getByRole('heading', { name: '¡Hola, Alex Morgan!' })).toBeInTheDocument();
  expect(json.textContent).toContain('"authenticated": true');
  interact.click(screen.getByRole('button', { name: 'Cerrar sesión' }));
  expect(json.textContent).toContain('"session": null');
  expect(json.textContent).toContain('alex@example.com');
});

test('registration creates a normalized client, requires login, and reset removes it', () => {
  setup();
  interact.click(screen.getByRole('button', { name: 'Crear cuenta' }));
  interact.type(screen.getByLabelText('Nombre completo'), '  Ana Pérez  ');
  fillCredentials('ANA@example.com', 'prueba123');
  interact.click(screen.getByRole('button', { name: 'Crear mi cuenta' }));
  const json = screen.getByLabelText('Datos de la simulación en JSON');
  expect(json.textContent).toContain('"name": "Ana Pérez"');
  expect(json.textContent).toContain('ana@example.com');
  expect(json.textContent).toContain('"session": null');
  expect(json.textContent).not.toContain('prueba123');
  interact.type(screen.getByLabelText(/^Contraseña/), 'prueba123');
  interact.click(within(screen.getByRole('heading', { name: 'Bienvenido de nuevo.' }).closest('form')).getByRole('button', { name: 'Iniciar sesión' }));
  expect(screen.getByRole('heading', { name: '¡Hola, Ana Pérez!' })).toBeInTheDocument();
  expect(json.textContent).toContain('"userId": "usr_002"');
  interact.click(screen.getByRole('button', { name: 'Reiniciar demo' }));
  expect(json.textContent).not.toContain('ana@example.com');
  expect(json.textContent).toContain('"session": null');
});

test('wrong credentials and duplicate emails do not change users or session', () => {
  setup();
  fillCredentials('alex@example.com', 'incorrecta');
  interact.click(within(screen.getByRole('heading', { name: 'Bienvenido de nuevo.' }).closest('form')).getByRole('button', { name: 'Iniciar sesión' }));
  expect(screen.getByRole('alert')).toHaveTextContent('no coinciden');
  interact.click(screen.getByRole('button', { name: 'Crear cuenta' }));
  interact.type(screen.getByLabelText('Nombre completo'), 'Otro Alex');
  fillCredentials('ALEX@example.com', 'prueba123');
  interact.click(screen.getByRole('button', { name: 'Crear mi cuenta' }));
  expect(screen.getByRole('alert')).toHaveTextContent('Ya existe una cuenta');
  const json = screen.getByLabelText('Datos de la simulación en JSON');
  expect(json.textContent).not.toContain('usr_002');
  expect(json.textContent).toContain('"session": null');
});

