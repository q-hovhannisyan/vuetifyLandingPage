<template>
    <div class="foot">
        <p class="footer_p">© 2019 GoFund.</p>
        <div class="links">
            <a target="_blank" href="https://www.google.com/" class="link_item">Terms</a>
            <a target="_blank" href="https://www.google.com/" class="link_item">Privacy</a>
            <a target="_blank" href="https://www.facebook.com/" class="link_fb"> 
                <img src="../assets/img/fb_socila.png">
            </a>
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
    .link_fb{
        display: block;
    }
</style>