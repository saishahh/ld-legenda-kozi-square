<template>
    <div class="selected-image-container">
      <img :src="thumbnailImages[activeIndex]" class="selected-image" />
    </div>    
    
    <div class="thumbnail-container">
    <!-- Previous Arrow Button -->
      <button class="prev-btn" tabindex="0" type="button" @click="prevThumbnail">
      <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 9L8 12M8 12L11 15M8 12H16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </button> 
   
      <ul class="thumbnails">
        <li
          v-for="(thumbnail, index) in thumbnailImages"
          :key="index"
          :class="{active: index === activeIndex, selected: index == activeIndex}"
          @click="selectThumbnail(index)"
        >
        <img :src="thumbnail" :class="{ 'selected-thumbnail': index === selectedImageIndex, 'thumbnail-image': true}"/>
        </li>
      </ul>
    
    <!-- Next Arrow Button -->
      <button class="next-btn" tabindex="0" type="button" @click="nextThumbnail">
        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 15L16 12M16 12L13 9M16 12H8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <section>
    <div class="container">
      <div class="button-container">
        <button 
        @click="showContent(1)"
        :class="{'active-button': activeButton === 1}">
        Details
        </button>
    
      </div>
      
      <div v-if="activeButton === 1" class="text-post">
        <!-- Content for Button 1 -->
        <p>Call Brandon Chew , For more information.</p>
        <p>Whatapps: 016 886 4229</p>
        <br>
        <p>For Rent LD Legenda </p>
        <br>
        <p>walking distance to Sarawak General Hospital</p>
        <br>
        <p>Immediate Availability</p>
        <p>>> Renting Price: <b>RM 900</b> / month</p>
        <p>>> Block A, Level 2</p>
        <br>
        <p>Disclaimer: Please obtain details from our sales person. </p>
        <p>Information in ad may not be fully descriptive.</p>
        <p>Apologize for any inconvenient cause. Thank you.</p>
        

        <br>
        <!--TABLE-->
        <table>
          <thead>
            <tr>
              <th colspan="2"> BUILDING DETAILS </th>
            </tr>
            <tr>
              <td style="width: 40%">Rental Period</td>
              <td style="width: 60%">Monthly</td>
            </tr>
            <tr>
              <td >Level</td>
              <td >2</td>
            </tr>
            <tr>
              <td >Window View</td>
              <td ></td>
            </tr>
            <tr>
              <td >Furnishing</td>
              <td >Fully Furnished</td>
            </tr>
            <tr>
              <td >Carpark</td>
              <td ></td>
            </tr>
            <tr>
              <td >Washing Machine</td>
              <td ></td>
            </tr>
          </thead>
        </table>
        </div>
    </div>
    </section>
    
    <section class="py-6">
          <router-link
            to="/rent"
            class="
              inline-flex
              items-center
              justify-center
              w-full
              px-3
              py-3
              text-white
              transition
              rounded
              sm:px-0
              hover:bg-blue-600
              bg-blue-300
            "
          >
            Back to Rent
          </router-link>
        </section>
    </template>

    <script>

import image1 from '@/assets/img/rent/R56-main-room-image.jpeg';
import image2 from '@/assets/img/rent/R50-main-room-image.jpeg';

    export default {
    data() {
      return {
        activeButton: 1,
        activeIndex: 0, // Initial active thumbnail index
        selectedImageIndex: null,
      thumbnailImages: [
        image1,
        image2,
        // Add more thumbnail images here as needed
      ]
      };
      },
    methods: {
      showContent(buttonNumber) {
        this.activeButton = buttonNumber;
      },
      selectThumbnail(index) {
      this.activeIndex = index;
      this.selectedImageIndex = index;
    },
    prevThumbnail() {
      if (this.activeIndex > 0) {
        this.activeIndex--;
      }
    },
    nextThumbnail() {
      if (this.activeIndex < this.thumbnailImages.length - 1) {
        this.activeIndex++;
      }
    },
    }
    }
    
    </script>
    
    <style scoped>

.thumbnails {
  flex-grow: 1; /* Allow the thumbnails to grow and take available space */
  display: flex;
  justify-content: center;
  gap: 10px; /* Center the thumbnails horizontally */
}
.thumbnail-container {
  padding-top: 2%;
  padding-bottom: 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  margin: 0 auto;
}
.thumbnail-image {
  width: 150px;
}
.prev-btn,
.next-btn {
  width: 50px; /* Adjust the width as needed */
}
.selected-image-container {
  margin-top: 20px; /* Adjust the margin as needed */
  display: flex; /* Add display:flex to enable centering */
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  height: 600px; /* Adjust the height as needed */
}

.selected-image {
  max-width: 100%;
  max-height: 100%;
}

.selected-thumbnail {
  box-shadow: 0 0 0 3px #007bff;
}

.active-button {
  border-bottom: 2px solid rgb(132, 158, 190);
  color: black; /* Change "blacks" to "black" */
}

.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.button-container button {
  padding: 5px 10px;
  margin: 5px;
  /* Optional: Set a background color for the buttons */
}

.container {
  border: 3px solid rgb(132, 158, 190);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  max-width: 650px; /* Adjust the max width as needed */
  margin: auto;
  height: auto; /* Make the container take up the full viewport height */
}

.text-post {
  text-align: left;
}

/* Style for tables */
.container table {
  border-collapse: collapse;
  width: 100%; /* Set the width to 100% to fill the container */
  border: 1px solid rgb(132, 158, 190); /* Add a border to the table */
}

/* Style for table headers */
.container th {
  border: 1px solid rgb(132, 158, 190); /* Add a border to table headers */
  padding: 4px;
  width: 40%; /* Adjust the width as needed */
}

/* Style for table cells */
.container td {
  border: 1px solid rgb(132, 158, 190); /* Add a border to table cells */
  padding: 10px;
  width: 40%; /* Adjust the width as needed */
}


/* Add your component-specific CSS styles here */
</style>
