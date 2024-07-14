// header component
class header{
    headerItems = ['Contact','Portfolio','Services','About','Blog']
    func = function(){
        let liArray = []
        let aArray = []
        let iconBorders = []

        const header = document.createElement('header')
        header.classList.add('header')

        const navBar = document.createElement('nav')

        const navBar_icon = document.createElement('div')
        navBar_icon.classList.add('navbar-icon')

        for(let i = 0;i < 3; i++){
            iconBorders[i] = document.createElement('div')
            iconBorders[i].classList.add('icon-border-close')
            
            navBar_icon.append(iconBorders[i])
        }

        this.headerItems = this.headerItems.reverse()
        const ul = document.createElement('ul')

        for(let i in this.headerItems){
            liArray[i] = document.createElement('li')
            liArray[i].classList.add('header-items','header-item-size')
            aArray[i] = document.createElement('a')
            aArray[i].innerHTML = this.headerItems[i]

            liArray[i].append(aArray[i])
            ul.append(liArray[i])
        }

        function addClassToHeaderItems(){
            setTimeout(() => {
                liArray[4].classList.add('animation')
            },600)
            setTimeout(() => {
                liArray[3].classList.add('animation')
            },700)    
            setTimeout(() => {
                liArray[2].classList.add('animation')
            },800)   
            setTimeout(() => {
                liArray[1].classList.add('animation')
            },900)   
            setTimeout(() => {
                liArray[0].classList.add('animation')
            },1000)          
        }
        function removeClassfromHeaderItems(){
            for(let i = 0; i < liArray.length; i++){
                liArray[i].classList.remove('animation')
            }          
        }   

        let count = 0   //if count == off, it means we click on the hamburger menu and if count == even, it means we click on hamburger menu again
                        //and it should be closed

        navBar_icon.addEventListener('click',() => {
            count++
            navBar_icon.classList.toggle('rotate')
            for(let i = 0;i < 3; i++){
                iconBorders[i].classList.toggle('icon-border-open')
            }
            
            if(count % 2 == 0){
                removeClassfromHeaderItems()
            }
            else{
                addClassToHeaderItems()
            }
        })

        document.body.append(header)
        header.append(navBar,navBar_icon)
        navBar.append(ul)

    }
}

export{header}