<template>
    <div class="games_wrapper">
        <div class="invite">
            <div class="text-center position_btn">
                <v-btn class="btn_rounded" rounded color="primary" dark>invite friends</v-btn>
            </div>
            <div class="text-center text_games">GAMES</div>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <carousel 
                            :items="2.3" 
                            :nav="false" 
                            :dots="false" 
                            :margin="15"
                            :stagePadding="2"
                            :responsive="{
                                0:{items:2.3},
                                620:{items:3}}"
                        >
                            <img src="../assets/img/slide3.png" >
                            <img src="../assets/img/slide2.png">
                            <img src="../assets/img/slide1.png">
                        </carousel>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="join">
            <div>Join your team's chat</div>
            <v-btn class="btn_join" rounded color="primary" dark>Join</v-btn>
        </div>
    </div>
</template>
<script>
import carousel from 'vue-owl-carousel'

export default {
    components: {
        carousel 
    },
}
</script>

<style scoped>
    .text_games{
        padding-top: 40px;
        color: #FFF;
        font-family: "Lato";
        font-size: 18px;
        letter-spacing: 1.5px;
        line-height: 22px;
    }
    .games_wrapper{
        padding: 40px 0;
        background-color: #F5F5F5;
    }
    .invite{
        background-color: #2c3966;
        position: relative;
        
    }
    .position_btn{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -20px;
        color: #FFF;
        font-family: "Lato Heavy";
        font-size: 14px;
        letter-spacing: 0.47px;
        line-height: 17px;
        text-align: center;
    }
    .btn_rounded span.v-btn__content{
        color: #FFF;
        font-family: "Lato Heavy";
        font-size: 14px;
        letter-spacing: 0.47px;
        line-height: 17px;
        text-align: center;
    }
    .v-btn:not(.v-btn--round).v-size--default {
        background: linear-gradient(48.67deg, #52C1FF 0%, #72D0FF 100%);
        box-shadow: 0 12px 36px 0 rgba(65,158,253,0.34);
        padding: 11px 35px;
    }
    .join{
        display: flex;
        align-items: center;
        flex-direction: column
    }
    .btn_join{
        font-weight: 400;
        background: linear-gradient(48.67deg, #6AB2E0 0%, #85EAD5 100%);
        box-shadow: 0 12px 36px 0 rgba(116,198,220,0.32);
        padding: 11px 73px !important;
    }
    .join>div{
        color: #222737;
        font-family: Lato;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 18px;
        letter-spacing: 1.5px;
        line-height: 22px;
        text-align: center;
        margin: 38px 26px 12px 26px;
    }
    
</style>