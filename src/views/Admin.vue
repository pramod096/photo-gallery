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
            <ion-fab vertical="start" horizontal="end" color="dark">
              <ion-fab-button color="light">
                <ion-icon :icon="menu"></ion-icon>
              </ion-fab-button>
              <ion-fab-list side="bottom">
                <ion-fab-button @click="openModal"
                  ><ion-icon :icon="funnelOutline"></ion-icon
                ></ion-fab-button>
                <ion-fab-button href="committeeManage"
                  ><ion-icon :icon="personAdd"></ion-icon
                ></ion-fab-button>
              </ion-fab-list>
            </ion-fab>
          </ion-col>
        </ion-row>

        <ion-row class="rclass" style="text-align: center">
          <ion-col class="cclass" col-6>
            <ion-card text-center padding color="primary">
              <h6>758</h6>
              <h6>Total</h6>
            </ion-card>
          </ion-col>
          <ion-col class="cclass" col-6>
            <ion-card text-center padding color="primary">
              <h6>8</h6>
              <h6>Open</h6>
            </ion-card>
          </ion-col>
          <ion-col class="cclass" col-6>
            <ion-card color="primary">
              <h6>750</h6>
              <h6>Closed</h6>
            </ion-card>
          </ion-col>
        </ion-row>

        <ion-row class="rclass">
          <ion-col class="cclass" style="text-align: center">
            <h3>Reported Incidents</h3>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col col-12 col-xl-2 col-lg-3 col-md-4>
            <div>Incident ID</div>
          </ion-col>
          <ion-col col-12 col-xl-2 col-lg-3 col-md-4>
            <div>Raised On</div>
          </ion-col>
          <ion-col col-12 col-xl-2 col-lg-3 col-md-4>
            <div>Status</div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col col-12 col-xl-2 col-lg-3 col-md-4>
            <div><a href="reportDetailsAdmin">1111</a></div></ion-col
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
            <div><a href="reportDetailsAdmin">2222</a></div></ion-col
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
            <div><a href="reportDetailsAdmin">3333</a></div></ion-col
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
import { personAdd, funnelOutline, menu } from "ionicons/icons";
import Modal from "./modal.vue";
import {
  modalController,
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
  IonIcon,
  IonCard,
  IonFab,
  IonFabButton,
  IonFabList,
  IonBackButton,
} from "@ionic/vue";

export default {
  name: "Admin",
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonSearchbar,
    IonIcon,
    IonCard,
    IonFab,
    IonFabButton,
    IonFabList,
    IonBackButton,
  },
  methods: {
    async openModal() {
      const modal = await modalController.create({
        component: Modal,
        cssClass: "my-modal-class",
        componentProps: {
          title: "New Title",
        },
      });
      return modal.present();
    },
  },
  setup() {
    return {
      personAdd,
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