/**
 * Author : Anil Varma Keerthipati
 * Project Name : Interactive-Form
 *
 */

// To set the focus on the first text filed every time the page loads
$(document).ready(function () {
   $("#name").focus();


});

// For Job Role Section
const $basicFieldset = $('.basic');
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
$colorOptions.prepend('<option class="default" selected="selected">Please select a T-shirt Theme</option>');
$('.js_heart').css('display', 'none');
$('.js_puns').css('display', 'none');
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



