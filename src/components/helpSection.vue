<template>
    <div>
        <v-container>
            <div class="card_homeless">
                <div class="card_img">
                    <img src="../assets/img/image.png" class="w-100">
                </div>
                <div class="helpHomeless_wrapper">
                    <div class="helpHomeless_h1">{{ elements.teamTitle }}</div>
                    <div class="rectangle-3"></div>
                    <div class="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            elements: this.$store.state.elements
        }
    }
}
</script>

<style scoped>
    .container{
        padding: 14px;
    }   
    .w-100{
        width: 100%;
    }
    .card_homeless{
        box-shadow: 0 20px 17px 0 rgba(0,0,0,0.04);
        margin-bottom: 39px;
    }
    .helpHomeless_wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .helpHomeless_wrapper .text{
        color: #7B8898;
        font-family: Lato;
        font-size: 15px;
        line-height: 24px;
        text-align: center;
        margin: 0 20px 20px 20px;
    }
    .helpHomeless_h1{
        margin: 25px 0 11px 0;
        color: #222737;
        font-family: Lato;
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 1.5px;
        line-height: 22px;
        text-align: center;
        text-transform: uppercase;
        font-weight: 400;
    }
    .rectangle-3 {
        height: 1.94px;
        width: 30px;
        background-color: #419EFD;
        margin: 0 0 19px 0;
    }
</style>