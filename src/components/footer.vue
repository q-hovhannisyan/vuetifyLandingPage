<template>
    <div class="foot">
        <p class="footer_p">© 2019 GoFund.</p>
        <div class="links">
            <a href="#" class="link_item">Terms</a>
            <a href="#" class="link_item">Privacy</a>
            <img src="../assets/img/fb_socila.png">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .foot{
        background-color: #F7F7F7;
        padding: 16px 19px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .footer_p{
        color: #000;
        font-family: Lato;
        font-size: 13px;
        letter-spacing: 0.43px;
        line-height: 16px;
        margin: 0;
    }
    .link_item{
        color: #419EFD;
        font-family: Lato;
        font-size: 13px;
        letter-spacing: 0.43px;
        line-height: 16px;
        text-decoration: none;
        margin-right: 15px;
    }
    .links{
        display: flex;
        align-items: center;
    }
</style>