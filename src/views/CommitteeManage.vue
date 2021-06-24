<template>
  <ion-page>
    <ion-header>
      <ion-back-button mode="md" default-href="/Admin"></ion-back-button>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-grid class="gclass">
        <ion-row class="rclass">
          <ion-col class="cclass">
            <ion-searchbar size placeholder="Search"></ion-searchbar>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col style="text-align: right">
            <ion-button size="small" shape="round" @click="presentAlertAdd"
              >Add</ion-button
            >
            <ion-button
              size="small"
              shape="round"
              color="danger"
              @click="presentAlertRemove"
              >Remove</ion-button
            >
          </ion-col>
        </ion-row>

        <ion-row class="rclass">
          <ion-col class="cclass" style="text-align: center">
            <h3>Committee Members</h3>
          </ion-col>
        </ion-row>

        <ion-list>
          <ion-item v-for="member in members" :key="member">
            <ion-col size="8">
              <ion-text
                ><h5>{{ member.firstName }} {{ member.lastName }}</h5></ion-text
              >
            </ion-col>
            <ion-col style="text-align: right" size="4">
              <ion-label>{{ member.SID }}</ion-label>
            </ion-col>
          </ion-item>
        </ion-list>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import IonHeader from "@/semantics/IonHeader.vue";
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
  IonBackButton,
  IonButton,
  IonText,
  IonLabel,
  IonList,
  IonItem,
  alertController,
} from "@ionic/vue";
import { funnelOutline } from "ionicons/icons";

export default {
  name: "CommitteeManage",
  data() {
    return {
      members: [
        {
          id: 1,
          firstName: "Pramod Reddy",
          lastName: "Gonegari",
          SID: "S543790",
        },
        { id: 1, firstName: "Jaya Kumar", lastName: "Saga", SID: "S536910" },
        { id: 1, firstName: "Ramu", lastName: "Vallapurapu", SID: "S587430" },
      ],
    };
  },
  methods: {
    async presentAlertAdd() {
      const alert = await alertController.create({
        cssClass: "my-alert-class",
        header: "Add Member",
        inputs: [
          {
            name: "sid",
            id: "sid-id",
            placeholder: "SID",
          },
        ],
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            
          },
          {
            text: "Add",
           
          },
        ],
      });
      return alert.present();
    },
    async presentAlertRemove() {
      const alert = await alertController.create({
        cssClass: "my-alert-class",
        header: "Add Member",
        inputs: [
          {
            name: "sid",
            id: "sid-id",
            placeholder: "SID",
          },
        ],
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
           
          },
          {
            text: "Remove",
          
          },
        ],
      });
      return alert.present();
    },
  },
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonSearchbar,
    IonBackButton,
    IonButton,
    IonText,
    IonLabel,
    IonList,
    IonItem,
  },
  setup() {
    return {
      funnelOutline,
    };
  },
};
</script>

