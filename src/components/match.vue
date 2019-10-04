<template>
    <v-container>
        <v-col class="fridays-match-wrapper">
            <div class="fridays-match">{{ elements.tourTitle }}</div>    
        </v-col>

        <v-col class="rewards-col" >
            <div class="rectangle-5 rewards">
                REWARDS: {{ elements.totalPrizes }} GC
            </div>
        </v-col>
        <v-col class="col col-12 cols-section">
            <v-row>
                <v-col cols="4" class="left_col">
                    <div class="rectangle-10">
                        <v-icon class="white--text">mdi-clock-outline</v-icon>
                        <div class="cart-item">{{ elements.tourTimeLeft }}</div>
                        <div class="cart-point">TIME LEFT</div>
                    </div>
                </v-col>
                <v-col cols="4" class="center_col">
                    <div class="team">
                        <v-icon class="white--text">mdi-star-four-points-outline</v-icon>
                        <div class="cart-item">{{ elements.teamPoint }}</div>
                        <div class="cart-point">TEAM POINTS</div>
                    </div>  
                </v-col>
                <v-col cols="4" class="right_col">
                    <div class="rank">
                        <v-icon class="white--text">mdi-chart-bar</v-icon>
                        <div class="cart-item">{{ elements.teamRank }}</div>
                        <div class="cart-point">TEAM RANK</div>
                    </div>
                </v-col>
            </v-row>
        </v-col>
    </v-container>
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
    .row_padding{
        padding: 12px;   
    }
    .left_col{
        padding-right: 0;
        padding-top: 0;
    }
    .right_col{
        padding-left: 0;
        padding-top: 0;
    }
    .center_col{
        padding-top: 0;
    }
    .cols-section{
        padding: 7px;
    }
    .cart-point{
        font-size: 10px;
        font-family: Lato;
        letter-spacing: 0.5px;
        font-weight: 400;
        line-height: 12px;
    }
    .cart-item{
        font-weight: 400;
        font-family: 'Lato Medium';
        font-size: 20px;
        line-height: 24px;
    }
    .fridays-match-wrapper{
        padding: 8px 0 9px;
    }
    .fridays-match{
        color: #272c39;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 1.33px;
        text-transform: uppercase;
        font-family: Lato;
        line-height: 19px;
    }
    .rewards{
        height: 40px;
        color: #FFF;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        font-family: 'Lato Heavy';
        background: linear-gradient(-90deg, #8169E1 0%, #85B3EA 100%), linear-gradient(90deg, #C8C8C8 0%, #FFF 100%), linear-gradient(90deg, #8169E1 0%, #FFF 100%);
    }
    .rewards-col{
        padding: 7px;
    }
    .rectangle-10 {
        color: #fff;
        border-radius: 6px;
        padding: 10px 5px;
        background-color: #52A7FF;
        box-shadow: 6px 20px 35px 0 rgba(65,158,253,0.32);
    }
    .team {
        color: #fff;        
        border-radius: 6px;
        padding: 10px 5px;
        background-color: #5867ED;
        box-shadow: 6px 20px 35px 0 rgba(88,103,237,0.28);
    }
    .rank{
        color: #fff;
        border-radius: 6px;
        padding: 10px 5px;
        background-color: #8169E1;
        box-shadow: 6px 20px 35px 0 rgba(129,105,225,0.36);
    }
</style>