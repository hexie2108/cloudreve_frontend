$(function () {

    //在分享文件页面 显示加速器广告
    print_vpn_on_share_file();

    //在分享文件夹的页面 显示加速器广告
    print_vpn_on_share_folder();
    
});


/**
 * 在分享文件页面 显示加速器广告
 */
function print_vpn_on_share_file() {


    const $box_content_element = $('.shared-file .box-content');
    //如果没有找到元素，则不显示广告
    if ($box_content_element.length === 0) {
        return;
    }


    //最大随机数 (不包含 max本身 )
    const max_number = 4;
    //生成随机数
    const index = Math.floor(Math.random() * max_number);

    //如果随机数大于2，则不显示广告
    if (index > 2) {
        return;
    }

    let link;
    let img;
    let img_phone;

    switch (index) {
        //显示vmssr广告
        case 0:
            link = 'https://www.vmssr.org/#/register?code=K2mMFj4g';
            img = 'https://article.biliimg.com/bfs/new_dyn/8c1ff7f282d1ededa872f5c1233702c4277257.jpg@.webp';
            img_phone = 'https://article.biliimg.com/bfs/new_dyn/84119c39df52b2d329eaf925e2d60a8e277257.jpg@.webp';
            break;
        //显示千速喵广告
        case 1:
            link = 'https://tsmeow.xyz/zh/#/auth/signup;referral=MGIBvSHq';
            img = 'https://article.biliimg.com/bfs/new_dyn/ed2e5756b24d165d452ccceb4f4f39c9277257.jpg@.webp';
            img_phone = 'https://article.biliimg.com/bfs/new_dyn/9d96e813e94c9ba0cec07ca31802ca4d277257.jpg@.webp';
            break;
    }



    const $pub = $(`
        <div class="pop-banner border-bottom border-light-subtle py-2">
            <a title="加速器" href="${link}"  rel="nofollow" target="_blank">
                <img class="img-fluid" src="${img_phone}" alt="加速器" referrerpolicy="no-referrer" />
            </a>
        </div>
 `);

    //把广告元素插入到 box-content 元素之前
    $pub.insertBefore($box_content_element);

}


/**
 * 在分享文件夹的页面 显示加速器广告
 */
function print_vpn_on_share_folder() {


    const $explorer_container = $('.shared-folder #explorer-container');
    //如果没有找到元素，则不显示广告
    if ($explorer_container.length === 0) {
        return;
    }


    //最大随机数 (不包含 max本身 )
    const max_number = 4;
    //生成随机数
    const index = Math.floor(Math.random() * max_number);

    //如果随机数大于2，则不显示广告
    if (index > 2) {
        return;
    }

    let link;
    let img;
    let img_phone;

    switch (index) {
        //显示vmssr广告
        case 0:
            link = 'https://www.vmssr.org/#/register?code=K2mMFj4g';
            img = 'https://article.biliimg.com/bfs/new_dyn/8c1ff7f282d1ededa872f5c1233702c4277257.jpg@.webp';
            img_phone = 'https://article.biliimg.com/bfs/new_dyn/84119c39df52b2d329eaf925e2d60a8e277257.jpg@.webp';
            break;
        //显示千速喵广告
        case 1:
            link = 'https://tsmeow.xyz/zh/#/auth/signup;referral=MGIBvSHq';
            img = 'https://article.biliimg.com/bfs/new_dyn/ed2e5756b24d165d452ccceb4f4f39c9277257.jpg@.webp';
            img_phone = 'https://article.biliimg.com/bfs/new_dyn/9d96e813e94c9ba0cec07ca31802ca4d277257.jpg@.webp';
            break;
    }



    const $pub = $(`
        <div class="pop-banner d-none d-md-block border-bottom border-light-subtle py-2">
            <a title="加速器" href="${link}"  rel="nofollow" target="_blank">
                <img class="img-fluid" src="${img}" alt="加速器" referrerpolicy="no-referrer" />
            </a>
        </div>
        
 `);

 const $pub_phone = $(`
    <div class="pop-banner d-block d-md-none border-bottom border-light-subtle py-2">
        <a title="加速器" href="${link}"  rel="nofollow" target="_blank">
            <img class="img-fluid" src="${img_phone}" alt="加速器" referrerpolicy="no-referrer" />
        </a>
    </div>
    
`);

    //把广告元素插入到 容器内部第一的位置
    $explorer_container.prepend($pub);
    $explorer_container.prepend($pub_phone);
}