<template>
  <ion-page>
    <ion-header style="background-color: #006747">
      <ion-row>
        <ion-col class="cclass" style="text-align: center">
          <img src="../assets/N60.png" height="150" />
        </ion-col>
      </ion-row>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-row style="height: 8px"></ion-row>

        <ion-item lines="">
          <ion-label position="floating">SID</ion-label>
          <ion-input type="text" id="sid"></ion-input>
        </ion-item>

        <ion-row style="height: 8px"></ion-row>

        <ion-item>
          <ion-label position="floating" style="margin-bottom: 8px"
            >Password</ion-label
          >
          <ion-input type="password" id="password"></ion-input>
        </ion-item>

        <ion-row style="height: 8px"></ion-row>

        <ion-row>
          <ion-col style="text-align: center">
            <ion-button expand="block" shape="round" href="/tabs/tab1"
              >Login</ion-button
            >
          </ion-col>
        </ion-row>

        <ion-row style="height: 8px"></ion-row>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonHeader,
  IonItem,
  IonPage,
  IonContent,
  IonButton,
  IonCol,
  IonRow,
  IonLabel,
  IonList,
  IonInput,
} from "@ionic/vue";

export default {
  name: "Login",
  components: {
    IonHeader,
    IonItem,
    IonContent,
    IonPage,
    IonButton,
    IonCol,
    IonRow,
    IonLabel,
    IonList,
    IonInput,
  },
};
</script>

<style scoped>
ion-list {
  margin: 60px 20px;
}

.cclass {
  margin: 10px 0px;
}
</style>