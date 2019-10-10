/**
 * Author : Anil Varma Keerthipati
 * Project Name : Interactive-Form
 *
 */

// To set the focus on the first text filed every time the page loads
$(document).ready(function () {
   $("#name").focus();

    // For Job Role Section
    const $basicFieldset = $('.basic');
    $('#other-title').css('display','none');
    $('#title').change(function () {
        if( $(this).val() === 'other'){
            $basicFieldset.append('<input type="text" id="other-title" placeholder="Your Job Role">');
        }
        else{
            // To remove the text field if any other option selected other than "other"
            $('#other-title').remove();
        }

    });

    //For "T shirt info Section"
    const $designOptions = $('#design');
    const $colorOptions = $('#color');
    // For adding classes js_puns and js_heart for respective available shirt colors
    $('#color > option').each(function(){
        if($(this).text().match(/(JS Puns shirt only)/g)) {
            $(this).addClass('js_puns');
        }
        if($(this).text().match(/(JS shirt only)/g)) {
            $(this).addClass('js_heart');
        }
    });
    //by default to show Please select a t-shirt theme in Color field
    $colorOptions.prepend('<option class="default" selected="selected">Please select a T-shirt Theme</option>');
    $('.js_heart').css('display', 'none');
    $('.js_puns').css('display', 'none');
    //To change the color options dynamically based on design selection
    $designOptions.change(function () {
        if($(this).val() === 'Select Theme'){
            $colorOptions.val('Please select a T-shirt Theme');
            $('.js_heart').css('display', 'none');
            $('.js_puns').css('display', 'none');
        }
        else if( $(this).val() === 'js puns') {
            $colorOptions.val('cornflowerblue');
            $('.js_heart').css('display', 'none');
            $('.default').css('display', 'none');
            $('.js_puns').css('display', 'block');
        }
        else {
            $colorOptions.val('tomato');
            $('.js_puns').css('display', 'none');
            $('.default').css('display', 'none');
            $('.js_heart').css('display', 'block');
        }
    });

    //For "Register to Activities" Section
    const $activities = $('.activities input');
    $('.activities').append("<label id='total'></label>");
    // to calculate the cost of selected events
    var cost = 0;
    $activities.change(function () {
        const dateandtime = $(this).attr('data-day-and-time');
        const name = $(this).attr('name');
        const check = $(this).is(':checked');
        var $eventCost = $(this).attr('data-cost');
        $eventCost = $eventCost.replace('$','');
        //removing $ from cost value and changing it into float value
        var eventCost = parseFloat($eventCost);
        //If selected the cost value will be added else substracted
        if(check){
            cost = cost + eventCost;
        }
        else{
            cost = cost - eventCost;
        }
        //If the user selects a workshop, to not allow selection of a workshop at the same day and time -- checkbox will be disabled
        $activities.each(function () {
            if(dateandtime === $(this).attr('data-day-and-time') && name!== $(this).attr('name')){
                if(check) {
                    $(this).attr('disabled', true);
                    //alert('true');
                    $(this).parent().css({"color":"red","text-decoration":"line-through"});
                }
                else{
                    $(this).attr('disabled', false);
                    $(this).parent().css({"color":"","text-decoration":""});
                }
            }
        });
        $('#total').empty();
        $('#total').append("Total: $"+cost);
    });

    //For "Payment Info" Section"
    //By default credit option will be selected
    $('#payment').val('Credit Card');
    $('#paypal').css('display', 'none');
    $('#bitcoin').css('display', 'none');
    $("#payment option[value='select method']").prop('disabled', true);
    $('#payment').change(function () {
        if($(this).val() === 'Credit Card'){
            $('#credit-card').css('display', 'block');
            $('#paypal').css('display', 'none');
            $('#bitcoin').css('display', 'none');
        }
        else if($(this).val() === 'PayPal'){
            $('#credit-card').css('display', 'none');
            $('#paypal').css('display', 'block');
            $('#bitcoin').css('display', 'none');
        }
        else{
            $('#credit-card').css('display', 'none');
            $('#paypal').css('display', 'none');
            $('#bitcoin').css('display', 'block');
        }
        
    });

    //Form validation
    //Based on the Regex form will be validated
    $('form').submit(function () {
        let valid = true;
        //nmae filed must start with a letter and contains only letters and .
        if(!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test($('#name').val())){
            $('#name').addClass('error-field');
            $('#name').prev().addClass('error-label');
            valid = false;
        }
        else{
            $('#name').removeClass('error-field');
            $('#name').prev().removeClass('error-label');
        }
        //to validate e-mail
        if(!/.+\@.+\..+/.test($('#mail').val())){
            $('#mail').addClass('error-field');;
            $('#mail').prev().addClass('error-label');
            valid = false;
        }
        else{
            $('#mail').removeClass('error-field');
            $('#mail').prev().removeClass('error-label');
        }
        //to find how many checkboxes checked
        if($('.activities :checked').length < 1){
            $('.activities').addClass('error-label');
            valid = false;
        }
        else{
            $('.activities').removeClass('error-label');
        }
        //Validation of payment section
        if($('#payment').val() === 'Credit Card'){
            //creadit card must contain 13 to 16 numbers
            if(!/^\d{13,16}$/.test($('#cc-num').val())){
                $('#cc-num').addClass('error-field');
                $('#cc-num').prev().addClass('error-label');
                valid = false;
            }
            else{
                $('#cc-num').removeClass('error-field');
                $('#cc-num').prev().removeClass('error-label');
            }
            //Zip code must contain 5 digits
            if(!/^\d{5}$/.test($('#zip').val())){
                $('#zip').addClass('error-field');
                $('#zip').prev().addClass('error-label');
                valid = false;
            }
            else{
                $('#zip').removeClass('error-field');
                $('#zip').prev().removeClass('error-label');
            }
            //cvv must contain 3 digits
            if(!/^\d{3}$/.test($('#cvv').val())){
                $('#cvv').addClass('error-field');
                $('#cvv').prev().addClass('error-label');
                valid = false;
            }
            else{
                $('#cvv').removeClass('error-field');
                $('#cvv').prev().removeClass('error-label');
            }
        }
        if(!valid){
            return false;
        }
        else{
            return true;
        }
    });
});


