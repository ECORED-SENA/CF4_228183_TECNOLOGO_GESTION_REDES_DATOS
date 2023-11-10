export default {
  global: {
    componenteFormativo:
      'Planificación y configuración de comunicación sobre VoIP',
    descripcionCurso:
      'En este componente se estudiarán los conocimientos para planificar y configurar los dispositivos requeridos para establecer comunicación sobre VoIP.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Introducción para VoIP',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Funcionamiento',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Protocolo H.323 con VoIP',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Elementos necesarios para VoIP',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Compresión de la voz',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Retardo',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: '<em>Jitter</em>',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Telefonía IP',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Ventajas y desventajas de la telefonía IP',
            hash: 't_1_8',
          },
          {
            numero: '1.9',
            titulo: 'Servicios avanzados de telefonía IP',
            hash: 't_1_9',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Configuración',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Cálculo del número de líneas de voz',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Elementos comunes de la configuración',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF04_228183_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.3. Elementos necesarios para VoIP',
      referencia:
        'CISCO Networking Academy. (s.f.). CCNA: Switching, Routing, and Wireless Essentials.',
      tipo: 'Capítulo de libro',
      link:
        'https://www.netacad.com/courses/networking/ccna-switching-routing-wireless-essentials',
    },
    {
      tema: '2. Configuración.',
      referencia: 'Kronotek. (s. f.). Configuración de red para VoIP.',
      tipo: 'Manual',
      link:
        'https://silo.tips/download/kronotek-configuracion-de-red-para-voip',
    },
  ],
  glosario: [
    {
      termino: 'Adaptador de red',
      significado:
        'Dispositivo de <i>hardware</i> que se inserta en una estación de trabajo de una red y le permite comunicarse con otros elementos unidos a la red. El adaptador de red recibe y convierte señales entrantes de la red a la estación de trabajo y convierte y envía comunicaciones salientes a la red.',
    },
    {
      termino: 'kbps',
      significado: ' Kilobits por segundo.',
    },
    {
      termino: 'kBps',
      significado: ' Kilobytes por segundo. La relación es 1 kB/s = 8 kbps.',
    },
    {
      termino: 'Latencia',
      significado: 'Retardo o demora de transmisión a través de la red.',
    },
    {
      termino: 'PBX',
      significado:
        '<span style="display:none">_</span><em>Private Branch Exchange</em>. Equipo privado que administra las llamadas telefónicas de una empresa.',
    },
    {
      termino: 'SIP',
      significado:
        '<span style="display:none">_</span><em>Session Initiation Protocol</em>. Es un protocolo de señalización para inicio de sesión.',
    },
    {
      termino: 'VoIP',
      significado:
        'Es un conjunto de recursos que hacen posible que la señal de voz viaje a través de Internet empleando el protocolo IP (Protocolo de Internet).',
    },
  ],
  referencias: [
    {
      referencia:
        'Almeida, R. (2015). Implementar una Central Telefónica IP basada en tecnología Open Source en la carrera de Ingeniería en Sistemas Computacionales [Doctoral dissertation, Universidad de Guayaquil. Ecuador]. Repositorio Institucional de la Universidad de Guayaquil.',
      link: 'http://repositorio.ug.edu.ec/handle/redug/9946',
    },
    {
      referencia: 'Dordoigne, J. y Bardot, Y. (2020). Redes informáticas. ENI.',
    },
    {
      referencia:
        'Handley, M., Jacobson, V. y Perkins, C. (2006). RFC 4566: SDP: session description protocol. The Internet Society.',
      link: 'https://datatracker.ietf.org/doc/html/rfc4566',
    },
    {
      referencia:
        'Matango, F. (2016, 29 marzo). Cuales son los Elementos de la Red – Arquitectura. SERVER VoIP.',
      link: 'http://www.servervoip.com/blog/arquitectura-red-voip/',
    },
    {
      referencia:
        'UIT-T. (2003). Serie G Suplemento 39. Serie G: Sistemas y medios de transmisión, sistemas y redes digitales. Unión Internacional de Telecomunicaciones.',
      link:
        'https://www.itu.int/rec/dologin_pub.asp?lang=e&id=T-REC-G.Sup39-200310-S!!PDF-S&type=items',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Mauricio Tovar Artunduaga',
          cargo: 'Instructor',
          centro:
            'Centro de Servicios y Gestión Empresarial  - Regional Antioquia',
        },
        {
          nombre: 'Jorge Eliécer Loaiza Muñoz',
          cargo: 'Instructor',
          centro:
            'Centro de Diseño e Innovación Tecnológica Industrial  - Regional Antioquia',
        },
        {
          nombre: 'Claudia López Arboleda',
          cargo: 'Experta temática',
          centro:
            'Centro de Teleinformática y Producción Industrial  - Regional Cauca',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniela Muñoz Bedoya ',
          cargo: 'Animador y Producción Audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
