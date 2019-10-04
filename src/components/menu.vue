<template>
  <div>
    <div class="menu" :class="{open_menu : status}">
      <div class="menu_content">
        <v-icon class="close" @click="closeMenu()">mdi-close</v-icon>
        <h3>Home</h3>
        <h3>About Us</h3>
        <h3>Contact Us</h3>
      </div>
    </div>
    <v-app-bar dense
      color="#314074"
      dark
    >
      <v-app-bar-nav-icon @click="openMenu()"></v-app-bar-nav-icon>
      <div class="flex-grow-1"></div>
      <v-toolbar-title>FunFunding</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn icon>
        <v-icon>mdi-trophy</v-icon>
      </v-btn>
    </v-app-bar>    
  </div>
</template>

<script>
  export default {
    data(){
      return{
        status: false,
      }
    },
    methods: {
      openMenu() {
        this.status = true;
      },
      closeMenu() {
        this.status = false;
      }
    }
  }
</script>

<style>
  .v-toolbar__title{
    font-family: Lato;
    color: #FFF;
    font-size: 18px!important;
    letter-spacing: 1.5px;
    line-height: 22px;
  }
  .menu_content{
    width: 100%;
    position: relative;
    padding: 20px;
  }
  .menu_content>h3{
    margin: 10px 0;
    color: #333;
  }
  .close{
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }
  .menu{
    width: 200px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    visibility: hidden;
    opacity: 0;
    background-color: #fff;
    box-shadow: 0 0 12 10 #000;
    transition: 0.5s;
    z-index: 999;
  }
  .open_menu{
    transform: translateX(0);
    visibility: visible;
    opacity: 1;
  }
</style>


