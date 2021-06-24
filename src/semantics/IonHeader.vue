<template>
  <ion-header style="background-color: #006747">
    <ion-row>
      <ion-col size="1">
        <slot />
      </ion-col>

      <ion-col style="text-align: center">
        <img src="../assets/N-Horiz-W.png" height="50" />
      </ion-col>
    </ion-row>
  </ion-header>
</template>

<script>
import { IonHeader, IonRow, IonCol } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonHeader,
    IonRow,
    IonCol,
  },
});
</script>