$(document).ready(function(){

		//which page I see?
	var pathname = window.location.pathname;

	// Replace text on the home page in the New Customer window

	 

	$('#indexNewCustomer a span').html("Create a New ID");

		//Remove two empty <p> tags before and after banner
	$('.bannerLogo').prev().hide();
	$('.bannerLogo').next().hide();

	//Add div before .bannerLogo div {
	$('.bannerLogo').before('<div id="bannerBehind"></div>'); 




//Reorder navigation links
  var ul = $('ul#navivert');
  var li = ul.children("li");

  var liHome = li[0];
  var liDetails = li[1];
  var liProjects = li[2];
  var liHistory = li[3];
  var liCataloque = li[4];
  var liBasket = li[5];
  var liLogOut = li[6];

  li.detach();
  ul.append(liHome);
  ul.append(liCataloque);
  ul.append(liBasket);
  ul.append(liProjects);
  ul.append(liHistory);
  ul.append(liDetails);
  ul.append(liLogOut);


  //Hide Navigaton links
  $('span#navButtHome').parent().parent().hide();
  $('span#navButtSaved').parent().parent().hide();

  //Change Navigation link "Open Catoloque" to be "Home"
  $('span#navButtCatelogue').html('Home');


  //Adds classes to elements on individual product page
  $('#leftCol, #rightcol').parent().addClass('backgroundBlue');

   //Change Navigation link "My Shopping Basket" to be "Shopping Basket"
  $('span#navButtBasket').html('Shopping Basket');

// Giving the span id to "My account" link
$(document).ready(function(){
   $('li#liDropDown a').wrap('<span id="navButtAccount"></span>');
});


//Hide "Your data will not be shared with any 3rd parties other than Protx for payment processing" and lines
$( "strong:contains(Your data will not be shared with any 3rd parties other than Protx for payment processing), .blockline" ).hide();

//Hide "Disk 0kb" and "New message" from Edit my details page
$('#customerloginas').parent().hide();

//Add Class Mandatory - Edit my Details Page
$('td:contains(Mandatory)').addClass('mandatory');

//Hide pricing
$('th:contains(VAT), th:contains(Total), strong:contains(Sub Total)').html('');

if (pathname.indexOf('basket') > -1){
$('#orderSubTotal, #orderDelivery').hide();
}

if (pathname.indexOf('order-confirm') > -1){
$('#orderSubTotal, #orderTax, #orderDelivery').hide();
}


if (pathname.indexOf('order_complete') > -1) {
          $( ".invoiceback p:nth-of-type(2)" ).html("You will shortly receive an email with order details");
} 


//Remove steps from order conformation page
if (pathname.indexOf('order_complete') > -1) {
          $( ".stepsHighlight" ).parent().hide();
} 


//Add Class to centrealign div in approval page
if (pathname.indexOf('product-approval') > -1){
$('#approvalHtmlDiv').parent().addClass('ApprovalCentrealign');
}


//Add Class to td contains "Order Details" on Checkout Page
if (pathname.indexOf('order-confirm') > -1){
$('strong:contains(Order Details)').parent().addClass('checkoutOrderDetails');
}

//Change "Please check Order reference" to "Please add order reference"
$('strong#STOP_PONUMBER_TEXT').html('Please add customer order reference');



  //Add drop down submenu - CCS also created
  $('ul#navivert').append('<li id="liDropDown"><a href="#">My Account</a></li>');
  $('li#liDropDown').append('<ul id="ulDropDown"></ul>');
  var liButtHistory = $('#navButtHistory').parent().parent();
  var liButtEdit = $('#navButtEdit').parent().parent();
  var liButtLogout = $('#navButtLogout').parent().parent();
  liButtHistory.detach();
  liButtEdit.detach();
  liButtLogout.detach();
  $('#ulDropDown').append(liButtHistory);
  $('#ulDropDown').append(liButtEdit);
  $('#ulDropDown').append(liButtLogout);

   
//Removes stepsPlain class from the Basket page
  $( "td.stepsPlain" ).removeClass("stepsPlain").css({ "background-color": "#97c0e6"});     

//Change Delivery Address drop down list on Edit my Details page to 95px
$( "select[name='idDeliveryAddress']" ).width(95);


//On basket page add breadcrump steps and change "Continue Order" to "Proceed to checkout"
   if (pathname.indexOf('basket') > -1){
         $( "#consolenormal" ).after( '<div style="display: block; width: 100%; text-align: center; margin-left: auto; margin-right: auto;"><div class="stepsPlain" style="float: left; "><p>1. Select &nbsp;your Items</p></div><div class="stepsPlain" style="float: left;" ><p>2. Edit </p></div><div class="stepsHighlight" style="float: left;"><p>3. Order summary</p></div><div class="stepsPlain" style="float: left; background-position: 2px 0 !important"><p>4. Confirm order &#38; payment</p></div></div><br style="clear: both" /><p class="underSteps"><a href="http://rgstore.optad.co.uk/RG-Group-Store/products-welcome">CLICK HERE TO CONTINUE SHOPPING</a></p>');
         $("span#ORDER_CONTINUE_TEXT").html('Proceed to checkout'); 
   }

 //Change breadcrump 4 to "Checkout"
  $( "p#step4text" ).html('4. Checkout');
  $( "div.stepsPlain p:contains(4. Confirm order & payment)").html('4. Checkout');
  $( "div.stepsHighlight p:contains(4. Confirm order & payment)").html('4. Checkout');

//Change style of Checkout breadcrum and add wider gap between cells
  if (!(pathname.indexOf('order-confirm') > -1)){
          $( ".stepsPlain:nth-of-type(4)" ).addClass('noAfter');
        } else if (pathname.indexOf('order-confirm') > -1){
          $( ".stepsHighlight" ).addClass('noAfter');
          $(".centrealign_split table tbody tr:nth-of-type(3) td form table").attr({cellspacing:"4"});
          $(".centrealign_split table tbody tr:nth-of-type(3) td form table tr td:not(.bgmed)").addClass('notBgmed');
        }

  if (pathname == "/8build/confirm-my-details") {
          $( ".stepsHighlight" ).addClass('noAfter');
        }

  if (pathname.indexOf('products') > -1) {
          $( ".stepsHighlight" ).addClass('noBefore');
        }

  if (pathname.indexOf('order_complete') > -1) {
          $( ".stepsHighlight, .stepsPlain" ).hide();
        }        

//Next to Delivery Address add warning that this must be reviewed closely
    $('#deliveryAddress td.notBgmed').append('<div id="DeliveryWarningMsg"><p>Please check delivery address and edit if necessary.<br>Once you click ‘Confirm Order’ below, the details shown here cannot be edited.</p></div>');



    //Detach footer and place it at the bottom of centrealign_split
  var footer = $('#footContent');
  footer.detach();
  $('.centrealign_split').after(footer);
  

  //Wrap footer content into "innerFooter" div
  $( "#footContent" ).wrapInner( "<div id='innerFooter'></div>");


      //Add Octink logo to footer
    $( "#innerFooter" ).append( "<a href='http://www.optad.co.uk' target='_blank' id='footer-image'><img src='https://googledrive.com/host/0BwH8qt4hNhT5aWhvVnRkNEdLbTQ/' alt='Octink'></a>");

    // removes copyrights from the footer
  $( "#copyContent, #innerFooter p" ).hide();
         
/*
// Adding 'Help' link to the footer
if (pathname.indexOf('public') > -1) 
{
$( "#innerFooter" ).append("<a href='#'><p>Help</p></a>");
};
*/

/*
// Removes footer links from the log out page 
 if (pathname.indexOf('public') > -1) {
            $('#innerFooter').find('div').first().remove();
          }
*/


  //Remove order history table content and change word "INVOICE to word "ORDER" and word "PO No." to "Customer order reference - "
    if(pathname.indexOf('history') > -1) {
      $('.centrealign_split table:nth-of-type(2) table tbody tr td:nth-child(5)').remove();
       $('.centrealign_split table:nth-of-type(2) table tbody tr td:nth-child(4)').remove();
       $('.centrealign_split table:nth-of-type(2) table tbody tr td:nth-child(3)').remove();
       $('.centrealign_split table:nth-of-type(2) table tbody tr td:nth-child(2) table tbody tr td:nth-child(3)').remove();
       }


//Hide Footer links

$('.botlinks p span').hide();
$('.botlinks p a:contains(FAQ), .botlinks p a:contains(Contact Us), .botlinks p a:contains(Privacy Policy)').hide();



//Add breadcrumbs to edit-kit and edit-product page, BUT NOT ON PRODUCT WHICH IS PART OF A KIT
    if (pathname.indexOf('product-edit') > -1 || pathname.indexOf('kit-edit') > -1 ) {

      if ($('a#addToKit span:contains(kit)').length == 0) {
          
            var breadcrumbHtml = "<div style='padding: 30px 0px 30px 4px; display: block'><strong><span style='color:black;'>You are at: > > </span><a href='/RG-Group-Store/products'>RGStore</a>"
            var pathArray = pathname.split("/");
            var pathBefore = "";
            for (i = 2; i < pathArray.length-1; i++) {
               pathBefore = pathBefore + "/" + pathArray[i]; 
                   breadcrumbHtml = breadcrumbHtml + " <span style='color:black;'> > </span> <a href='/RG-Group-Store/products" + pathBefore + "'>" + pathArray[i] + "</a>";
          }
          breadcrumbHtml = breadcrumbHtml + " <span style='color:black;'> > </span> product selection</strong></div>";
          $('.stepsPlain').parent().after(breadcrumbHtml);
      }
    }







})
// End document ready !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




//This overrite native RedTie function. This makes page reload after alert "Product added to order successfully" alert
function addProduct_Response() {
  var httpStatus = 0;
  var feedbackMessage = "";

  if( xmlHTTP.readyState == 4 ) {

    try {
      // check return http status
      // set delay to minimum
      httpStatus = xmlHTTP.status;
    } catch( noStatus ) {
      httpStatus = 0;
    }

    if( httpStatus == 200 ) {

      // return message

      try {
        xmlMessage = xmlHTTP.responseText;
      } catch (xmlHTTPError) {
        feedbackMessage = feedbackMessage + "Encountered an error when attempting to read the response over AJAX.  ";
        feedbackMessage = feedbackMessage + "Error details:\n" + xmlHTTPError.description + "\n\n"
        feedbackMessage = feedbackMessage + "If this problem continues, please include these details in a support ticket"

        alert(feedbackMessage);

        waitingForResult = false;
        
        return false;
      }

      if (xmlMessage.substring(0, 4) == "OK==") {

        alert(document.getElementById("msgSuccess").value);
                
        
      } else {
        alert( xmlMessage );
      }

      waitingForResult = false;

    } else {
      alert("httpStatus: " + httpStatus.toString());

      waitingForResult = false;
    }
    
  }
window.location.reload();
} //This overrite native RedTie function. This makes page reload after alert "Product added to order successfully" alert


