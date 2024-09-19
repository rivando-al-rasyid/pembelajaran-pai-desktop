<script setup>
import SubMenuButton from './SubMenuButton.vue'
</script>

<template>
  <div>
    <SubMenuButton icon="book" targetRoute="/materi">
      <template #heading>Materi 1</template>
      <p>Berisi materi pembelajaran yang terdiri dari 5 sub bahasan materi PAI.</p>
    </SubMenuButton>
    <SubMenuButton icon="video">
      <template #heading>Materi 2</template>
      <p>Berisi video-video pembelajaran.</p>
    </SubMenuButton>
    <SubMenuButton icon="file-alt">
      <template #heading>Materi 3</template>
      <p>Berisi 5 modul ajar yang sesuai dengan sub materi pembelajaran.</p>
    </SubMenuButton>
    <SubMenuButton icon="clipboard-list">
      <template #heading>Materi 4</template>
      <p>Berisi capaian pembelajaran, ATP, serta Kompetensi Inti (KI) dan Kompetensi Dasar (KD).</p>
    </SubMenuButton>
    <SubMenuButton icon="info-circle">
      <template #heading>Materi 5</template>
      <p>Berisi informasi tentang aplikasi dan tujuannya.</p>
    </SubMenuButton>
  </div>
</template>
