$(document).ready(function() {
    $('#predictorForm').submit(function(e) {
        e.preventDefault();
        // Perform prediction logic here
        var origin = $('#origin').val();
        var destination = $('#destination').val();
        var departureDate = $('#departureDate').val();
        var departureTime = $('#departureTime').val();

        // Dummy prediction result
        var prediction = Math.floor(Math.random() * 100) + 1;

        // Display the result
        $('#predictionResult').text('The probability of aviator success is ' + prediction + '%');
        $('#result').show();
    });
});
