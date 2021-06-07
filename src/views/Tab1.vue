<template>
  <ion-page>
    
    <ion-content :fullscreen="true">
      
    <form>
    <ion-item-group>
      <ion-item-divider>
        <ion-label>Background Information</ion-label>
      </ion-item-divider>

    <ion-item lines="full">
      <ion-label position="floating">Reporter's Name</ion-label>
      <ion-input type="text" required></ion-input>
    </ion-item>
    
    <ion-item lines="full">
    <ion-label position="floating">Incident Date & Time</ion-label>
    <ion-datetime display-format="MMM DD, YYYY HH:mm"></ion-datetime>
    </ion-item>

    </ion-item-group>

  <ion-item-group>
    <ion-item-divider>
<ion-label>Involved Parties</ion-label>
    </ion-item-divider>

    
</ion-item-group>
   

    <!-- Radio buttons -->
    <ion-radio-group lines="full">
      <ion-list-header>
        <ion-label>Gender</ion-label>
      </ion-list-header>

      <ion-item>
        <ion-label>Male</ion-label>
        <ion-radio slot="start" value="male" checked></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>Female</ion-label>
        <ion-radio slot="start" value="female"></ion-radio>
      </ion-item>
    </ion-radio-group>

    <!-- Checkboxes -->
    <ion-list lines="full">
      <ion-list-header>
        <ion-label>Subjects</ion-label>
      </ion-list-header>
      <ion-item>
        <ion-label>English</ion-label>
        <ion-checkbox></ion-checkbox>
      </ion-item>
      <ion-item>
        <ion-label>Maths</ion-label>
        <ion-checkbox></ion-checkbox>
      </ion-item>
      <ion-item>
        <ion-label>Science</ion-label>
        <ion-checkbox></ion-checkbox>
      </ion-item>
      <ion-item>
        <ion-label>History</ion-label>
        <ion-checkbox></ion-checkbox>
      </ion-item>
    </ion-list>

    <ion-row>
      <ion-col>
        <ion-button type="submit" color="danger" expand="block">Submit</ion-button>
      </ion-col>
    </ion-row>
  </form>
    
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonItem, IonItemDivider, IonItemGroup, IonPage, IonContent } from '@ionic/vue';

export default  {
  name: 'Tab1',
  components: { IonItem, IonItemDivider, IonItemGroup, IonContent, IonPage }
}
</script>