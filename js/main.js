// 切换作品集
portfolio1.onclick = function () {
    portfolioBar.className = 'bar state-1'
}

portfolio2.onclick = function () {
    portfolioBar.className = 'bar state-2'
}
portfolio3.onclick = function () {
    portfolioBar.className = 'bar state-3'
}


//延迟loadding
var siteLoadding = document.getElementById("siteLoadding")
setTimeout(function() {
    siteLoadding.classList.remove("active")
}, 1000)

//topNavBar在滚动时候有背景
window.onscroll = function() {
    if(window.scrollY > 0) {
        topNavBar.classList.add("sticky")
    } else {
        topNavBar.classList.remove("sticky")
    }
}


//topNavBar切换li标签
let lis = document.querySelectorAll(".topNavBar>nav>ul>li")
for(let i = 0; i < lis.length; i++) {
    lis[i].onmouseenter = function(e) {
        e.currentTarget.classList.add("active")
    }
    lis[i].onmouseleave = function(e) {
        e.currentTarget.classList.remove("active")
    }
}

// 点击列表，滚动至列表所指的位置
let aTags = document.querySelectorAll('.topNavBar>nav>ul>li>a')

for(let i=0; i<aTags.length; i++){
    aTags[i].onclick = function(event){
        event.preventDefault()
        
        
        let a = event.currentTarget
        let href = a.getAttribute("href")
        let section = document.querySelector(href)
        let top = section.offsetTop

        let n = 25
        let time = 1000 / 25
        let currentTop = window.scrollY
        let targetTop = top - 80
        speed = (targetTop - currentTop) / n
    
        let count = 0
        let timer = null
        timer = setInterval(() => {
            if(count === n) {
                clearInterval(timer)
                return
            }
            
            count += 1
            window.scrollTo(0, currentTop + speed * count)
        }, time)
    }
}