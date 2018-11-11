window.onload = function () {
    $('p').click(function() {
        alert($(this).text())
    })

   
    $('button').click(function() {
        open('http://' + $('.index').val())
    })
    
    console.log($('#se'))
    $('#se').change(function(){
        console.log($(this).val());
    })

}