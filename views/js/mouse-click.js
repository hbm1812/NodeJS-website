function statusCart_mouse_click() {
    //display
    document.getElementById("top-alert").style.display='none';
    document.getElementById("status-cart").style.display='block';
    document.getElementById("info-page").style.display='none';
    document.getElementById("change-password").style.display='none';

    //color
    document.getElementById("btn-status-cart").style.backgroundColor='#29A07E';
    document.getElementById("btn-info").style.backgroundColor='#6c757d';
    document.getElementById("btn-change-password").style.backgroundColor='#6c757d';


}

function infoAccount_mouse_click() {
    //display
    document.getElementById("top-alert").style.display='none';
    document.getElementById("status-cart").style.display='none';
    document.getElementById("info-page").style.display='block';
    document.getElementById("change-password").style.display='none';

    //color
    document.getElementById("btn-status-cart").style.backgroundColor='#6c757d';
    document.getElementById("btn-info").style.backgroundColor='#29A07E';
    document.getElementById("btn-change-password").style.backgroundColor='#6c757d';


}
function changePassword_mouse_click() {
    //display
    document.getElementById("top-alert").style.display='none';
    document.getElementById("status-cart").style.display='none';
    document.getElementById("info-page").style.display='none';
        document.getElementById("change-password").style.display='block';

    //color
    document.getElementById("btn-status-cart").style.backgroundColor='#6c757d';
    document.getElementById("btn-info").style.backgroundColor='#6c757d';
    document.getElementById("btn-change-password").style.backgroundColor='#29A07E';
}



function changeModal_account_pass_admin_mouse_click() {
    //display
    document.getElementById("modal_change_pass").style.display='block';
    document.getElementById("modal_change_info").style.display='none';
   
}

function changeModal_account_info_admin_mouse_click() {
    //display
    document.getElementById("modal_change_pass").style.display='none';
    document.getElementById("modal_change_info").style.display='block';
}










