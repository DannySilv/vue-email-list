Vue.config.devtools = true;
const app = new Vue (
    {
        el : '#root',
        data: {
            emails: [],
            thisEmail : ''           
        },

        created: function genEmail() {
                    for (let i = 0; i < 10; i++) {
                        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                        .then((resp) => {
                            this.thisEmail = resp.data.response;
                            this.emails.push(this.thisEmail);
                        });
                    }
                    console.log(this.emails);
                }            
    }
)