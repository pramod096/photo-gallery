<template>
  <ion-content>
    <ion-card>
      <ion-item lines="none" class="titles">
        <ion-label>Filter</ion-label>
      </ion-item>

      <ion-item lines="none" class="rounded">
        <ion-label position="floating">Start Date</ion-label>
        <ion-datetime display-format="MMM DD, YYYY"></ion-datetime>
      </ion-item>

      <ion-row style="height: 8px"></ion-row>

      <ion-item lines="none" class="rounded">
        <ion-label position="floating">End Date</ion-label>
        <ion-datetime display-format="MMM DD, YYYY"></ion-datetime>
      </ion-item>
      <ion-row style="height: 8px"></ion-row>

      <ion-item lines="none" class="rounded">
        <ion-label position="floating">Place of Incident</ion-label>
        <ion-select interface="popover" required>
          <ion-select-option value="oncampus">On Campus</ion-select-option>
          <ion-select-option value="off campus">Off Campus</ion-select-option>
          <ion-select-option value="online">Online</ion-select-option>
          <ion-select-option value="unknown">Unknown</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-row style="height: 8px"></ion-row>

      <ion-item lines="none" class="rounded">
        <ion-label position="floating">Role</ion-label>
        <ion-select interface="popover">
          <ion-select-option value="victim">Victim</ion-select-option>
          <ion-select-option value="witness">Witness</ion-select-option>
          <ion-select-option value="alledged/accused"
            >Alledged/Accused</ion-select-option
          >
          <ion-select-option value="involved person"
            >Involved Person</ion-select-option
          >
        </ion-select>
      </ion-item>

      <ion-row style="height: 8px"></ion-row>

      <ion-item lines="none" class="rounded">
        <ion-label position="floating">Status</ion-label>
        <ion-select interface="popover">
          <ion-select-option value="victim">Open</ion-select-option>
          <ion-select-option value="witness">Close</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-row style="height: 8px"></ion-row>

      <ion-item lines="none" class="rounded">
        <ion-label position="floating">Sort</ion-label>
        <ion-select interface="popover">
          <ion-select-option value="victim">Latest</ion-select-option>
          <ion-select-option value="witness">Oldest</ion-select-option>
        </ion-select>
      </ion-item>

      <ion-row style="height: 8px"></ion-row>

      <ion-row>
        <ion-col style="text-align: center">
          <ion-button size="small" shape="round" color="danger"
            >Clear</ion-button
          >
          <ion-button size="small" shape="round" @click="closeModal">Done</ion-button>
        </ion-col>
      </ion-row>

      <ion-row style="height: 8px"></ion-row>
    </ion-card>
  </ion-content>
</template>

<script>
import { IonContent,  
modalController,
IonLabel,
IonButton,
IonCard,
IonCol,
IonRow,
IonItem,
IonSelect,
IonSelectOption,
IonDatetime } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    title: { type: String, default: "Super Modal" },
  },
  components: { IonContent,
  IonLabel,
IonButton,
IonCard,
IonCol,
IonRow,
IonItem,
IonSelect,
IonSelectOption,
IonDatetime },
  methods: {
      async closeModal() {
  const modal = await modalController.dismiss();
  return {
      modal
  }
}
  }
});
</script>