// 点击商品一览，在右侧内容区域展示商品一览页面
const links = document.querySelectorAll('.submenu-link');
const contentItems = document.querySelectorAll('.content-item');

// 为点击事件添加事件监听器
links.forEach(link => {
    link.addEventListener('click', function(event){
        event.preventDefault(); // 阻止默认跳转行为

        // 移除其他内容区域的 active 类
        contentItems.forEach(item => {
            item.classList.remove('active');
        })

        // 展示当前内容区域
        const contentId = this.getAttribute('data-content');
        const contentToShow = document.getElementById(contentId);
        contentToShow.classList.add('active');
    });

    // 默认显示第一个内容
    contentItems[0].classList.add('active');
})