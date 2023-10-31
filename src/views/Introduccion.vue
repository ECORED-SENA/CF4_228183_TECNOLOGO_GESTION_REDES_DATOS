<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .m-n.p-5(style="background-color: #dde6fe; margin-bottom: 300px")
      .row.justify-content-center.align-items-center.mb-5
        .col-auto.mb-lg-0.mb-3: img(src='@/assets/curso/temas/intro/img1.svg', alt='')
        .col: p La implementación y configuración de los equipos y software de comunicación de voz sobre IP (VoIP) requiere conocer cuáles son sus ventajas, funciones y normatividad vigente. El siguiente video presenta de modo genérico parte de esta información.
      figure(style="margin-bottom: -350px")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
