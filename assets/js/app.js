// $(document).ready(function(){
//     let cl = console.log;

//     let $usernmae = $("#usernameinput")
//     let $getinfo = $("#getinfo")
//     let $info = $("#info")
//     let $setinfow = $("#setinfo")
//     let $setdefaultname= $("#setdefaultname")
//     let $addclass = $("#addclass");
//     let $info1=$("#info1");
//     let $innerhtml=$("#innerhtml")
//     let $info3=$("#info3")

//     $addclass.on("click",function(){
//         // $info.addClass("alert alert-info my-4")
//         //along y axis 

//         //along x axis
//         $info.addClass("alert alert-info my-4")
//     })

//     $usernmae.on("keyup", function(){
//         cl($usernmae.val())
//     })

//     $setdefaultname.on("click",function(){
//         $usernmae.val("I love Javascript")
//     })

//     $info1.on("click", function(){

//     })

//     $("#removeclass").on("click",function(){
//         $info.removeClass("alert alert-info ")
//     })

//     $("#toggleClass").on("click",function(){
//         $(this).toggleClass("fa-bars fa-circle-xmark")
//     })



//     $getinfo.on("click",function(){
//     //    cl($info.text())
//     cl($info.html())
//     })

//     $getinfo.on("click", function(){
//         cl($("#skill1").text())
//     })

//     $getinfo.on("click",function(){
//         cl($("#skill1").html())
//     })

//     $setinfow.on("click", function(){
//         // $info.html(`<strong>I love Javascript</strong>`)
//         $info.text("hello there my name is bhupendra Keshav janjal ")
//     })

//     $("#toogleClass1").on("click", function(){
//         $(this).toggleClass("fa-circle-xmark fa-house")
//     })


//    $($innerhtml).on("click", function(){
//     cl($info3.text())
//    })
//    $($innerhtml).on("click", function(){
//     cl($info3.addClass("alert alert-info"))
//    })

// })


$(document).ready(function(){
    let cl = console.log;
    let $valuei = $("#valuei")
    let $username1 = $("#username1")
    let $getinfoBtn = $("#getinfoBtn")
    let $getinfo =$("#getinfo")
    let $setinfo=$("#setinfo")
    let $setinfobtn =$("#setinfobtn")
    let $addclass = $("#addclasspara")
    let $addclassbtn=$("#addclassbtn")
   let $removepara = $("#removepara")
   let $removebtn =$("#removebtn")
   let $btnmargin=$("#btnmargin")
   let $paraxaxis = $("#paraxaxis")
   let $parayaxis = $("#parayaxis")
   let $btnmarginy= $("#btnmarginy")


    $valuei.on("click",function(){
       $username1.val('I this Javascript')
    })

    $getinfoBtn.on("click",function(){
       cl( $getinfo.text())


    })

    $setinfobtn.on("click", function(){
    //    cl($setinfo.text())
    $setinfo.text("hello there my name is bhupendra")
    })
    
    $addclassbtn.on("click",function(){
        $addclass.addClass('alert alert-info')
    })

    $removebtn.on("click",function(){
        $addclass.removeClass('alert alert-info')
    })

    $("#toggleClassbtn").on("click", function(){
        $("#toggle").toggleClass("alert alert-info")
    })

    $btnmargin.on("click",function(){
        $paraxaxis.addClass("alert alert-info mx-4")
    })

   $btnmarginy.on("click", function(){
    $parayaxis.addClass("alert alert-info my-4")
    })

    $("#navtoggle").on("click",function(){
        $(this).toggleClass("fa-bars fa-house my-4 mx-4 bg-info fa-3x")
    })
    

    let $lis = $(" #list1>li")
    cl($lis)

    $lis.css({
        "backgroundColor":"orange"
    })

    let $listgroup1= $(" #listgroup1 > li");

    $listgroup1.on("click",function(){
        $(this).addClass("bg-primary")
    })

  $("#listgroup2 >li:first-child").css({
    "backgroundColor":"orange"
  })

  $("#listgroup3 >li:last-child").css({
    "backgroundColor":"black",
    "color":"white"
  })
  $("#listgroup4 >li:nth-child(odd)").css({
    "backgroundColor":"black",
    "color":"white"
  })

  $("#listgroup5 >li:nth-child(even)").css({
    "backgroundColor":"pink",
    "color":"green"
  })




   

    
})