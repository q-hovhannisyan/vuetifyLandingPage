import Vue from "vue";
import Vuex from "vuex";

    Vue.use(Vuex);

    export default new Vuex.Store({
      

    state: {
        elements: {
            "tourTitle": "Friday's match",
            "totalPrizes": "120",
            "tourTimeLeft": "15:45",
            "teamRank": "4",
            "teamPoint": "1524",
            "teamChatUrl": "http://test.test.com",
            "teamImgUrl": "http://test.test.com",
            "teamTitle": "Help homeless dogs",
            "teamDesc": "aaaaa"
        }
    }
})

