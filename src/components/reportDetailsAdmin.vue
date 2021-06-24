<template>
  <ion-page>
  <ion-header> 
    <ion-back-button  mode="md" default-href="Admin"></ion-back-button>
  </ion-header>
  <ion-content :fullscreen="true">
    <div class="center">
        <h3>Report Details</h3>
      </div>
    <ion-grid fixed="{true}">
      <ion-row>
        <ion-col size="6">
          <div>IncidentID</div>
        </ion-col>
        <ion-col size="6">
          <div>1231</div>
        </ion-col>
      </ion-row>
       <ion-row>
        <ion-col size="6">
          <div>Reporter Name</div>
        </ion-col>
        <ion-col size="6">
          <div>Sam</div>
        </ion-col>
      </ion-row>
       <ion-row>
        <ion-col size="6">
          <div>Phone</div>
        </ion-col>
        <ion-col size="6">
          <div>9848932251</div>
        </ion-col>
      </ion-row>
       <ion-row>
        <ion-col size="6">
          <div>Email</div>
        </ion-col>
        <ion-col size="6">
          <div>Sam@Gmail.com</div>
        </ion-col>
      </ion-row>
       <ion-row>
        <ion-col size="6">
          <div>Name</div>
        </ion-col>
        <ion-col size="6">
          <div>Recreation</div>
        </ion-col>
      </ion-row>
       <ion-row>
        <ion-col size="6">
          <div>Role</div>
        </ion-col>
        <ion-col size="6">
          <div>Witness</div>
        </ion-col>
      </ion-row> <ion-row>
        <ion-col size="6">
          <div>Phone Number</div>
        </ion-col>
        <ion-col size="6">
          <div>6602167896</div>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="6">
          <div>Email</div>
        </ion-col>
        <ion-col size="6">
          <div>john@gmail.com</div>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="6">
          <div>Place of Incident</div>
        </ion-col>
        <ion-col size="6">
          <div>Foster fitness</div>
        </ion-col>
      </ion-row>   
      <ion-row>
        <ion-col size="6">
          <div>Incident Date & Time</div>
        </ion-col>
        <ion-col size="6">
          <div>June 20, 2021 16:08</div>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="6">
          <div>Description</div>
        </ion-col>
        <ion-col size="6">
          <div>Brief Explanation of the report</div>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="6">
          <div>RaisedOn</div>
        </ion-col>
        <ion-col size="6">
          <div>01/3/2021</div>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="6">
          <div>User</div>
        </ion-col>
        <ion-col size="6">
          <div>S453454</div>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="6">
          <div>Comments</div>
        </ion-col>
        <ion-col col-auto>
          <div>Comment 1</div>
          <div>Comment 2</div>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="6">
          <div>Status</div>
        </ion-col>
        <ion-col size="6">
          <div>Open</div>
        </ion-col>
      </ion-row>
</ion-grid>

<ion-grid class="gclass">

    <ion-card>
      
      <ion-item lines="none" class="titles">
     <ion-label>Edit Report</ion-label>    
      </ion-item>

     <ion-item lines="none" class="rounded">
     <ion-textarea autoGrow="true" placeholder="Comments"></ion-textarea>
    </ion-item>

      <ion-row class="rclass" style="height: 8px"></ion-row>

    <ion-row class="rclass">
      <ion-col class="cclass" style="text-align: center">
    <ion-button expand="full" shape="round">Post Comment</ion-button>
    <ion-button expand="full" shape="round">Close Case</ion-button>
    <ion-button expand="full" shape="round">Delete Case</ion-button>
    <ion-button expand="full" shape="round">Export as Pdf</ion-button>
      </ion-col>
    </ion-row>
    
    <ion-row class="rclass" style="height: 8px"></ion-row>
    </ion-card>

    </ion-grid>
  </ion-content>
</ion-page>
</template>

<script lang="ts">
import { IonRow, IonGrid, IonCol, IonContent, IonPage, IonBackButton, IonLabel, IonButton,
         IonTextarea, IonCard, IonItem } from "@ionic/vue";
import { defineComponent } from "vue";
import IonHeader from "@/semantics/IonHeader.vue";
export default defineComponent({
  components: {
    IonRow,
    IonGrid,
    IonCol,
    IonContent,
    IonHeader,
    IonPage,
    IonBackButton,
    IonButton,
    IonLabel,
    IonTextarea,
    IonCard,
    IonItem
  },
});
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