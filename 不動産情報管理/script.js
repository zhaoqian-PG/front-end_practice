const links = document.querySelectorAll('.submenu-link');
const contentItems = document.querySelectorAll('.content-item');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
        event.preventDefault();

        //隐藏所有内容
        contentItems.forEach(function(item) {
            item.classList.remove('active');
        })

        //显示当前内容
        const contentId = this.getAttribute('data-content');
        const contentToShow = document.getElementById(contentId);
        contentToShow.classList.add('active');
    });

    // 默认显示第一个内容
    contentItems[0].classList.add('active');
}





