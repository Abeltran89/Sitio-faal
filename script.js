// script.js - control simple para mostrar detalle de servicios
const services = {
  infra: {
    title: "Servicios Administrados de TI",
    content: `<p>Gestión integral de infraestructura: monitoreo, parches, administración de servidores, virtualización y soporte proactivo.</p>
              <ul>
                <li>Monitoreo 24/7</li>
                <li>Gestión de parches y actualizaciones</li>
                <li>Administración de backups</li>
                <li>SLA y reportes periódicos</li>
              </ul>`
  },
  automatizacion: {
    title: "Automatización",
    content: `<p>Automatizamos procesos repetitivos y workflows para optimizar tiempos y reducir errores.</p>
              <ul>
                <li>Integración de herramientas</li>
                <li>Scripting y automatización de despliegues</li>
                <li>RPA y orquestación</li>
              </ul>`
  },
  seguridad: {
    title: "Seguridad & Continuidad",
    content: `<p>Protección de perimetro, endpoints y planes de continuidad de negocio y recuperación ante desastres.</p>
              <ul>
                <li>Evaluaciones de vulnerabilidad</li>
                <li>Planes de backup y recuperación</li>
                <li>Monitorización y alertas</li>
              </ul>`
  },
  equipo: {
    title: "Venta & Arrendamiento de Equipo",
    content: `<p>Equipos de cómputo, servidores y periféricos con opciones de compra o arrendamiento según tus necesidades.</p>
              <ul>
                <li>Planes flexibles</li>
                <li>Soporte técnico y garantía</li>
                <li>Inventario y logística</li>
              </ul>`
  },
  soporte: {
    title: "Soporte",
    content: `<p>Soporte técnico con atención remota y en sitio, SLAs definidos y registro de tickets.</p>
              <ul>
                <li>Portal de tickets</li>
                <li>Soporte remoto y en sitio</li>
                <li>Escalación y reportes</li>
              </ul>`
  }
};

function showService(key) {
  const area = document.getElementById('service-detail');
  if (!services[key]) return;
  area.innerHTML = `<h3>${services[key].title}</h3>${services[key].content}<p><button class="btn primary" onclick="document.location.href='#contacto'">Contactar</button></p>`;
  area.classList.remove('hidden');
  area.scrollIntoView({behavior:'smooth', block:'center'});
}

// Attaching listeners to menu/submenu and buttons
document.addEventListener('DOMContentLoaded', () => {
  // submenu/menu clicks
  document.querySelectorAll('[data-service]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const key = el.getAttribute('data-service');
      showService(key);
    });
  });

  // Close service detail if user clicks outside (optional UX)
  document.addEventListener('click', (e) => {
    const detail = document.getElementById('service-detail');
    if (!detail) return;
    const inside = detail.contains(e.target) || e.target.matches('[data-service]') || e.target.closest('.card');
    if (!inside) {
      // do nothing (keeps detail visible), change if you want auto-close
    }
  });
});
