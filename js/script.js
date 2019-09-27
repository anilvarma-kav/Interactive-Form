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
$designOptions.change(function () {
    if( $(this).val() === 'js puns') {
        
    }

});


