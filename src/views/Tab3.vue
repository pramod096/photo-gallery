<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Video Gallery</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-button @click="openVideo">Record Video</ion-button>
<input
  style="display:none"
  type="file"
  accept="video/mp4, video/x-m4v, video/*"
  capture
  @change="setVideo"
  id="open-camera"
/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default  {
  name: 'Tab3',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}


</script>