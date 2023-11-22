(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema2"],{"0b19":function(e,t,a){e.exports=a.p+"img/fig5.bf44eda5.svg"},"3eea":function(e,t,a){e.exports=a.p+"img/img6.61ea661f.svg"},5025:function(e,t,a){e.exports=a.p+"img/img3.dbfa6f97.svg"},"693a":function(e,t,a){e.exports=a.p+"img/img8.0bdae603.svg"},"6d10":function(e,t,a){e.exports=a.p+"img/img1.0da1057c.svg"},"848c":function(e,t,a){e.exports=a.p+"img/figura4.625407d1.svg"},"8b66":function(e,t,a){e.exports=a.p+"img/img5.72af54a4.svg"},b862:function(e,t,a){e.exports=a.p+"img/img4.3f9383b6.svg"},c518:function(e,t,a){e.exports=a.p+"img/img2.5a8b535d.svg"},dc0c:function(e,t,a){e.exports=a.p+"img/img7.141e69b5.svg"},fd11:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"curso-main-container pb-3"},[s("BannerInterno"),s("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[e._m(0),s("p",[e._v("Teniendo como referentes diferentes manuales de servicios de VoIP, se deben tener en cuenta los siguientes aspectos para la configuración:")]),e._m(1),e._m(2),s("p",{staticClass:"mb-5"},[e._v(" En la siguiente tabla, se pueden evidenciar los parámetros para varios de estos códecs que se pueden utilizar:")]),e._m(3),e._m(4),e._m(5),s("h3",{staticClass:"mb-4 mt-5"},[e._v("Obtención del ancho de banda")]),s("AcordionA",{staticClass:"mb-5",attrs:{tipo:"a","clase-tarjeta":"tarjeta bg-gray-light"}},[s("div",{staticClass:"row align-items-center",attrs:{titulo:"Paso 1: determinar el ancho de banda requerido por el códec de audio"}},[s("div",{staticClass:"col-xl-4 d-none d-xl-block"},[s("figure",{staticClass:"px-3"},[s("img",{staticClass:"py-4",attrs:{src:a("5025"),alt:""}})])]),s("div",{staticClass:"col-xl-8 mb-md-0"},[s("div",{staticClass:"px-3"},[s("p",[e._v("Para encontrar la cantidad de ancho de banda requerido por el códec de audio, se determina el tamaño (en "),s("em",[e._v("bytes")]),e._v(") del audio contenido en cada paquete. El tamaño de la muestra es un intervalo de tiempo específico del audio; para la mayoría de códecs de audio, el tamaño de la muestra es de 20 milisegundos (ms) por defecto.")]),s("p",[e._v("Se puede usar la siguiente fórmula para determinar el tamaño del paquete de voz:")]),s("div",{staticClass:"cajon color-acento-contenido p-4 mb-4"},[s("div",{staticClass:"col-lg-11 mx-auto text-center"},[s("p",{staticClass:"codigo mb-4"},[e._v("Bytes_Por_Paquete= (Tamaño_Muestra * Ancho de Banda_Códec) / 8")]),s("p",{staticClass:"mb-0"},[e._v("La variable Tamaño_Muestra en la fórmula se da en segundos y la variable Ancho de Banda_Códec se da en valores de bps.")])])]),s("div",{staticClass:"col-lg-10 mx-auto text-center"},[s("p",[e._v("Si se tiene, por ejemplo, una llamada que usa el códec G.711 con una muestra de tamaño de 20 ms, la fórmula se puede calcular así:")]),s("p",{staticClass:"codigo"},[e._v("Bytes_Por_Paquete = (0.02seg * 64000 bps) / 8")]),s("p",{staticClass:"codigo"},[e._v("Bytes_Por_Paquete = 1280 / 8")]),s("p",{staticClass:"codigo mb-4"},[e._v("Bytes_Por_Paquete = 160")]),s("p",[e._v("Aquí otro ejemplo de una llamada usando el códec G.729 con una muestra de tamaño de 20 ms:")]),s("p",{staticClass:"codigo"},[e._v("Bytes_Por_Paquete = (0.02 * 8000) / 8")]),s("p",{staticClass:"codigo"},[e._v("Bytes_Por_Paquete = 160 / 8")]),s("p",{staticClass:"codigo"},[e._v("Bytes_Por_Paquete = 20")])])])])]),s("div",{staticClass:"row align-items-center",attrs:{titulo:"Paso 2: determinar el encabezado del nivel del modelo OSI del enlace de datos, red y transporte"}},[s("div",{staticClass:"col-xl-4 d-none d-xl-block"},[s("figure",{staticClass:"px-3"},[s("img",{staticClass:"py-4",attrs:{src:a("b862"),alt:""}})])]),s("div",{staticClass:"col-xl-8 mb-md-0"},[s("div",{staticClass:"px-3"},[s("p",[e._v("Después de encontrar la cantidad de voz contenida en cada paquete, se calcula a continuación la cantidad de datos contenidos en el encabezado de cada paquete. Los siguientes valores representan la cantidad de "),s("em",[e._v("bytes")]),e._v(" del encabezado de cada nivel:")]),s("div",{staticClass:"col-lg-10 mx-auto text-center"},[s("p",{staticClass:"codigo"},[s("em",[e._v("Ethernet")]),e._v(": 20 "),s("em",[e._v("bytes")])]),s("p",{staticClass:"codigo"},[s("em",[e._v("Frame Relay")]),e._v(": 4–6 "),s("em",[e._v("bytes")])]),s("p",{staticClass:"codigo mb-4"},[s("em",[e._v("Point-to-Point Protocol")]),e._v(" (PPP): 6 "),s("em",[e._v("bytes")])]),s("p",[e._v("Para los niveles de transporte y red del modelo OSI, los valores serán:")]),s("p",{staticClass:"codigo"},[e._v("IP: 20 "),s("em",[e._v("bytes")])]),s("p",{staticClass:"codigo"},[e._v("UDP: 8 "),s("em",[e._v("bytes")])]),s("p",{staticClass:"codigo mb-4"},[s("em",[e._v("Real-Time Transport Protocol")]),e._v(" (RTP): 12 "),s("em",[e._v("bytes")])])]),s("p",[e._v("Como todos los paquetes de voz usan RTP, UDP e IP, se pueden entonces usar 40 "),s("em",[e._v("bytes")]),e._v(" de datos por paquete en los niveles de red y transporte.")])])])]),s("div",{staticClass:"row align-items-center",attrs:{titulo:"Paso 3: sumar otros encabezados"}},[s("div",{staticClass:"col-xl-4 d-none d-xl-block"},[s("figure",{staticClass:"px-3"},[s("img",{staticClass:"py-4",attrs:{src:a("8b66"),alt:""}})])]),s("div",{staticClass:"col-xl-8 mb-md-0"},[s("div",{staticClass:"px-3"},[s("p",[e._v("Por ejemplo, si se está usando VoIP sobre una conexión VPN, los siguientes son los valores de los encabezados basados en este tipo de VPN:")]),s("div",{staticClass:"col-lg-10 mx-auto text-center"},[s("p",{staticClass:"codigo"},[e._v("GRE/L2TP: 24 "),s("em",[e._v("bytes")])]),s("p",{staticClass:"codigo"},[e._v("MPLS: 4 "),s("em",[e._v("bytes")])]),s("p",{staticClass:"codigo"},[e._v("IPsec: 50–57 "),s("em",[e._v("bytes")])])])])])]),s("div",{staticClass:"row align-items-center",attrs:{titulo:"Paso 4: sumar todo lo obtenido en los pasos 1, 2 y 3"}},[s("div",{staticClass:"col-xl-4 d-none d-xl-block"},[s("figure",{staticClass:"px-3"},[s("img",{staticClass:"py-4",attrs:{src:a("3eea"),alt:""}})])]),s("div",{staticClass:"col-xl-8 mb-md-0"},[s("div",{staticClass:"px-3"},[s("p",[e._v("En este paso se usa la siguiente fórmula:")]),s("div",{staticClass:"col-lg-10 mx-auto"},[s("p",{staticClass:"codigo text-center mb-4"},[e._v("Ancho de Banda_Total = Tamaño_Paquete * Paquetes_Por_Segundo")])]),s("p",[e._v("Por ejemplo, si se está usando el códec G.729 con 20 ms de tamaño de la muestra en una red "),s("em",[e._v("Ethernet")]),e._v(", el tamaño del paquete podría darse así:")]),s("div",{staticClass:"col-lg-10 mx-auto"},[s("p",{staticClass:"codigo text-center"},[e._v("20 "),s("em",[e._v("bytes")]),e._v(" (Paso 1)")]),s("p",{staticClass:"codigo text-center"},[e._v("20 "),s("em",[e._v("bytes")]),e._v(" (encabezado IP)")]),s("p",{staticClass:"codigo text-center"},[e._v("8 "),s("em",[e._v("bytes")]),e._v(" (encabezado UDP)")]),s("p",{staticClass:"codigo text-center"},[e._v("12 "),s("em",[e._v("bytes")]),e._v(" (encabezado RTP)")]),s("p",{staticClass:"codigo text-center mb-3"},[e._v("20 "),s("em",[e._v("bytes")]),e._v(" (encabezado | "),s("em",[e._v("Ethernet")]),e._v(")")]),s("h4",{staticClass:"text-center texto-acento-contenido"},[e._v("-----------------------")]),s("p",{staticClass:"codigo text-center"},[e._v("80 "),s("em",[e._v("bytes")]),e._v(" por paquete")])])])]),s("div",{staticClass:"px-3 mt-4"},[s("p",[e._v("Ahora, para encontrar el número de paquetes por segundo, se debe tener en cuenta que cada paquete contiene una muestra de tamaño 20 ms, y como 1 segundo equivale a 1000 milisegundos, se toman:")]),s("div",{staticClass:"col-lg-8 mx-auto"},[s("p",{staticClass:"codigo text-center mb-4"},[e._v("1000 ms / 20 ms = 50.")])]),s("p",[e._v("Esto indica que se tomarán 50 paquetes por segundo para generar un segundo de audio. Con esta información ya se puede encontrar la cantidad de ancho de banda por cada llamada.")]),s("div",{staticClass:"col-lg-8 mx-auto text-center"},[s("p",{staticClass:"codigo"},[e._v("Ancho de Banda_Total = Tamaño_Paquete * Paquetes_Por_Segundo")]),s("p",{staticClass:"codigo"},[e._v("Ancho de Banda_Total = 80 "),s("em",[e._v("bytes")]),e._v(" por paquete * 50 paquetes por segundo")]),s("p",{staticClass:"codigo mb-4"},[e._v("Ancho de Banda_Total = 4000 "),s("em",[e._v("bytes")]),e._v(" por segundo")])]),s("p",[e._v("Para encontrar los "),s("em",[e._v("bit")]),e._v("s por segundo:")]),s("div",{staticClass:"col-lg-8 mx-auto"},[s("p",{staticClass:"codigo text-center"},[e._v("4000 * 8 = 32000 "),s("em",[e._v("bit")]),e._v("s por segundo (32 kbps)")])])])])]),s("h3",{staticClass:"mb-4"},[e._v("Cálculo del número de agentes simultáneos")]),e._m(6),e._m(7),s("p",[e._v("La medida de la velocidad de subida es de 5.3 Mbps o sea 5300 kbps; entonces el número máximo de conversaciones simultáneas por línea es:")]),e._m(8),s("p",{staticClass:"mb-5"},[e._v("La siguiente tabla muestra la cantidad de agentes que puede soportar cada línea según la velocidad de subida disponible:")]),e._m(9),e._m(10),s("h3",[e._v("Cálculo del número de líneas dedicadas a voz")]),e._m(11),s("Separador"),e._m(12),e._m(13),s("p",{staticClass:"mb-5"},[e._v("La siguiente figura muestra los diferentes dispositivos que se pueden configurar y que son comunes a la red VoIP.")]),s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-xl-10"},[e._m(14),s("img",{staticClass:"mx-auto mb-2",attrs:{src:a("0b19"),alt:"Gráfico en el que se muestran los elementos comunes del protocolo VoIP como son: el router, el modem, el software voIP y la red de internet."}}),s("figcaptio",[e._v("Nota. Adaptada de areatecnología (s.f)")])],1)])],1)],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"titulo-principal color-acento-contenido"},[a("div",{staticClass:"titulo-principal__numero"},[a("span",[e._v("2")])]),a("h1",[e._v("Configuración")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"titulo-segundo color-acento-contenido mt-5",attrs:{id:"t_2_1"}},[a("h2",[e._v("2.1. Cálculo del número de líneas de voz")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row mb-5"},[s("div",{staticClass:"col-xl-4 d-none d-xl-block"},[s("img",{attrs:{src:a("6d10")}})]),s("div",{staticClass:"col-xl-8"},[s("p",[e._v("Antes de comenzar con la configuración de la red, es necesario saber cuántas líneas dedicadas a voz se necesitan, para lo cual se calcula el ancho de banda disponible; el número de agentes que van a utilizar el sistema; y determinar o escoger el códec de audio que se va a utilizar. Los códecs utilizados para la compresión de la voz permiten comprimir el número de las muestras que se envían a través de la red, haciendo que se use menos ancho de banda; esto es posible porque al tomar una muestra de voz humana 8000 veces en un segundo produce muchas muestras que son muy idénticas unas con otras, es decir que muchas de las muestras tomadas sonarán igual.")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"titulo-sexto color-acento-contenido"},[a("h5",[e._v("Tabla 3.")]),a("span",[e._v("Características de códecs de voz")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tabla-a color-acento-contenido mb-5"},[a("table",{staticClass:"text-center"},[a("thead",[a("tr",[a("th",{staticClass:"text-center"},[e._v("Códec")]),a("th",{staticClass:"text-center"},[e._v("Ancho de banda")]),a("th",{staticClass:"text-center"},[e._v("MOS (calidad del códec)")])])]),a("tbody",[a("tr",[a("td",{staticClass:"text-center"},[e._v("G.711")]),a("td",{staticClass:"text-center"},[e._v("64 Kbps")]),a("td",{staticClass:"text-center"},[e._v("4.1")])]),a("tr",[a("td",{staticClass:"text-center"},[e._v("Internet Low Bitrate Codec (iLBC)")]),a("td",{staticClass:"text-center"},[e._v("15.2 Kbps")]),a("td",{staticClass:"text-center"},[e._v("4.1")])]),a("tr",[a("td",{staticClass:"text-center"},[e._v("G.729")]),a("td",{staticClass:"text-center"},[e._v("8 Kbps")]),a("td",{staticClass:"text-center"},[e._v("3.92")])]),a("tr",[a("td",{staticClass:"text-center"},[e._v("G.726")]),a("td",{staticClass:"text-center"},[e._v("32 Kbps")]),a("td",{staticClass:"text-center"},[e._v("3.85")])]),a("tr",[a("td",{staticClass:"text-center"},[e._v("G.729a")]),a("td",{staticClass:"text-center"},[e._v("8 Kbps")]),a("td",{staticClass:"text-center"},[e._v("3.7")])]),a("tr",[a("td",{staticClass:"text-center"},[e._v("G.728")]),a("td",{staticClass:"text-center"},[e._v("16 Kbps")]),a("td",{staticClass:"text-center"},[e._v("3.61")])])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"bg-slyde-gradiente-3"},[s("div",{staticClass:"p-4"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-xl-8"},[s("p",{staticClass:"mb-4"},[e._v("Al momento de seleccionar un códec de voz para ser usado en una red, se debe tener en cuenta lo siguiente:")]),s("ul",{staticClass:"lista-ul"},[s("li",[s("i",{staticClass:"fas fa-project-diagram texto-acento-contenido me-4"}),s("span",[e._v("Soporta todos los dispositivos VoIP de la red.")])]),s("li",[s("i",{staticClass:"fas fa-project-diagram texto-acento-contenido me-4"}),s("span",[e._v("Cuántos recursos de procesadores digitales de señales (DSP) son tomados por el uso del códec de audio.")])]),s("li",[s("i",{staticClass:"fas fa-project-diagram texto-acento-contenido me-4"}),s("span",[e._v("Ofrece niveles de calidad satisfactorios para todos los tipos de audio de la red.")])]),s("li",[s("i",{staticClass:"fas fa-project-diagram texto-acento-contenido me-4"}),s("span",[e._v("Cuánto ancho de banda consume el códec.")])]),s("li",[s("i",{staticClass:"fas fa-project-diagram texto-acento-contenido me-4"}),s("span",[e._v("Cómo maneja el códec la pérdida de los paquetes.")])]),s("li",[s("i",{staticClass:"fas fa-project-diagram texto-acento-contenido me-4"}),s("span",[e._v("Cómo soporta múltiples muestras de diferentes tamaños.")])])])]),s("div",{staticClass:"col-xl-4 d-none d-xl-block"},[s("img",{attrs:{src:a("c518"),alt:""}})])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cajon color-acento-contenido p-4 mb-5"},[a("p",{staticClass:"mb-0"},[e._v("Cada conversación ocupa 32 kbps, por lo que el número de conversaciones simultáneas que puede soportar una línea es igual a la velocidad de subida/32 kbps. Para saber la velocidad de subida se debe acudir a los medidores que tiene disponible el operador de Internet. Por ejemplo, en la siguiente gráfica se muestra la medición para el operador Tigo Une:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-xl-10"},[s("div",{staticClass:"titulo-sexto color-acento-contenido mb-4"},[s("h5",[e._v("Figura 4")]),s("span",[e._v("Medición velocidad internet")])]),s("img",{staticClass:"mx-auto mb-2",attrs:{src:a("848c"),alt:"Captura de pantalla de medición de velocidad de Internet de la red de Tigo."}}),s("figcaption",[e._v("Fuente: TIGO")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-xl-6 col-lg-8 mx-auto text-center"},[a("p",{staticClass:"codigo"},[e._v("5300 kbps/32 kbps = 165,625")]),a("p",{staticClass:"codigo mb-4"},[e._v("Conversaciones simultáneas = 165 agentes")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"titulo-sexto color-acento-contenido"},[a("h5",[e._v("Tabla 4.")]),a("span",[e._v("Agentes vs. Velocidad")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tabla-a color-acento-contenido mb-5"},[a("table",{staticClass:"text-center"},[a("thead",[a("tr",[a("th",{staticClass:"text-center"},[e._v("Velocidad de subida")]),a("th",{staticClass:"text-center"},[e._v("Agentes simultáneos")])])]),a("tbody",[a("tr",[a("td",{staticClass:"text-center"},[e._v("256 kbps")]),a("td",{staticClass:"text-center"},[e._v("8")])]),a("tr",[a("td",{staticClass:"text-center"},[e._v("512 kbps")]),a("td",{staticClass:"text-center"},[e._v("16")])]),a("tr",[a("td",{staticClass:"text-center"},[e._v("1.024 kbps = 1 Mbps")]),a("td",{staticClass:"text-center"},[e._v("32")])]),a("tr",[a("td",{staticClass:"text-center"},[e._v("2.048 kbps = 2 Mbps")]),a("td",{staticClass:"text-center"},[e._v("64")])]),a("tr",[a("td",{staticClass:"text-center"},[e._v("4.096 kbps = 4 Mbps")]),a("td",{staticClass:"text-center"},[e._v("128")])])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-xl-8"},[s("p",[e._v("Para calcular el número de líneas necesarias, basta con dividir el número de agentes que van a trabajar de forma simultánea entre la capacidad de cada línea. Por ejemplo: las líneas contratadas tienen una capacidad para 64 agentes y el centro de llamadas necesita trabajar con 50 agentes simultáneos.")]),s("p",[e._v("Entonces el número de líneas es:")]),s("div",{staticClass:"cajon color-acento-contenido p-4 mb-4"},[s("div",{staticClass:"col-lg-10 mx-auto"},[s("p",{staticClass:"codigo text-center"},[e._v("Nº líneas = (Nº Agentes) / (Agentes por línea)")]),s("p",{staticClass:"codigo text-center"},[e._v("Nº líneas = 64 / 50")]),s("p",{staticClass:"codigo text-center mb-4"},[e._v("Nº líneas = 1,28")]),s("p",{staticClass:"mb-0"},[e._v("Por lo tanto, el número de líneas es 2, ya que siempre se redondea por lo alto.")])])])]),s("div",{staticClass:"col-xl-4 d-none d-xl-block"},[s("img",{staticClass:"py-4 mx-auto",attrs:{src:a("dc0c"),alt:""}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"titulo-segundo color-acento-contenido mt-5",attrs:{id:"t_2_2"}},[a("h2",[e._v("2.2. Elementos comunes de la configuración")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"bg-slyde-gradiente-3 mb-5"},[s("div",{staticClass:"p-4"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-xl-3"},[s("img",{attrs:{src:a("693a"),alt:""}})]),s("div",{staticClass:"col-xl-9"},[s("div",{staticClass:"p-4 rounded-10 bg-fff"},[s("ul",{staticClass:"lista-ul"},[s("li",{staticClass:"mb-4"},[s("i",{staticClass:"fas fa-project-diagram texto-acento-contenido me-4"}),s("span",[e._v("El tráfico de datos se concentra por una sola línea del proveedor (puede ser ADSL), para liberar de esta forma a las líneas de voz.")])]),s("li",{staticClass:"mb-4"},[s("i",{staticClass:"fas fa-project-diagram texto-acento-contenido me-4"}),s("span",[e._v("Todos los elementos de red se encuentran físicamente conectados mediante "),s("em",[e._v("hubs")]),e._v(" o "),s("em",[e._v("switches")]),e._v(".")])]),s("li",{staticClass:"mb-4"},[s("i",{staticClass:"fas fa-project-diagram texto-acento-contenido me-4"}),s("span",[e._v("Cada línea de Internet dispone de su propio "),s("em",[e._v("router")]),e._v("; habrá entonces "),s("em",[e._v("router")]),e._v(" de datos y "),s("em",[e._v("router")]),e._v(" de voz que se deben configurar.")])]),s("li",{staticClass:"mb-4"},[s("i",{staticClass:"fas fa-project-diagram texto-acento-contenido me-4"}),s("span",[e._v("Para cursar el tráfico de voz, deben emplearse las líneas con la mayor velocidad de subida disponible en la oficina, pues la velocidad de bajada siempre es suficientemente elevada. Entonces se deben contratar las líneas con la mayor velocidad de subida.")])]),s("li",{staticClass:"mb-4"},[s("i",{staticClass:"fas fa-project-diagram texto-acento-contenido me-4"}),s("span",[e._v("Todo el tráfico de voz va dirigido hacia un PBX "),s("em",[e._v("online")]),e._v(" con una dirección IP concreta para distinguir el tráfico de voz del resto del tráfico.")])]),s("li",[s("i",{staticClass:"fas fa-project-diagram texto-acento-contenido me-4"}),s("span",[e._v("La separación del tráfico de voz la realizan "),s("em",[e._v("routers")]),e._v(", desviando todo el tráfico dirigido a la dirección IP del PBX "),s("em",[e._v("online")]),e._v(" a una línea dedicada de voz.")])])])])])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"titulo-sexto color-acento-contenido mb-4"},[a("h5",[e._v("Figura 5")]),a("span",[e._v("Dispositivos comunes VoIP")])])}],c={name:"Tema2",data:function(){return{}},mounted:function(){var e=this;this.$nextTick((function(){e.$aosRefresh()}))},updated:function(){this.$aosRefresh()}},i=c,n=a("2877"),l=Object(n["a"])(i,s,o,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=tema2.bb32267f.js.map