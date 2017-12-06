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

siteLoadding.classList.remove("active")


//topNavBar在滚动时候有背景
//滚动时候topNavBar里的li跟随着滚动区域变化
slideBottomTop()
window.onscroll = function() {
    if(window.scrollY > 0) {
        topNavBar.classList.add("sticky")
    } else {
        topNavBar.classList.remove("sticky")
    }
    slideBottomTop()
}


//找到离滚动条最近的元素
function slideBottomTop() {
    let dataYs = document.querySelectorAll("[data-y]")
    let minIndex = 0
    for(let i = 1; i < dataYs.length; i++) {
        let minDistance = Math.abs(dataYs[minIndex].offsetTop - window.scrollY)
        let distance = Math.abs(dataYs[i].offsetTop - window.scrollY)
        if(distance < minDistance) {
            minIndex = i
        }
    }
    let id = dataYs[minIndex].id
    let href = "#" + id
    dataYs[minIndex].classList.remove("upup")
    let a = document.querySelector("a[href=\"" + href + "\"]")
    let topNavLis = a.parentElement.parentElement.children
    for(let i = 0; i < topNavLis.length; i++) {
        topNavLis[i].classList.remove("highLight")
    }
    a.parentElement.classList.add("highLight")
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


        let currentTop = window.scrollY
        let targetTop = top - 80
        let distance = targetTop - currentTop
        
        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);
        
        var coords = {y: currentTop}; // Start at (0, 0)
        var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
                .to({ y: targetTop }, 500) // Move to (300, 200) in 1 second.
                .easing(TWEEN.Easing.Quadratic.In) // Use an easing function to make the animation smooth.
                .onUpdate(function() { // Called after tween.js updates 'coords'.
                    // Move 'box' to the position described by 'coords' with a CSS translation.
                    window.scrollTo(0, coords.y)
                })
                .start(); // Start the tween immediately.
    }
}