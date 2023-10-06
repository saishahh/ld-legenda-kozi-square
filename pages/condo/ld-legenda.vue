
<template>
<div class="max-w-6xl px-4 mx-auto space-y-12 divide-y">
      <!--Rent-->
      <section >
        <div class="space-y-4">
        <h3 class="text-xl font-semibold sm:text-2xl">Rent </h3>
        <div class="max-w-4xl py-6 mx-auto px-6 space-y-6">
          <div class="grid-container">
          <!-- IMAGE 1 Image and text in the same container -->
            <div class="image-text-container">
              <div class="image-container">
                <img
                  src="~assets/img/rent/R48-main-room-image.jpeg"
                  width="500"
                  alt="ROOM IMAGE"
                />
              </div>
            <div class="text-container py-3">
              <li class="no-list-style text-center">
                <NuxtLink 
                to="/rental/rentdetail-BlockC-L7" 
                class="underline-on-hover font-serif font-medium"
                >BLOCK C, Level 7
              </NuxtLink>
              </li>
              <br>
                <p style="color:red;" class = "font-sans"> RM 98 per day</p>
                <!--
                  <div class="small-text-container">
                    <p class="small-text"> Apartment/Condominium </p>               
                    <p class="small-text"> 250 sq.ft. </p>
                    <p class="small-text"> 1 Bedroom </p>
                    <p class="small-text"> 1 Bathroom </p>
                  </div>
                -->
              </div>
            </div>
          <!-- IMAGE 2 End of image and text container -->
          <div class="image-text-container">
              <div class="image-container">
                <img
                  src="~assets/img/rent/R48-main-room-image.jpeg"
                  width="500"
                  alt="ROOM IMAGE"
                />
              </div>
            <div class="text-container py-3">
              <li class="no-list-style center-text">
                <NuxtLink 
                to="/rental/rentdetail-BlockB-L3A" 
                class="underline-on-hover font-serif font-medium"
                >BLOCK B, Level 3A
              </NuxtLink>
              </li>
              <br>
                <p style="color:red;" class = "font-sans"> RM 500 per week</p>
                <!--
                  <div class="small-text-container">
                    <p class="small-text"> Apartment/Condominium </p>               
                    <p class="small-text"> 250 sq.ft. </p>
                    <p class="small-text"> 1 Bedroom </p>
                    <p class="small-text"> 1 Bathroom </p>
                  </div>
                -->
              </div>
            </div>
          <!-- IMAGE 3 End of image and text container -->
          <div class="image-text-container">
              <div class="image-container">
                <img
                  src="~assets/img/rent/R48-main-room-image.jpeg"
                  width="500"
                  alt="ROOM IMAGE"
                />
              </div>
            <div class="text-container py-3">
              <li class="no-list-style center-text">
                <NuxtLink 
                to="/rental/rentdetail-BlockA-L1" 
                class="underline-on-hover font-serif font-medium"
                >BLOCK A, Level 1
              </NuxtLink>
              </li>
              <br>
                <p style="color:red;" class = "font-sans"> RM 100 per month</p>
                <p> (6 to 12 months )</p>
                <!--
                  <div class="small-text-container">
                    <p class="small-text"> Apartment/Condominium </p>               
                    <p class="small-text"> 1 sq.ft. </p>
                    <p class="small-text"> 1 Bedroom </p>
                    <p class="small-text"> 1 Bathroom </p>
                  </div>
                -->
              </div>
            </div>
          <!-- IMAGE 4 End of image and text container -->
          <div class="image-text-container">
              <div class="image-container">
                <img
                  src="~assets/img/rent/R48-main-room-image.jpeg"
                  width="500"
                  alt="ROOM IMAGE"
                />
              </div>
            <div class="text-container py-3">
              <li class="no-list-style center-text">
                <NuxtLink 
                to="/rental/rentdetail-BlockB-L1" 
                class="underline-on-hover font-serif font-medium"
                >All the other prices
              </NuxtLink>
              </li>
              <br>
                <p style="color:red;" class = "font-sans"> RM 900 to RM 1200</p>
            
                <!--
                  <div class="small-text-container">
                    <p class="small-text"> Apartment/Condominium </p>               
                    <p class="small-text"> 249 sq.ft. </p>
                    <p class="small-text"> 1 Bedroom </p>
                    <p class="small-text"> 1 Bathroom </p>
                  </div>
                -->
              </div>
            </div>
        </div>
      </div>
      </div>
      </section>


     
</div>
</template>



<style scoped>
  /* Add or modify any additional styles as needed */
  .image-text-container {
    border: 1px solid #FeB;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center horizontally */
    text-align: center; /* Center text horizontally */
  }
  
  .image-container {
    text-align: center;
    margin-bottom: 10px; /* Add spacing between image and text */
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  .small-text-container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  .small-text{
    font-size: 12px;
  }

  .underline-on-hover:hover{
    text-decoration: underline;
  }

  .no-list-style{
    list-style: none;
  }

  .justify-text {
    text-align: justify;
  }
  </style>