export async function getAllPosts() {
  // Simulación de delay de red
  await new Promise((resolve) => setTimeout(resolve, 100));

  return [
    {
      title: "La Importancia de la Delegación Efectiva",
      slug: "importancia-delegacion-efectiva",
      date: "2024-05-15",
      author: "Ana García",
      image: "/images/blog/ejemplo.jpeg",
      excerpt: "Descubre cómo delegar tareas puede transformar la productividad de tu equipo y liberar tu tiempo para decisiones estratégicas.",
      content: `
        <p>Delegar no es simplemente asignar tareas a otros; es un arte que requiere confianza, comunicación clara y seguimiento. En el entorno empresarial actual, la capacidad de delegar efectivamente es lo que separa a los líderes mediocres de los excepcionales.</p>
        <h2>¿Por qué nos cuesta delegar?</h2>
        <p>A menudo, los líderes sienten que pueden hacer el trabajo mejor o más rápido ellos mismos. Sin embargo, esta mentalidad es una trampa que conduce al agotamiento y limita el crecimiento del equipo.</p>
        <h2>Beneficios clave</h2>
        <ul>
          <li><strong>Empoderamiento del equipo:</strong> Al dar responsabilidad, fomentas el crecimiento profesional.</li>
          <li><strong>Eficiencia:</strong> Permite que las tareas se realicen en paralelo.</li>
          <li><strong>Enfoque estratégico:</strong> Libera tiempo para que el líder se centre en la visión a largo plazo.</li>
        </ul>
        <p>Empezar a delegar hoy es el primer paso hacia un equipo más autónomo y eficiente.</p>
      `
    },
    {
      title: "Herramientas Digitales para Equipos Remotos",
      slug: "herramientas-digitales-equipos-remotos",
      date: "2024-05-10",
      author: "Carlos Ruiz",
      image: "/images/blog/herramientas.jpg",
      excerpt: "Un repaso por las mejores herramientas de software para mantener a tu equipo de delegación conectado y productivo.",
      content: `
        <p>El trabajo remoto ha llegado para quedarse, y con él, la necesidad de herramientas que faciliten la colaboración asíncrona. No se trata solo de Zoom o Slack, sino de ecosistemas completos de productividad.</p>
        <h2>Gestión de Proyectos</h2>
        <p>Herramientas como Asana, Trello o Notion son fundamentales para visualizar el flujo de trabajo y asegurar que todos sepan qué deben hacer y cuándo.</p>
        <h2>Comunicación</h2>
        <p>Más allá del chat, herramientas de grabación de pantalla como Loom pueden ahorrar horas de reuniones innecesarias al permitir explicaciones visuales rápidas.</p>
      `
    },
    {
      title: "Construyendo Confianza en un Equipo Distribuido",
      slug: "construyendo-confianza-equipo-distribuido",
      date: "2024-05-05",
      author: "María López",
      image: "/images/blog/confianza.jpg",
      excerpt: "La confianza es la moneda de cambio en los equipos remotos. Aprende estrategias para fomentarla sin contacto presencial.",
      content: `
        <p>Sin la interacción cara a cara diaria, construir confianza puede parecer un desafío. Sin embargo, la confianza en equipos remotos se basa en la fiabilidad y la transparencia.</p>
        <p>Cumplir con los plazos, comunicar los bloqueos a tiempo y ser honesto sobre las capacidades son pilares fundamentales. Como líder, debes dar el primer paso mostrando vulnerabilidad y confianza en tus colaboradores.</p>
      `
    },
    {
      title: "Productividad vs. Horas Trabajadas",
      slug: "productividad-vs-horas-trabajadas",
      date: "2024-04-28",
      author: "Javier Torres",
      image: "/images/blog/productividad.jpg",
      excerpt: "Por qué deberíamos medir resultados y no el tiempo sentado frente a la pantalla en la era del trabajo moderno.",
      content: `
        <p>El modelo industrial de 9 a 5 está obsoleto para muchos roles de conocimiento. Lo que importa es el valor aportado, no el tiempo invertido.</p>
        <p>Cambiar el enfoque a objetivos (OKRs o KPIs) permite a los empleados gestionar su propio tiempo, lo que paradójicamente suele aumentar la productividad y la satisfacción laboral.</p>
      `
    },
    {
      title: "El Futuro de la Asistencia Virtual",
      slug: "futuro-asistencia-virtual",
      date: "2024-04-20",
      author: "Laura Martínez",
      image: "/images/blog/asistencia.jpg",
      excerpt: "Tendencias emergentes en el mundo de la asistencia virtual y cómo la IA está cambiando el juego.",
      content: `
        <p>La Inteligencia Artificial no va a reemplazar a los asistentes virtuales, pero los asistentes que usen IA reemplazarán a los que no lo hagan.</p>
        <p>Desde la redacción de correos hasta la gestión de agendas complejas, la IA actúa como un copiloto, permitiendo a los asistentes humanos centrarse en tareas de mayor valor añadido como la gestión de relaciones y la resolución creativa de problemas.</p>
      `
    }
  ];
}
