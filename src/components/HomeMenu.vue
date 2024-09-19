<script setup>
import HomeButton from './HomeButton.vue'
</script>

<template>
  <div>
    <HomeButton icon="book" targetRoute="/materi">
      <template #heading>Materi Pembelajaran</template>
      <p>Berisi materi pembelajaran yang terdiri dari 5 sub bahasan materi PAI.</p>
    </HomeButton>
    <HomeButton icon="video" targetRoute="/video-materi">
      <template #heading>Video Pembelajaran</template>
      <p>Berisi video-video pembelajaran.</p>
    </HomeButton>
    <HomeButton icon="file-alt">
      <template #heading>Modul Ajar</template>
      <p>Berisi 5 modul ajar yang sesuai dengan sub materi pembelajaran.</p>
    </HomeButton>
    <HomeButton icon="clipboard-list" targetRoute="/kd">
      <template #heading>CP/ATP & (KI dan KD)</template>
      <p>Berisi capaian pembelajaran, ATP, serta Kompetensi Inti (KI) dan Kompetensi Dasar (KD).</p>
    </HomeButton>
    <HomeButton icon="info-circle">
      <template #heading>Tentang dan Tujuan</template>
      <p>Berisi informasi tentang aplikasi dan tujuannya.</p>
    </HomeButton>
  </div>
</template>
