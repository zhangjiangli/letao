$(function(){

/* 
    给form表单绑定事件 submit
    修改h5验证表单的默认文字
    $("#username").on("invalid",function () {
    this.setCustomValidity("用户名不合法");
  })
*/

    $("form").submit(function(e){
        //禁用表单默认行为 这样点击登录按钮就不会刷新页面
        e.preventDefault();

        var dataObj=$("form").serialize();

        //发送登录请求
        $.post("/employee/employeeLogin",dataObj,function(result){
            if (result.error) {
                alert(result.message);
            }else{
                location.href="./index.html";
            }
        });

    })

    //验证用户名失败的时候 触发
    $("#username").on("invalid",function(){
        this.setCustomValidity("用户名不合法");
    })

})