<template>
  <ion-page>
    <ion-header>
      <ion-back-button mode="md" default-href="/tabs/tab1"></ion-back-button>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-grid class="gclass">
        <ion-row class="rclass">
          <ion-col class="cclass" size="10">
            <ion-searchbar size placeholder="Search"></ion-searchbar>
          </ion-col>

          <ion-col class="cclass" size="2">
            <ion-fab vertical="start" horizontal="end">
              <ion-fab-button color="light">
                <ion-icon :icon="funnelOutline" @click="openModal"></ion-icon>
              </ion-fab-button>
            </ion-fab>
          </ion-col>
        </ion-row>
      </ion-grid>
      <div class="center">
        <h3>Reported Incidents</h3>
      </div>
      <ion-grid class="reportgrid">
        <ion-row>
          <ion-col col-12 col-xl-2 col-lg-3 col-md-4>
            <div>IncidentID</div>
          </ion-col>
          <ion-col col-12 col-xl-2 col-lg-3 col-md-4>
            <div>RaisedOn</div>
          </ion-col>
          <ion-col col-12 col-xl-2 col-lg-3 col-md-4>
            <div>Status</div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col col-12 col-xl-2 col-lg-3 col-md-4>
            <div><a href="reportDetails">1111</a></div></ion-col
          >
          <ion-col col-12 col-xl-2 col-lg-3 col-md-4>
            <div>06/18/2021</div>
          </ion-col>
          <ion-col col-12 col-xl-2 col-lg-3 col-md-4>
            <div>Open</div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col col-12 col-xl-2 col-lg-3 col-md-4>
            <div><a href="reportDetails">2222</a></div></ion-col
          >
          <ion-col col-12 col-xl-2 col-lg-3 col-md-4>
            <div>05/03/2021</div>
          </ion-col>
          <ion-col col-12 col-xl-2 col-lg-3 col-md-4>
            <div>Closed</div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col col-12 col-xl-2 col-lg-3 col-md-4>
            <div><a href="reportDetails">3333</a></div></ion-col
          >
          <ion-col col-12 col-xl-2 col-lg-3 col-md-4>
            <div>01/15/2021</div>
          </ion-col>
          <ion-col col-12 col-xl-2 col-lg-3 col-md-4>
            <div>Closed</div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import IonHeader from "@/semantics/IonHeader.vue";
import {
  modalController,
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonBackButton,
} from "@ionic/vue";
import { funnelOutline, menu } from "ionicons/icons";
import Modal from "./modal.vue";

export default {
  name: "Tab2",
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonSearchbar,
    IonFab,
    IonFabButton,
    IonIcon,
    IonBackButton,
  },
    methods: {
    async openModal() {
      const modal = await modalController.create({
        component: Modal,
        cssClass: "my-custom-class",
        componentProps: {
          title: "New Title",
        },
      });
      return modal.present();
    },
  },
  setup() {
    return {
      funnelOutline,
      menu,
    };
  },
};
</script>


<style scoped>
ion-grid:not(.gclass) {
  --ion-grid-column-padding: 10px;
  border-collapse: collapse;
  border-style: hidden;
}
ion-row-first-child:not(.rclass) {
  background-color: #2dd36f;
  font-weight: bold;
}
ion-col:not(.cclass) {
  border: 1px solid black;
  border-bottom: 0;
  border-right: 0;
}
ion-col:last-child:not(.cclass) {
  border-right: 1px solid black;
}

ion-row:last-child:not(.rclass) {
  border-bottom: 1px solid black;
}

.center {
  text-align: center;
}
</style>