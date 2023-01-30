const nameInp = document.querySelector('.send__inp')
const btnSort = document.querySelector('.sort')
const btnSave = document.querySelector('.save')
const sendName = document.querySelector('.send__names')

 
const arr = JSON.parse(localStorage.getItem("sendNames"))
let sendNames = []
 
const showNames = () => {
    sendNames.forEach(({user}) => {

    const userNameTag = document.createElement('div')
    const userName = document.createElement('p')

    userName.className = 'user__name'
    userName.innerText = user + ","

    userNameTag.className = 'user__name-tag'
    userNameTag.appendChild(userName)

    sendName.appendChild(userNameTag)
        btnSort.addEventListener('click', () => {
            userNameTag.remove()
        })
    })
}

btnSort.addEventListener('click', () => {
    sendNames.sort((a, b) => {
        if (a.user.toLowerCase() < b.user.toLowerCase()) return -1 
        if (a.user.toLowerCase() > b.user.toLowerCase()) return 1     
    })

    sendNames.forEach(({user}) => {
        const userNameTag = document.createElement('div')
        const userName = document.createElement('p')
    
        userName.className = 'user__name'
        userName.innerText = user + ","
    
        userNameTag.className = 'user__name-tag'
        userNameTag.appendChild(userName)
    
        sendName.appendChild(userNameTag)
    })

    btnSort.addEventListener('click', () => {
        sendName.innerHTML =""
    })

    btnSort.addEventListener('click', () => {
        sendNames.sort((a, b) => {
            if (a.user.toLowerCase() > b.user.toLowerCase()) return -1 
            if (a.user.toLowerCase() < b.user.toLowerCase()) return 1     
        })
    
        sendNames.forEach(({user}) => {
            const userNameTag = document.createElement('div')
            const userName = document.createElement('p')
    
            userName.className = 'user__name'
            userName.innerText = user + ","
    
            userNameTag.className = 'user__name-tag'
            userNameTag.appendChild(userName)
    
            sendName.appendChild(userNameTag)
            btnSort.addEventListener('click', () => {
                userNameTag.remove()
            })
        })
    })   
})

btnSave.addEventListener('click', (el) => {
    el.preventDefault()   
    const names = {
        user: "",
    }
 
    names.user = nameInp.value

    sendNames = [...sendNames, names]
    localStorage.setItem("sendNames", JSON.stringify(sendNames))
    
    nameInp.value = ''

    if (sendName) {
        sendName.innerHTML = ""
    }
    showNames()
})
showNames()