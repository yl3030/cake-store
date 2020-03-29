// 總金額
var globalCount=0;


$(function(){
   var $li = $('ul.icon-title li');
 $($li. eq(0) .addClass('active').find('a').attr('href')).siblings('.icon-inner').hide();
    
        $li.click(function(){
            $($(this).find('a'). attr ('href')).show().siblings ('.icon-inner').hide();
            $(this).addClass('active'). siblings ('.active').removeClass('active');
        });
    });



// 各個產品的價格
var commodity = {
    "birthCake":{
      "cake1":{
        "amount":0,
        "price":100,
      },"cake2":{
        "amount":0,
        "price":150,
      },"cake3":{
        "amount":0,
        "price":200,
      },"cake4":{
        "amount":0,
        "price":250,
      }
},"yummyCake":{
      "yummyCake1":{
        "amount":0,
        "price":50,
      },"yummyCake2":{
        "amount":0,
        "price":150,
      },"yummyCake3":{
        "amount":0,
        "price":200,
      },"yummyCake4":{
        "amount":0,
        "price":250,
    }
},"giFitBox":{
      "giFitBox1":{
        "amount":0,
        "price":100,
      },"giFitBox2":{
        "amount":0,
        "price":150,
      },"giFitBox3":{
        "amount":0,
        "price":200,
      },"giFitBox4":{
        "amount":0,
        "price":250,
   }
  },"mothCake":{
      "cake13":{
        "amount":0,
        "price":100,
      },"cake14":{
        "amount":0,
        "price":150,
      },"cake15":{
        "amount":0,
        "price":200,
      },"cake16":{
        "amount":0,
        "price":250,
   }
},"dessert":{
      "cake13":{
        "amount":0,
        "price":100,
      },"cake14":{
        "amount":0,
        "price":150,
      },"cake15":{
        "amount":0,
        "price":200,
      },"cake16":{
        "amount":0,
        "price":250,
   }
},
   
}

 //"yummyCake": [100,150,200,250],
    //"giFitBox": [100,150,200,250],

$(document).ready(function(){
$("#price").html("$"+"0") ;
})

function sumPrice(){
  
   $.each(commodity,function(i,v){
     //console.log(i,v);
                  $.each(v,function(_i,_v){                                             console.log(_i,_v);
                           globalCount += _v.amount * _v.price;
                  })
                
         });
      //console.log(globalCount);
      //console.log(commodity);
   $("#price").html("$"+globalCount);
  globalCount = 0;
}



$("#cake1_amount_add").click(function(){
  let cake1_amount=$("#cake1_amount").val();
  console.log(cake1_amount);
  let price =  commodity.birthCake.cake1.price;
  let amount = cake1_amount;
  let localPrice = price * amount;
  commodity.birthCake.cake1.amount = amount;
 
  sumPrice();
  
})

$("#cake1_amount_sub").click(function(){
  let cake1_amount=$("#cake1_amount").val();
  console.log(cake1_amount);
  let price =  commodity.birthCake.cake1.price;
  let amount = cake1_amount;
  let localPrice = price * amount;
  commodity.birthCake.cake1.amount = amount;
 
  sumPrice();
  
})



$("#cake2_amount_add").click(function(){
  let cake1_amount=$("#cake2_amount") .val();
  let price =  commodity.birthCake.cake2.price;
  let amount = cake1_amount;
  let localPrice = price * amount;
  commodity.birthCake.cake2.amount =  parseInt(amount);
  sumPrice();
})

$("#cake2_amount_sub").click(function(){
  let cake1_amount=$("#cake2_amount") .val();
  let price =  commodity.birthCake.cake2.price;
  let amount = cake1_amount;
  let localPrice = price * amount;
  commodity.birthCake.cake2.amount =  parseInt(amount);
  sumPrice();
})

$("#cake3_amount_add").click(function(){
  let cake1_amount=$("#cake3_amount") .val();
  let price =  commodity.birthCake.cake3.price;
  let amount = cake1_amount;
  let localPrice = price * amount;
  commodity.birthCake.cake3.amount =  parseInt(amount);
  sumPrice();
})

$("#cake3_amount_sub").click(function(){
  let cake1_amount=$("#cake3_amount") .val();
  let price =  commodity.birthCake.cake3.price;
  let amount = cake1_amount;
  let localPrice = price * amount;
  commodity.birthCake.cake3.amount =  parseInt(amount);
  sumPrice();
})


$("#cake4_amount_sub").click(function(){
  let cake1_amount=$("#cake4_amount") .val();
  let price =  commodity.birthCake.cake4.price;
  let amount = cake1_amount;
  let localPrice = price * amount;
  commodity.birthCake.cake4.amount = parseInt(amount);
  sumPrice();
})

$("#cake4_amount_add").click(function(){
  let cake1_amount=$("#cake4_amount") .val();
  let price =  commodity.birthCake.cake4.price;
  let amount = cake1_amount;
  let localPrice = price * amount;
  commodity.birthCake.cake4.amount = parseInt(amount);
  sumPrice();
})

$("#yummyCake1_amount_sub").click(function(){
  let yummyCake1_amount=$("#yummyCake1_amount").val();
  console.log(yummyCake1_amount);
  let price =  commodity.yummyCake.yummyCake1.price;
  let amount = yummyCake1_amount;
  let localPrice = price * amount;
  commodity.yummyCake.yummyCake1.amount = parseInt(amount);
  sumPrice();
})

$("#yummyCake1_amount_add").click(function(){
  let yummyCake1_amount=$("#yummyCake1_amount").val();
  console.log(yummyCake1_amount);
  let price =  commodity.yummyCake.yummyCake1.price;
  let amount = yummyCake1_amount;
  let localPrice = price * amount;
  commodity.yummyCake.yummyCake1.amount = parseInt(amount);
  sumPrice();
})

$("#yummyCake2_amount_sub").click(function(){
  let yummyCake1_amount=$("#yummyCake2_amount") .val();
  let price =  commodity.yummyCake.yummyCake2.price;
  let amount = yummyCake1_amount;
  let localPrice = price * amount;
  commodity.yummyCake.yummyCake2.amount =  parseInt(amount);
  sumPrice();
})

$("#yummyCake2_amount_add").click(function(){
  let yummyCake1_amount=$("#yummyCake2_amount") .val();
  let price =  commodity.yummyCake.yummyCake2.price;
  let amount = yummyCake1_amount;
  let localPrice = price * amount;
  commodity.yummyCake.yummyCake2.amount =  parseInt(amount);
  sumPrice();
})


$("#yummyCake3_amount_sub").click(function(){
  let yummyCake1_amount=$("#yummyCake3_amount") .val();
  let price =  commodity.yummyCake.yummyCake3.price;
  let amount = yummyCake1_amount;
  let localPrice = price * amount;
  commodity.yummyCake.yummyCake3.amount =  parseInt(amount);
  sumPrice();
})

$("#yummyCake3_amount_add").click(function(){
  let yummyCake1_amount=$("#yummyCake3_amount") .val();
  let price =  commodity.yummyCake.yummyCake3.price;
  let amount = yummyCake1_amount;
  let localPrice = price * amount;
  commodity.yummyCake.yummyCake3.amount =  parseInt(amount);
  sumPrice();
})

$("#yummyCake4_amount_sub").click(function(){
  let yummyCake1_amount=$("#yummyCake4_amount") .val();
  let price =  commodity.yummyCake.yummyCake4.price;
  let amount = yummyCake1_amount;
  let localPrice = price * amount;
  commodity.yummyCake.yummyCake4.amount = parseInt(amount);
  sumPrice();
})

$("#yummyCake4_amount_add").click(function(){
  let yummyCake1_amount=$("#yummyCake4_amount") .val();
  let price =  commodity.yummyCake.yummyCake4.price;
  let amount = yummyCake1_amount;
  let localPrice = price * amount;
  commodity.yummyCake.yummyCake4.amount = parseInt(amount);
  sumPrice();
})

$("#giFitBox1_amount_sub").click(function(){
  let giFitBox1_amount=$("#giFitBox1_amount").val();
  console.log(giFitBox1_amount);
  let price =  commodity.giFitBox.giFitBox1.price;
  let amount = giFitBox1_amount;
  let localPrice = price * amount;
  commodity.giFitBox.giFitBox1.amount = parseInt(amount);
  sumPrice();
})

$("#giFitBox1_amount_add").click(function(){
  let giFitBox1_amount=$("#giFitBox1_amount").val();
  console.log(giFitBox1_amount);
  let price =  commodity.giFitBox.giFitBox1.price;
  let amount = giFitBox1_amount;
  let localPrice = price * amount;
  commodity.giFitBox.giFitBox1.amount = parseInt(amount);
  sumPrice();
})

$("#giFitBox2_amount_sub").click(function(){
  let giFitBox1_amount=$("#giFitBox2_amount") .val();
  let price =  commodity.giFitBox.giFitBox2.price;
  let amount = giFitBox1_amount;
  let localPrice = price * amount;
  commodity.giFitBox.giFitBox2.amount =  parseInt(amount);
  sumPrice();
})

$("#giFitBox2_amount_add").click(function(){
  let giFitBox1_amount=$("#giFitBox2_amount") .val();
  let price =  commodity.giFitBox.giFitBox2.price;
  let amount = giFitBox1_amount;
  let localPrice = price * amount;
  commodity.giFitBox.giFitBox2.amount =  parseInt(amount);
  sumPrice();
})

$("#giFitBox3_amount_sub").click(function(){
  let giFitBox1_amount=$("#giFitBox3_amount") .val();
  let price =  commodity.giFitBox.giFitBox3.price;
  let amount = giFitBox1_amount;
  let localPrice = price * amount;
  commodity.giFitBox.giFitBox3.amount =  parseInt(amount);
  sumPrice();
})

$("#giFitBox3_amount_add").click(function(){
  let giFitBox1_amount=$("#giFitBox3_amount") .val();
  let price =  commodity.giFitBox.giFitBox3.price;
  let amount = giFitBox1_amount;
  let localPrice = price * amount;
  commodity.giFitBox.giFitBox3.amount =  parseInt(amount);
  sumPrice();
})


$("#giFitBox4_amount_sub").click(function(){
  let giFitBox1_amount=$("#giFitBox4_amount") .val();
  let price =  commodity.giFitBox.giFitBox4.price;
  let amount = giFitBox1_amount;
  let localPrice = price * amount;
  commodity.giFitBox.giFitBox4.amount = parseInt(amount);
  sumPrice();
})

$("#giFitBox4_amount_add").click(function(){
  let giFitBox1_amount=$("#giFitBox4_amount") .val();
  let price =  commodity.giFitBox.giFitBox4.price;
  let amount = giFitBox1_amount;
  let localPrice = price * amount;
  commodity.giFitBox.giFitBox4.amount = parseInt(amount);
  sumPrice();
})

$("#cake13_amount_add").click(function(){
  let cake13_amount=$("#cake13_amount").val();
  console.log(cake13_amount);
  let price =  commodity.mothCake.cake13.price;
  let amount = cake13_amount;
  let localPrice = price * amount;
  commodity.mothCake.cake13.amount = amount;
 
  sumPrice();
  
})

$("#cake13_amount_sub").click(function(){
  let cake13_amount=$("#cake13_amount").val();
  console.log(cake13_amount);
  let price =  commodity.birthCake.cake1.price;
  let amount = cake13_amount;
  let localPrice = price * amount;
  commodity.birthCake.cake1.amount = amount;
 
  sumPrice();
  
})

$("#cake14_amount_add").click(function(){
  let cake14_amount=$("#cake14_amount").val();
  console.log(cake14_amount);
  let price =  commodity.mothCake.cake14.price;
  let amount = cake14_amount;
  let localPrice = price * amount;
  commodity.mothCake.cake14.amount = amount;
 
  sumPrice();
  
})

$("#cake14_amount_sub").click(function(){
  let cake14_amount=$("#cake14_amount").val();
  console.log(cake14_amount);
  let price =  commodity.mothCake.cake14.price;
  let amount = cake14_amount;
  let localPrice = price * amount;
  commodity.mothCake.cake14.amount = amount;
 
  sumPrice();
  
})


$("#cake15_amount_add").click(function(){
  let cake14_amount=$("#cake15_amount").val();
  console.log(cake14_amount);
  let price =  commodity.mothCake.cake15.price;
  let amount = cake14_amount;
  let localPrice = price * amount;
  commodity.mothCake.cake15.amount = amount;
 
  sumPrice();
  
})

$("#cake15_amount_sub").click(function(){
  let cake14_amount=$("#cake15_amount").val();
  console.log(cake14_amount);
  let price =  commodity.mothCake.cake15.price;
  let amount = cake14_amount;
  let localPrice = price * amount;
  commodity.mothCake.cake15.amount = amount;
 
  sumPrice();
  
})


$("#cake16_amount_add").click(function(){
  let cake15_amount=$("#cake16_amount").val();
  console.log(cake15_amount);
  let price =  commodity.mothCake.cake16.price;
  let amount = cake15_amount;
  let localPrice = price * amount;
  commodity.mothCake.cake16.amount = amount;
 
  sumPrice();
  
})

$("#cake16_amount_sub").click(function(){
  let cake15_amount=$("#cake16_amount").val();
  console.log(cake15_amount);
  let price =  commodity.mothCake.cake16.price;
  let amount = cake15_amount;
  let localPrice = price * amount;
  commodity.mothCake.cake16.amount = amount;
 
  sumPrice();
  
})


$("#dessert1_amount_add").click(function(){
  let cake13_amount=$("#dessert1_amount").val();
  console.log(cake13_amount);
  let price =  commodity.mothCake.cake13.price;
  let amount = cake13_amount;
  let localPrice = price * amount;
  commodity.dessert.cake13.amount = amount;
 
  sumPrice();
  
})

$("#dessert1_amount_sub").click(function(){
  let cake13_amount=$("#dessert1_amount").val();
  console.log(cake13_amount);
  let price =  commodity.dessert.cake13.price;
  let amount = cake13_amount;
  let localPrice = price * amount;
  commodity.dessert.cake13.amount = amount;
 
  sumPrice();
  
})

$("#dessert2_amount_add").click(function(){
  let cake15_amount=$("#dessert2_amount").val();
  console.log(cake15_amount);
  let price =  commodity.dessert.cake14.price;
  let amount = cake15_amount;
  let localPrice = price * amount;
  commodity.dessert.cake14.amount = amount;
 
  sumPrice();
  
})

$("#dessert2_amount_sub").click(function(){
  let cake14_amount=$("#dessert2_amount").val();
  console.log(cake14_amount);
  let price =  commodity.dessert.cake14.price;
  let amount = cake14_amount;
  let localPrice = price * amount;
  commodity.dessert.cake14.amount = amount;
 
  sumPrice();
  
})

$("#dessert3_amount_add").click(function(){
  let cake15_amount=$("#dessert3_amount").val();
  console.log(cake15_amount);
  let price =  commodity.dessert.cake15.price;
  let amount = cake15_amount;
  let localPrice = price * amount;
  commodity.dessert.cake15.amount = amount;
 
  sumPrice();
  
})

$("#dessert3_amount_sub").click(function(){
  let cake13_amount=$("#dessert3_amount").val();
  console.log(cake13_amount);
  let price =  commodity.dessert.cake15.price;
  let amount = cake13_amount;
  let localPrice = price * amount;
  commodity.dessert.cake15.amount = amount;
 
  sumPrice();
  
})


$("#dessert4_amount_add").click(function(){
  let cake15_amount=$("#dessert4_amount").val();
  console.log(cake15_amount);
  let price =  commodity.dessert.cake16.price;
  let amount = cake15_amount;
  let localPrice = price * amount;
  commodity.dessert.cake16.amount = amount;
 
  sumPrice();
  
})

$("#dessert4_amount_sub").click(function(){
  let cake13_amount=$("#dessert4_amount").val();
  console.log(cake13_amount);
  let price =  commodity.dessert.cake16.price;
  let amount = cake13_amount;
  let localPrice = price * amount;
  commodity.dessert.cake16.amount = amount;
 
  sumPrice();
  
})



$('#cake1Img').click(
function(){
    
var cake1Pic = $("#cake2Img").attr("src");
  
 //attribute 是取得id裡頭的屬性 
 $("#modalIMG").attr("src",cake1Pic);
  
   $("#modalIMG").attr("width",400);
  $("#modalIMG").attr("height",400);
  
}

);