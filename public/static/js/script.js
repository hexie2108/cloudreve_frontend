$(function () {

        setTimeout(function() {


        //在分享文件页面 显示加速器广告
        print_vpn_on_share_file();
        //在分享文件夹的页面 显示加速器广告
        print_vpn_on_share_folder();

        //在分享文件的页面 显示alert消息
        show_info_alert_on_share_file();
        //在分享文件夹的页面 显示alert消息
        show_info_alert_on_share_folder();

    }, 1000); // 延时 1 秒后执行


    //重定向域名
    redirect_old_domain();
});


/**
 * 在分享文件页面 显示加速器广告
 */
function print_vpn_on_share_file() {

    console.log('判断是否显示广告');

    
    const $box_content_element = $('.MuiContainer-root .MuiAvatar-root').first().parent();
    //如果没有找到元素，则不显示广告
    if ($box_content_element.length === 0) {
        console.log('没有找到广告定位元素');

        //如果是第一次没找到元素，则2秒后再重试一次
        if(!print_vpn_on_share_file.retry){
            print_vpn_on_share_file.retry = true;
            setTimeout(print_vpn_on_share_file, 2000);
        }

        return;
    }


    //最大随机数 (不包含 max本身 )
    const max_number = 4;
    //生成随机数
    const index = Math.floor(Math.random() * max_number);

    //如果随机数大于2，则不显示广告
    if (index > 1) {
        console.log('不显示广告');
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

    //把广告元素插入到 box-content 元素之后
    // $pub.after($box_content_element);
    $box_content_element.after($pub);

}


/**
 * 在分享文件夹的页面 显示加速器广告
 */
function print_vpn_on_share_folder() {

    console.log('判断是否显示广告');

    
    const $explorer_container = $('.fade-enter-done .MuiGrid-container').first().parent().parent();
    //如果没有找到元素，则不显示广告
    if ($explorer_container.length === 0) {
        console.log('没有找到广告定位元素');

         //如果是第一次没找到元素，则2秒后再重试一次
         if(!print_vpn_on_share_folder.retry){
            print_vpn_on_share_folder.retry = true;
            setTimeout(print_vpn_on_share_folder, 2000);
        }
        return;
    }


    //最大随机数 (不包含 max本身 )
    const max_number = 4;
    //生成随机数
    const index = Math.floor(Math.random() * max_number);

    //如果随机数大于2，则不显示广告
    if (index > 1) {
        console.log('不显示广告');
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



/**
 * 创建alert元素
 * 
 * @returns {jQuery}
 */
function create_alert_element(){

    return $(`
        <div class="alert alert-info fw-bold rounded-0 text-center">
            如果无法上传/下载文件, 请使用VPN并开启全局模式 | 相关问题可以到电报群内反馈 <a href="https://t.me/+P-yHB5lc_N5jNDM0" target="_blank" rel="nofollow">电报群链接</a> 
        </div>
    `);

}

/**
 * 在分享文件的页面 显示alert消息
 */
function show_info_alert_on_share_file(){

    const $box_content_element = $('.MuiContainer-root .MuiAvatar-root').first().parent();
    //如果没有找到元素，则不显示广告
    if ($box_content_element.length === 0) {

         //如果是第一次没找到元素，则2秒后再重试一次
         if(!show_info_alert_on_share_file.retry){
            show_info_alert_on_share_file.retry = true;
            setTimeout(show_info_alert_on_share_file, 2000);
        }
        return;
    }

      //把广告元素插入到 box-content 元素之前
    $box_content_element.before(create_alert_element());



}

/**
 * 在分享文件夹的页面 显示alert消息
 */
function show_info_alert_on_share_folder(){

    const $explorer_container = $('.fade-enter-done .MuiGrid-container').first().parent().parent();
    //如果没有找到元素，则不显示广告
    if ($explorer_container.length === 0) {

         //如果是第一次没找到元素，则2秒后再重试一次
         if(!show_info_alert_on_share_folder.retry){
            show_info_alert_on_share_folder.retry = true;
            setTimeout(show_info_alert_on_share_folder, 2000);
        }
        return;
    }

    $explorer_container.prepend(create_alert_element());


}



/**
 * 重定向旧域名
 */
function redirect_old_domain() {

    const domain_list = {
        pan_mikuclub_work: 'pan.mikuclub.work',
        mikupan_vip: 'mikupan.vip',
    }

    //如果是 pan.mikuclub.work 域名，则跳转到 www.mikuclub.win
    const domain = window.location.host;
    if (domain === domain_list.pan_mikuclub_work) {
        
        const url = location.href
        .replace(domain_list.pan_mikuclub_work, domain_list.mikupan_vip);
        location.replace(url);
    }
}