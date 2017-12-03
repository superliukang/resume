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
var timer = null
var top = 70
for(let i=0; i<aTags.length; i++){
    top += 5
    aTags[i].onclick = function(e){
        timer = setInterval(function() {
            e.preventDefault()
            let a = e.currentTarget
            let href = a.getAttribute("href")
            if(href === "#") return
            let element = document.querySelector(href)
            if(element.offsetTop > top) {
                clearInterval(timer)
            }
            window.scrollTo(0, 70 - "70")
            console.log("jfds")
        }, 3000)
        
    }
}