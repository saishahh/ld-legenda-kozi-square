<template>
  <div>
      <Head>
        <Title>LD Legenda Kozi Square Apartment Kuching Amenities & Facilities | LD Legenda @ Kozi Square for Sale & Rent</Title>
        <Meta name="description" :content='"Experience a comfortable lifestyle with our exceptional amenities and facilities. Enjoy convenience and quality living."' />
      </Head>
    </div>
    <div class="max-w-6xl px-4 mx-auto space-y-12 divide-y">
    <!-- Facilities  -->
    <section  class="py-6 space-y-6">
          <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl">Amenities </h3>
          <section>
            <p>LD Legenda @ Kozi Square Apartment Residents and Regatta Suites Hotel Guests Amenities</p>
      <div class="max-w-6xl px-4 py-12 mx-auto space-y-12">
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            LF (10) Floor
          </h3>
          <BedroomImageModal :bed-room-prop="FacilitiesLF10" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            1 to 9 Floor
          </h3>
          <BedroomImageModal :bed-room-prop="FacilitiesLF1to10" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            G (Ground) Floor
          </h3>
          <BedroomImageModal :bed-room-prop="FacilitiesG" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            LG (Lower Ground) Floors
          </h3>
          <BedroomImageModal :bed-room-prop="FacilitiesLG" />
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-semibold sm:text-2xl text-center">
            B1 to B3 (Basement) Floors
          </h3>
          <BedroomImageModal :bed-room-prop="FacilitiesB1ToB3" />
        </div>
      </div>
    </section>
        </div>
      </section>
      
      </div>
</template>

<script>
export default {
  data() {
    return {
      FacilitiesLF10: [
        { title: 'Infinity Pool', url: 'Infinitypool' },
        { title: 'Children Pool', url: 'Childrenpool' },
        { title: 'Sky Park', url: 'Skypark' },
        { title: 'Sky Gym', url: 'Skygym' },
        { title: 'Toilet & Shower Facilities', url: 'Toiletfacilities' },
      ],
      FacilitiesLF1to10: [
        { title: 'LD Legenda Service Apartment', des:'Studio Unit', desc:' (RM 900-RM 2000 monthly)',url: 'LDLegendaserviceapartment(studiounitfromrm900torm1400)' },
        { title: 'LD Legenda Service Apartment', des:'1 Bed+1 Living Unit', desc:' (RM 1800-RM 3000 monthly)',url: 'LDLegendaserviceapartment(studiounitfromrm900torm1400)' },
        { title: 'LD Legenda Service Apartment', des:'2 Bed+1 Living Unit', desc:' (RM 2700-RM 4000 monthly)',url: 'LDLegendaserviceapartment(studiounitfromrm900torm1400)' },
        { title: 'Refuse Room', desc:'(on each floor at Lift Lobby 2 & 3)', url: 'Refuseroomoneachlevelatliftlobby' },
      ],
      FacilitiesG: [
        { title: 'Regatta Suites Hotel ', desc:'(Hotel Lobby)', url: 'HotelLobby' },
        { title: 'Theatre Restaurant & Gallery', desc:'(Restaurant)', url: 'Restaurant' },
        { title: 'Lifestyle Retail Shop', url: 'Lifestyleretailshop' },
        { title: 'CIMB ATM', url: 'Lcimbatmmachine' },
        { title: 'Level G Shopping Mall Toilet', url: 'LevelG shoppingmalltoilet' },
        { title: 'Fun Factor ', desc:'(Indoor Playground)',url: 'Fun Factor (IndoorPlayground)' },
        { title: 'Shop', url: 'Jessy_sshop' },
        { title: 'Tabas Lounge', url: 'Ltabaslounge' },
        { title: 'Food Delivery Pick-up Point', url: 'FoodDeliveryPickupPoint' },
        { title: 'Passenger Pick-up Point', url: 'PassengerPickUpPoint' },
        { title: 'Security Office', url: 'SecurityRoom' },
        { title: 'Basement Car Park Entrance', url: 'BasementCarPark' },
        { title: 'Premier Car Park', url: 'PremierCarPark' },
        { title: 'Loading Area', url: 'LoadingArea' },
        { title: 'Lobby Drop Off', url: 'LobbyDropOff' },
        { title: 'Kozi Square Lift Lobby', url: 'KoziSquareLiftLobby' },
        { title: 'Kozi Square Retail Shop Entrance', url: 'RetailShopEntrance' },
      ],
      FacilitiesLG: [
        { title: '24 Hours Access Sheltered Walkway to Sarawak General Hospital (SGH) / Hospital Umum Sarawak (HUS)', desc:' (1-3 mins walk) ', url: 'L24hoursaccessshelteredwalkwaytosgh(2minswalk)' },
        { title: ' Aircon Foodcourt', url: 'Foodcourt' },
        { title: 'Security Counter', url: 'Lsecuritycounter' },
        { title: 'Ladies Nite Bar', url: 'ladies-nite' },
        { title: '24 Hours Coin Laundry', url: '24hourscoinlaundry' },
        { title: '24 Hours Convenience Store', url: 'Convenienceshop' },
        { title: 'SGH Paediatric Specialist Clinic', url: 'pediatric-clinic' },
        { title: 'Hair Salon', url: 'Hairsalon' },
        { title: 'Mobile Phone Shop', url: 'Mobilephoneshop' },
        { title: 'Shopping Mall Toilet', url: 'Levellgshoppingmalltoilet' },
        { title: 'Autopay Machine ', desc:'(Next to Escalator)',url: 'Llgautopaymachine' },
        { title: 'LG Carpark', url: 'LLGcarpark' },
        { title: 'LD Legenda Management Office', desc:'(Next to Carpark Exit & Lift Lobby 1)', url: 'PLDLegendaManagementOffice' },
        { title: 'Retail Shop Letterbox', desc:'(In front of Management Office)',url: 'PLDLegendaManagementOffice' },
        { title: 'Parcel Collection Rack', desc:'(In front of Management Office)', url: 'LParcelcollectionrack' },
        { title: 'Carpark Office', desc:'(Next to Management Office)', url: 'Lcarparkmanagementoffice' },
        { title: 'MaintenanceOffice', url: 'MaintenanceOffice' },
        { title: 'Pharmacy Drive-Thru', url: 'LPharmacydrive-thru' },
        { title: 'LG Carpark Entrance', url: 'Llgcarparkentrance' },
        { title: 'Motorcycle Parking', url: 'MotorcycleParking' },
        { title: 'Loading / Unloading Bay', url: 'LLoading_Unloadingbay(1)' },
        ],
        FacilitiesB1ToB3: [
        { title: 'B1 Carpark', url: 'LB1carpark' },
        { title: 'B1 Autopay Machine ', desc:'(Next to Escalator)', url: 'Lb1autopaymachine' },
        { title: 'B2 Carpark', url: 'Lb2carpark' },
        { title: 'B2 Mail Room', desc:'(Residential Units 5 to 9 Floors)', url: 'Lletterbox' },
        { title: 'B3 Carpark', url: 'Lb3carpark' },
        { title: 'B3 Mail Room', desc:'(Residential Units 1 to 3A Floors)',url: 'Lletterbox' },
        ], 
        //test
        AmenitiesLF10: [
        { title: 'Infinity Pool', url: 'Infinitypool' },
        { title: 'Children Pool', url: 'Childrenpool' },
        { title: 'Sky Park', url: 'Skypark' },
        { title: 'Sky Gym', url: 'Skygym' },
      ],
      AmenitiesLF1to10: [
      ],
      AmenitiesG: [
        { title: 'Restaurants', url: 'Restaurant' },
        { title: 'Lifestyle Retail Shop', url: 'Lifestyleretailshop' },
        { title: 'Fun Factor (Indoor Playground)', url: 'Fun Factor (IndoorPlayground)' },
        { title: 'Shop', url: 'Jessy_sshop' },
        { title: 'Tabas Lounge', url: 'Ltabaslounge' },
      ],
      AmenitiesLG: [
        { title: 'Foodcourt', url: 'Foodcourt' },
        { title: 'Convenience Shop', url: 'Convenienceshop' },
        { title: 'Mobile Phone Shop', url: 'Mobilephoneshop' },
        { title: 'Hair Salon', url: 'Hairsalon' },
        ],
        AmenitiesB1ToB3: [

        ],
    }
  },
}
</script>
