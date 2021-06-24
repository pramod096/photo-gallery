<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-tab-bar>
          <ion-tab-button tab="tab1" href="/tabs/tab1">
            <ion-icon :icon="home" />
            <ion-label>Home</ion-label>
          </ion-tab-button>

          <ion-tab-button
            v-if="user.role == 'student'"
            tab="tab2"
            href="/tabs/tab2"
          >
            <ion-icon :icon="information" />
            <ion-label>Check Status</ion-label>
          </ion-tab-button>

          <ion-tab-button v-if="user.role == 'admin'" tab="Admin" href="/Admin">
            <ion-icon :icon="person" />
            <ion-label>Admin</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonContent,
  IonLabel,
  IonIcon,
  IonPage,
} from "@ionic/vue";
import { information, home, person } from "ionicons/icons";
export default {
  name: "Tabs",
  data() {
    return {
      user: {
        role: "admin",
      },
    };
  },
  components: {
    IonContent,
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
  },
  setup() {
    return {
      information,
      home,
      person,
    };
  },
};
</script>