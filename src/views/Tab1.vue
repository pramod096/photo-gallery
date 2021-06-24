<template>
  <ion-page>
    <ion-header> 
    </ion-header>
    <ion-content :fullscreen="true">
     
      
    <ion-list>
    
      <ion-card>
      
      <ion-item lines="none" class="titles">
     <ion-label>Background Information</ion-label>    
      </ion-item>

    <ion-item lines="none" class="rounded" >
      <ion-label position="floating">Reporter's Name</ion-label>
      <ion-input type="text"></ion-input>
    </ion-item>

      <ion-row style="height: 8px"></ion-row>

    <ion-item lines="none" class="rounded">
      <ion-label position="floating">Phone Number</ion-label>
      <ion-input type="number"></ion-input>
    </ion-item>

    <ion-row style="height: 8px"></ion-row>

    <ion-item lines="none" class="rounded">
      <ion-label position="floating">Email</ion-label>
      <ion-input type="text"></ion-input>
    </ion-item>
    
    <ion-row style="height: 8px"></ion-row>
    </ion-card>

    <ion-card>
      
      <div  v-for="item in items" :key="item">
      <ion-row>
        <ion-col>
      <ion-item lines="none" class="titles">
     <ion-label>Involved Party {{ item }}</ion-label>  
      <ion-icon :icon="close" v-if="item != 1 && item == items.length" @click="items.pop()"> </ion-icon> 
      </ion-item>
        </ion-col>
      </ion-row>

    <ion-item lines="none" class="rounded">
      <ion-label position="floating">Name</ion-label>
      <ion-input type="text"></ion-input>
    </ion-item>

   <ion-row style="height: 8px"></ion-row>

    <ion-item lines="none" class="rounded">
      <ion-label position="floating">Role</ion-label>
      <ion-select interface="popover">
      <ion-select-option value="victim">Victim</ion-select-option>
      <ion-select-option value="witness">Witness</ion-select-option>
      <ion-select-option value="alledged/accused">Alledged/Accused</ion-select-option>
      <ion-select-option value="involved person">Involved Person</ion-select-option>
      </ion-select>
    </ion-item>

    <ion-row style="height: 8px"></ion-row>

    <ion-item lines="none" class="rounded">
      <ion-label position="floating">Phone Number</ion-label>
      <ion-input type="number"></ion-input>
    </ion-item>
 
    <ion-row style="height: 8px"></ion-row>

    <ion-item lines="none" class="rounded">
      <ion-label position="floating">Email</ion-label>
      <ion-input type="text"></ion-input>
    </ion-item>
    
    <ion-row style="height: 8px"></ion-row>

      </div>

   <ion-row>
      <ion-col style="text-align: center">
        <ion-button  size="small" shape="round" @click="items.push(items.length + 1)">Add Party</ion-button>
      </ion-col>
    </ion-row>

<ion-row style="height: 8px"></ion-row>

</ion-card>

   <ion-card>

    <ion-item lines="none" class="titles">
     <ion-label>Relevant Information</ion-label>    
      </ion-item>

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
    <ion-label position="floating">Incident Date & Time</ion-label>
    <ion-datetime display-format="MMM DD, YYYY HH:mm"></ion-datetime>
    </ion-item>

<ion-row style="height: 8px"></ion-row>

    <ion-item lines="none" class="rounded">
  <ion-textarea autoGrow="true" placeholder="Please provide a detailed description of the incident/concern using specific concise, objective language (Who, what, where, when, why, and how)."></ion-textarea>
    </ion-item>

<ion-row style="height: 8px"></ion-row>

<ion-item lines="none" class="titles">
<ion-checkbox></ion-checkbox>
<ion-label>Do you consent to contact you, if needed?</ion-label>
</ion-item>

<ion-row style="height: 8px"></ion-row>

<ion-item lines="none" class="titles">
<ion-checkbox></ion-checkbox>
<ion-label>Track the Status of Report</ion-label>
</ion-item>

<ion-row style="height: 8px"></ion-row>

</ion-card>

<ion-card>

  <ion-item lines="none" class="titles">
     <ion-label>Supporting Evidence</ion-label>    
      </ion-item>

<ion-row>
      <ion-col style="text-align: center"> 
        <ion-button size="small" shape="round" @click="takePhoto()">Take Picture</ion-button>
        <ion-button size="small" shape="round">Upload Files</ion-button>
      </ion-col>
</ion-row>
      
    <ion-row style="height: 8px"></ion-row>
</ion-card>

    <ion-row>
      <ion-col style="text-align: center">
        <ion-button size="small" shape="round" type="submit" color="danger">Submit</ion-button>
      </ion-col>
    </ion-row>

</ion-list>

    
<ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button color="danger">
          <ion-icon :icon="call" />
        </ion-fab-button>
      </ion-fab>
    
  
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonItem, IonPage, IonContent, IonButton, IonCard, IonList, IonFab, 
  IonFabButton, IonIcon, IonCol, IonRow, IonLabel, IonCheckbox, IonTextarea, IonDatetime,
  IonSelect, IonSelectOption, IonInput } from '@ionic/vue';
import IonHeader from '@/semantics/IonHeader.vue';
import { call, close } from 'ionicons/icons';

import { usePhotoGallery } from '@/composables/usePhotoGallery';


export default  {
  name: 'Tab1',
   data() {
    return {
        items: [1]
      }
    },
  components: { IonItem, IonContent, IonPage, IonButton, IonHeader, IonCard, IonList, IonFab, 
  IonFabButton, IonIcon, IonCol, IonRow, IonLabel, IonCheckbox, IonTextarea, IonDatetime,
  IonSelect, IonSelectOption, IonInput },
  setup() {

    const { takePhoto } = usePhotoGallery();

    return {
    call,
    close,
    takePhoto,
    }
  }
}
</script>

<style scoped>

ion-fab {
  margin-right: 8px;
}

</style>