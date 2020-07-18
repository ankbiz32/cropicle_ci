(function(window, undefined) {
  'use strict';

    $('#phone').keyup(function(){
        if($.trim(this.value).length == 10){
            $.ajax({ 
                type        : 'POST',
                data        : {mobile_no : $("#phone").val()},
                url         : "Login/regPhoneCheck",
                success: function(data) {
                    if (data){
                        $("#checkPh").text('Phone no. already registered');
                        $(".actions ul li a[href='#next']").fadeOut();
                    }
                    else{
                        $("#checkPh").text('');
                        $(".actions ul li a[href='#next']").fadeIn();
                    }
                },
                error:function(data) {
                    alert('error');
                }
            });
        }
        else{
            $("#checkPh").text('');
        }
    });

    $(".actions ul li a[href='#next']").click(function(){
        if($("#name").valid() && $("#phone").valid()){
            $(".actions ul li a[href='#next']").fadeOut();
                if(!$("#phone").hasClass("sent")){
                    $("#phone").addClass("sent");
                    $.ajax({ 
                        type        : 'POST',
                        url         : "Login/regOtp", 
                        data        : {phone : $("#phone").val()},
                        success: function(data) {
                            console.log(data);
                        },
                        error:function(data) {
                            alert('error');
                        }
                    });
                }
        }

    });

    $('#otp').keyup(function(){
        if($.trim(this.value).length == 6){
            $.ajax({ 
                type        : 'POST',
                data        : {otp : $("#otp").val()},
                url         : "Login/verifyOtp",
                success: function(data) {
                    if (data){
                        $('#otp_status').removeClass("danger");
                        $('#otp_status').addClass("success");
                        $('#otp').attr("readonly","true");
                        $('#otp_status').text("✔ OTP verified");
                        $(".actions ul li a[href='#next']").fadeIn();
                        $(".actions ul li a[href='#previous']").fadeOut();
                    }
                    else{
                        $('#otp_status').removeClass("success");
                        $('#otp_status').addClass("danger");
                        $('#otp_status').text("✗ Wrong OTP");
                        $(".actions ul li a[href='#previous']").fadeIn();
                        console.log("wrong otp");
                    }
                },
                error:function(data) {
                    alert('error');
                }
            });
        }
        else{
            $('#fwd').hide();
            $('#otp_status').text('');

        }
    });
      
    $(".actions ul li a[href='#previous']").click(function(){
        $("#phone").removeClass("sent");
        $(".actions ul li a[href='#next']").fadeIn();
    });

    $('#select-files').change(function() {
        var file_data = $('#select-files').prop('files')[0];   
        var form_data = new FormData();                  
        form_data.append('file', file_data);             
        $.ajax({
            url: 'Edit/img_upload',
             
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,                         
            type: 'post',
            success: function(data){
                window.location.reload();
            }
        });
    });

    $('#reset-profile-img').click(function() {           
        $.ajax({
            url: 'Delete/profile_img',
            success: function(data){
                window.location.reload();
            }
        });
    });

    $('#pwd_change').validate({});

    $('.listOpen').click(function(){
        var id=$(this).data('id');
        $.ajax({
            url: 'Home/listFullDetails',
            type:'post',
            data: {id: id},
            beforeSend : function(){
                $('#listModal .modal-body').html('Loading...');
                $('#listModal').modal('show');
            },
            success: function(response){
                $('#listModal .modal-body').html(response);
            },
            error: function(response){
                $('#listModal .modal-body').html('Error !');
            }
        });
    });

    $('.orderOpen').click(function(){
        var id=$(this).data('id');
        $.ajax({
            url: 'Home/orderDetails',
            type:'post',
            data: {id: id},
            beforeSend : function(){
                $('#orderModal .modal-body').html('Loading...');
                $('#orderModal').modal('show');
            },
            success: function(response){
                $('#orderModal .modal-body').html(response);
            },
            error: function(response){
                $('#orderModal .modal-body').html('Error !');
            }
        });
    });

    $('.pendingOrderOpen').click(function(){
        var id=$(this).data('id');
        $.ajax({
            url: 'Admin/pOrderDetails',
            type:'post',
            data: {id: id},
            beforeSend : function(){
                $('#orderModal .modal-body').html('Loading...');
                $('#orderModal').modal('show');
            },
            success: function(response){
                $('#orderModal .modal-body').html(response);
                $(".touchspin").TouchSpin({
                    buttondown_class: "btn btn-primary",
                    buttonup_class: "btn btn-primary",
                  });
                
            },
            error: function(response){
                $('#orderModal .modal-body').html('Error !');
            }
        });
    });

    $('.deliveredOrderOpen').click(function(){
        var id=$(this).data('id');
        $.ajax({
            url: 'Admin/dOrderDetails',
            type:'post',
            data: {id: id},
            beforeSend : function(){
                $('#orderModal .modal-body').html('Loading...');
                $('#orderModal').modal('show');
            },
            success: function(response){
                $('#orderModal .modal-body').html(response);
            },
            error: function(response){
                $('#orderModal .modal-body').html('Error !');
            }
        });
    });

    $('.rejectedOrderOpen').click(function(){
        var id=$(this).data('id');
        $.ajax({
            url: 'Admin/rOrderDetails',
            type:'post',
            data: {id: id},
            beforeSend : function(){
                $('#orderModal .modal-body').html('Loading...');
                $('#orderModal').modal('show');
            },
            success: function(response){
                $('#orderModal .modal-body').html(response);
            },
            error: function(response){
                $('#orderModal .modal-body').html('Error !');
            }
        });
    });

    $('.kartPendingOrderOpen').click(function(){
        var id=$(this).data('id');
        $.ajax({
            url: 'Home/pOrderDetails',
            type:'post',
            data: {id: id},
            beforeSend : function(){
                $('#orderModal .modal-body').html('Loading...');
                $('#orderModal').modal('show');
            },
            success: function(response){
                $('#orderModal .modal-body').html(response);
                $(".touchspin").TouchSpin({
                    buttondown_class: "btn btn-primary",
                    buttonup_class: "btn btn-primary",
                  });
                
            },
            error: function(response){
                $('#orderModal .modal-body').html('Error !');
            }
        });
    });

    $('.kartDeliveredOrderOpen').click(function(){
        var id=$(this).data('id');
        $.ajax({
            url: 'Home/dOrderDetails',
            type:'post',
            data: {id: id},
            beforeSend : function(){
                $('#orderModal .modal-body').html('Loading...');
                $('#orderModal').modal('show');
            },
            success: function(response){
                $('#orderModal .modal-body').html(response);
            },
            error: function(response){
                $('#orderModal .modal-body').html('Error !');
            }
        });
    });

    $('.kartRejectedOrderOpen').click(function(){
        var id=$(this).data('id');
        $.ajax({
            url: 'Home/rOrderDetails',
            type:'post',
            data: {id: id},
            beforeSend : function(){
                $('#orderModal .modal-body').html('Loading...');
                $('#orderModal').modal('show');
            },
            success: function(response){
                $('#orderModal .modal-body').html(response);
            },
            error: function(response){
                $('#orderModal .modal-body').html('Error !');
            }
        });
    });

    $('.pendingDemandApprove').click(function(){
        var id=$(this).data('id');
        $.ajax({
            url: 'Admin/pDemandApprove',
            type:'post',
            data: {id: id},
            beforeSend : function(){
                $('#orderModal .modal-body').html('Loading...');
                $('#orderModal').modal('show');
            },
            success: function(response){
                $('#orderModal .modal-body').html(response);
                $('#orderModal .modal-body textarea').focus();
            },
            error: function(response){
                $('#orderModal .modal-body').html('Error !');
            }
        });
    });

    $('.pendingDemandReject').click(function(){
        var id=$(this).data('id');
        $.ajax({
            url: 'Admin/pDemandReject',
            type:'post',
            data: {id: id},
            beforeSend : function(){
                $('#orderModal .modal-body').html('Loading...');
                $('#orderModal').modal('show');
            },
            success: function(response){
                $('#orderModal .modal-body').html(response);
                $('#orderModal .modal-body textarea').focus();
            },
            error: function(response){
                $('#orderModal .modal-body').html('Error !');
            }
        });
    });

    $('.approvedDemandDetails').click(function(){
        var id=$(this).data('id');
        $.ajax({
            url: 'Admin/dDemandDetails',
            type:'post',
            data: {id: id},
            beforeSend : function(){
                $('#orderModal .modal-body').html('Loading...');
                $('#orderModal').modal('show');
            },
            success: function(response){
                $('#orderModal .modal-body').html(response);
            },
            error: function(response){
                $('#orderModal .modal-body').html('Error !');
            }
        });
    });

    $('.rejectedDemandDetails').click(function(){
        var id=$(this).data('id');
        $.ajax({
            url: 'Admin/rDemandDetails',
            type:'post',
            data: {id: id},
            beforeSend : function(){
                $('#orderModal .modal-body').html('Loading...');
                $('#orderModal').modal('show');
            },
            success: function(response){
                $('#orderModal .modal-body').html(response);
            },
            error: function(response){
                $('#orderModal .modal-body').html('Error !');
            }
        });
    });




})(window);