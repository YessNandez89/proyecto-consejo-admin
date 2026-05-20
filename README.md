# Proyecto Consejo Administración

Sistema web para apoyar la gestión y supervisión del administrador en conjuntos residenciales, basado en la Ley 675.

---

# Tecnologías utilizadas

Frontend:

- Angular (Standalone Components)
- TypeScript
- HTML
- CSS

Backend (pendiente):

- Node.js
- Express

Base de datos (pendiente):

- PostgreSQL

---

# Funcionalidades actuales

## Dashboard principal

Incluye:

- Gestión Administrativa
- Gestión Consejo
- Gestión Contable
- Tareas Zonas Comunes
- Contratos

---

## Módulo Gestión Administrativa

Actualmente incluye:

### Funciones del Administrador

Permite:

- Visualizar funciones del administrador
- Registrar nuevas funciones
- Mostrar funciones en tabla dinámica
- Semáforo visual por estado:
  - Verde → Cumplido
  - Amarillo → Pendiente
  - Rojo → Vencido

Incluye:

- Botón Agregar Función
- Formulario dinámico
- Tabla con estados tipo semáforo

---

# Estado actual del proyecto

✔ Dashboard funcional  
✔ Navegación entre módulos  
✔ Registro de funciones  
✔ Tabla dinámica  
✔ Semáforo visual  
✔ Datos guardados en memoria

Pendiente:

- Backend Node.js
- Base de datos PostgreSQL
- Autenticación de usuarios
- Indicadores y reportes

---

# Autor

Yesid Hernandez  
Proyecto en desarrollo para gestión de consejos de administración.

BITÁCORA DE DESARROLLO

Fecha:
19/05/2026

Módulo trabajado:
Administrativo → Funciones

Avances realizados:

- Se implementó columna de prioridad:
  Alta / Media / Baja

- Se implementó cálculo dinámico de:
  días restantes y días vencidos

- Se agregaron alertas visuales:
  ⚠️ vencido
  ✔ cumplido

- Se implementaron indicadores:
  cumplidas / pendientes / vencidas

- Se implementaron filtros dinámicos:
  por estado y prioridad

- Se agregaron botones de acciones:
  editar y eliminar

- Eliminación de tareas funcional

Pendiente:

- Finalizar funcionalidad editar tarea
- Persistencia de datos
- Buscador dinámico
  ..
