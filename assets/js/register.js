let getForm = document.querySelector("#registration")
let getInputanFullname = document.querySelector("#fullname")
let getInputanEmail = document.querySelector("#email")
let getInputanPassword = document.querySelector("#password")
let getButtonLoading = document.querySelector("#loading")
let getButtonNotLoading = document.querySelector("#not-loading")

getButtonNotLoading.style.display="block"
getButtonLoading.style.display="none"



let loading = () => {
    getButtonLoading.style.display="block"
    getButtonNotLoading.style.display="none"
}



const url = "https://634d3cccacb391d34a979eb9.mockapi.io/api/konsul/users"

getForm.addEventListener("submit", e => {
   
    e.preventDefault()
        let user = {
            userFullname : getInputanFullname.value,
            userEmail : getInputanEmail.value,
            userPassword : getInputanPassword.value
        }

        loading()

         const cekApi = async() => {
            try {   
                let getDataApi = await fetch(url,{
                    method: "POST",
                    headers: {
                                Accept: "application/json, text/plain, */*",
                                "Content-Type": "application/json",
                            },
                    body: JSON.stringify({
                            fullname: user.userFullname,
                            email: user.userEmail,
                            password: user.userPassword
                    }),
                })

                let dataApi = await getDataApi.json()
                console.log(dataApi);

                Swal.fire(
                    'Register berhasil!',
                    'Silahkan kamu bisa login',
                    'success'
                  )
                  window.setTimeout(function() {
                    window.location.href = 'login.html';
                }, 5000);
                
            } catch (error) {
                console.log(error);
            }   
           
         }
         cekApi()
})


